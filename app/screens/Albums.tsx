import { View, Text,StyleSheet,SafeAreaView } from 'react-native'
import React from 'react'
import AlbumBody from '../../components/albumBody'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
export default function Albums() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{backgroundColor:'#fff'}}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{flexDirection:'row'}}>
        <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={()=>navigation.goBack()} />
        </View>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Albums</Text>
        <MaterialIcons name="add-photo-alternate" size={30} color="black" />  
        </View>
    <View style={{paddingBottom:70}}>
      <AlbumBody />
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