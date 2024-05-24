import React, { useState, useEffect, } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable, ActivityIndicator, FlatList, Alert, TouchableOpacity,Image } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import axios from 'axios';
import { API_URL, useAuth } from '../../../context/AuthContextApi';

const LichHocList = ({ navigation, route }) => {
    const { classroom } = route.params
    console.log(classroom)
    const [schedules, setSchedules] = useState([]);
    const { authState } = useAuth();
    const manager_id = authState?.userData.manager_id;
    const [loading, setLoading] = useState(true);
    const getTodayDateGMT7 = () => {
        const now = new Date(); // Lấy ngày và giờ hiện tại theo múi giờ địa phương
        const nowUTC = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
            now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()); // Chuyển sang UTC
        return new Date(nowUTC + (7 * 60 * 60 * 1000)); // Chuyển sang GMT+7
    };

    const TodayDateGMT7 = getTodayDateGMT7().toISOString().slice(0, 10);
    console.log(TodayDateGMT7)

    const getDayName = (dateString) => {
        const date = new Date(dateString);
        const dayOfWeek = date.getDay();
        const weekdays = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
        return weekdays[dayOfWeek];
    };

    useEffect(() => {
        axios.get(`${API_URL}classrooms/${classroom}/schedules/current`, {
            headers: {
                'Authorization': `Bearer ${authState?.token}`
            }
        })
            .then(response => {
                console.log("thanh cong");
                setSchedules(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Failed to fetch schedule", error);
                setLoading(false);
            });
    }, []);

    const handleApprove = (id) => {

    }

    const renderItem = ({ item }) => (
        <TouchableOpacity
          style={styles.requestItem}
          onPress={() => navigation.navigate('lichhocteacher', {
            classroomId: item.pivot.classroom_id,
            scheduleId: item.id,
            date: item.date,
            morningActivity: item.morning,
            noonActivity: item.noon,
            afternoonActivity: item.afternoon
          })}
        >
          <Text style={styles.title}>{getDayName(item.date)}</Text>
          {/* <Text style={styles.text}>Sáng: {item.morning}</Text>
          <Text style={styles.text}>Trưa: {item.noon}</Text>
          <Text style={styles.text}>Chiều: {item.afternoon}</Text> */}

          <View style={styles.viewSchedule}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.textTitle}>Sáng</Text>
          <Image source={require('../../../assets/images/Sunrise.png')} />
        </View>
        <View style={styles.line}></View>
        <Text style={styles.textContent}>{item.morning}</Text>
      </View>
      <View style={styles.viewSchedule}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.textTitle}>Trưa</Text>
          <Image source={require('../../../assets/images/Midday.png')} />
        </View>
        <View style={styles.line}></View>
        <Text style={styles.textContent}>{item.noon}</Text>
      </View>
      <View style={styles.viewSchedule}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.textTitle}>Chiều</Text>
          <Image source={require('../../../assets/images/Afternoon.png')} />
        </View>
        <View style={styles.line}></View>
        <Text style={styles.textContent}>{item.afternoon}</Text>
      </View>
        </TouchableOpacity>
      );
      
    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={() => navigation.goBack()} />
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lịch Học</Text>
                <Feather name="menu" size={30} color="black" />
            </View>
            <FlatList
                data={schedules.filter(schedule => schedule.date >= TodayDateGMT7)}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.container}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        backgroundColor: "#c9c9c9",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft:10,
    },
    requestItem: {
        paddingTop:10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10
    },
    text: {
        fontSize: 18,
        marginBottom: 15
    },
    button: {
        width: 100,
        height: 40,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '500'
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
})

export default LichHocList;
