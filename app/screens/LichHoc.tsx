import { View, Text, StyleSheet, Image, SafeAreaView, FlatList,Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { API_URL, useAuth } from '../../context/AuthContextApi';

export default function LichHoc() {
  const navigation = useNavigation();
  const [schedules, setSchedules] = useState([]);
  const [className, setClassName] = useState('');
  const { authState } = useAuth();

  useEffect(() => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    // Kiểm tra nếu hôm nay là thứ bảy (6) hoặc chủ nhật (0)
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      Alert.alert(
        "Thông báo",
        "Hôm nay không có hoạt động nào!",
        [
          { text: "OK", onPress: () => navigation.goBack() }
        ]
      );
    } else {
      if (authState?.token && authState.userData?.classroom?.id) {
        const classroomId = authState.userData.classroom.id;
        const authToken = authState.token;
  
        axios.get(`${API_URL}classrooms/${classroomId}/schedules/current`, {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        })
        .then(response => {
          const sortedSchedules = response.data.sort((a, b) =>
            new Date(b.date) - new Date(a.date)
          );
          setSchedules(sortedSchedules);
          if (sortedSchedules.length > 0) {
            setClassName(sortedSchedules[0].name);
          }
        })
        .catch(error => {
          console.error(error);
        });
      }
    }
  }, [authState]);

  const getDayOfWeek = (date) => {
    const daysOfWeek = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    const day = new Date(date).getDay();
    return daysOfWeek[day];
  };

  const getHighlightedSessionStyle = (item, sessionTime) => {
    const currentDate = new Date().toISOString().split('T')[0];
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (item.date === currentDate) {
      if ((sessionTime === 'morning' && currentHour >= 7 && currentHour < 11) ||
          (sessionTime === 'noon' && currentHour >= 11 && currentHour < 13) ||
          (sessionTime === 'afternoon' && currentHour >= 13 && currentHour < 17)) {
        return styles.highlightedSession;
      }
    }
    return null;
  };

  const renderScheduleItem = ({ item }) => {
    const today = new Date().toISOString().split('T')[0];
    const isToday = item.date === today;
    const dayOfWeek = new Date(item.date).getDay();

    if (dayOfWeek === 0 || dayOfWeek === 6) {
      return (
        <View style={styles.noActivities}>
          <Text style={styles.noActivitiesText}>Hôm nay không có hoạt động nào!</Text>
        </View>
      );
    }

    return (
      <View style={isToday ? styles.todaySchedule : styles.scheduleContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{getDayOfWeek(item.date)}   {item.date}</Text>
        </View>
        <View style={[styles.viewSchedule, getHighlightedSessionStyle(item, 'morning')]}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.textTitle}>Sáng</Text>
            <Image source={require('../../assets/images/Sunrise.png')} />
          </View>
          <View style={styles.line}></View>
          <Text style={styles.textContent}>{item.morning}</Text>
        </View>
        <View style={[styles.viewSchedule, getHighlightedSessionStyle(item, 'noon')]}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.textTitle}>Trưa</Text>
            <Image source={require('../../assets/images/Midday.png')} />
          </View>
          <View style={styles.line}></View>
          <Text style={styles.textContent}>{item.noon}</Text>
        </View>
        <View style={[styles.viewSchedule, getHighlightedSessionStyle(item, 'afternoon')]}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.textTitle}>Chiều</Text>
            <Image source={require('../../assets/images/Afternoon.png')} />
          </View>
          <View style={styles.line}></View>
          <Text style={styles.textContent}>{item.afternoon}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row' }}>
          <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={() => navigation.goBack()} />
        </View>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lịch Học</Text>
        <Feather name="menu" size={30} color="black" />
      </View>
      <FlatList
        data={schedules}
        keyExtractor={item => item.id.toString()}
        renderItem={renderScheduleItem}
        ListHeaderComponent={
          <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 10 }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'red' }}>{className}</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  highlightedSession: {
    backgroundColor: '#FFFF00',
  },
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
    marginBottom:10,
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
  todaySchedule: {
    borderRadius:5,
    backgroundColor: '#FFFFCC',  
  },
  scheduleContainer: {
    paddingBottom:20,
    backgroundColor: '#ffffff', 
  },
  noActivities: {
    backgroundColor: '#ffffff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  noActivitiesText: {
    fontSize: 18,
    color: '#d9534f',
    fontWeight: 'bold',
  },
});
