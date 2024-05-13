import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HocPhi = () => {
    const navigation = useNavigation();

  // console.log("Received student data:", student); // Kiểm tra dữ liệu nhận được
  return (
    <SafeAreaView>
        <View style={styles.header}>
          <View style={{flexDirection:'row'}}>
          <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={()=>navigation.goBack()} />
          </View>
          <Text style={{fontSize:20,fontWeight:'bold',paddingLeft:80}}>Hóa đơn học phí</Text>
        </View>
        <View  style={styles.avatar}>
        {/* <Image source={require('../../../assets/images/profilestudent.png')} /> */}
        </View>
        <View style={styles.container}>
            <View style={{alignItems:'center',justifyContent:"center",paddingBottom:40}}>
                <Text style={{color:'red',fontSize:25,fontWeight:"bold"}}>Phiếu thu tháng 5/2024</Text>
            </View>
          <Text style={styles.title}>Thông tin thanh toán</Text>
          <View style={styles.containerinfo}>
            <View style={styles.containerText}>
                <Text style={styles.text}>Số hóa đơn:</Text>
                <Text style={styles.text}>-/- </Text>
            </View>
            <View style={styles.containerText}>
                <Text style={styles.text}>Mục đích:</Text>
                <Text style={styles.text}>Học phí</Text>
            </View>
            <View style={styles.containerText}>
                <Text style={styles.text}>Ngày xuất:</Text>
                <Text style={styles.text}>13/5/2024</Text>
            </View>
            <View style={styles.containerText}>
                <Text style={styles.text}>Mã học sinh:</Text>
                <Text style={styles.text}>01</Text>
            </View>
            <View style={styles.containerText}>
                <Text style={styles.text}>Tên học sinh:</Text>
                <Text style={styles.text}>Đỗ Tiến Thành</Text>
            </View>
            <View style={styles.containerText}>
                <Text style={styles.text}>Học phí:</Text>
                <Text style={styles.text}>1.000.000 vnđ</Text>
            </View>
            <View style={styles.containerText}>
                <Text style={styles.text}>Tiền ăn:</Text>
                <Text style={styles.text}>600.000 vnđ</Text>
            </View>
            <View style={styles.containerText}>
                <Text style={styles.text}>Tiền thiếu:</Text>
                <Text style={styles.text}>0 vnđ</Text>
            </View>
            <View style={styles.containerText}>
                <Text style={styles.text}>Tiền thừa:</Text>
                <Text style={styles.text}>100.000 vnđ</Text>
            </View>
            <View style={styles.containerText}>
                <Text style={styles.text}>Tổng tiền:</Text>
                <Text style={styles.text}>1.500.000 vnđ</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button} >
                <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Thanh toán</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header:{
    flexDirection:'row',
    alignItems:'center',
    height:50,
    backgroundColor:"#c9c9c9",
    paddingHorizontal:20,
  },
  avatar:{
    alignItems:'center',
    justifyContent:'center',
    paddingTop:40,
  },
  container:{
    marginHorizontal:30,
    paddingTop:10,
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    paddingBottom:5
  },
  containerinfo:{
    backgroundColor:'white',
    padding:20,
  },
  text:{
    fontSize:18,
    padding:5
  },
  containerText:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  button:{
    backgroundColor:'rgba(252, 219, 0, 1)',
    width:150,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    marginLeft:120,
    marginTop:20,
}
})
export default HocPhi;