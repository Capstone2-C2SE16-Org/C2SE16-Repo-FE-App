import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5, Fontisto, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import { API_URL, useAuth } from '../../context/AuthContextApi';

export default function FormSucKhoe({studentId, healthData, classroomId}) {
  const { authState } = useAuth();

  const [height, setHeight] = useState(healthData.height || '');
  const [weight, setWeight] = useState(healthData.weight || '');
  const [blood_group, setBlood_group] = useState(healthData.blood_group || '');
  const [blood_pressure, setBlood_pressure] = useState(healthData.blood_pressure || '');
  const [vision_test, setVision_test] = useState(healthData.vision_test || '');
  const [allergies, setAllergies] = useState(healthData.allergies || '');
  console.log(studentId);

  const handleCapNhatSucKhoe = async () => {
    try {
      await axios.patch(`${API_URL}classrooms/${classroomId}/students/${studentId}/contact-book/health`, {
        height,
        weight,
        blood_group,
        blood_pressure,
        vision_test,
        allergies
      }, {
        headers: {
          Authorization: `${authState?.token}`
        }
      });
      alert('Cập nhật thông tin sức khoẻ thành công!');
    } catch (error) {
      console.error('Error updating health data:', error);
      alert('Cập nhật thông tin sức khoẻ thất bại!');
    }
  };

  return (
    <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>THÔNG TIN SỨC KHOẺ</Text>
      <View style={styles.info}>
        <View style={styles.infoWrap}>
          <Ionicons name="man" size={30} color={'black'} />
          <Text style={{ fontSize: 20, paddingLeft: 5 }}>Chiều cao</Text>
        </View>
          <TextInput
            style={styles.textInput}
            value={height.toString()}
            onChangeText={setHeight}
            keyboardType="default"
            placeholder="Nhập..."
          />
      </View>
      
      <View style={styles.info}>
        <View style={styles.infoWrap}>
            <FontAwesome5 name="weight" size={24} color="black" />
            <Text style={{ fontSize: 20, paddingLeft: 10 }}>Cân nặng</Text>
        </View>
            <TextInput
            style={styles.textInput}
            value={weight.toString()}
            onChangeText={setWeight}
            placeholder="Nhập..."
            />
      </View>
      
      <View style={styles.info}>
        <View style={styles.infoWrap}>
        <Fontisto name="blood-drop" size={30} color="black" />
          <Text style={{ fontSize: 20, paddingLeft: 15 }}>Nhóm máu</Text>
        </View>
          <TextInput
            style={styles.textInput}
            value={blood_group}
            onChangeText={setBlood_group}
            placeholder="Nhập..."
          />
      </View>

      <View style={styles.info}>
        <View style={styles.infoWrap}>
        <MaterialCommunityIcons name="allergy" size={30} color="black" />
          <Text style={{ fontSize: 20, paddingLeft: 5 }}>Dị ứng</Text>
        </View>
          <TextInput
            style={styles.textInput}
            value={allergies}
            onChangeText={setAllergies}
            placeholder="Nhập..."
          />
      </View>

      <View style={styles.info}>
        <View style={styles.infoWrap}>
        <FontAwesome name="eye" size={30} color="black" />
          <Text style={{ fontSize: 20, paddingLeft: 5 }}>Mắt</Text>
        </View>
          <TextInput
            style={styles.textInput}
            value={vision_test}
            onChangeText={setVision_test}
            placeholder="Nhập..."
          />
      </View>

      
      <TouchableOpacity style={styles.button} onPress={handleCapNhatSucKhoe}>
        <Text style={styles.buttonText}>Cập nhật</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  infoWrap: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInput: {
    width: 120,
    height:30,
    borderWidth: 0.1,
    borderColor: 'black',
    borderRadius: 3,
    backgroundColor:'#D9D9D9',
    marginLeft: 10,
    paddingHorizontal: 5,
  },
  comment: {
    height: 100,
    borderRadius: 10,
    borderColor: 'black',
    backgroundColor: '#fff',
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
  },
  button:{
    backgroundColor:'rgba(252, 219, 0, 1)',
    width:150,
    height:50,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:130,
    marginTop:20,
},
buttonText:{
    fontSize:18,
    fontWeight:'bold',
    color:'white'
}
});
