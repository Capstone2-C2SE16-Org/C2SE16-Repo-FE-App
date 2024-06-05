import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const AddPhotoModal = ({ visible, onClose, onAddPhoto }) => {
  const [title, setTitle] = useState('');
  const [day, setDay] = useState('');
  const [photo, setPhoto] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result)
    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  const handleAddPhoto = () => {
    if (!photo || title.trim() === '' || day.trim() === '') {
      Alert.alert('Lỗi', 'Vui lòng nhập tiêu đề, ngày và chọn ảnh nền.');
      return;
    }

    onAddPhoto({ title, day, photo });
    setTitle('');
    setDay('');
    setPhoto(null);
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={{ fontSize: 20, fontWeight: '500', marginBottom: 10 }}>Thêm mới Album</Text>
          <Button title="Chọn ảnh nền" onPress={pickImage} />
          {photo && <Text style={styles.photoUri}>Ảnh nền đã chọn: {photo.split('/').pop()}</Text>}
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
            <Button title="Thêm Album" onPress={handleAddPhoto} />
            <Button title="Đóng" onPress={() => { setTitle(''); setDay(''); setPhoto(null); onClose(); }} />
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
