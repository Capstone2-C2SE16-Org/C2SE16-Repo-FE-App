import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens';
import Albums from '../screens/Albums';
import XinNghi from '../screens/XinNghi';
import DinhDuong from '../screens/DinhDuong';
import ContactBook from '../screens/contactBook';
import ChatRoom from '../screens/chatRoom';
import HomeTeacher from '../screens/Teacher/homeTeacher';
import LichHocTeacher from '../screens/Teacher/lichHocTeacher';
import HocSinh from '../screens/Teacher/hocSinh';
import ContactBookTeacher from '../screens/Teacher/contactBookTeacher';
import SelectStudent from '../screens/Teacher/selectStudent';

const Stack = createStackNavigator();

export default function HomeTeacherStackNav() {
  return (
   <Stack.Navigator>
        <Stack.Screen name='hometeacher' component={HomeTeacher} 
        options={{
            headerShown:false
        }}
        />
        <Stack.Screen name='albums' component={Albums}
         options={{
            headerShown:false
        }}
        />
        <Stack.Screen name='lichhocteacher' component={LichHocTeacher}
         options={{
            headerShown:false
        }}
        />
        <Stack.Screen name='selectstudent' component={SelectStudent}
         options={{
            headerShown:false
        }}
        />
        <Stack.Screen name='contactbookteacher' component={ContactBookTeacher}
         options={{
            headerShown:false
        }}
        />
        <Stack.Screen name='hocsinh' component={HocSinh}
         options={{
            headerShown:false
        }}
        />
   </Stack.Navigator>
  )
}