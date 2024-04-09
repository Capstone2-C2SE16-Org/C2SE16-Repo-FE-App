import React from 'react';
import { View, Text ,FlatList,StyleSheet,Image, TouchableOpacity} from 'react-native'
import{mealData} from '../constants'
import DrawerItem from 'react-native-paper/lib/typescript/components/Drawer/DrawerItem';

const MealBody = () => {
    return (
      <View style={styles.container}>  
        <FlatList
          data={mealData}
          numColumns={1}
          keyExtractor={item=>item.day}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom:40,paddingTop:20,}}
          renderItem={({item,index})=> <MealCard  index={index} item={item} />}
        />
      </View>
    )
}
const MealCard = ({item,index})=>{
    return(
      <>
        <View style={styles.dayContainer} >
            <Text style={styles.dayText}>{item.day}</Text>
            <View style={styles.mealContainer}>
                <Text style={styles.mealLabel}>Sáng:</Text>
                <Text style={styles.mealText}>{item.breakfast}</Text>
            </View>
            <View style={styles.mealContainer}>
                <Text style={styles.mealLabel}>Trưa:</Text>
                <Text style={styles.mealText}>{item.lunch}</Text>
            </View>
            <View style={styles.mealContainer}>
                <Text style={styles.mealLabel}>Xế:</Text>
                <Text style={styles.mealText}>{item.snack}</Text>
            </View>
        </View>
      </>
    )
  }
  const styles = StyleSheet.create({
    container: {
      },
      dayContainer: {
        width:400,
        height:180,
        marginBottom: 20,
        borderWidth: 0.3, // Độ dày của đường viền
        borderRadius: 10,
        padding:10,

      },
      dayText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      mealContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop:10,
      },
      mealLabel: {
        fontWeight: 'bold',
        marginRight: 5,
      },
      mealText: {
        fontSize: 16,
        flexWrap: 'wrap',
        width:345,
      },
  })
export default MealBody
