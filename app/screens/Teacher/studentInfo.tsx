import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

const StudentInfo = ({ route ,navigation}) => {
  const { studentInfo } = route.params;
  // console.log("Received student data:", student); // Kiểm tra dữ liệu nhận được
  return (
    <SafeAreaView>
        <View style={styles.header}>
          <View style={{flexDirection:'row'}}>
          <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={()=>navigation.goBack()} />
          </View>
          <Text style={{fontSize:20,fontWeight:'bold',paddingLeft:80}}>Thông tin học sinh</Text>
        </View>
        <View  style={styles.avatar}>
        <Image source={require('../../../assets/images/profilestudent.png')} />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Thông tin học sinh</Text>
          <View style={styles.containerinfo}>
            <Text style={styles.text}>Họ và tên: {studentInfo.name}</Text>
            <Text style={styles.text}>Lớp: Mẫu giáo lớn 1</Text>
            <Text style={styles.text}>Ngày sinh: {studentInfo.birthday}</Text>
            <Text style={styles.text}>Giới tính: {studentInfo.sex}</Text>
            <Text style={styles.text}>Dân tộc: {studentInfo.nation}</Text>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Thông tin phụ huynh</Text>
          <View style={styles.containerinfo}>
            <Text style={styles.text}>Họ và tên: {studentInfo.nameParent}</Text>
            <Text style={styles.text}>Ngày sinh: {studentInfo.birthdayParent}</Text>
            <Text style={styles.text}>Giới tính: {studentInfo.sexParent}</Text>
            <Text style={styles.text}>Địa chỉ: {studentInfo.adress}</Text>
            <Text style={styles.text}>Số điện thoại: {studentInfo.phone}</Text>
            <Text style={styles.text}>Email: {studentInfo.Email}</Text>
          </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header:{
    flexDirection:'row',
    alignItems:'center',
    height:50,
    backgroundColor:"#c9c9c9",
    paddingHorizontal:20,
  },
  avatar:{
    alignItems:'center',
    justifyContent:'center',
    paddingTop:40,
  },
  container:{
    marginHorizontal:30,
    paddingTop:10,
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    paddingBottom:5
  },
  containerinfo:{
    backgroundColor:'white',
    padding:20,
  },
  text:{
    fontSize:18,
    padding:5
  }
})
export default StudentInfo;