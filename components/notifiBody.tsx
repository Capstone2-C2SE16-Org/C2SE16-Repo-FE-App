import { View, Text ,FlatList,StyleSheet,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';
import{NotifiList} from '../constants'

const NotifiBody = () => {
    const router = useRouter();
    return (
      <View style={styles.container}>  
        <FlatList
          data={NotifiList}
          numColumns={1}
          keyExtractor={item=>item.name}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom:40,paddingTop:20,}}
          renderItem={({item,index})=> <NotifiCard  index={index} item={item} />}
        />
      </View>
    )
}
const NotifiCard = ({item,index})=>{
    return(
      <View >
        <TouchableOpacity style={styles.itemCard}>
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}> 
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image 
                source={item.image} 
                resizeMode='cover'
                style={{position: 'relative'}}
                />
                <Text style={{fontSize:hp(2),textAlign:'left',color:'black',fontWeight:'bold',width:280,}}>{item?.name}</Text>
                <View>
                <View style={{backgroundColor:'orange',width:10,height:10,borderRadius:999999999,marginLeft:30}}></View>
                <Text style={{fontSize:8,color:'rgba(0, 0, 0, 0.6)'}}>{item?.time}</Text>
                </View>
            </View>
            
        </View>
        <Text>{item?.body}</Text>
      </TouchableOpacity>
      </View>
    )
  }
  const styles = StyleSheet.create({
    container:{
      marginHorizontal: 22,
    },
    itemCard:{
      backgroundColor:'#fff',
      width: wp(90), 
      height: wp(30),
      flex: 1, 
      justifyContent: 'flex-end', 
      padding:10, 
      marginBottom: 4,
    },
  })
export default NotifiBody