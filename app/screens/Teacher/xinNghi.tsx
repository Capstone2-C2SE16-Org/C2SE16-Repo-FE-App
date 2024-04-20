import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, SafeAreaView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const LeaveRequestsTeacherScreen = () => {
    const [requests, setRequests] = useState([]);
    const navigation = useNavigation();

    // Giả sử đây là dữ liệu được lấy từ một API
    useEffect(() => {
        setRequests([
            { id: 1, studentName: 'Nguyễn Văn Hải', date: '19-4-2024', reason: 'Ốm' },
            { id: 2, studentName: 'Trần Thị Ngọc', date: '20-4-2024', reason: 'Gia đình có việc' },
            { id: 3, studentName: 'Võ Văn Hổ', date: '30-4-2024', reason: 'Nghỉ Lễ' }

        ]);
    }, []);

    const handleApprove = (id) => {
        // Thực hiện xử lý phê duyệt
        console.log(`Phê duyệt yêu cầu ${id}`);
    };

    return (
        <SafeAreaView>
            {/* Header */}
            <View style={styles.header}>
            <View style={{flexDirection:'row'}}>
            <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={()=>navigation.goBack()} />
            </View>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Xin nghỉ</Text>
            <Feather name="menu" size={30} color="black" />
            </View>

            <View style={styles.container}>
            <Text style={styles.title}>Yêu Cầu Xin Nghỉ</Text>
            <ScrollView>
                {requests.map((request) => (
                    <View key={request.id} style={styles.requestItem}>
                        <Text style={styles.text}>Học sinh: {request.studentName}</Text>
                        <Text style={styles.text}>Ngày: {request.date}</Text>
                        <Text style={styles.text}>Lý do: {request.reason}</Text>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Pressable style={styles.button} onPress={() => handleApprove(request.id)}>
                            <Text style={styles.buttonText}>
                                Phê duyệt
                            </Text>
                        </Pressable>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff'
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height:50,
        backgroundColor:"#c9c9c9",
        paddingHorizontal:20,
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
    button:{
        width:100,
        height:40,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5

    },
    buttonText:{
        fontSize:18,
        fontWeight:'500'
    }
});

export default LeaveRequestsTeacherScreen;
