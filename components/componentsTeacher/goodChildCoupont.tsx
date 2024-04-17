// ../../assets/images/phieubengoan.png
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const GoodChildCouponsTeacher = () => {
  const [weeks, setWeeks] = useState([...Array(4)].map(() => ({ coupons: [], showAdd: false })));

  const handleToggleAddButton = (weekIndex) => {
    const newWeeks = [...weeks];
    newWeeks[weekIndex].showAdd = !newWeeks[weekIndex].showAdd;
    setWeeks(newWeeks);
  };

  const handleAddCoupon = (weekIndex) => {
    if (weeks[weekIndex].coupons.length < 1) {
      const newWeeks = [...weeks];
      newWeeks[weekIndex].coupons.push({});
      setWeeks(newWeeks);
    }
  };

  const handleDeleteCoupon = (weekIndex) => {
    const newWeeks = [...weeks];
    newWeeks[weekIndex].coupons = [];
    setWeeks(newWeeks);
  };

  return (
    <View style={styles.container}>
        <View style={styles.row}>
            {[0, 1].map((weekIndex) => (
                <View key={weekIndex} style={styles.week}>
                <Text style={styles.weekText}>Tuần {weekIndex + 1}</Text>
                <View style={styles.couponContainer}>
                    {weeks[weekIndex].coupons.map((coupon, couponIndex) => (
                    <TouchableOpacity
                        key={couponIndex}
                        style={styles.couponItem}
                        onPress={() => handleDeleteCoupon(weekIndex)}
                    >
                        <Image source={require('../../assets/images/phieubengoan.png')} style={styles.couponImage} />
                    </TouchableOpacity>
                    ))}
                    <TouchableOpacity
                    style={[styles.couponItem, weeks[weekIndex].showAdd ? styles.removeButton : styles.addButton]}
                    onPress={() => {
                        weeks[weekIndex].showAdd ? handleDeleteCoupon(weekIndex) : handleAddCoupon(weekIndex);
                        handleToggleAddButton(weekIndex);
                    }}
                    >
                    <Text style={styles.buttonText}>{weeks[weekIndex].showAdd ? '-' : '+'}</Text>
                    </TouchableOpacity>
                </View>
                </View>
            ))}
        </View>
        <View style={styles.row}>
            {[2, 3].map((weekIndex) => (
                <View key={weekIndex} style={styles.week}>
                <Text style={styles.weekText}>Tuần {weekIndex + 1}</Text>
                <View style={styles.couponContainer}>
                    {weeks[weekIndex].coupons.map((coupon, couponIndex) => (
                    <TouchableOpacity
                        key={couponIndex}
                        style={styles.couponItem}
                        onPress={() => handleDeleteCoupon(weekIndex)}
                    >
                        <Image source={require('../../assets/images/phieubengoan.png')} style={styles.couponImage} />
                    </TouchableOpacity>
                    ))}
                    <TouchableOpacity
                    style={[styles.couponItem, weeks[weekIndex].showAdd ? styles.removeButton : styles.addButton]}
                    onPress={() => {
                        weeks[weekIndex].showAdd ? handleDeleteCoupon(weekIndex) : handleAddCoupon(weekIndex);
                        handleToggleAddButton(weekIndex);
                    }}
                    >
                    <Text style={styles.buttonText}>{weeks[weekIndex].showAdd ? '-' : '+'}</Text>
                    </TouchableOpacity>
                </View>
                </View>
            ))}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  week: {
    alignItems: 'center',
    margin: 10,
  },
  weekText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  couponContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  couponItem: {
    width: wp(44), 
    height: wp(52),
    backgroundColor: 'lightgray',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: 'green',
  },
  removeButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    fontSize: 40,
    color: 'white',
  },
  couponImage: {
    width:145,
    height:195,
  },
});

export default GoodChildCouponsTeacher;


