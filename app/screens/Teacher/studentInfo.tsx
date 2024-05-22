import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import { API_URL, useAuth } from '../../../context/AuthContextApi';

const StudentInfo = ({ route, navigation }) => {
  const { studentId, classroomId } = route.params; 
  const { authState } = useAuth();

  const [studentDetails, setStudentDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const response = await axios.get(`${API_URL}classrooms/${classroomId}/students/${studentId}`, {
          headers: {
            'Authorization': `Bearer ${authState?.token}`
          }
        });
        setStudentDetails(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch student details", error);
        setLoading(false);
      }
    };
    fetchStudentDetails();
  }, [studentId, classroomId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!studentDetails) {
    return <Text>No student details found.</Text>;
  }

  const { parent } = studentDetails;

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row' }}>
          <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={() => navigation.goBack()} />
        </View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 80 }}>Thông tin học sinh</Text>
      </View>
      <View style={styles.avatar}>
        <Image source={{ uri: studentDetails.profile_image }} style={styles.avatarImage} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Thông tin học sinh</Text>
        <View style={styles.containerinfo}>
          <Text style={styles.text}>Họ và tên: {studentDetails.name}</Text>
          <Text style={styles.text}>Lớp: {studentDetails.class}</Text>
          <Text style={styles.text}>Ngày sinh: {studentDetails.date_of_birth}</Text>
          <Text style={styles.text}>Giới tính: {studentDetails.gender === 0 ? 'Nam' : 'Nữ'}</Text>
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Thông tin phụ huynh</Text>
        <View style={styles.containerinfo}>
          <Text style={styles.text}>Họ và tên: {parent.name}</Text>
          <Text style={styles.text}>Ngày sinh: {parent.date_of_birth}</Text>
          <Text style={styles.text}>Giới tính: {parent.gender === 0 ? 'Nam' : 'Nữ'}</Text>
          <Text style={styles.text}>Địa chỉ: {parent.address}</Text>
          <Text style={styles.text}>Số điện thoại: {parent.phone}</Text>
          <Text style={styles.text}>Email: {parent.email}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: "#c9c9c9",
    paddingHorizontal: 20,
  },
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  container: {
    marginHorizontal: 30,
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  containerinfo: {
    backgroundColor: 'white',
    padding: 20,
  },
  text: {
    fontSize: 18,
    padding: 5,
  },
});

export default StudentInfo;
