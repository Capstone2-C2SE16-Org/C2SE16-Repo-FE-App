import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const NewsDetail = () => {
  const route = useRoute();
  const { item } = route.params || {};

  if (!item) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No news item found.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.content}>{item.content}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  image: {
    width: wp(90),
    height: hp(30),
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: hp(3),
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: hp(2),
    color: '#4B5563',
  },
  errorText: {
    fontSize: hp(2.5),
    color: 'red',
    textAlign: 'center',
    marginTop: hp(20),
  },
});

export default NewsDetail;
