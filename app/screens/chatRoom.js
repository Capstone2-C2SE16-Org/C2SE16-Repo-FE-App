// import { View, Text, SafeAreaView,StyleSheet, TextInput, TouchableOpacity } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import {  useLocalSearchParams,useRouter } from 'expo-router'
// import { StatusBar } from 'expo-status-bar';
// import ChatRoomHeader from '../../components/ChatRoomHeader';
// import { MaterialIcons } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';
// import MessageList from '../../components/messageList';
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import CustomKeyBoardView from '../../components/customKeyBoardView';
// import { useAuth } from '../../context/AuthContext';
// import { Timestamp, doc, setDoc } from 'firebase/firestore';

// export default function ChatRoom() {

//     const item = useLocalSearchParams(); // second user
//     const {user} = useAuth //logged in user
//     console.log('got item data ', item);
//     const router = useRouter();
//     const [messages, setMessages] = useState([1,2,3]);

//     useEffect(()=>{
//       createRoomIfNotExists();
//     },[]);
    
//     const createRoomIfNotExists = async ()=>{
//       //roomId
//       let roomId = getRoomId(user?.userId, item?.userId);
//       await setDoc(doc(db, "rooms", roomId),{
//          roomId,
//          createdAt: Timestamp.fromDate(new Date())
//       });
//     }
//   return (
//     <CustomKeyBoardView inChat={true}>
//       <View style={{flex:1,backgroundColor:'white'}}>
//         <StatusBar  style='dark'/>
//         {/* Header */}
//         <View style={styles.header}>
//           <View style={{flexDirection:'row'}}>
//           <MaterialIcons name="arrow-back-ios" size={30} color="black" onPress={()=>router.back()} />
//           </View>
//           <Text style={{fontSize:20,fontWeight:'bold'}}>Lịch Học</Text>
//           <Feather name="menu" size={30} color="black" />
//         </View>
//         <ChatRoomHeader user={item} router={router} />
//         <View style={{height:1, borderBottomColor:'black',borderBottomWidth:1}}></View>
//         <View style={{flex:1,justifyContent:'space-between',backgroundColor: 'red'}}>
//           <View style={{flex:1}}>
//             <MessageList messages={messages} />
//           </View>
//           <View style={{marginBottom:hp(1.7),paddingTop:10}}>
//               <View style={{flexDirection:'row',marginHorizontal: 3,justifyContent:'space-between',backgroundColor:'white', borderWidth:2, borderColor: '#D1D5DB',padding: 10,borderRadius: 9999,paddingLeft: 20}}> 
//                 <TextInput
//                   onChangeText={value=> textRef.current = value}
//                   placeholder='Type message...'
//                   style={{fontSize: hp(2),flex:1,marginLeft:2}}
//                 />
//                 <TouchableOpacity style={{ backgroundColor: '#E2E8F0',padding: 8,marginRight: 1,borderRadius: 999}}>
//                   <Feather name="send" size={hp(2.7)} color="737373" />
//                 </TouchableOpacity>
//               </View>
//           </View>
//         </View>
//       </View>
//     </CustomKeyBoardView>
//   )
// }

// const styles = StyleSheet.create({
//   header:{
//       flexDirection:'row',
//       alignItems:'center',
//       justifyContent:'space-between',
//       height:50,
//       backgroundColor:"#c9c9c9",
//       paddingHorizontal:20,
//       marginTop:40
//     },
//   })