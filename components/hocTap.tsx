import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import GoodChildCoupon from '../components/phieuBeNgoan';

export default function HocTap({ contactBook }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>THÀNH TÍCH</Text>
      <View style={styles.content}>
        <Text style={styles.text}>Số ngày vắng</Text>
        <Text style={styles.text}>{contactBook.total_absences} buổi</Text>
      </View>
      
      <Text style={styles.text}>Phiếu bé ngoan</Text>
      <View>
        <GoodChildCoupon goodBehaviorCertificates={contactBook.good_behavior_certificates} />
      </View>
      <Text style={{ fontSize: 18, fontWeight: 'bold', paddingTop: 10 }}>Nhận xét của giáo viên</Text>
      <View style={styles.comment}>
        <Text style={{ padding: 10, fontSize: 16 }}>{contactBook.comment}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 35,
    paddingBottom: 80,
    paddingTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
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
