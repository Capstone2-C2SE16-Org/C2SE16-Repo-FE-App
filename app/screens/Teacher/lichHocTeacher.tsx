import { View, Text,StyleSheet,Image,SafeAreaView,TextInput,Button, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function LichHocTeacher() {
  const navigation = useNavigation();
  const [morningActivity, setMorningActivity] = useState('');
  const [noonActivity, setNoonActivity] = useState('');
  const [afternoonActivity, setAfternoonActivity] = useState('');

  const handleUpdate = () => {
    // Gửi dữ liệu cập nhật lên server hoặc xử lý theo nhu cầu của bạn
    console.log('Hoạt động buổi sáng:', morningActivity);
    console.log('Hoạt động buổi trưa:', noonActivity);
    console.log('Hoạt động buổi chiều:', afternoonActivity);
  };
  return (
    <SafeAreaView style={{backgroundColor:'#fff'}}>
    {/* Header */}
    <View style={styles.header}>
      <View style={{flexDirection:'row'}}>
      <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={()=>navigation.goBack()} />
      <MaterialCommunityIcons name="reload" size={30} color="black" />
      </View>
      <Text style={{fontSize:20,fontWeight:'bold'}}>Lịch Học</Text>
      <Feather name="menu" size={30} color="black" />
    </View>
    {/* Body */}
    <View style={{backgroundColor:'#fff'}}>
      <View style={{alignItems:'center',justifyContent:'center',paddingTop:10}}>
        <Text style={{fontSize:25,fontWeight:'bold',color:'red'}}>KHỐI MẪU GIÁO LỚN</Text>
        <Text style={{fontSize:20,fontWeight:'bold',color:'red'}}>Thời gian thực hiện từ 4/3 đến 8/3</Text>
      </View>
      <View style={{width:400,height:25,backgroundColor:'#ccc',alignItems:'center',justifyContent:'center',marginHorizontal:13}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Thứ 2 4/3/2024</Text>
      </View>
      <View style={styles.viewSchedule}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Text style={styles.textTitle}>Sáng</Text>
          <Image source={require('../../../assets/images/Sunrise.png')} />
        </View>
        <View style={styles.line}></View>
        <TextInput
            style={styles.input}
            placeholder='Giáo viên thêm hoạt động vào đây...'
            value={morningActivity}
            onChangeText={setMorningActivity}
        />
        
      </View>
      <View style={styles.viewSchedule}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Text style={styles.textTitle}>Trưa</Text>
          <Image source={require('../../../assets/images/Midday.png')} />
        </View>
        <View style={styles.line}></View>
        <TextInput
            style={styles.input}
            placeholder='Giáo viên thêm hoạt động vào đây...'
            value={noonActivity}
            onChangeText={setNoonActivity}
        />
      </View>
      <View style={styles.viewSchedule}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Text style={styles.textTitle}>Chiều</Text>
          <Image source={require('../../../assets/images/Afternoon.png')} />
        </View>
        <View style={styles.line}></View>
        <TextInput
            style={styles.input}
            placeholder='Giáo viên thêm hoạt động vào đây...'
            value={afternoonActivity}
            onChangeText={setAfternoonActivity}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleUpdate}>
        <Text style={styles.buttonText}>Cập nhật</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
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
    viewSchedule:{
      backgroundColor: '#ffffff',
      width:400,
      height:180,
      padding:10,
      marginTop:15,
      marginHorizontal:13,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0, // Khoảng cách shadow theo chiều ngang
        height: 4, // Khoảng cách shadow theo chiều dọc
      },
      shadowOpacity: 0.3, // Độ đậm của shadow
      shadowRadius: 4, // Bán kính của shadow
      elevation: 8, // Chỉ định độ nâng của View (cho Android)
    },
    textTitle:{
      fontSize:20,
      fontWeight:'bold',
      paddingRight:15,
    },
    textContent:{
      fontSize:20,
      marginTop:10
    },
    line: { // Độ co giãn của View, sử dụng hết không gian còn trống
      height: 1, // Chiều cao của đường ngang
      backgroundColor: '#ccc', // Màu của đường ngang
      marginHorizontal: 3, // Khoảng cách từ đường ngang đến Text
    },
    input: {
        height: 60,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
      },
    button:{
        backgroundColor:'rgba(252, 219, 0, 1)',
        width:150,
        height:50,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:150,
        marginTop:20,
    },
    buttonText:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    }
})