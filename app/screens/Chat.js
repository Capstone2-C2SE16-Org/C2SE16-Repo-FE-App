import { View, Text, ActivityIndicator, SafeAreaView,StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
// import { useAuth } from '../../context/AuthContext';
// import ChatList from '../../components/chatList';
// import { usersRef } from '../../firebaseConfig';
// import { getDocs, query, where } from 'firebase/firestore';
import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Chat() {
  // const {logout, user} = useAuth();
  // const [users, setUsers] = useState([]); // Chỉ định kiểu cho mảng users
  // useEffect(()=>{
  //   if(user?.uid)
  //     getUsers();
  // },[]);

  // const getUsers = async () => {  
  //   try {
  //     const q = query(usersRef, where('userId', '!=', user?.uid));
  //     const querySnapshot = await getDocs(q);
  //     let data = [];
  //     querySnapshot.forEach(doc => {
  //       data.push({...doc.data()});
  //     });

  //     console.log('get data', data);
  //     setUsers(data);
  //   } catch (error) {
  //     console.error("Error fetching users:", error);
  //   }
  // }

  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={{flex:1,backgroundColor:'red'}}>
      {/* Header */}
      <View style={{backgroundColor:'white'}}>
        <View style={styles.header}>
          <View style={{flexDirection:'row'}}>
          <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={()=>navigation.goBack()} />
          </View>
          <Text style={{fontSize:20,fontWeight:'bold'}}>Tin Nhắn</Text>
          <Feather name="menu" size={30} color="black" />
        </View>
      </View>
      <View style={{justifyContent:'center', alignItems:'center', paddingTop:100}}>
              <ActivityIndicator size={'large'} />
      </View>
      {/* <View>
      { 
        users.length >0 ? (
          <ChatList users={users} />
        ) : (
            <View style={{justifyContent:'center', alignItems:'center', paddingTop:50}}>
              <ActivityIndicator size={'large'} />
            </View>
        )
      }
      </View> */}
    </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  header:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      height:50,
      backgroundColor:"#c9c9c9",
      paddingHorizontal:20,
    },
  })