import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const AddPhotoModal = ({ visible, onClose, onAddPhoto }) => {
  const [photo, setPhoto] = useState('');
  const [title, setTitle] = useState('');
  const [day, setDay] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri); // Sửa đổi cách lấy URI từ result
    }
  };

  const handleAddPhoto = () => {
    if (photo.trim() === '' || title.trim() === '') {
      Alert.alert('Lỗi', 'Vui lòng chọn ảnh và nhập tiêu đề.');
      return;
    }

    onAddPhoto({ photo, title, day });
    resetFields();
    onClose();
  };

  const resetFields = () => {
    setPhoto('');
    setTitle('');
    setDay('');
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={{ fontSize: 20, fontWeight: '500', marginBottom: 10 }}>Thêm mới Albums</Text>
          <Button title="Chọn ảnh" onPress={pickImage} />
          {photo !== '' && <Text style={styles.photoUri}>Ảnh đã chọn: {photo}</Text>}
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            placeholder="Tiêu đề"
          />
          <TextInput
            style={styles.input}
            value={day}
            onChangeText={setDay}
            placeholder="Ngày"
          />
          <View style={styles.buttonContainer}>
            <Button title="Thêm Albums" onPress={handleAddPhoto} />
            <Button title="Đóng" onPress={() => { resetFields(); onClose(); }} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  photoUri: {
    marginVertical: 10,
    fontStyle: 'italic',
    color: '#555',
  },
});

export default AddPhotoModal;
