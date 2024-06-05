import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable, ActivityIndicator, FlatList, Alert } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import axios from 'axios';
import { API_URL, useAuth } from '../../../context/AuthContextApi';

const LeaveRequestsTeacherScreen = ({ navigation }) => {
    const [requests, setRequests] = useState([]);
    const { authState } = useAuth();
    const manager_id = authState?.userData.manager_id;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${API_URL}student-requests`, {
            headers: {
                'Authorization': `Bearer ${authState?.token}`
            }
        })
            .then(response => {
                console.log("thanh cong");
                setRequests(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Failed to fetch classrooms", error);
                setLoading(false);
            });
    }, []);

    const handleApprove = (id) => {
        axios.delete(`${API_URL}student-requests/${id}`, {
            headers: {
                'Authorization': `Bearer ${authState?.token}`
            }
        })
        .then(response => {
            alert('Yêu cầu đã được phê duyệt thành công.');
            setRequests(currentRequests => currentRequests.filter(request => request.id !== id));
        })
        .catch(error => {
            console.error('Lỗi khi xóa yêu cầu:', error);
        });        
    }

    const renderItem = ({ item }) => (
        <View style={styles.requestItem}>
            <Text style={styles.text}>Học sinh: {item.student.name}</Text>
            <Text style={styles.text}>Ngày: {item.leave_date}</Text>
            <Text style={styles.text}>Lý do: {item.reason}</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Pressable style={styles.button} onPress={() => handleApprove(item.id)}>
                    <Text style={styles.buttonText}>Phê duyệt</Text>
                </Pressable>
            </View>
        </View>
    );

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={() => navigation.goBack()} />
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Xin nghỉ</Text>
                <Feather name="menu" size={30} color="black" />
            </View>
            <FlatList
                data={requests.filter(request => request.manager_id == manager_id)}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.container}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
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
        marginBottom: 10
    },
    requestItem: {
        padding: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10
    },
    text: {
        fontSize: 18,
        marginBottom: 5
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
    }
})

export default LeaveRequestsTeacherScreen;
