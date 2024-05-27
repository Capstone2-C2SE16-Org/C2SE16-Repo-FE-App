import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from 'expo-secure-store';

interface AuthProps {
    authState?: { token: string | null; authenticated: boolean | null;userData?: any };
    onLogin?: (username: string, password: string) => Promise<any>;
    onLogout?: () => Promise<any>;
}

const TOKEN_KEY = 'my_jwt';
// export const API_URL = 'http://172.20.99.80:8000/api/'
// 03 quang trung
export const API_ADDRESS= "http://172.26.205.186:8000"
export const API_URL = `${API_ADDRESS}/api/`
// cf
// export const API_URL = 'http://172.26.209.46:8000/api/';
// home
// export const API_URL = 'http://192.168.0.127:8000/api/';

const AuthContext = createContext<AuthProps>({});

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000, // Set timeout to 10 seconds
});

// Add interceptors for detailed logging
axiosInstance.interceptors.request.use(request => {
    console.log('Starting Request', request);
    return request;
});

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        console.log('Response Error', error);
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    response => response,
    async error => {
        const config = error.config;
        if (config && !config.__isRetryRequest) {
            config.__isRetryRequest = true;
            config.retryCount = config.retryCount || 0;

            if (config.retryCount >= 3) {
                return Promise.reject(error);
            }

            config.retryCount += 1;
            const backoffDelay = Math.pow(2, config.retryCount) * 1000; // Exponential backoff

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    axiosInstance.request(config).then(resolve).catch(reject);
                }, backoffDelay);
            });
        }
        return Promise.reject(error);
    }
);

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
    const [authState, setAuthState] = useState<{
        token: string | null;
        authenticated: boolean | null;
        userData?: any;
    }>({
        token: null,
        authenticated: null,
        userData: null,
    });

    useEffect(() => {
        const loadToken = async () => {
            try {
                const token = await SecureStore.getItemAsync(TOKEN_KEY);
                console.log('stored:', token);

                if (token) {
                    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                    setAuthState(prevState => ({
                        ...prevState,
                        token: token,
                        authenticated: true
                    }));
                } else {
                    setAuthState(prevState => ({
                        ...prevState,
                        token: null,
                        authenticated: false
                    }));
                }
            } catch (error) {
                console.error("Error loading token: ", error);
            }
        };
        loadToken();
    }, []);

    const login = async (username: string, password: string) => {
        try {
            console.log("Starting login request", { username, password });
            
            // Try teacher login first
            let result;
            let token, userData;
            try {
                result = await axiosInstance.post('/login', { username, password });
                console.log('login response:',result);
                token = result.data.user.token;
                userData = result.data.user;
                console.log('Teacher');
            } catch (error) {
                // If teacher login fails, try student login
                result = await axiosInstance.post('/student/login', { username, password });
                console.log('Student login response:', result);
                token = result.data.data.token;
                userData = result.data.data;
            }

            if (!token) {
                throw new Error("No token found");
            }
            console.log("Login successful, token:", token);
            setAuthState(prevState => ({
                ...prevState,
                token: token,
                authenticated: true,
                userData: userData,
            }));

            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            await SecureStore.setItemAsync(TOKEN_KEY, token.toString());

            return result;

        } catch (e) {
            console.error("Login error: ", e);
            throw e;
        }
    };

    const logout = async () => {
        try {
            await SecureStore.deleteItemAsync(TOKEN_KEY);
            axiosInstance.defaults.headers.common['Authorization'] = '';
            setAuthState(prevState => ({
                ...prevState,
                token: null,
                authenticated: false,
                userData: null,
            }));
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
