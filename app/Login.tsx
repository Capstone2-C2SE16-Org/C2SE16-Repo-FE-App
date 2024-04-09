import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
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
const Login = ()=> {
  
  const [isChecked, setChecked] = useState(false);
  const [loading,setLoading] = useState(false);
  const {login} = useAuth();

  const emailRef = useRef("");
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const handleLogin = async()=> {
    if(!emailRef.current || !passwordRef.current){
        Alert.alert('SignIn',"Pls fill all the field");
        return;
    }
    setLoading(true);
    const response = await login(emailRef.current,passwordRef.current);
    setLoading(false);
    if(!response.success){
      Alert.alert('SignIn ',response.msg);
    }
  }
  const router = useRouter();
  return (
    <CustomKeyBoardView >
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
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={value=> emailRef.current=value }
            />
        </View>
        <View style={styles.inputView}>
        <Ionicons style={styles.icon} name="lock-closed-outline" size={24} color="gray" />
            <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry={true}
            onChangeText={value=> passwordRef.current=value }
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
            <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row',paddingTop:10}}>
            <Text style={{fontSize:16}}>Don't have an account?</Text>
            <Pressable onPress={()=>router.push('/SignIn')}>
                <Text style={{fontSize:16,fontWeight:'bold'}}>Sign Up</Text>
            </Pressable>
        </View>
      </View>
    </CustomKeyBoardView>
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