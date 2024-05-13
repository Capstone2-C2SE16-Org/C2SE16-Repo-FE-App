import { View, Text,StyleSheet,SafeAreaView,TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import AlbumBodyTeacher from '../../../components/componentsTeacher/albumBodyTeacher'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AddPhotoModal from '../../../components/componentsTeacher/addPhotoModal';
export default function AlbumsTeacher() {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const handleAddPhoto = (data) => {
    // Xử lý dữ liệu ảnh được thêm vào ở đây
    console.log('Dữ liệu ảnh được thêm vào:', data);
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
        <AlbumBodyTeacher />
      </View>
      {/* Màn hình hoặc modal thêm ảnh */}
      <AddPhotoModal visible={modalVisible} onClose={() => setModalVisible(false)} onAddPhoto={handleAddPhoto} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  header:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      height:50,
      backgroundColor:"#c9c9c9",
      paddingHorizontal:20,
    },
})