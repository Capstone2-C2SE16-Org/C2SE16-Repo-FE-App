import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const GoodChildCouponsTeacher = ({ initialCertificates , onCertificatesChange }) => {
  // const [weeks, setWeeks] = useState([...Array(4)].map(() => ({ couponAdded: false })));
  const [certificates, setCertificates] = useState(JSON.parse(initialCertificates));

  
  const handleAddCoupon = (weekIndex) => {
    const newCertificates = certificates.map((certificate, index) => {
      if (index === weekIndex) {
        return { ...certificate, is_good: true };
      }
      return certificate;
    });
  
    setCertificates(newCertificates);
    onCertificatesChange(JSON.stringify(newCertificates));
  };

  const handleDeleteCoupon = (weekIndex) => {
    const newCertificates = certificates.map((certificate, index) => {
      if (index === weekIndex) {
        return { ...certificate, is_good: false };
      }
      return certificate;
    });
    setCertificates(newCertificates);
    onCertificatesChange(JSON.stringify(newCertificates));
  };

  return (
    <View style={styles.container}>
      {certificates && certificates.length > 0 ? (
        certificates.map((certificate, index) => (
          <View key={index} style={styles.week}>
            <Text style={styles.weekText}>Tuần {certificate.week}</Text>
            <View style={styles.couponContainer}>
              {certificate.is_good ? (
                <TouchableOpacity style={styles.couponItem} onPress={() => handleDeleteCoupon(index)}>
                  <Image source={require('../../assets/images/phieubengoan.png')} style={styles.couponImage} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.addButton} onPress={() => handleAddCoupon(index)}>
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))
      ) : (
        <Text>No certificates available.</Text>
      )}
    </View>
  );
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row', // Make container horizontal
    flexWrap: 'wrap', // Allow items to wrap in the container
  },
  week: {
    width: '50%', // Take up half the width of the container
    alignItems: 'center',
    marginBottom: 20,
  },
  weekText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  couponContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10, // Space below each coupon
  },
  addButton: {
    width: 150,
    height: 200,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 40,
    color: 'black',
  },
  couponItem: {
    width: 150,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  couponImage: {
    width: 145,
    height: 195,
    borderRadius: 10,
  },
});

export default GoodChildCouponsTeacher;