import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5, Fontisto, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

export default function FormSucKhoe() {
  const [chieuCao, setChieuCao] = useState('');
  const [canNang, setCanNang] = useState('');
  const [nhomMau, setNhomMau] = useState('');
  const [diUng, setDiUng] = useState('');
  const [mat, setMat] = useState('');
  const [tim, setTim] = useState('');
  const [tai, setTai] = useState('');
  const [nhanXet, setNhanXet] = useState('');

  const handleCapNhat = () => {
    // Xử lý cập nhật thông tin tại đây
    console.log('Cập nhật thông tin...');
  };

  return (
    <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>THÔNG TIN SỨC KHOẺ</Text>
      <View style={styles.info}>
        <View style={styles.infoWrap}>
          <Ionicons name="man" size={30} color={'black'} />
          <Text style={{ fontSize: 20, paddingLeft: 5 }}>Chiều cao</Text>
        </View>
          <TextInput
            style={styles.textInput}
            value={chieuCao}
            onChangeText={setChieuCao}
            keyboardType="default"
            placeholder="Nhập..."
          />
      </View>
      
      <View style={styles.info}>
        <View style={styles.infoWrap}>
            <FontAwesome5 name="weight" size={24} color="black" />
            <Text style={{ fontSize: 20, paddingLeft: 10 }}>Cân nặng</Text>
        </View>
            <TextInput
            style={styles.textInput}
            value={canNang}
            onChangeText={setCanNang}
            placeholder="Nhập..."
            />
      </View>
      
      <View style={styles.info}>
        <View style={styles.infoWrap}>
        <Fontisto name="blood-drop" size={30} color="black" />
          <Text style={{ fontSize: 20, paddingLeft: 15 }}>Nhóm máu</Text>
        </View>
          <TextInput
            style={styles.textInput}
            value={nhomMau}
            onChangeText={setNhomMau}
            placeholder="Nhập..."
          />
      </View>

      <View style={styles.info}>
        <View style={styles.infoWrap}>
        <MaterialCommunityIcons name="allergy" size={30} color="black" />
          <Text style={{ fontSize: 20, paddingLeft: 5 }}>Dị ứng</Text>
        </View>
          <TextInput
            style={styles.textInput}
            value={diUng}
            onChangeText={setDiUng}
            placeholder="Nhập..."
          />
      </View>

      <View style={styles.info}>
        <View style={styles.infoWrap}>
        <FontAwesome name="eye" size={30} color="black" />
          <Text style={{ fontSize: 20, paddingLeft: 5 }}>Mắt</Text>
        </View>
          <TextInput
            style={styles.textInput}
            value={mat}
            onChangeText={setMat}
            placeholder="Nhập..."
          />
      </View>

      <View style={styles.info}>
        <View style={styles.infoWrap}>
        <FontAwesome name="heartbeat" size={30} color="black" />
          <Text style={{ fontSize: 20, paddingLeft: 5 }}>Tim</Text>
        </View>
          <TextInput
            style={styles.textInput}
            value={tim}
            onChangeText={setTim}
            placeholder="Nhập..."
          />
      </View>

      <View style={styles.info}>
        <View style={styles.infoWrap}>
        <Ionicons name="ear-sharp" size={30} color="black" />
          <Text style={{ fontSize: 20, paddingLeft: 5 }}>Tai</Text>
        </View>
          <TextInput
            style={styles.textInput}
            value={tai}
            onChangeText={setTai}
            placeholder="Nhập..."
          />
      </View>

      {/* Thêm các trường thông tin và TextInput tương tự ở đây */}

      <Text style={{ fontSize: 18, fontWeight: 'bold', paddingTop: 10 }}>Nhận xét của giáo viên</Text>
      <View style={styles.comment}>
        <TextInput
          style={{ flex: 1 }}
          value={nhanXet}
          onChangeText={setNhanXet}
          placeholder="Nhập nhận xét..."
          multiline={true}
          numberOfLines={4}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleCapNhat}>
        <Text style={styles.buttonText}>Cập nhật</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  infoWrap: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInput: {
    width: 100,
    height:30,
    borderWidth: 0.1,
    borderColor: 'black',
    borderRadius: 3,
    backgroundColor:'#D9D9D9',
    marginLeft: 10,
    paddingHorizontal: 5,
  },
  comment: {
    height: 100,
    borderRadius: 10,
    borderColor: 'black',
    backgroundColor: '#fff',
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
  },
  button:{
    backgroundColor:'rgba(252, 219, 0, 1)',
    width:150,
    height:50,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:130,
    marginTop:20,
},
buttonText:{
    fontSize:18,
    fontWeight:'bold',
    color:'white'
}
});
