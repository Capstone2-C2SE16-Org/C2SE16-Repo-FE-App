import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from 'expo-image'; // Thay đổi import tương ứng

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
  
interface ChatItemsProps {
  item: { profileUrl: string; username: string };
  router: any;
  noBorder: boolean;
}

const ChatItems: React.FC<ChatItemsProps> = ({ item, router, noBorder }) => {
  const openChatRoom = () => {
    router.push({ pathname: '/chatRoom', params: item });
  };

  return (
    <TouchableOpacity onPress={openChatRoom} style={[styles.container, noBorder ? null : styles.borderBottom]}>
      <Image
        style={{ height: 50, width: 50, borderRadius: 100 }}
        source={{ uri: item?.profileUrl }}
        placeholder={blurhash} // Sửa lại tên props
        transition={500} // Sửa lại tên props
      />
      <View style={{ flex: 1, gap: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item?.username}</Text>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>Time</Text>
        </View>
        <Text style={{ fontSize: 16, fontWeight: '500' }}>Last Message</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    gap: 3,
    marginBottom: 16,
    paddingBottom: 8,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB', // hoặc bất kỳ màu nào bạn muốn
  },
});

export default ChatItems;



// import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native'
// import React from 'react'
// import { Image } from 'expo-image'

// const blurhash =
//   '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
  
// export default function ChatItems({item,router,noBorder}) {
//     const OpenChatRoom = ()=>{
//         router.push({pathname: '/chatRoom', params: item});
//     }
//   return (
//     <TouchableOpacity onPress={OpenChatRoom} style={[styles.container,noBorder ? null : styles.borderBottom]}> 
//         {/* <Image 
//             source={require('../assets/images/avatarSetting.png')}
//             style={{height:50,width:50,borderRadius:9999}}
//         /> */}
//         <Image
//             style={{height:50,width:50,borderRadius:100}}
//             source={{uri: item?.profileUrl}}
//             placeholder={blurhash}
//             transition={500}
//         />
//         {/* name and last message */}
//         <View style={{flex:1,gap:1}}>
//             <View style={{flexDirection:'row',justifyContent:'space-between'}}>
//                 <Text style={{fontSize:18,fontWeight:'bold'}}>{item?.username}</Text>
//                 <Text style={{fontSize:16,fontWeight:'500'}}>Time</Text>
//             </View>
//             <Text style={{fontSize:16,fontWeight:'500'}}>Last Message</Text>
//         </View>
//     </TouchableOpacity>
//   )
// }
// const styles = StyleSheet.create({
//     container:{
//         flexDirection:'row',
//         justifyContent:'center',
//         alignItems:'center',
//         marginHorizontal:16,
//         gap:3,
//         marginBottom:16,
//         paddingBottom:8
//     },
//     borderBottom:{
//         borderBottomWidth: 1,
//         borderBottomColor: '#E5E7EB', // hoặc bất kỳ màu nào bạn muốn
//     }
// })