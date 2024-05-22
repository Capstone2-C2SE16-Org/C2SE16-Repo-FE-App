import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const GoodChildCoupon = ({ goodBehaviorCertificates }) => {
  const certificates = JSON.parse(goodBehaviorCertificates);

  return (
    <View style={styles.container}>
      <FlatList
        data={certificates}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20, paddingTop: 10 }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          alignItems:'flex-start' ,
        }}
        renderItem={({ item }) => <GoodChildCouponCard item={item} />}
      />
    </View>
  );
};

const GoodChildCouponCard = ({ item }) => {
  return (
    <View>
      <View style={styles.itemCard}>
        <Text style={styles.itemName}>Tuần {item?.week}</Text>
        {item.is_good ? (
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/images/phieubengoan.png')}
              resizeMode='contain'
              style={styles.image}
            />
          </View>
        ) : (
          <View style={styles.emptyImageContainer}></View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    marginHorizontal: 4,
  },
  itemCard: {
    width: wp(44),
    height: wp(52),
    flex: 1,
    justifyContent: 'flex-start',
    padding: 4,
    marginBottom: 4,
  },
  itemName: {
    fontSize: hp(1.6),
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  imageContainer: {
    width: 150,
    height: 200,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  emptyImageContainer: {
    width: 150,
    height: 200,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  image: {
    width: 145,
    height: 195,
    borderRadius: 10,
  },
});
export default GoodChildCoupon;
