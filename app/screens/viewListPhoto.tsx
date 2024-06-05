import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { useAlbum } from '../../context/AlbumContext';
import { API_ADDRESS, API_URL, useAuth } from '../../context/AuthContextApi';
import axios from 'axios';

export default function ViewListPhoto() {
  const navigation = useNavigation();
  const route = useRoute();
  const { albumName, classroomId, albumId } = route.params;
  console.log(albumName, classroomId, albumId)
  const [images, setImages] = useState()
  const [modalVisible, setModalVisible] = useState(false);
  const { authState } = useAuth();
  const [loading, setLoading] = useState(true);
  const [photo, setPhoto] = useState();


  useEffect(() => {
    console.log(albumName, classroomId, albumId)
    console.log(authState?.token)
    axios.get(`${API_URL}classrooms/${classroomId}/albums/${albumId}`, {
      headers: {
        'Authorization': `Bearer ${authState?.token}`
      }
    })
      .then(response => {
        console.log(response.data)
        setImages(response.data.images);
        setLoading(false);
      })
      .catch(error => {
        console.error("Failed to fetch images", error);
        setLoading(false);
      });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={() => navigation.goBack()} />
        <View style={{width:350,alignItems:'center',justifyContent:'center'}}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{albumName}</Text>
        </View>
      </View>
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: API_ADDRESS + item.url }} style={styles.image} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 400,
    height:300,
    borderRadius:10,
  },
});
