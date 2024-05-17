import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from 'expo-secure-store';

interface AuthProps {
    authState?: { token: string | null; authenticated: boolean | null };
    onLogin?: (username: string, password: string) => Promise<any>;
    onLogout?: () => Promise<any>;
}

const TOKEN_KEY = 'my_jwt';
export const API_URL = 'http://10.0.2.2:8000/api/';



const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
    const [authState, setAuthState] = useState<{
        token: string | null;
        authenticated: boolean | null;
    }>({
        token: null,
        authenticated: null,
    });

    useEffect(() => {
        const loadToken = async () => {
            try {
                const token = await SecureStore.getItemAsync(TOKEN_KEY);
                console.log('stored:', token);

                if (token) {
                    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                    setAuthState({
                        token: token,
                        authenticated: true
                    });
                } else {
                    setAuthState({
                        token: null,
                        authenticated: false
                    });
                }
            } catch (error) {
                console.error("Error loading token: ", error);
            }
        };
        loadToken();
    }, []);

    const login = async (username: string, password: string) => {
        try {
            const result = await axios.post(`${API_URL}/student/login`, { username, password });
            console.log("~file: AuthLogin: ", result)
            const token = result.data.token;

            setAuthState({
                token: token,
                authenticated: true
            });

            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            await SecureStore.setItemAsync(TOKEN_KEY, token);
            
            return result;

        } catch (e) {
            console.error("Login error: ", e);
            return { error: true, msg: (e as any).response?.data?.msg || "Login failed" };
        }
    };

    const logout = async () => {
        try {
            await SecureStore.deleteItemAsync(TOKEN_KEY);
            axios.defaults.headers.common['Authorization'] = '';
            setAuthState({
                token: null,
                authenticated: false
            });
        } catch (error) {
            console.error("Logout error: ", error);
        }
    }

    const value = {
        onLogin: login,
        onLogout: logout,
        authState
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
