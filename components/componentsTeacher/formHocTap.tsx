import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import GoodChildCouponTeacher from '../../components/componentsTeacher/goodChildCoupont'
export default function FormHocTap() {

    const [ngayVang, setNgayVang] = useState('');
    const [nangKhieu, setNangKhieu] = useState('');
    const [nhanXet, setNhanXet] = useState('');
  
    const handleCapNhat = () => {
      // Xử lý cập nhật thông tin tại đây
      console.log('Cập nhật thông tin...');
    };
  return (
    <View style={styles.container}>
        <Text style={styles.title}>THÀNH TÍCH</Text>
        <View style={styles.content}>
            <Text style={styles.text}>Số ngày vắng</Text>
            <TextInput
            style={styles.textInput}
            value={ngayVang}
            onChangeText={setNgayVang}
            keyboardType="default"
            placeholder="Nhập..."
          />
        </View>
        <View style={styles.content}>
            <Text style={styles.text}>Học năng khiếu</Text>
            <TextInput
            style={styles.textInput}
            value={nangKhieu}
            onChangeText={setNangKhieu}
            keyboardType="default"
            placeholder="Nhập..."
          />
        </View>
        <Text style={styles.text}>Phiếu bé ngoan</Text>
        <View>
            <GoodChildCouponTeacher />
        </View>
        <Text style={{fontSize:18,fontWeight:'bold',paddingTop:10}}>Nhận xét của giáo viên</Text>
        <View style={styles.comment}>
        <TextInput
          style={{ flex: 1 }}
          value={nhanXet}
          onChangeText={setNhanXet}
          placeholder="Nhập nhận xét..."
          multiline={true}
          numberOfLines={4}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleCapNhat}>
        <Text style={styles.buttonText}>Cập nhật</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        paddingHorizontal:35,
        paddingBottom:80,
        paddingTop:20,
    },
    title:{
        fontSize:18,
        fontWeight:'bold'
    },
    content:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    text:{
        fontSize:18,
        paddingTop:20
    },
    textInput: {
        width: 100,
        height:30,
        borderWidth: 0.1,
        borderColor: 'black',
        borderRadius: 3,
        backgroundColor:'#D9D9D9',
        marginLeft: 10,
        paddingHorizontal: 5,
      },
    comment:{
        height:100,
        borderRadius:10,
        borderColor:'black',
        backgroundColor:'#fff',
        marginTop:10,
        shadowColor: '#000000',
          shadowOffset: {
            width: 0, // Khoảng cách shadow theo chiều ngang
            height: 4, // Khoảng cách shadow theo chiều dọc
          },
          shadowOpacity: 0.3, // Độ đậm của shadow
          shadowRadius: 4, // Bán kính của shadow
          elevation: 8, // Chỉ định độ nâng của View (cho Android)
      },
      button:{
        backgroundColor:'rgba(252, 219, 0, 1)',
        width:150,
        height:50,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:100,
        marginTop:20,
    },
    buttonText:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    }
})