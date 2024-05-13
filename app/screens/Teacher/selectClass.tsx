import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView,StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
export default function SelectClassScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { grade } = route.params;

  const handleSelectClass = (className) => {
    // Navigation đến trang lịch học của lớp đã chọn
    navigation.navigate('lichhocteacher', { grade, className });
  };

  return (
    <SafeAreaView>
           {/* Header */}
    <View style={styles.header}>
      <View style={{flexDirection:'row'}}>
      <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={()=>navigation.goBack()} />
      </View>
      <Text style={{fontSize:20,fontWeight:'bold'}}>{grade}</Text>
      <Feather name="menu" size={30} color="black" />
    </View>
      <View style={styles.container}>
      <View>
        <Text style={[styles.text,{paddingBottom:10}]}>Chọn lớp bạn muốn:</Text>
      </View>
      {grade === 'Khối Lớp Chồi' && (
        <>
          <TouchableOpacity style={styles.viewText} onPress={() => handleSelectClass('Lớp Chồi 1')}>
            <Text style={styles.text}>Lớp Chồi 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewText} onPress={() => handleSelectClass('Lớp Chồi 2')}>
            <Text style={styles.text}>Lớp Chồi 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewText} onPress={() => handleSelectClass('Lớp Chồi 3')}>
            <Text style={styles.text}>Lớp Chồi 3</Text>
          </TouchableOpacity>
        </>
      )}
      {grade === 'Khối Lớp Bé' && (
        <>
          <TouchableOpacity style={styles.viewText} onPress={() => handleSelectClass('Lớp Bé 1')}>
            <Text style={styles.text}>Lớp Bé 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewText} onPress={() => handleSelectClass('Lớp Bé 2')}>
            <Text style={styles.text}>Lớp Bé 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewText} onPress={() => handleSelectClass('Lớp Bé 3')}>
            <Text style={styles.text}>Lớp Bé 3</Text>
          </TouchableOpacity>
        </>
      )}
      {grade === 'Khối Lớp Lớn' && (
        <>
          <TouchableOpacity style={styles.viewText} onPress={() => handleSelectClass('Lớp Lớn 1')}>
            <Text style={styles.text}>Lớp Lớn 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewText} onPress={() => handleSelectClass('Lớp Lớn 2')}>
            <Text style={styles.text}>Lớp Lớn 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.viewText} onPress={() => handleSelectClass('Lớp Lớn 3')}>
            <Text style={styles.text}>Lớp Lớn 3</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
      {/* Thêm các nút hoặc danh sách cho các lớp khác trong khối đã chọn */}
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
      container:{
        padding:20,
        paddingTop:50,
        alignItems:'center',
        justifyContent:'center'
      },
      viewText:{
        borderWidth:1,
        width:200,
        height:50,
        paddingBottom:10,
        borderRadius:5,
        marginBottom:10,
        alignItems:'center',
        justifyContent:'center',
        borderColor: '#9d9d9d',

      },
      text:{
        fontSize:20,
        fontWeight:'bold'
      }
    })