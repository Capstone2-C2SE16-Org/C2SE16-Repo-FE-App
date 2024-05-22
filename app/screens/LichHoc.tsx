import { View, Text, StyleSheet, Image, SafeAreaView, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { API_URL, useAuth } from '../../context/AuthContextApi';

export default function LichHoc() {
  const navigation = useNavigation();
  const [schedules, setSchedules] = useState([]);
  const [className, setClassName] = useState('');
  const { authState } = useAuth();
  
  useEffect(() => {
    if (authState?.token && authState.userData?.classroom?.id) {
      const classroomId = authState.userData.classroom.id;
      const authToken = authState.token;
      
      axios.get(`${API_URL}classrooms/${classroomId}/schedules/current`, {
        headers: {
          'Authorization': `Bearer ${authToken}` // Add your token here
        }
      })
      .then(response => {
        setSchedules(response.data);
        if (response.data.length > 0) {
          setClassName(response.data[0].name);
        }
      })
      .catch(error => {
        console.error(error);
      });
    }
  }, [authState]);
  const getDayOfWeek = (date) => {
    const daysOfWeek = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    const day = new Date(date).getDay();
    return daysOfWeek[day];
  };
  const renderScheduleItem = ({ item }) => (
    <View>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{getDayOfWeek(item.date)}   {item.date}</Text>
      </View>
      <View style={styles.viewSchedule}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.textTitle}>Sáng</Text>
          <Image source={require('../../assets/images/Sunrise.png')} />
        </View>
        <View style={styles.line}></View>
        <Text style={styles.textContent}>{item.morning}</Text>
      </View>
      <View style={styles.viewSchedule}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.textTitle}>Trưa</Text>
          <Image source={require('../../assets/images/Midday.png')} />
        </View>
        <View style={styles.line}></View>
        <Text style={styles.textContent}>{item.noon}</Text>
      </View>
      <View style={styles.viewSchedule}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.textTitle}>Chiều</Text>
          <Image source={require('../../assets/images/Afternoon.png')} />
        </View>
        <View style={styles.line}></View>
        <Text style={styles.textContent}>{item.afternoon}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ flexDirection: 'row' }}>
          <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={() => navigation.goBack()} />
          <MaterialCommunityIcons name="reload" size={30} color="black" />
        </View>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lịch Học</Text>
        <Feather name="menu" size={30} color="black" />
      </View>
      {/* Body */}
      <FlatList
        data={schedules}
        keyExtractor={item => item.id.toString()}
        renderItem={renderScheduleItem}
        ListHeaderComponent={
          <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 10 }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'red' }}>{className}</Text>
            {/* <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }}>Thời gian thực hiện từ 4/3 đến 8/3</Text> */}
          </View>
        }
      />
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
  dateContainer: {
    backgroundColor: '#ccc',
    justifyContent: 'flex-start',
    marginHorizontal: 13,
    marginVertical: 5,
    padding: 5,
    borderRadius: 5,
    marginTop:10,
  },
  dateText: {
    textAlign:'left',
    fontSize: 18,
    fontWeight: 'bold',
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
});
