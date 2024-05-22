import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import News from '../../../components/news';
import { useNavigation } from '@react-navigation/native';
import HomeHeader from '../../../components/componentsTeacher/homeHeader';
import HomeCategory from '../../../components/componentsTeacher/homeCategory';

export default function HomeTeacher({ route }) {
  const navigation = useNavigation();
  const data = [{ key: 'header' }, { key: 'category' }, { key: 'news' }];

  const renderItem = ({ item }) => {
    switch (item.key) {
      case 'header':
        return <HomeHeader />;
      case 'category':
        return <HomeCategory />;
      case 'news':
        return <News />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <StatusBar style='dark' />
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingTop: 50,
    backgroundColor: 'white',
  },
});
