import { Entypo, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import { Feather } from '@expo/vector-icons';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
  Alert,
} from "react-native";
import Checkbox from 'expo-checkbox';
import { useRouter } from "expo-router";
import CustomKeyBoardView from "../components/customKeyBoardView";
import { useAuth } from "../context/AuthContext";
const SignIn = ()=> {

  const [loading,setLoading] = useState(false);
  const {register} = useAuth();

  const emailRef = useRef("");
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const profileRef = useRef("");
  const handleSignUP = async ()=> {
    if(!emailRef || !usernameRef.current || !passwordRef.current || !profileRef.current){
        Alert.alert('Sign Up',"Pls fill all the field");
        return;
    }
    setLoading(true);
    
    let response = await register(emailRef.current, passwordRef.current,usernameRef.current,profileRef.current);

    setLoading(false);

    console.log('got resutl:', response);
    if(!response.success){
      Alert.alert('SignUp', response.msg);
    }
    
    //register process
  }
  const router = useRouter();
  return (
    <CustomKeyBoardView>
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/images/Logo.png")} />
        <View style={styles.titleView}>
            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.titleText}>The best playschool for your kid</Text>
        </View>
        <StatusBar style="auto" />
        <View style={styles.inputView}>
        <Feather style={styles.icon} name="mail" size={24} color="black" />
            <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="gray"
            onChangeText={value=> emailRef.current=value }
            />
        </View>
        <View style={styles.inputView}>
        <Ionicons style={styles.icon} name="person-circle-outline" size={25} color="gray"/>
        <TextInput
            style={styles.TextInput}
            placeholder="UserName"
            placeholderTextColor="gray"
            onChangeText={value=> usernameRef.current=value }
            />
        </View>
        <View style={styles.inputView}>
        <Ionicons style={styles.icon} name="lock-closed-outline" size={24} color="black" />
            <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry={true}
            onChangeText={value=> passwordRef.current=value }
            />
        </View>
        <View style={styles.inputView}>
        <Ionicons style={styles.icon} name="person-circle-outline" size={25} color="gray"/>
            <TextInput
            style={styles.TextInput}
            placeholder="Profile"
            placeholderTextColor="gray"
            secureTextEntry={true}
            onChangeText={value=> profileRef.current=value }
            />
        </View>
        <View style={styles.passwordOptions}>
            <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
        </View>
        {/* onPress={()=> router.push('/screens/Home')} */}
        <TouchableOpacity style={styles.loginBtn} onPress={handleSignUP} >
            <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row',paddingTop:10}}>
            <Text style={{fontSize:16}}>Have an account?</Text>
            <Pressable onPress={()=>router.push('/Login')}>
                <Text style={{fontSize:16,fontWeight:'bold'}}>Sign In</Text>
            </Pressable>
        </View>
      </View>
    </CustomKeyBoardView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop:50
  },
  
  image: {
    marginBottom: 70,
  },
  titleView:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:50,
  },
  title:{
    fontWeight:'bold',
    fontSize:34,
    
  },
  titleText:{
    fontSize:18,
  },
  inputView: {
    flexDirection: 'row',
    backgroundColor: "#d9d9d9",
    borderRadius: 10,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  icon:{
    marginLeft: 10,
    marginRight: 10,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
  },
  checkboxContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    margin: 8,
  },
  passwordOptions:{
    paddingVertical:10,

},
  forgotPassword:{
    color:'gray',
  },
  loginBtn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(252, 219, 0, 1)",
  },
});
export default SignIn