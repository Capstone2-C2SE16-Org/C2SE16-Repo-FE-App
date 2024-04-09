import { View, Text, TouchableOpacity, StyleSheet, Image,SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import MealBody from '../../components/lichAn'
import { ScrollView } from 'react-native-gesture-handler';
export default function DinhDuong() {
    const navigation = useNavigation();

    const [showNutritionTower, setShowNutritionTower] = useState(true);

    const toggleContent = () => {
        setShowNutritionTower(!showNutritionTower);
    };
    return (
        <SafeAreaView style={{backgroundColor:'#fff'}}>
        <View style={styles.header}>
                <View style={{flexDirection:'row'}}>
                <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={()=>navigation.goBack()} />
                </View>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Dinh dưỡng</Text>
                <Feather name="menu" size={30} color="black" />
        </View>
        <ScrollView style={styles.container}>
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
          <View style={styles.contentContainer}>
            {showNutritionTower ? (
              <Image style={styles.image} source={require('../../assets/images/thapdinhduong.png')} />
            ) : (
              <View style={styles.mealSchedule}>
                {/* Hiển thị lịch ăn ở đây */}
                <Text style={{fontSize:20,fontWeight:'bold',color:'red'}}>Lịch ăn của bé sẽ được thay đổi ngẫu nhiên theo từng tuần trong tháng</Text>
                <Text style={{fontSize:18,fontWeight:'bold',paddingTop:5}}>Tuần 1 (4/3-8/3)</Text>
                <MealBody />
              </View>
            )}
          </View>
        </ScrollView>
        </SafeAreaView>
      );
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
      },
      header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height:50,
        backgroundColor:"#c9c9c9",
        paddingHorizontal:20,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:20,
      },
      button: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        width:'50%'
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
        width:440,
        height:600,
        marginBottom:50,
        resizeMode: 'contain',
      },
      mealSchedule: {
        paddingTop:50,
        // Phần mã để hiển thị lịch ăn
      },
  });