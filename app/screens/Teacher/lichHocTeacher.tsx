import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, ScrollView, Alert,Image } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { API_URL, useAuth } from '../../../context/AuthContextApi';

export default function LichHocTeacher() {
  const navigation = useNavigation();
  const route = useRoute();
  const { classroomId, scheduleId, date, morningActivity, noonActivity, afternoonActivity } = route.params;
  const { authState } = useAuth();

  const [morning, setMorningActivity] = useState(morningActivity);
  const [noon, setNoonActivity] = useState(noonActivity);
  const [afternoon, setAfternoonActivity] = useState(afternoonActivity);
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}-${month}-${year}`;
  };
  const handleUpdate = () => {
    axios.put(`${API_URL}classrooms/${classroomId}/schedules/${scheduleId}`, {
      morning: morning,
      noon: noon,
      afternoon: afternoon
    }, {
      headers: {
        'Authorization': `Bearer ${authState?.token}`
      }
    })
    .then(response => {
      Alert.alert("Thông báo", "Cập nhật lịch học thành công.");
      navigation.goBack();
    })
    .catch(error => {
      console.error('Lỗi cập nhật lịch học:', error);
      Alert.alert("Thông báo", "Cập nhật lịch học thất bại.");
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.header}>
        <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={() => navigation.goBack()} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{`Ngày: ${formatDate(date)}`}</Text>
        <Feather name="menu" size={30} color="black" />
      </View>
      <ScrollView style={{ flex: 1 }}>
      <View style={styles.viewSchedule}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.textTitle}>Sáng</Text>
          <Image source={require('../../../assets/images/Sunrise.png')} />
        </View>
        <View style={styles.line}></View>
        <TextInput
            style={styles.input}
            multiline
            placeholder='Thêm hoạt động buổi sáng...'
            value={morning}
            onChangeText={setMorningActivity}
          />
      </View>
      <View style={styles.viewSchedule}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.textTitle}>Trưa</Text>
          <Image source={require('../../../assets/images/Midday.png')} />
        </View>
        <View style={styles.line}></View>
        <TextInput
            style={styles.input}
            multiline
            placeholder='Thêm hoạt động buổi trưa...'
            value={noon}
            onChangeText={setNoonActivity}
          />
      </View>
      <View style={styles.viewSchedule}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.textTitle}>Chiều</Text>
          <Image source={require('.../../../assets/images/Afternoon.png')} />
        </View>
        <View style={styles.line}></View>
        <TextInput
            style={styles.input}
            multiline
            placeholder='Thêm hoạt động buổi chiều...'
            value={afternoon}
            onChangeText={setAfternoonActivity}
          />
      </View>
        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Cập nhật</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: "#c9c9c9",
    paddingHorizontal: 20,
  },
  viewSchedule: {
    backgroundColor: '#ffffff',
    width: 400,
    padding: 10,
    marginTop: 15,
    marginHorizontal: 13,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 15,
  },
  textContent: {
    fontSize: 20,
    marginTop: 10
  },
  line: {
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 3,
  },
  input: {
    height: 100,
    borderWidth: 0.2,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: 'rgba(252, 219, 0, 1)',
    width: 150,
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 120,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
});
