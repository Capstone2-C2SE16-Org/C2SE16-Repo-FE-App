import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View,Button,ActivityIndicator } from "react-native";
import React,{useContext} from "react";
import HomeStackNav from "./HomeStackNav";
import TabLayout from "./tabNavigation";
import { useAuth } from "../../context/AuthContextApi";
import { Home } from "../screens";
import Login from "../Login";
import HomeTeacher from "../screens/Teacher/homeTeacher";
import TabLayoutTeacher from "./tabNavigationTeacher";
const Stack = createNativeStackNavigator();
function AppNav () {
    const {authState} = useAuth();

    // if(isLoading){
    //     return(
    //         <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    //             <ActivityIndicator size={'large'} />
    //         </View>
    //     )
    // }

    return( 
        <NavigationContainer independent={true} >
            <Stack.Navigator>
            {authState?.authenticated ? (
                    authState.userData && authState.userData.role && authState.userData.role.includes("teacher") ? (
                        <Stack.Screen name="HomeTeacher" component={TabLayoutTeacher} options={{ headerShown: false }} />
                    ) : (
                        <Stack.Screen name="HomeStudent" component={TabLayout} options={{ headerShown: false }} />
                    )
                ) : (
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNav;