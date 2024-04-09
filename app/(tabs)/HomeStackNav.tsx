import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens';
import Albums from '../screens/Albums';
import LichHoc from '../screens/LichHoc';
import XinNghi from '../screens/XinNghi';
import DinhDuong from '../screens/DinhDuong';
import ContactBook from '../screens/contactBook';
import ChatRoom from '../screens/chatRoom';

const Stack = createStackNavigator();

export default function HomeStackNav() {
  return (
   <Stack.Navigator>
        <Stack.Screen name='home' component={Home} 
        options={{
            headerShown:false
        }}
        />
        <Stack.Screen name='albums' component={Albums}
         options={{
            headerShown:false
        }}
        />
        <Stack.Screen name='lichhoc' component={LichHoc}
         options={{
            headerShown:false
        }}
        />
        <Stack.Screen name='xinnghi' component={XinNghi}
         options={{
            headerShown:false
        }}
        />
        <Stack.Screen name='dinhduong' component={DinhDuong}
         options={{
            headerShown:false
        }}
        />
        <Stack.Screen name='contactbook' component={ContactBook}
         options={{
            headerShown:false
        }}
        />
        <Stack.Screen name='chatroom' component={ChatRoom}
         options={{
            headerShown:false
        }}
        />
   </Stack.Navigator>
  )
}