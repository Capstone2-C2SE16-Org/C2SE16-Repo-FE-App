import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { MaterialIcons, Feather, Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import MealBody from '../../components/lichAn';
import { API_URL, useAuth } from '../../context/AuthContextApi'; // Ensure this import is correct based on your project structure

export default function DinhDuong() {
    const navigation = useNavigation();
    const [showNutritionTower, setShowNutritionTower] = useState(true);
    const [mealSchedule, setMealSchedule] = useState([]);
    const { authState } = useAuth();
    const { token } = authState || {};

    useEffect(() => {
        if (token) {
            console.log('Fetching meal schedule with token:', token);
            axios.get(`${API_URL}meal-schedules/current`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                console.log('Meal schedule fetched:', response.data);
                setMealSchedule(response.data);
            })
            .catch(error => {
                console.error('Error fetching meal schedule:', error);
            });
        } else {
            console.error('No token available for fetching meal schedule');
        }
    }, [token]);

    const getCurrentWeekRange = () => {
        const today = new Date();
        const first = today.getDate() - today.getDay() + 1; // First day is the day of the month - the day of the week + 1 (because getDay() returns 0 for Sunday)
        const last = first + 5; // Last day is 5 days after the first day (Monday to Saturday)

        const firstDay = new Date(today.setDate(first));
        const lastDay = new Date(today.setDate(last));

        const formatDay = (date) => {
            const day = date.getDate();
            const month = date.getMonth() + 1; // Months are zero-based
            return `${day}/${month}`;
        };

        return `${formatDay(firstDay)} - ${formatDay(lastDay)}`;
    };

    const data = [{ key: 'content' }];

    const renderItem = ({ item }) => (
        <View style={styles.contentContainer}>
            {showNutritionTower ? (
                <Image style={styles.image} source={require('../../assets/images/thapdinhduong.png')} />
            ) : (
                <View style={styles.mealSchedule}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }}>
                        Lịch ăn sẽ được thay đổi ngẫu nhiên 
                    </Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', paddingTop: 5 }}>{`Tuần (${getCurrentWeekRange()})`}</Text>
                    <MealBody mealSchedule={mealSchedule} />
                </View>
            )}
        </View>
    );

    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row' }}>
                    <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={() => navigation.goBack()} />
                </View>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Dinh dưỡng</Text>
                <Feather name="menu" size={30} color="black" />
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.key}
                ListHeaderComponent={
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.button, showNutritionTower ? styles.activeButton : null]}
                            onPress={() => setShowNutritionTower(true)}
                        >
                            <FontAwesome5 name="carrot" size={24} color="black" />
                            <Text style={styles.buttonText}>Tháp dinh dưỡng</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, !showNutritionTower ? styles.activeButton : null]}
                            onPress={() => setShowNutritionTower(false)}
                        >
                            <MaterialCommunityIcons name="calendar-clock" size={24} color="black" />
                            <Text style={styles.buttonText}>Lịch ăn của bé</Text>
                        </TouchableOpacity>
                    </View>
                }
                renderItem={renderItem}
                contentContainerStyle={styles.container}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        backgroundColor: "#c9c9c9",
        paddingHorizontal: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        width: '50%',
    },
    activeButton: {
        backgroundColor: 'rgba(227, 231, 23, 0.69)',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 440,
        height: 600,
        marginBottom: 50,
        resizeMode: 'contain',
    },
    mealSchedule: {
        paddingTop: 30,
    },
});
