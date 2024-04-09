import { View, Text ,FlatList,StyleSheet,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';
import {NewsInfo} from '../constants'
const News = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>News</Text>

      <FlatList
        data={NewsInfo}
        numColumns={2}
        keyExtractor={item=>item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:40,paddingTop:10,}}
        columnWrapperStyle={{
          justifyContent:'space-between'
        }}
        renderItem={({item,index})=> <NewsCard  index={index} item={item} />}
      />
    </View>

  )
}

const NewsCard = ({item,index})=>{
  return(
    <View >
      <TouchableOpacity style={styles.itemCard}>
      <Image 
        source={item.image} 
        resizeMode='cover'
        style={styles.image}
      />
      <Text style={{fontSize:hp(1.4),textAlign:'left',fontWeight:'bold',paddingLeft:5,paddingTop:5}}>{item?.name}</Text>
    </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    marginHorizontal: 20,
  },
  title:{
    fontSize:hp(3),
    fontWeight: '600',
    color: '#4B5563',
  },
  itemCard:{
    backgroundColor:'#fff',
    width: wp(44), 
    height: wp(60),
    flex: 1, 
    marginTop:20,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0, // Khoảng cách shadow theo chiều ngang
      height: 4, // Khoảng cách shadow theo chiều dọc
    },
    shadowOpacity: 0.3, // Độ đậm của shadow
    shadowRadius: 4, // Bán kính của shadow
    elevation: 8, // Chỉ định độ nâng của View (cho Android)
  },
  image:{
    width:wp(44),
    height:wp(50),
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
  }
})
export default News