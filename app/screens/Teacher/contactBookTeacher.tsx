import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import FormSucKhoe from '../../../components/componentsTeacher/formSucKhoe';
import FormHocTap from '../../../components/componentsTeacher/formHocTap';
import YourComponent from './test';
const ContactBookTeacher = ({ route ,navigation}) => {
  const { student } = route.params;
  // console.log("Received student data:", student); // Kiểm tra dữ liệu nhận được
  const [showHealth, setShowHealth] = useState(true);

  const toggleContent = () => {
      setShowHealth(!showHealth);
  };
  return (
    <SafeAreaView>
        <View style={styles.header}>
          <View style={{flexDirection:'row'}}>
          <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={()=>navigation.goBack()} />
          </View>
          <Text style={{fontSize:20,fontWeight:'bold'}}>Sổ liên lạc điện tử</Text>
          <Feather name="menu" size={30} color="black" />
        </View>
        <ScrollView>
        <View style={styles.headerInfo}>
            <View style={{alignItems:'center'}}>
              <Image source={require('../../../assets/images/Birthday.png')} />
              <Text>{student.birthday}</Text>
            </View>
            <View style={{alignItems:'center'}}>
              <Image source={require('../../../assets/images/profilestudent.png')} />
              <Text style={{fontSize:20,fontWeight:'bold',paddingTop:10}}>{student.name}</Text>
            </View>
            <View style={{alignItems:'center'}}>
              <Image source={require('../../../assets/images/Capricorn.png')} />
              <Text>{student.nickname}</Text>
            </View>
          </View>
        {/* Hiển thị thông tin của học sinh */}

        <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, showHealth ? styles.activeButton : null]}
                  onPress={() => setShowHealth(true)}
                >
                    <Ionicons name="man" size={30} color={showHealth ? 'black' : '#ccc'}/>
                  <Text style={showHealth ? styles.selectedButtonText : styles.unselectedButtonText}>Sức khoẻ</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, !showHealth ? styles.activeButton : null]}
                  onPress={() => setShowHealth(false)}
                >
                    <Foundation name="clipboard-notes" size={30} color={!showHealth ? 'black' : '#ccc'} />
                  <Text style={!showHealth ? styles.selectedButtonText : styles.unselectedButtonText}>Học tập</Text>
                </TouchableOpacity>
          </View>
          <View style={styles.contentContainer}>
          <View style={{height:1,backgroundColor:'#ccc',marginHorizontal:10}}></View>
                {showHealth ? ( <FormSucKhoe /> ) : ( <FormHocTap /> )}
          </View>
        </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    height:50,
    backgroundColor:"#c9c9c9",
    paddingHorizontal:20,
  },
  headerInfo:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    paddingTop:40,
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
    borderColor: '#ccc',
    width:'50%'
  },
  activeButton: {
  },
  selectedButton: {
  },
  unselectedButton: {
  },
  selectedButtonText: {
    color: 'black',
    fontSize:16,
    fontWeight: 'bold',
  },
  unselectedButtonText: {
    color: '#ccc',
    fontSize:16,
    fontWeight: 'bold',
  },
  contentContainer: {
    
  },
  image: {
    width:440,
    height:600,
    marginBottom:50,
    resizeMode: 'contain',
  },
  mealSchedule: {
    paddingTop:20,
    // Phần mã để hiển thị lịch ăn
  },
});

export default ContactBookTeacher;
