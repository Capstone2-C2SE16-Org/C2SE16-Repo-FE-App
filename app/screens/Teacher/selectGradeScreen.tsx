import React from 'react';
import { View, Text,StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function SelectGradeScreen() {
  const navigation = useNavigation();

  const handleSelectGrade = (grade) => {
    // Navigation đến trang chọn lớp với grade đã chọn
    navigation.navigate('SelectClass', { grade });
  };

  return (
    <SafeAreaView>
        {/* Header */}
    <View style={styles.header}>
      <View style={{flexDirection:'row'}}>
      <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={()=>navigation.goBack()} />
      </View>
      <Text style={{fontSize:20,fontWeight:'bold'}}>khối</Text>
      <Feather name="menu" size={30} color="black" />
    </View>
        
     <View  style={styles.container}>
      <View>
        <Text style={[styles.text,{paddingBottom:10}]}>Chọn khối bạn muốn:</Text>
      </View>
      <TouchableOpacity style={styles.viewText} onPress={() => handleSelectGrade('Khối Lớp Chồi')}>
        <Text style={styles.text}>Khối Lớp Chồi</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewText} onPress={() => handleSelectGrade('Khối Lớp Bé')}>
        <Text style={styles.text}>Khối Lớp Bé</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.viewText} onPress={() => handleSelectGrade('Khối Lớp Lớn')}>
        <Text style={styles.text}>Khối Lớp Lớn</Text>
      </TouchableOpacity>
    </View>
      {/* Thêm các nút hoặc danh sách cho các khối mẫu giáo khác */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height:50,
        backgroundColor:"#c9c9c9",
        paddingHorizontal:20,
      },
      container:{
        padding:20,
        paddingTop:50,
        alignItems:'center',
        justifyContent:'center'
      },
      viewText:{
        borderWidth:1,
        width:200,
        height:50,
        paddingBottom:10,
        borderRadius:5,
        marginBottom:10,
        alignItems:'center',
        justifyContent:'center',
        borderColor: '#9d9d9d',
      },
      text:{
        fontSize:20,
        fontWeight:'bold'
      }
    })