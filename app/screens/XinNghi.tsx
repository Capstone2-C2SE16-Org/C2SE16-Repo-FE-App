import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Button, SafeAreaView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/vi';
import { API_URL, useAuth } from '../../context/AuthContextApi';

moment.locale('vi'); // Đặt ngôn ngữ mặc định là tiếng Việt

export default function XinNghi() {
    const navigation = useNavigation();
    const { authState } = useAuth();
    const { userData } = authState;

    const [value, setValue] = useState('Sốt');
    const [otherReason, setOtherReason] = useState('');
    const [leaveDate, setLeaveDate] = useState(new Date());
    const [showLeavePicker, setShowLeavePicker] = useState(false);
    const [returnDate, setReturnDate] = useState(new Date());
    const [showReturnPicker, setShowReturnPicker] = useState(false);
  
    const handleLeaveChange = (event, selectedDate) => {
        const currentDate = selectedDate || leaveDate;
        setShowLeavePicker(false);
        setLeaveDate(currentDate);
    };

    const handleReturnChange = (event, selectedDate) => {
        const currentDate = selectedDate || returnDate;
        setShowReturnPicker(false);
        setReturnDate(currentDate);
    };

    const handleSubmit = async () => {
        const reason = value === 'Khác' ? null : value;
        const other_reason = value === 'Khác' ? otherReason : null;

        const requestData = {
            reason: reason,
            other_reason: other_reason,
            leave_date: moment(leaveDate).format('YYYY-MM-DD'),
            return_date: moment(returnDate).format('YYYY-MM-DD'),
            request_date: moment().format('YYYY-MM-DD'),
            student_id: userData?.id || 2, // Thay thế bằng ID thực tế của học sinh
            manager_id: 7, // Thay thế bằng ID thực tế của giáo viên hoặc người quản lý
            status: false
        };
        try {
            const response = await axios.post(`${API_URL}student-requests`, requestData, {
                headers: {
                    'Authorization': `Bearer ${userData?.token}`
                }
            });
            console.log('Yêu cầu đã được gửi:', response.data);
            alert('Yêu cầu đã được gửi thành công');
        } catch (error) {
            console.error('Lỗi khi gửi yêu cầu:', error);
            alert('Có lỗi xảy ra khi gửi yêu cầu');
        }
    };
    
    return (
        <SafeAreaView>
            {/* Header */}
            <View style={styles.header}>
                <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={() => navigation.goBack()} />
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Xin Nghỉ</Text>
                <Feather name="menu" size={30} color="black" />
            </View>
            {/* Body */}
            <View style={styles.container}>
                <View style={{ backgroundColor: '#ccc', height: 60, justifyContent: 'center', paddingLeft: 10 }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'red' }}>XIN NGHỈ PHÉP:</Text>
                </View>
                <Text style={{ fontSize: 20 }}>Lý do xin nghỉ</Text>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <View style={styles.reason}>
                            <View style={styles.reasonList}>
                                <RadioButton.Android value="Sốt" />
                                <Text>Sốt</Text>
                            </View>
                            <View style={styles.reasonList}>
                                <RadioButton.Android value="Nôn" />
                                <Text>Nôn</Text>
                            </View>
                            <View style={styles.reasonList}>
                                <RadioButton.Android value="Ho" />
                                <Text>Ho</Text>
                            </View>
                        </View>
                        <View style={styles.reason}>
                            <View style={styles.reasonList}>
                                <RadioButton.Android value="Đau mắt" />
                                <Text>Đau mắt</Text>
                            </View>
                            <View style={styles.reasonList}>
                                <RadioButton.Android value="Đau bụng" />
                                <Text>Đau bụng</Text>
                            </View>
                            <View style={styles.reasonList}>
                                <RadioButton.Android value="Có việc gia đình" />
                                <Text>Có việc gia đình</Text>
                            </View>
                            <View style={styles.reasonList}>
                                <RadioButton.Android value="Khác" />
                                <Text>Khác</Text>
                            </View>
                        </View>
                    </View>
                </RadioButton.Group>
                {value === 'Khác' && (
                    <View>
                        <Text style={{ fontSize: 20 }}>Lý do khác</Text>
                        <View style={styles.containerInput}>
                            <TextInput
                                style={styles.input}
                                onChangeText={setOtherReason}
                                value={otherReason}
                                placeholder="Nhập lý do khác..."
                            />
                        </View>
                    </View>
                )}
                <View style={{ paddingTop: 20 }}>
                    <Text style={{ fontSize: 20 }}>Ngày nghỉ:</Text>
                    <View style={{ backgroundColor: '#c9c9c9', width: 150, height: 40, borderRadius: 5, flexDirection: 'row' }}>
                        <Button title="Chọn ngày nghỉ" onPress={() => setShowLeavePicker(true)} />
                        {showLeavePicker && (
                            <DateTimePicker
                                value={leaveDate}
                                mode="date"
                                display="default"
                                onChange={handleLeaveChange}
                            />
                        )}
                    </View>
                    <Text style={{ fontSize: 20, marginTop: 30 }}>Ngày đã chọn: {moment(leaveDate).format('dddd, DD/MM/YYYY')}</Text>
                </View>
                <View style={{ paddingTop: 20 }}>
                    <Text style={{ fontSize: 20 }}>Ngày quay lại:</Text>
                    <View style={{ backgroundColor: '#c9c9c9', width: 150, height: 40, borderRadius: 5, flexDirection: 'row' }}>
                        <Button title="Chọn ngày quay lại" onPress={() => setShowReturnPicker(true)} />
                        {showReturnPicker && (
                            <DateTimePicker
                                value={returnDate}
                                mode="date"
                                display="default"
                                onChange={handleReturnChange}
                            />
                        )}
                    </View>
                    <Text style={{ fontSize: 20, marginTop: 30 }}>Ngày đã chọn: {moment(returnDate).format('dddd, DD/MM/YYYY')}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Gửi</Text>
                </TouchableOpacity>
            </View>
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
    container: {
        width: 400,
        marginHorizontal: 13,
        paddingTop: 10
    },
    reason: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    reasonList: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerInput: {
        height: 100,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3, // Android
    },
    input: {
        fontSize: 15,
    },
    button: {
        backgroundColor: 'rgba(252, 219, 0, 1)',
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginLeft: 150,
        marginTop: 50,
    }
});
