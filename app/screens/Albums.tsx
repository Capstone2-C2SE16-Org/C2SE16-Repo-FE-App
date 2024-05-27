import { View, Text,StyleSheet,SafeAreaView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import AlbumBody from '../../components/albumBody'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useAuth, API_URL } from '../../context/AuthContextApi';
export default function Albums({ route }) {

  const navigation = useNavigation();
  const [albums, setAlbums] = useState();
  const [loading, setLoading] = useState(true);
  const { authState } = useAuth();
  console.log("classroomID", authState?.userData?.classroom?.id)
  console.log("token", authState?.token)
  const classroomId = authState?.userData?.classroom?.id;
  useEffect(() => {
    axios.get(`${API_URL}classrooms/${classroomId}/albums/`, {
      headers: {
        'Authorization': `Bearer ${authState?.token}`
      }
    })
      .then(response => {
        console.log(response.data)
        setAlbums(response.data.albums);
        setLoading(false);
      })
      .catch(error => {
        console.error("Failed to fetch albums", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  return (
    <SafeAreaView style={{backgroundColor:'#fff'}}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{flexDirection:'row'}}>
        <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={()=>navigation.goBack()} />
        </View>
        <Text style={{fontSize:20,fontWeight:'bold',paddingRight:150,}}>Albums</Text>
        </View>
    <View style={{paddingBottom:70}}>
      <AlbumBody albums={albums} />
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