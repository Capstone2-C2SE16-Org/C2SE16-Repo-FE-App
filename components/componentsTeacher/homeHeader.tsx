
import { View, Text, Image,StyleSheet,TouchableOpacity,ScrollView,SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar'
import News from '../../components/news'
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';
export default function HomeHeader() {
    const navigation = useNavigation();
    return (
        <View style={styles.headerContainer}>
            <View style={styles.avatar}>
                <Image source={require('../../assets/images/teacher.png')} />
            </View>
            <View style={styles.textInfo}>
                <Text style={{fontSize:20,fontWeight:'bold',paddingTop:10}}>GV: Nguyễn Như Ngọc</Text> 
                <Text style={{fontSize:16,paddingTop:10,}}>Lớp: Mẫu giáo lớn 1</Text>
            </View>
         </View>
)}
const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor:'rgba(244, 225, 225, 0.46)',
        flexDirection:'row',
        paddingVertical: 10,
    },
    bodyContainer:{
      flexDirection: 'column',
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    avatar:{
        paddingLeft:20,
    },
    textInfo:{
        paddingLeft:40,
    },
})