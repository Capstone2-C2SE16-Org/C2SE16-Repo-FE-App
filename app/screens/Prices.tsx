import { View, Text,StyleSheet,SafeAreaView } from 'react-native'
import React from 'react'
import NotifiBody from '../../components/notifiBody'
import { FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Prices() {
const navigation = useNavigation();

  return (
    <SafeAreaView>
    {/* Header */}
    <View style={styles.header}>
      <View style={{flexDirection:'row'}}>
      <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={()=>navigation.goBack()} />
      </View>
      <Text style={{fontSize:20,fontWeight:'bold'}}>Thông Báo</Text>
      <FontAwesome5 name="filter" size={24} color="black" />
    </View>
    <View>
      <NotifiBody />
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