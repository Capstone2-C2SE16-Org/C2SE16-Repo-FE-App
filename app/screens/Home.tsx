import { View, Text, Image,StyleSheet,TouchableOpacity,ScrollView,SafeAreaView, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar'
import News from '../../components/news'
import { useNavigation } from '@react-navigation/native';
import { API_URL, useAuth } from '../../context/AuthContextApi';
import axios from 'axios';

export default function Home() {
  const navigation = useNavigation();

  useEffect(()=>{
    const  testCall = async () =>{
      const result  = await axios.get(`${API_URL}/api/student/login`);
      console.log('result: ',result.data);
    };
    testCall();
  },[]);
  return (
    <SafeAreaView style={{backgroundColor:'#fff'}}>
    <ScrollView style={styles.container}>
        <StatusBar style='dark' />
      {/* punchilne and avatar */}
      <View style={styles.headerContainer}>
        <View style={styles.avatar}>
            <Image source={require('../../assets/images/Boy.png')} />
        </View>
        <View style={styles.textInfo}>
            <Text style={{fontSize:20,fontWeight:'bold',paddingTop:10}}>Bé: Đỗ Tiến Thành</Text>
            <Text style={{fontSize:16,paddingTop:10,}}>Lớp: Mẫu giáo lớn 1</Text>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={()=>navigation.navigate('lichhoc')}
           style={styles.item}>
            <View style={styles.icon}>
              <Ionicons name="calendar-outline" size={40} ></Ionicons>
            </View>
            <Text style={styles.text}>Lịch Học</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
            onPress={()=>navigation.navigate('contactbook')}
          >
            <View style={styles.icon}>
            <Ionicons  name="reader-outline" size={40} ></Ionicons>
            </View>
            <Text style={styles.text}>Sổ Liên Lạc</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={()=> navigation.navigate('xinnghi')}
          style={styles.item}>
            <View style={styles.icon}>
            <Ionicons name="clipboard-outline" size={40} ></Ionicons>
            </View>
            <Text style={styles.text}>Xin Nghỉ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
            onPress={()=> navigation.navigate('albums')}
          >
            <View style={styles.icon}>
            <Ionicons name="images-outline" size={40} ></Ionicons>
            </View>
            <Text style={styles.text}>Albums</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.item}
            onPress={()=>navigation.navigate('dinhduong')}
          >
            <View style={styles.icon}>
            <Ionicons name="nutrition-outline" size={40} ></Ionicons>
            </View>
            <Text style={styles.text}>Dinh dưỡng</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <View style={styles.icon}>
            <Ionicons name="create-outline" size={40} ></Ionicons>
            </View>
            <Text style={styles.text}>Đánh giá</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
            onPress={()=>navigation.navigate('hocphi')}
          >
            <View style={styles.icon}>
            <Ionicons name="wallet-outline" size={40} ></Ionicons>
            </View>
            <Text style={styles.text}>Học phí</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <View style={styles.icon}>
            <Ionicons name="ellipsis-horizontal-outline" size={40} ></Ionicons>
            </View>
            <Text style={styles.text}>Xem thêm</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* News */}
      <View style={{flex:1,paddingBottom:20}}>
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
