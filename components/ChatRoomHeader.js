import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {Stack} from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons';
import {Image} from 'expo-image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';


export default function ChatRoomHeader({router}) {
  return (
    <Stack.Screen
      options={{
        title: '',
        headerShadowVisible:false,
        headerLeft: ()=>(
          <View style={{flexDirection:'row',alignItems:'center', gap:4}}>
            <TouchableOpacity onPress={() => router.back()}>
              <MaterialIcons name="arrow-back-ios" size={hp(4)} color="black" />
            </TouchableOpacity>
            <View style={{flexDirection:'row', alignItems:'center', gap:3}}>
              <Image
                source={require('../assets/images/Boy.png')}
                style={{height: hp(4.5), aspectRatio:1 ,borderRadius:100}}
              />
              <Text style={{fontSize: hp(2.5),fontWeight:'500'}}>
                Hai
              </Text>
            </View>
          </View>
        ),
        headerRight:()=>(
          <View style={{flexDirection:'row', alignItems:'center', gap:8}}>
            <Ionicons name="call" size={hp(2.4)} color="black" />
            <Ionicons name="videocam" size={hp(2.4)} color="black" />
          </View>
        )
      }}
    />
  )
}