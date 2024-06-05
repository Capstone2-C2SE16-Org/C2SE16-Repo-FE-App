import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, FlatList } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SelectStudent = ({ route }) => {
  const navigation = useNavigation();
  const { screenName, students, classroomId } = route.params;

  const handleSelectStudent = (student) => {
    switch (screenName) {
      case "Student":
        navigation.navigate('studentinfo', { studentId: student.id, classroomId: classroomId });
        break;
      case "Contact Book":
        navigation.navigate('contactbookteacher', { studentId: student.id, classroomId: classroomId });
        break;
      default:
        break;
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.studentItem}
      onPress={() => handleSelectStudent(item)}
    >
      <Image source={{ uri: item.profile_image }} style={styles.avatar} />
      <View style={{ flexDirection: 'column', paddingLeft: 25 }}>
        <Text style={styles.textName}>{item.name}</Text>
        <Text style={styles.textNickName}>{item.nickname}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={() => navigation.goBack()} />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            {screenName === 'Student' ? 'Thông tin học sinh' : 'Sổ liên lạc điện tử'}
          </Text>
          <Feather name="menu" size={30} color="black" />
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>Chọn Học sinh của bạn:</Text>
          <FlatList
            data={students}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}

            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: "#c9c9c9",
    paddingHorizontal: 20,
  },
  body: {
    paddingHorizontal: 25,
    marginBottom:150,
  },
  title: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  studentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  textName: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  textNickName: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.5)',
    paddingTop: 5
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});

export default SelectStudent;
