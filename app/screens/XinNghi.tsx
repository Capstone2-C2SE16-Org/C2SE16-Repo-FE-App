import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,TextInput,Button, SafeAreaView  } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import DatePicker from 'react-native-date-picker'
import DateTimePicker from '@react-native-community/datetimepicker';    

export default function XinNghi() {
    const navigation = useNavigation();

    const [value, setValue] = React.useState('sot');
    const [text, onChangeText] = React.useState('');

    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShowPicker(false);
      setDate(currentDate);
    };
  return (
    <SafeAreaView>
        {/* Header */}
        <View style={styles.header}>
        <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={()=>navigation.goBack()} />
        <Text style={{fontSize:20,fontWeight:'bold'}}>Xin Nghỉ</Text>
        <Feather name="menu" size={30} color="black" />
        </View>
        {/* Body */}
        <View style={styles.container}>
            <View style={{backgroundColor:'#FFE4B2',height:60,justifyContent:'center',paddingLeft:10}}>
                <Text style={{fontSize:25,fontWeight:'bold',color:'red'}}>XIN NGHỈ PHÉP:</Text>
            </View>
            <Text style={{fontSize:20}}>Lý do xin nghỉ</Text>
            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
        <View  style={styles.reason}>
            <View  style={styles.reasonList}>
                <RadioButton value="sot" />
                <Text>Sốt</Text>
            </View>
            <View  style={styles.reasonList}>
                <RadioButton value="non" />
                <Text>Nôn</Text>
            </View>
        </View>
        <View  style={styles.reason}>
            <View  style={styles.reasonList}>
                <RadioButton value="ho" />
                <Text>Ho</Text>
            </View>
            <View  style={styles.reasonList}>
                <RadioButton value="daumat" />
                <Text>Đau mắt</Text>
            </View>
        </View>
        <View  style={styles.reason}>
            <View  style={styles.reasonList}>
                <RadioButton value="daubung" />
                <Text>Đau bụng</Text>
            </View>
            <View  style={styles.reasonList}>
                <RadioButton value="coviecgd" />
                <Text>Có việc gia đình</Text>
            </View>
        </View>
        </RadioButton.Group>
        <Text style={{fontSize:20}}>Lý do khác</Text>
        <View style={styles.containerInput}>
            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Nhập lý do khác..."
            />
        </View>
        <View style={{paddingTop:20}}>
            <View style={{backgroundColor:'#c9c9c9',width:150,height:40,borderRadius:5}}> 
            {/* <Button title="Chọn ngày nghỉ:" onPress={() => setShowPicker(true)} />
            {showPicker && (
                <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={onChange}
                />
            )} */}
            </View>
            <Text style={{fontSize:20,marginTop:30}}>Ngày đã chọn: {date.toDateString()}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Gửi</Text>
        </TouchableOpacity>
        </View>
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
        width:400,
        marginHorizontal:13,
        paddingTop:10
    },
    reason:{
        flexDirection:'row',
        justifyContent: 'space-around'
    },
    reasonList:{
        flexDirection:'row',
        alignItems:'center', 
    },
    containerInput:{
        height:100,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3, // Android
    },
    input: {
        fontSize:15,
    },
    button:{
        backgroundColor:'rgba(252, 219, 0, 1)',
        width:100,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginLeft:150,
        marginTop:50,
    }
  });