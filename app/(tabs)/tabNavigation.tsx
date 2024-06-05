import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, View,Text, useColorScheme, Platform } from 'react-native';
import {NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../../constants/Colors';
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Home, Chat, Prices, Settings } from '../screens';
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
    // <NavigationContainer independent={true} >
       <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen 
          name="Home-Nav" 
          component={HomeStackNav} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center",paddingTop:10}}> 
                  <Entypo name="home" size={24} color={focused ? "rgba(252, 219, 0, 1)": "#111"} />
                  <Text style={{fontSize: 12, color: "#16247d"}}>Trang chủ</Text>
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
                  <Text style={{fontSize: 12, color: "#16247d"}}>Tin nhắn</Text>
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
                  <Text style={{fontSize: 12, color: "#16247d"}}>Thông báo</Text>
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
                  <Text style={{fontSize: 12, color: "#16247d"}}>Cài đặt</Text>
            </View>
              )
            }
          }}
          />
          {/* <Tab.Screen
            name='homeTeacherNav'
            component={HomeTeacherStackNav}
          /> */}
       </Tab.Navigator>
    //  </NavigationContainer>
  );
}
