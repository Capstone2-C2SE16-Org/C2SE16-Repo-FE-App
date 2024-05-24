import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const GoodChildCouponsTeacher = () => {
  const [weeks, setWeeks] = useState([...Array(4)].map(() => ({ couponAdded: false })));

  const handleAddCoupon = (weekIndex) => {
    const newWeeks = [...weeks];
    newWeeks[weekIndex].couponAdded = true;
    setWeeks(newWeeks);
  };

  const handleDeleteCoupon = (weekIndex) => {
    const newWeeks = [...weeks];
    newWeeks[weekIndex].couponAdded = false;
    setWeeks(newWeeks);
  };

  return (
    <View style={styles.container}>
      <View style={styles.weeksContainer}>
        <View style={styles.week}>
          <Text style={styles.weekText}>Tuần 1</Text>
          <View style={styles.couponContainer}>
            {weeks[0].couponAdded ? (
              <TouchableOpacity style={styles.couponItem} onPress={() => handleDeleteCoupon(0)}>
                <Image source={require('../../assets/images/phieubengoan.png')} style={styles.couponImage} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.addButton} onPress={() => handleAddCoupon(0)}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={styles.week}>
          <Text style={styles.weekText}>Tuần 2</Text>
          <View style={styles.couponContainer}>
            {weeks[1].couponAdded ? (
              <TouchableOpacity style={styles.couponItem} onPress={() => handleDeleteCoupon(1)}>
                <Image source={require('../../assets/images/phieubengoan.png')} style={styles.couponImage} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.addButton} onPress={() => handleAddCoupon(1)}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
      <View style={styles.weeksContainer}>
        <View style={styles.week}>
          <Text style={styles.weekText}>Tuần 3</Text>
          <View style={styles.couponContainer}>
            {weeks[2].couponAdded ? (
              <TouchableOpacity style={styles.couponItem} onPress={() => handleDeleteCoupon(2)}>
                <Image source={require('../../assets/images/phieubengoan.png')} style={styles.couponImage} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.addButton} onPress={() => handleAddCoupon(2)}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={styles.week}>
          <Text style={styles.weekText}>Tuần 4</Text>
          <View style={styles.couponContainer}>
            {weeks[3].couponAdded ? (
              <TouchableOpacity style={styles.couponItem} onPress={() => handleDeleteCoupon(3)}>
                <Image source={require('../../assets/images/phieubengoan.png')} style={styles.couponImage} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.addButton} onPress={() => handleAddCoupon(3)}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
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
  weeksContainer: {
    flexDirection: 'row',
  },
  week: {
    flex: 1,
    alignItems: 'flex-start',
    margin: 10,
  },
  weekText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  couponContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    width: 150,
    height: 200,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 40,
    color: 'black',
  },
  couponItem: {
    width: 150,
    height: 200,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  couponImage: {
    width: 145,
    height: 195,
  },
});

export default GoodChildCouponsTeacher;