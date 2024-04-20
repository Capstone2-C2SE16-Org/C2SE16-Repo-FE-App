import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView,Image  } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const studentsInfo = [
  { name:'Đỗ Tiến Thành',sex:'Nam',image:require('../../../assets/images/avatarSelect.png'),birthday:'01/01/2020',nation:'Kinh',
    nameParent:'Đỗ Tiến Lên',sexParent:'Nam',birthdayParent:'01/01/2020',adress:'254 Đ Nguyễn Văn Linh,Thanh Khê, Đà Nẵng, Việt Nam',phone:'01234567',Email:'abc@gmail.com'
   },
  { name:'Nguyễn Như Ngọc',sex:'Nữ',image:require('../../../assets/images/avatarSelect.png'),birthday:'05/05/2020',nation:'Kinh',
    nameParent:'Nguyễn Như Hạnh',sexParent:'Nữ',birthdayParent:'01/01/2020',adress:'111 Nguyễn Trãi,Thanh Khê, Đà Nẵng, Việt Nam',phone:'0999999999',Email:'abc@gmail.com'
  },
  { name:'Võ Văn Hổ',sex:'Nam',image:require('../../../assets/images/avatarSelect.png'),birthday:'03/3/2020',nation:'Kmer',
   nameParent:'Võ Văn Lộc',sexParent:'Nam',birthdayParent:'01/01/2020',adress:'137 Đ Nguyễn Văn Linh,Thanh Khê, Đà Nẵng, Việt Nam',phone:'1092039019',Email:'hovo@gmail.com'
  },
];

const SelectStudentInfo = ({ navigation}) => {
  const handleSelectStudentInfo = (studentInfo) => {
    // console.log("Sending student data:", student);  // In dữ liệu trước khi gửi
    navigation.navigate('studentinfo', { studentInfo});
  };
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flexDirection:'row'}}>
        <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={()=>navigation.goBack()} />
        </View>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Quản lý học sinh</Text>
        <Feather name="menu" size={30} color="black" />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Chọn Học sinh của bạn:</Text>
        {studentsInfo.map((studentInfo, index) => (
          <TouchableOpacity
            key={index}
            style={styles.studentItem}
            onPress={() => handleSelectStudentInfo(studentInfo)}
        
          >
            <Image source={studentInfo.image} style={styles.avatar} />
            <View style={{flexDirection:'column',paddingLeft:25}}>
              <Text style={styles.textName}>{studentInfo.name}</Text>
              <Text style={styles.textNickName}>{studentInfo.sex}</Text>
              <Text style={styles.textNickName}>{studentInfo.birthday}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    height:50,
    backgroundColor:"#c9c9c9",
    paddingHorizontal:20,
  },
  body:{
    paddingHorizontal:25,
  },
  title: {
    paddingTop:20,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  studentItem: {
    flexDirection:'row',
    alignItems:'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  textName:{
    fontSize:20,
    fontWeight:'bold'
  },
  textNickName:{
    fontSize:16,
    color:'rgba(0, 0, 0, 0.5)',
    paddingTop:5
  }
});

export default SelectStudentInfo;
