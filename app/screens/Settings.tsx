import { View, Text,Image,StyleSheet, TouchableOpacity,Switch,SafeAreaView } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from "react";
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useAuth } from '../../context/AuthContextApi';

export default function Settings() {
  const [isEnabled, setIsEnabled] = useState(false);
  const {authState, onLogout} = useAuth();

  // console.log('user data: ',user);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };
  return (
    <SafeAreaView>
      <View style={styles.avatar}>
        <Image source={require('../../assets/images/avatarSetting.png')} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Account</Text>
        <TouchableOpacity style={styles.accountList}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Feather name="user" size={24} color="black"  style={{paddingRight:5}} />
            <Text style={styles.text}>Profile</Text>
          </View>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.accountList}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Feather name="lock" size={24} color="black"  style={{paddingRight:5}}/>
            <Text style={styles.text} >Password</Text>
          </View>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.accountList}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <MaterialIcons name="notifications-none" size={24} color="black"  style={{paddingRight:5}} />
          <Text style={styles.text}>Notification</Text>
          </View>
          <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>More</Text>
        <TouchableOpacity style={styles.accountList}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <FontAwesome name="star-o" size={24} color="black"  style={{paddingRight:5}}/>
            <Text style={styles.text}>Rate & Review</Text>
          </View>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.accountList}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <Ionicons name="help-circle-outline" size={24} color="black"  style={{paddingRight:5}} />
            <Text style={styles.text}>Help</Text>
          </View>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'center',}} onPress={onLogout}>
        <Text style={{color:'rgba(0, 0, 0, 0.6)',paddingRight:5,fontSize:20}}>Đăng xuất</Text>
        <MaterialIcons name="logout" size={24} color="rgba(0, 0, 0, 0.6)"/>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{
    width:350,
    height:230,
    padding:10,
    marginHorizontal:35,
  },
  avatar:{
    justifyContent:'center',
    alignItems:'center',
    paddingTop:30,
  },
  accountList:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10
  },
  title:{
    fontSize:30,
    fontWeight:'bold',
    paddingBottom:10,
    paddingLeft:10,
  },
  text:{
    fontSize:20,
  }
})