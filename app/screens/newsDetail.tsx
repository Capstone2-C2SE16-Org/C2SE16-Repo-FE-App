import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MaterialIcons, Feather } from '@expo/vector-icons';

const NewsDetail = () => {
  const route = useRoute();
  const { item } = route.params || {};
  const navigation = useNavigation();

  if (!item) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No news item found.</Text>
      </View>
    );
  }

  return (
    <>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row' }}>
          <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={() => navigation.goBack()} />
        </View>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Bài Viết</Text>
        <Feather name="menu" size={30} color="black" />
      </View>  
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.body}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.content}>{item.content}</Text>
      </View>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    backgroundColor: '#fff',
    flex: 1,
  },
  body:{
    padding:10,
  },
  image: {
    alignItems:'center',
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
  header: {
    marginTop:32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: "#c9c9c9",
    paddingHorizontal: 20,
  },
});

export default NewsDetail;
