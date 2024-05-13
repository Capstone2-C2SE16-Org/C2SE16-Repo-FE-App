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
import SelectStudentInfo from '../screens/Teacher/selectStudentInfo';
import StudentInfo from '../screens/Teacher/studentInfo';
import LeaveRequestsTeacherScreen from '../screens/Teacher/xinNghi';
import SelectClassScreen from '../screens/Teacher/selectClass';
import SelectGradeScreen from '../screens/Teacher/selectGradeScreen';
import AlbumBodyTeacher from '../../components/componentsTeacher/albumBodyTeacher';
import AlbumsTeacher from '../screens/Teacher/albumsTeacher';
const Stack = createStackNavigator();

export default function HomeTeacherStackNav() {
  return (
   <Stack.Navigator>
        <Stack.Screen name='hometeacher' component={HomeTeacher} 
        options={{
            headerShown:false
        }}
        />
        <Stack.Screen name='albumsteacher' component={AlbumsTeacher}
         options={{
            headerShown:false
        }}
        />
        <Stack.Screen name='SelectClass' component={SelectClassScreen}
         options={{
            headerShown:false
        }}
        />
        <Stack.Screen name='selectGrade' component={SelectGradeScreen}
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
        <Stack.Screen name='thongbaoxinghi' component={LeaveRequestsTeacherScreen}
         options={{
            headerShown:false
        }}
        />
        <Stack.Screen name='selectstudentinfo' component={SelectStudentInfo}
         options={{
            headerShown:false
        }}
        />
        <Stack.Screen name='studentinfo' component={StudentInfo}
         options={{
            headerShown:false
        }}
        />
   </Stack.Navigator>
  )
}