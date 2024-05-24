import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { MaterialIcons, Feather, Ionicons, Foundation } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import SucKhoe from '../../components/sucKhoe';
import HocTap from '../../components/hocTap';
import { API_URL, useAuth } from '../../context/AuthContextApi';

export default function ContactBook() {
  const { authState } = useAuth(); 
  const { userData } = authState; 
  
  const navigation = useNavigation();
  const [showHealth, setShowHealth] = useState(true);
  const [contactBook, setContactBook] = useState(null);

  useEffect(() => {
    const authToken = userData?.token; // Lấy token từ userData
    console.log(authToken)
    if (authToken) {
      axios.get(`${API_URL}contact-books/my`, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      })
      .then(response => {
        setContactBook(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    }
  }, [userData]);

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}-${month}-${year}`;
  };
  const data = [{ key: 'content' }];

  const renderItem = ({ item }) => (
    <View style={styles.contentContainer}>
      <View style={{ height: 1, backgroundColor: '#ccc', marginHorizontal: 10 }} />
      {showHealth ? <SucKhoe healthInfo={contactBook?.health_information} /> : <HocTap contactBook={contactBook} />}
    </View>
  );

  if (!contactBook) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.header}>
        <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={() => navigation.goBack()} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Sổ liên lạc điện tử</Text>
        <Feather name="menu" size={30} color="black" />
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        ListHeaderComponent={
          <View>
            <View style={styles.headerInfo}>
              <View style={{ alignItems: 'center' }}>
                <Image source={require('../../assets/images/Birthday.png')} />
                <Text>{formatDate(contactBook.date_of_birth)}</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Image source={{ uri: contactBook.profile_image }} style={styles.avatarImage}/>
                <Text style={{ fontSize: 20, fontWeight: 'bold', paddingTop: 10 }}>{contactBook.name}</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Image source={require('../../assets/images/Capricorn.png')} />
                <Text>{contactBook.nickname}</Text>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, showHealth ? styles.activeButton : null]}
                onPress={() => setShowHealth(true)}
              >
                <Ionicons name="man" size={30} color={showHealth ? 'black' : '#ccc'} />
                <Text style={showHealth ? styles.selectedButtonText : styles.unselectedButtonText}>Sức khoẻ</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, !showHealth ? styles.activeButton : null]}
                onPress={() => setShowHealth(false)}
              >
                <Foundation name="clipboard-notes" size={30} color={!showHealth ? 'black' : '#ccc'} style={{paddingRight:5}}/>
                <Text style={!showHealth ? styles.selectedButtonText : styles.unselectedButtonText}>Học tập</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
        renderItem={renderItem}
      />
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
  headerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '50%',
  },
  activeButton: {},
  selectedButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  unselectedButtonText: {
    color: '#ccc',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentContainer: {},
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
