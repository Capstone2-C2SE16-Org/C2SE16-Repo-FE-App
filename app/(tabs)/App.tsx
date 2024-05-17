// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet,Text,View,Button } from "react-native";
// import { AuthProvider, useAuth } from "../../context/AuthContextApi";
// import HomeStackNav from "./HomeStackNav";
// import Login from "../Login";
// const Stack = createNativeStackNavigator();

// export default function App(){
//     return(
//         <AuthProvider>
//             <Layout/>
//         </AuthProvider>
//     )
// }
// export const Layout = () =>{
//     const {authState, onLogout}  = useAuth();
//     return(
//         <NavigationContainer>
//             <Stack.Navigator>
//             {authState?.authenticated ?(
//                 <Stack.Screen
//                     name="HomeParent"
//                     component={HomeStackNav}
//                     options={{
//                         headerRight: () => <Button onPress={onLogout} title="SignOut"/>,
//                     }}></Stack.Screen>
//             ) : (
//                 <Stack.Screen name="login" component={Login}></Stack.Screen>
//             )}
//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }