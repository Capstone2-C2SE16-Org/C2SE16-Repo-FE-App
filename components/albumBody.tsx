  import { View, Text ,FlatList,StyleSheet,Image, TouchableOpacity} from 'react-native'
  import React from 'react'
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { API_ADDRESS } from '../context/AuthContextApi';

  const AlbumBody = ({albums}) => {
    const navigation = useNavigation()
      return (
        <View style={styles.container}>  
          <FlatList
            data={albums}
            numColumns={1}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:40,paddingTop:20,}}
            renderItem={({item,index})=> <AlbumCardShow  index={index} item={item} navigation={navigation} />}
          />
        </View>
      )
  }
  const AlbumCardShow = ({item,index,navigation})=>{

    console.log(item)
  const uri = API_ADDRESS + item.image
  console.log(uri)
      return(
        <View >
          <TouchableOpacity
            onPress={()=>
              // , { albumName: item.name, classroomId: item.classroom_id, albumId:item.id }
              // console.log(`Navigating to viewlistphoto with albumName: ${item.name}, classroomId: ${item.classroom_id}, albumId: ${item.id}`)}
             navigation.navigate('ViewListPhoto', { albumName: item.name, classroomId: item.classroom_id, albumId:item.id })}
            style={styles.itemCard} 
          >
          <View style={{flex:1,flexDirection:'column',justifyContent:'space-between'}}> 
              <View style={{justifyContent:'center',alignItems:'center'}}>
                  <Image 
                    source={{ uri: uri }} 
                    resizeMode='cover'
                    style={{ width: '100%', height: 200,borderRadius:10 }}
                  />
              </View>
              <Text style={{fontSize:hp(2),textAlign:'left',color:'black',fontWeight:'bold',paddingLeft:5}}>{item?.name}</Text>
              <Text style={{fontSize:15,textAlign:'left',color:'black',paddingLeft:5}}>{item?.date_upload}</Text>
              
          </View>
        </TouchableOpacity>
        </View>
      )
    }
    const styles = StyleSheet.create({
      container:{
        marginHorizontal: 22,
      },
      itemCard:{
        flex: 1, 
        justifyContent: 'flex-end', 
        padding:10, 
        marginBottom: 4,
      },
    })
  export default AlbumBody