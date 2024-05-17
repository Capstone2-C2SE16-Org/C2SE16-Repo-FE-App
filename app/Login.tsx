import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
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
import { API_URL, useAuth } from "../context/AuthContextApi";
import axios from "axios";
const Login = ()=> {
  const router = useRouter();
  
  const [isChecked, setChecked] = useState(false);
  const [loading,setLoading] = useState(false);
  const {onLogin} = useAuth();

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  useEffect(()=>{
    // const  testCall = async () =>{
    //   const result  = await axios.get(`${API_URL}/student/login`);
    //   console.log('result: ',result);
    // };
    // testCall();
  },[]);

  const handleLogin = async () => {
    const result = await onLogin!(username, password);
    if (result && result.error) {
        Alert.alert('Login Failed', result.msg);
    } else {
        Alert.alert('Login Successful');
    }
};
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/images/Logo.png")} />
        <View style={styles.titleView}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.titleText}>The best playschool for your kid</Text>
        </View>
        <StatusBar style="auto" />
        <View style={styles.inputView}>
        <Ionicons style={styles.icon} name="person-circle-outline" size={25} color="gray"/>
        <TextInput
            style={styles.TextInput}
            placeholder="Username"
            placeholderTextColor="#003f5c"
            onChangeText={(text:string) =>setUsername(text)} value = {username}
        />
        </View>
        <View style={styles.inputView}>
        <Ionicons style={styles.icon} name="lock-closed-outline" size={24} color="gray" />
            <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry={true}
            onChangeText={(text:string) =>setPassword(text)} value = {password} 
            />
        </View>
        <View style={styles.passwordOptions}>
            <View style={styles.checkboxContainer}>
            <Checkbox 
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#4630EB' : undefined}
            />
            <Text>Remember password</Text>
            </View>
            <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
        </View>
        {/* onPress={()=> router.push('/screens/Home')} */}
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
            <Text>LOGIN</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row',paddingTop:10}}>
            <Text style={{fontSize:16}}>Don't have an account?</Text>
            <Pressable onPress={()=>router.push('/SignIn')}>
                <Text style={{fontSize:16,fontWeight:'bold'}}>Sign Up</Text>
            </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
    flexDirection:'row',
    marginHorizontal: 16,
  },
  forgotPassword:{
    paddingTop:9,
    paddingLeft:20,
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
export default Login