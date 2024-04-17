import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView,Image  } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const students = [
  { name:'Đỗ Tiến Thành',nickname:'Cà rốt',image:require('../../../assets/images/avatarSelect.png'),birthday:'01/01/2020' },
  { name:'Nguyễn Như Ngọc',nickname:'Củ tỏi',image:require('../../../assets/images/avatarSelect.png'),birthday:'05/05/2020' },
  { name:'Võ Văn Hổ',nickname:'Dưa hấu',image:require('../../../assets/images/avatarSelect.png'),birthday:'03/3/2020' },
];

const SelectStudent = ({ navigation}) => {
  const handleSelectStudent = (student) => {
    // console.log("Sending student data:", student);  // In dữ liệu trước khi gửi
    navigation.navigate('contactbookteacher', { student});
  };
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flexDirection:'row'}}>
        <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={()=>navigation.goBack()} />
        </View>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Sổ liên lạc điện tử</Text>
        <Feather name="menu" size={30} color="black" />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Chọn Học sinh của bạn:</Text>
        {students.map((student, index) => (
          <TouchableOpacity
            key={index}
            style={styles.studentItem}
            onPress={() => handleSelectStudent(student)}
        
          >
            <Image source={student.image} style={styles.avatar} />
            <View style={{flexDirection:'column',paddingLeft:25}}>
              <Text style={styles.textName}>{student.name}</Text>
              <Text style={styles.textNickName}>{student.nickname}</Text>
              <Text style={styles.textNickName}>{student.birthday}</Text>
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

export default SelectStudent;
