import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, ActivityIndicator, FlatList } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import axios from 'axios';
import { API_URL } from '../../../context/AuthContextApi';

const SelectStudentInfo = ({ navigation, route }) => {

  console.log("Route params:", route.params);

  if (!route.params || !route.params.classroomId) {
    // Nếu không có params hoặc không có classroomId, hiển thị thông báo lỗi
    return <Text>Lỗi: Thông tin lớp học không có sẵn!</Text>; 
  }

  const { classroomId } = route.params;
  const [studentsInfo, setStudentsInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(`${API_URL}/classrooms/${classroomId}/students`);
        setStudentsInfo(response.data.students);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch students", error);
        setLoading(false);
      }
    };
    fetchStudents();
  }, [classroomId]);

  const handleSelectStudentInfo = (studentInfo) => {
    navigation.navigate('StudentInfo', { studentInfo, classroomId });
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>Quản lý học sinh</Text>
        <Feather name="menu" size={30} color="black" />
      </View>
      <FlatList
        data={studentsInfo}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.studentItem} onPress={() => handleSelectStudentInfo(item)}>
            <Image source={{ uri: item.profile_image }} style={styles.avatar} />
            <View style={styles.infoContainer}>
              <Text style={styles.textName}>{item.name}</Text>
              <Text style={styles.textNickName}>{item.nickname}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#c9c9c9'
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  studentItem: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  infoContainer: {
    marginLeft: 20
  },
  textName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  textNickName: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.6)'
  }
});

export default SelectStudentInfo;
