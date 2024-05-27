import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { NewsInfo } from '../constants'; // Đường dẫn đến NewsInfo có thể cần điều chỉnh
import { useNavigation } from '@react-navigation/native';

const News = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.itemCard} 
      onPress={() => navigation.navigate('newsdetail', { item })}
    >
      <Image 
        source={item.image} 
        resizeMode='cover'
        style={styles.image}
      />
      <Text style={{fontSize: hp(1.4), textAlign: 'left', fontWeight: 'bold', paddingLeft: 5, paddingTop: 5}}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>News</Text>
      <FlatList 
        data={NewsInfo}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40, paddingTop: 10 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    paddingBottom: 100,
  },
  title: {
    fontSize: hp(3),
    fontWeight: '600',
    color: '#4B5563',
  },
  itemCard: {
    backgroundColor: '#fff',
    width: wp(44), 
    height: wp(60),
    marginTop: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  image: {
    width: wp(44),
    height: wp(50),
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  }
});

export default News;
