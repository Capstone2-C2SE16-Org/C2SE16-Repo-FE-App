import { View, Text ,FlatList,StyleSheet,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';
import{AlbumList} from '../../constants'

const AlbumBodyTeacher = () => {
    const router = useRouter();
    return (
      <View style={styles.container}>  
        <FlatList
          data={AlbumList}
          numColumns={1}
          keyExtractor={item=>item.name}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom:40,paddingTop:20,}}
          renderItem={({item,index})=> <AlbumCard  index={index} item={item} />}
        />
      </View>
    )
}
const AlbumCard = ({item,index})=>{
    return(
      <View >
        <TouchableOpacity style={styles.itemCard}>
        <View style={{flex:1,flexDirection:'column',justifyContent:'space-between'}}> 
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Image 
                source={item.image} 
                resizeMode='cover'
                style={{position: 'relative'}}
                />
            </View>
            <Text style={{fontSize:hp(2),textAlign:'left',color:'black',fontWeight:'bold',paddingLeft:17}}>{item?.name}</Text>
            <Text style={{fontSize:15,textAlign:'left',color:'black',paddingLeft:17}}>{item?.day}</Text>
            
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
export default AlbumBodyTeacher