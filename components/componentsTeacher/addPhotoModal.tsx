import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const AddPhotoModal = ({ visible, onClose, onAddPhoto }) => {
  const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState('');
  const [day, setDay] = useState('');

  const handleChoosePhoto = () => {
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.assets[0].uri };
        setPhoto(source);
      }
    });
  };

  const handleAddPhoto = () => {
    if (photo && title.trim() !== '') {
      onAddPhoto({ photo: photo.uri, title });
      onClose();
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={{fontSize:20,fontWeight:'500'}}>Thêm mới Albums</Text>
          <Button title="Chọn Ảnh" onPress={handleChoosePhoto} />
          {photo && (
            <Image source={photo} style={{ width: 100, height: 100 }} />
          )}
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
          <Button title="Thêm Albums" onPress={handleAddPhoto} />
          <Button title="Đóng" onPress={onClose} />
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
});

export default AddPhotoModal;
