import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import AlbumBodyTeacher from '../../../components/componentsTeacher/albumBodyTeacher';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AddPhotoModal from '../../../components/componentsTeacher/addPhotoModal';
import { useAlbum } from '../../../context/AlbumContext'; // Đường dẫn đến file AlbumContext

export default function AlbumsTeacher() {
  const navigation = useNavigation();
  const { albums, addAlbum } = useAlbum();
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddPhoto = (data) => {
    addAlbum({ ...data, photos: [] });
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ flexDirection: 'row' }}>
          <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={() => navigation.goBack()} />
        </View>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Albums</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <MaterialIcons name="add-photo-alternate" size={30} color="black" />
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