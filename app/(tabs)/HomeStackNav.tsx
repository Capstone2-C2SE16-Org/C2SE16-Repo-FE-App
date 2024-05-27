import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Albums from '../screens/Albums';
import LichHoc from '../screens/LichHoc';
import XinNghi from '../screens/XinNghi';
import DinhDuong from '../screens/DinhDuong';
import ContactBook from '../screens/contactBook';
// import ChatRoom from '../screens/chatRoom';
import HocPhi from '../screens/hocPhi';
import HomeStudent from '../screens/Home';
import ViewListPhoto from '../screens/viewListPhoto';
import NewsDetail from '../screens/newsDetail';

const Stack = createStackNavigator();

export default function HomeStackNav() {
  return (
   <Stack.Navigator>
        <Stack.Screen name='home' component={HomeStudent} 
        options={{
            headerShown:false
        }}
        />
        <Stack.Screen name='albums' component={Albums}
         options={{
            headerShown:false
        }}
        />
        <Stack.Screen name='ViewListPhoto' component={ViewListPhoto}
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
        {/* <Stack.Screen name='chatroom' component={ChatRoom}
         options={{
            headerShown:false
        }}
        /> */}
        <Stack.Screen name='hocphi' component={HocPhi}
         options={{
            headerShown:false
        }}
        />
        <Stack.Screen name='newsdetail' component={NewsDetail}
            options={{
                headerShown:false
            }}
            />
   </Stack.Navigator>
  )
}