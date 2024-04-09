import { View, Text ,FlatList,StyleSheet,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';
import {goodChildCoupon} from '../constants'
const GoodChildCoupon = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <FlatList
        data={goodChildCoupon}
        numColumns={2}
        keyExtractor={item=>item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:20,paddingTop:10,}}
        columnWrapperStyle={{
          justifyContent:'space-between'
        }}
        renderItem={({item,index})=> <GoodChildCouponCard  index={index} item={item} />}
      />
    </View>

  )
}

const GoodChildCouponCard = ({item,index})=>{
  return(
    <View >
      <View style={styles.itemCard}>
      <Text style={styles.itemName}>{item?.name}</Text>
      <View style={styles.imageContainer}>
        <Image 
            source={item.image} 
            resizeMode='contain'
            style={styles.image}
        />
      </View>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    paddingTop:20,
    marginHorizontal: 4,
  },
  itemCard:{
    width: wp(44), 
    height: wp(52),
    flex: 1, 
    justifyContent: 'flex-end', 
    padding: 4, 
    marginBottom: 4,
  },
  itemName:{
    fontSize:hp(1.6),
    fontWeight:'bold',
    paddingBottom:5
},
imageContainer:{
    width:150,
    height:200,
    backgroundColor:'#D9D9D9',
    alignItems:'center',
    borderRadius:5
},
  image:{
    width:145,
    height:195,
    borderRadius: 10,
  }
})
export default GoodChildCoupon