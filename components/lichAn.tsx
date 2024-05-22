import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const MealBody = ({ mealSchedule }) => {
    return (
        <View style={styles.container}>  
            <FlatList
                data={mealSchedule}
                numColumns={1}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 40, paddingTop: 20 }}
                renderItem={({ item }) => <MealCard item={item} />}
            />
        </View>
    );
};
const getDayOfWeek = (dateString) => {
  const daysOfWeek = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
  const date = new Date(dateString);
  return daysOfWeek[date.getDay()];
};
const MealCard = ({ item }) => {
    return (
        <View style={styles.dayContainer}>
            <Text style={styles.dayText}>{getDayOfWeek(item.date)}</Text>
            <View style={styles.mealContainer}>
                <Text style={styles.mealLabel}>Sáng:</Text>
                <Text style={styles.mealText}>{item.morning}</Text>
            </View>
            <View style={styles.mealContainer}>
                <Text style={styles.mealLabel}>Trưa:</Text>
                <Text style={styles.mealText}>{item.noon}</Text>
            </View>
            <View style={styles.mealContainer}>
                <Text style={styles.mealLabel}>Xế:</Text>
                <Text style={styles.mealText}>{item.afternoon}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    dayContainer: {
        width: 400,
        height: 180,
        marginBottom: 20,
        borderWidth: 0.3,
        borderRadius: 10,
        padding: 10,
    },
    dayText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    mealContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop: 10,
    },
    mealLabel: {
        fontWeight: 'bold',
        marginRight: 5,
    },
    mealText: {
        fontSize: 16,
        flexWrap: 'wrap',
        width: 345,
    },
});

export default MealBody;
