import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, Alert, FlatList } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContextApi';
import News from '../../components/news';

export default function HomeStudent() {
  const navigation = useNavigation();
  const { authState } = useAuth(); 
  const { userData } = authState; 

  // Render header
  const renderHeader = () => {
    if (!userData) {
      return null;
    }

    return (
      <>
        <StatusBar style="dark" />
        <View style={styles.headerContainer}>
          <View style={styles.avatar}>
            <Image source={{ uri: userData.profile_image }} style={styles.avatarImage} />
          </View>
          <View style={styles.textInfo}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', paddingTop: 10 }}>Bé: {userData.name}</Text>
            <Text style={{ fontSize: 16, paddingTop: 10 }}>Lớp: {userData.classroom.name}</Text>
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => navigation.navigate('lichhoc')} style={styles.item}>
              <View style={styles.icon}>
                <Ionicons name="calendar-outline" size={40} />
              </View>
              <Text style={styles.text}>Lịch Học</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('contactbook')}>
              <View style={styles.icon}>
                <Ionicons name="reader-outline" size={40} />
              </View>
              <Text style={styles.text}>Sổ Liên Lạc</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('xinnghi')} style={styles.item}>
              <View style={styles.icon}>
                <Ionicons name="clipboard-outline" size={40} />
              </View>
              <Text style={styles.text}>Xin Nghỉ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('albums')}>
              <View style={styles.icon}>
                <Ionicons name="images-outline" size={40} />
              </View>
              <Text style={styles.text}>Albums</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('dinhduong')}>
              <View style={styles.icon}>
                <Ionicons name="nutrition-outline" size={40} />
              </View>
              <Text style={styles.text}>Dinh dưỡng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <View style={styles.icon}>
                <Ionicons name="create-outline" size={40} />
              </View>
              <Text style={styles.text}>Đánh giá</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('hocphi')}>
              <View style={styles.icon}>
                <Ionicons name="wallet-outline" size={40} />
              </View>
              <Text style={styles.text}>Học phí</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <View style={styles.icon}>
                <Ionicons name="ellipsis-horizontal-outline" size={40} />
              </View>
              <Text style={styles.text}>Xem thêm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={[]} // Empty data for FlatList
        keyExtractor={(item, index) => index.toString()}
        renderItem={null}
        ListFooterComponent={<News />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'column',
    paddingVertical: 5,
    paddingTop: 50,
  },
  logo: {
    paddingLeft: 170,
    marginTop: -50,
  },
  headerContainer: {
    backgroundColor: 'rgba(244, 225, 225, 0.46)',
    flexDirection: 'row',
    paddingVertical: 10,
    marginTop:20,
  },
  bodyContainer: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  avatar: {
    paddingLeft: 30,
  },
  avatarImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  textInfo: {
    paddingLeft: 50,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  icon: {
    backgroundColor: '#D9D9D9',
    borderRadius: 9999,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});
