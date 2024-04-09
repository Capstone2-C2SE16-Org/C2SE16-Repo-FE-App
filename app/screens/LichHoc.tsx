import { View, Text,StyleSheet,Image,SafeAreaView} from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function LichHoc() {
  const navigation = useNavigation();

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
          <Image source={require('../../assets/images/Sunrise.png')} />
        </View>
        <View style={styles.line}></View>
        <Text style={styles.textContent}>- Vận động</Text>
        <Text style={styles.textContent}>- VĐ minh hoạ theo bài Bé tập thể dục</Text>
      </View>
      <View style={styles.viewSchedule}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Text style={styles.textTitle}>Trưa</Text>
          <Image source={require('../../assets/images/Midday.png')} />
        </View>
        <View style={styles.line}></View>
        <Text style={styles.textContent}>- Ăn trưa</Text>
        <Text style={styles.textContent}>- Ngủ trưa</Text>
      </View>
      <View style={styles.viewSchedule}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Text style={styles.textTitle}>Chiều</Text>
          <Image source={require('../../assets/images/Afternoon.png')} />
        </View>
        <View style={styles.line}></View>
        <Text style={styles.textContent}>- Làm bài tập Toán sắp xếp theo thứ tự tăng dần,giảm dần</Text>
        <Text style={styles.textContent}>- Rèn kĩ năng thực hành cuộc sống: Rót nước từ bình sang ly</Text>
      </View>
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
})