import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, View,Text, useColorScheme, Platform } from 'react-native';
import {NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../../constants/Colors';
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Home, Chat, Prices, Settings, Transaction } from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Albums from '../screens/Albums';
import HomeStackNav from './HomeStackNav';
import ChatRoom from '../screens/chatRoom';
import HomeTeacher from '../screens/Teacher/homeTeacher';
import HomeTeacherStackNav from './HomeTeacherStackNav';

const Tab =createBottomTabNavigator();
  const screenOptions = {
    tabBarShowLabel:false,
    headerShown:false,
    tabBarStyle:{
      position: "absolute",
      bottom: -10,
      right: 0,
      left: 0,
      elevation: 0,
      height: 60,
      background: "#fff",
    }
  }
  
export default function TabLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <NavigationContainer independent={true} >
       <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen 
          name="Home-Nav" 
          component={HomeStackNav} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center",paddingTop:10}}> 
                  <Entypo name="home" size={24} color={focused ? "rgba(252, 219, 0, 1)": "#111"} />
                  <Text style={{fontSize: 12, color: "#16247d"}}>Home</Text>
            </View>
              )
            }
          }}
          />
          <Tab.Screen 
          name="Chat" 
          component={Chat} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center",paddingTop:10}}> 
                 <Entypo name="chat" size={24} color={focused ? "rgba(252, 219, 0, 1)": "#111"} />
                  <Text style={{fontSize: 12, color: "#16247d"}}>Message</Text>
            </View>
              )
            }
          }}
          />
          <Tab.Screen 
          name="Transaction" 
          component={Transaction} 
           options={{
            tabBarIcon: ({focused})=>{
              return (
                <View
                 style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(252, 219, 0, 1)",
                  width: Platform.OS == "ios" ? 50 : 60,
                  height: Platform.OS == "ios" ? 50 : 60,
                  top: Platform.OS == "ios" ? -10 : -20,
                  borderRadius: Platform.OS == "ios" ? 25 : 30
                 }}
                >
                  <FontAwesome name="video-camera" size={24} color="#fff" />
                </View>
              )
            }
           }}
          />
          <Tab.Screen
           name="Prices" 
           component={Prices}
           options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center",paddingTop:10}}> 
                 <Ionicons name="notifications" size={24} color={focused ? "rgba(252, 219, 0, 1)": "#111"} />
                  <Text style={{fontSize: 12, color: "#16247d"}}>Notification</Text>
            </View>
              )
            }
          }}
           />
          <Tab.Screen 
          name="Settings" 
          component={Settings} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center",paddingTop:10}}> 
                 <Ionicons name="settings" size={24}  color={focused ? "rgba(252, 219, 0, 1)": "#111"} />
                  <Text style={{fontSize: 12, color: "#16247d"}}>Settings</Text>
            </View>
              )
            }
          }}
          />
          <Tab.Screen
            name='homeTeacherNav'
            component={HomeTeacherStackNav}
          />
       </Tab.Navigator>
     </NavigationContainer>
  );
}
