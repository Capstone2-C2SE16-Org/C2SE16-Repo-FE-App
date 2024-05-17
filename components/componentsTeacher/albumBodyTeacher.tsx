import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const AlbumBodyTeacher = ({ albums, handleAddPhotoToAlbum }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>  
      <FlatList
        data={albums}
        numColumns={1}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40, paddingTop: 20 }}
        renderItem={({ item, index }) => <AlbumCard index={index} item={item} navigation={navigation} handleAddPhotoToAlbum={handleAddPhotoToAlbum} />}
      />
    </View>
  );
};

const AlbumCard = ({ item, index, navigation, handleAddPhotoToAlbum }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('listphoto', { albumName: item.title, photos: item.photos, handleAddPhotoToAlbum })} style={styles.itemCard}>
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}> 
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image 
              source={{ uri: item.photo }} 
              resizeMode='cover'
              style={{ width: '100%', height: 200 }}
            />
          </View>
          <Text style={{ fontSize: 16, textAlign: 'left', color: 'black', fontWeight: 'bold', paddingLeft: 17 }}>{item?.title}</Text>
          <Text style={{ fontSize: 15, textAlign: 'left', color: 'black', paddingLeft: 17 }}>{item?.day}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 22,
  },
  itemCard: {
    flex: 1, 
    justifyContent: 'flex-end', 
    padding: 10, 
    marginBottom: 4,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
});

export default AlbumBodyTeacher;