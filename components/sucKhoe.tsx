import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import{inforData} from '../constants'
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function SucKhoe() {
  return (
    <View style={{paddingHorizontal:20,paddingTop:20}}>
      <Text style={{fontSize:18,fontWeight:'bold'}}>THÔNG TIN SỨC KHOẺ</Text>
      <View style={styles.info}>
        <View style={styles.infoWrap}>
          <Ionicons name="man" size={30} color={'black'}/>
          <Text style={{fontSize:20,paddingLeft:5}}>Chiều cao</Text>
        </View>
        <Text style={{paddingRight:30,fontSize:18}}>135.5 cm</Text>
      </View>

      <View style={styles.info}>
        <View style={styles.infoWrap}>
        <FontAwesome5 name="weight" size={24} color="black" />
          <Text style={{fontSize:20,paddingLeft:10}}>Cân nặng</Text>
        </View>
        <Text style={{paddingRight:30,fontSize:18}}>40 kg</Text>
      </View>

      <View style={styles.info}>
        <View style={styles.infoWrap}>
        <Fontisto name="blood-drop" size={30} color="black" />
          <Text style={{fontSize:20,paddingLeft:15}}>Nhóm máu</Text>
        </View>
        <Text style={{paddingRight:30,fontSize:18}}>AB</Text>
      </View>

      <View style={styles.info}>
        <View style={styles.infoWrap}>
        <MaterialCommunityIcons name="allergy" size={30} color="black" />
          <Text style={{fontSize:20,paddingLeft:5}}>Dị ứng</Text>
        </View>
        <Text style={{paddingRight:30,fontSize:18}}>Cua,hành lá</Text>
      </View>

      <View style={styles.info}>
        <View style={styles.infoWrap}>
        <FontAwesome name="eye" size={30} color="black" />
          <Text style={{fontSize:20,paddingLeft:5}}>Mắt</Text>
        </View>
        <Text style={{paddingRight:30,fontSize:18}}>10/10</Text>
      </View>

      <View style={styles.info}>
        <View style={styles.infoWrap}>
        <FontAwesome name="heartbeat" size={30} color="black" />
          <Text style={{fontSize:20,paddingLeft:5}}>Tim</Text>
        </View>
        <Text style={{paddingRight:30,fontSize:18}}>Bình thường</Text>
      </View>

      <View style={styles.info}>
        <View style={styles.infoWrap}>
        <Ionicons name="ear-sharp" size={30} color="black" />
          <Text style={{fontSize:20,paddingLeft:5}}>Tai</Text>
        </View>
        <Text style={{paddingRight:30,fontSize:18}}>Bình thường</Text>
      </View>

      <Text style={{fontSize:18,fontWeight:'bold',paddingTop:10}}>Nhận xét của giáo viên</Text>

      <View style={styles.comment}>
        <Text style={{padding:10,fontSize:16}}>
          Bé có tiền sử sưng amidan,hoặc ho khi uống nước lạnh.Bé còn bị dị ứng với cua, đậu đỏ và đang trong tình trạng thiếu cân trầm trọng, cha mẹ cần chú ý đến bữa ăn của bé.
        </Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  info:{
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  infoWrap:{
    alignItems:'center',
    flexDirection:'row',
    paddingTop:10
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