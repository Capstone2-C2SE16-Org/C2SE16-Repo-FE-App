import { View, Text, Image,StyleSheet,TouchableOpacity,ScrollView,SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar'
import News from '../../../components/news'
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../../context/AuthContext';
import HomeHeader from '../../../components/componentsTeacher/homeHeader';
import HomeCategory from '../../../components/componentsTeacher/homeCategory';

export default function HomeTeacher() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor:'#fff'}}>
    <ScrollView style={styles.container}>
        <StatusBar style='dark' />
      {/* punchilne and avatar */}
      <View>
        <HomeHeader />
      </View>
        {/* Category */}
      <View>
        <HomeCategory />
      </View>
      {/* News */}
      <View style={{flex:1,paddingBottom:100}}>
        <News />
      </View>
    </ScrollView>
    </SafeAreaView>

  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flexDirection: 'column', 
        // justifyContent: 'space-between', 
        paddingVertical: 5,
        paddingTop:50,
    },
    logo:{
        paddingLeft:170,
        marginTop:-50,
    },
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
    row:{
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginBottom: 10,
    },
    icon:{
      backgroundColor:'#D9D9D9',
      borderRadius:9999,
      width:50,
      height:50,
      alignItems:'center',
      justifyContent:'center'
    },
    item: {
      paddingVertical: 10,
      paddingHorizontal: 5,
      
      alignItems:'center',
      justifyContent:'center',
    },
    text: {
      fontSize: 13,
      fontWeight:'bold',
    },

})
