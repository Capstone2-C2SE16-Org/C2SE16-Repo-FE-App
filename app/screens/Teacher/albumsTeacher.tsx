import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import AlbumBodyTeacher from '../../../components/componentsTeacher/albumBodyTeacher';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import AddPhotoModal from '../../../components/componentsTeacher/addPhotoModal';
import { useAlbum } from '../../../context/AlbumContext'; // Đường dẫn đến file AlbumContext
import axios from 'axios';
import { API_URL, useAuth } from '../../../context/AuthContextApi';

export default function AlbumsTeacher({ route }) {
  const { classroomId } = route.params
  const navigation = useNavigation();
  const [albums, setAlbums] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const { authState } = useAuth();
  console.log("classroomID", classroomId)
  console.log("token", authState?.token)
  useEffect(() => {
    axios.get(`${API_URL}classrooms/${classroomId}/albums/`, {
      headers: {
        'Authorization': `Bearer ${authState?.token}`
      }
    })
      .then(response => {
        setAlbums(response.data.albums);
        setLoading(false);
      })
      .catch(error => {
        console.error("Failed to fetch albums", error);
        setLoading(false);
      });
  }, []);

  const handleAddPhoto = async (data) => {
    console.log(data)
    try {
      const formData = new FormData();
      // Thêm file vào FormData; 'file' là tên trường dùng trong API
      formData.append('image', {
        uri: data.photo,
        type: 'image/jpeg', // Thay đổi theo loại file của bạn
        name: 'photo.jpg', // Thay đổi tên file
      });
      formData.append("date_upload", data.day)
      formData.append("name", data.title)
      console.log("formdat", formData)
      const response = await axios.post(`${API_URL}classrooms/${classroomId}/albums/`, formData, {
        headers: {
          'Authorization': `Bearer ${authState?.token}`
        }
      })
      setAlbums(prev => [...prev, response.data])
    } catch (error) {
      alert("Can not create album")
    }
    setModalVisible(false);
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ flexDirection: 'row' }}>
          <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={() => navigation.goBack()} />
        </View>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Albums</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <MaterialIcons name="add" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ paddingBottom: 70 }}>
        <AlbumBodyTeacher albums={albums} />
      </View>
      {/* Màn hình hoặc modal thêm ảnh */}
      <AddPhotoModal visible={modalVisible} onClose={() => setModalVisible(false)} onAddPhoto={handleAddPhoto} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: "#c9c9c9",
    paddingHorizontal: 20,
  },
});