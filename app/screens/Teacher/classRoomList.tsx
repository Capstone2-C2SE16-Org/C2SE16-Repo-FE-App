import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator, SafeAreaView, Image } from 'react-native';
import axios from 'axios';
import { API_URL, useAuth } from '../../../context/AuthContextApi';
import { Feather, MaterialIcons } from '@expo/vector-icons';

const ClassroomList = ({ navigation, route }) => {
  const { screenName } = route.params;
  const { authState } = useAuth();

  const [classrooms, setClassrooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API_URL}teacher/classrooms`, {
      headers: {
        'Authorization': `Bearer ${authState?.token}`
      }
    })
      .then(response => {
        setClassrooms(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Failed to fetch classrooms", error);
        setLoading(false);
      });
  }, []);

  const handleSelectClassroom = (classroomId: String, students: any) => {
    switch (screenName) {
      case "Student":
        navigation.navigate('studentList', { screenName: screenName, students: students, classroomId: classroomId});       
         break;
      case "Calendar":
        navigation.navigate("lichHocList", { classroom: classroomId});
        break;
      case "Contact Book":
        navigation.navigate('studentList', { screenName: screenName, students: students, classroomId: classroomId});       
        break;
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  const renderClassroomItem = ({ item }) => (
    <TouchableOpacity
      style={styles.studentItem}
      onPress={() => handleSelectClassroom(item.id, item.students)}
    >
      <Image source={require('./../../../assets/images/Logo.png')} style={styles.avatar} />
      <View style={{ flexDirection: 'column', paddingLeft: 25 }}>
        <Text style={styles.textName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={() => navigation.goBack()} />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Danh Sách Lớp</Text>
          <Feather name="menu" size={30} color="black" />
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>Chọn lớp của bạn :</Text>
          <FlatList
            data={classrooms}
            renderItem={renderClassroomItem}
            keyExtractor={(item) => item.id.toString()} // Đảm bảo cung cấp một keyExtractor
          />
        </View>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: "#c9c9c9",
    paddingHorizontal: 20,
  },
  body: {
    paddingHorizontal: 25,
  },
  title: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  studentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  textName: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  textNickName: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.5)',
    paddingTop: 5
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});

export default ClassroomList;
