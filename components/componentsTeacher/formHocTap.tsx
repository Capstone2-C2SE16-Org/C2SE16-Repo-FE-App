import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import GoodChildCouponTeacher from '../../components/componentsTeacher/goodChildCoupont'
import axios from 'axios';
import { useAuth, API_URL } from '../../context/AuthContextApi';
export default function FormHocTap({studentId, studyData, classroomId}) {
  const { authState } = useAuth();

  const [total_absences, setTotal_absences] = useState(studyData.total_absences || '');
  const [comment, setComment] = useState(studyData.comment || '');
  const [goodBehaviorCertificates, setGoodBehaviorCertificates] = useState(
    studyData.good_behavior_certificates || [
      { week: 1, is_good: false },
      { week: 2, is_good: false },
      { week: 3, is_good: false },
      { week: 4, is_good: false },
    ]
  );
  const handleCapNhatHocTap = async () => {
    try {
      await axios.patch(`${API_URL}classrooms/${classroomId}/students/${studentId}/contact-book/study`, {
        total_absences,
        comment,
        good_behavior_certificates: goodBehaviorCertificates,
      },{
        headers: {
          Authorization: `${authState?.token}`
        }
      });
      alert('Cập nhật thông tin học tập thành công!');
    } catch (error) {
      console.error('Error updating study data:', error);
      alert('Cập nhật thông tin học tập thất bại!');
    }
  };
  const handleCertificatesChange = (newCertificates) => {
    setGoodBehaviorCertificates(newCertificates);
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>THÀNH TÍCH</Text>
        <View style={styles.content}>
            <Text style={styles.text}>Số ngày vắng</Text>
            <TextInput
            style={styles.textInput}
            value={total_absences.toString()}
            onChangeText={setTotal_absences}
            keyboardType="default"
            placeholder="Nhập..."
          />
        </View>
        {/* <View style={styles.content}>
            <Text style={styles.text}>Học năng khiếu</Text>
            <TextInput
            style={styles.textInput}
            value={nangKhieu}
            onChangeText={setNangKhieu}
            keyboardType="default"
            placeholder="Nhập..."
          />
        </View> */}
        <Text style={styles.text}>Phiếu bé ngoan</Text>
        <View>
        <GoodChildCouponTeacher initialCertificates={goodBehaviorCertificates} onCertificatesChange={handleCertificatesChange} />
        </View>
        <Text style={{fontSize:18,fontWeight:'bold',paddingTop:10}}>Nhận xét của giáo viên</Text>
        <View style={styles.comment}>
        <TextInput
          style={{ flex: 1 }}
          value={comment}
          onChangeText={setComment}
          placeholder="Nhập nhận xét..."
          multiline={true}
          numberOfLines={4}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleCapNhatHocTap}>
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
        padding:10,
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