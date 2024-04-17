import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import GoodChildCouponTeacher from '../../components/componentsTeacher/goodChildCoupont'
export default function FormHocTap() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>THÀNH TÍCH</Text>
        <View style={styles.content}>
            <Text style={styles.text}>Số ngày vắng</Text>
            <Text style={styles.text}>1 buổi</Text>
        </View>
        <View style={styles.content}>
            <Text style={styles.text}>Học năng khiếu</Text>
            <Text style={styles.text}>Khá</Text>
        </View>
        <Text style={styles.text}>Phiếu bé ngoan</Text>
        <View>
            <GoodChildCouponTeacher />
        </View>
        <Text style={{fontSize:18,fontWeight:'bold',paddingTop:10}}>Nhận xét của giáo viên</Text>
        <View style={styles.comment}>
        <Text style={{padding:10,fontSize:16}}>
            Bé chăm chỉ, học tập tốt, thực hiện đầy đủ các bài học cô giáo đưa ra.Bé còn hơi nhút nhát khi giao tiếp với cô và các bạn trong lớp.
        </Text>
      </View>
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
    },
    text:{
        fontSize:18,
        paddingTop:20
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
      }
})