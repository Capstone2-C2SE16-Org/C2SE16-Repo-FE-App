import { View, Text, Image,StyleSheet,TouchableOpacity,ScrollView,SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native';

export default function HomeCategory() {
  const navigation = useNavigation();

  return (
    <View style={styles.bodyContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={()=>navigation.navigate('classroomlist', { screenName: 'Calendar' })}
           style={styles.item}>
            <View style={styles.icon}>
              <Ionicons name="calendar-outline" size={40} ></Ionicons>
            </View>
            <Text style={styles.text}>Lịch Học</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
            onPress={()=>navigation.navigate('classroomlist', { screenName: 'Contact Book' })}
            >
            <View style={styles.icon}>
            <Ionicons  name="reader-outline" size={40} ></Ionicons>
            </View>
            <Text style={styles.text}>Sổ Liên Lạc</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={()=>navigation.navigate('thongbaoxinghi')}
          style={styles.item}>
            <View style={styles.icon}>
            <Ionicons name="clipboard-outline" size={40} ></Ionicons>
            </View>
            <Text style={styles.text}>Xin Nghỉ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
            onPress={()=>navigation.navigate('albumsteacher')}
          >
            <View style={styles.icon}>
            <Ionicons name="images-outline" size={40} ></Ionicons>
            </View>
            <Text style={styles.text}>Albums</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row2}>
          <TouchableOpacity style={styles.item}
            onPress={()=>navigation.navigate('classroomlist', { screenName: 'Student' })}
            >
            <View style={styles.icon}>
                <Image 
                source={require('../../assets/images/Boy.png')} 
                style={{width:50,height:50,position:'absolute'}}
                />
            </View>
            <Text style={styles.text}>Học Sinh</Text>
          </TouchableOpacity>
         
          <TouchableOpacity style={[styles.item,{paddingLeft:35}]}>
            <View style={styles.icon}>
            <Ionicons name="ellipsis-horizontal-outline" size={40} ></Ionicons>
            </View>
            <Text style={styles.text}>Xem thêm</Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flexDirection: 'column', 
        // justifyContent: 'space-between', 
        paddingVertical: 5,
        paddingTop:50,
    },
    logo:{
        paddingLeft:170,
        marginTop:-50,
    },
    headerContainer:{
        backgroundColor:'rgba(244, 225, 225, 0.46)',
        flexDirection:'row',
        paddingVertical: 10,
    },
    bodyContainer:{
      flexDirection: 'column',
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    avatar:{
        paddingLeft:20,
    },
    textInfo:{
        paddingLeft:40,
    },
    row:{
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginBottom: 10,
    },
    row2:{
        flexDirection:'row',
        justifyContent:'flex-start',
        paddingLeft:25,
    },
    icon:{
      backgroundColor:'#D9D9D9',
      borderRadius:9999,
      width:50,
      height:50,
      alignItems:'center',
      justifyContent:'center'
    },
    item: {
      paddingVertical: 10,
      paddingHorizontal: 5,
      
      alignItems:'center',
      justifyContent:'center',
    },
    text: {
      fontSize: 13,
      fontWeight:'bold',
    },

})