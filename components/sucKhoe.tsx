import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function SucKhoe({ healthInfo }) {
  return (
    <View style={{ paddingHorizontal: 30, paddingTop: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>THÔNG TIN SỨC KHOẺ</Text>
      <View style={styles.info}>
        <View style={styles.infoWrap}>
          <Ionicons name="man" size={30} color={'black'} />
          <Text style={{ fontSize: 20, paddingLeft: 5 }}>Chiều cao</Text>
        </View>
        <Text style={{ paddingRight: 10, fontSize: 18 }}>{healthInfo.height} cm</Text>
      </View>

      <View style={styles.info}>
        <View style={styles.infoWrap}>
          <FontAwesome5 name="weight" size={24} color="black" />
          <Text style={{ fontSize: 20, paddingLeft: 10 }}>Cân nặng</Text>
        </View>
        <Text style={{ paddingRight: 10, fontSize: 18 }}>{healthInfo.weight} kg</Text>
      </View>

      <View style={styles.info}>
        <View style={styles.infoWrap}>
          <Fontisto name="blood-drop" size={30} color="black" />
          <Text style={{ fontSize: 20, paddingLeft: 15 }}>Nhóm máu</Text>
        </View>
        <Text style={{ paddingRight: 10, fontSize: 18 }}>{healthInfo.blood_group}</Text>
      </View>

      <View style={styles.info}>
        <View style={styles.infoWrap}>
          <MaterialCommunityIcons name="allergy" size={30} color="black" />
          <Text style={{ fontSize: 20, paddingLeft: 5 }}>Dị ứng</Text>
        </View>
        <Text style={{ paddingRight: 10, fontSize: 18 }}>{healthInfo.allergies}</Text>
      </View>

      <View style={styles.info}>
        <View style={styles.infoWrap}>
          <FontAwesome name="eye" size={30} color="black" />
          <Text style={{ fontSize: 20, paddingLeft: 5 }}>Mắt</Text>
        </View>
        <Text style={{ paddingRight: 10, fontSize: 18 }}>{healthInfo.vision_test}</Text>
      </View>

      <Text style={{ fontSize: 18, fontWeight: 'bold', paddingTop: 10 }}>Nhận xét của giáo viên</Text>

      <View style={styles.comment}>
        <Text style={{ padding: 10, fontSize: 16 }}>
          
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  infoWrap: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 20
  },
  comment: {
    height: 100,
    borderRadius: 10,
    borderColor: 'black',
    backgroundColor: '#fff',
    marginTop: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  }
});
