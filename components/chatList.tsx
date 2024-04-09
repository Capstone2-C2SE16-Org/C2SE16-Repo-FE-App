import React from 'react';
import { View, FlatList } from 'react-native';
import ChatItems from './chatItems';
import { useRouter } from 'expo-router';

interface ChatListProps {
  users: any[]; // Chỉ định kiểu cho users
}

const ChatList: React.FC<ChatListProps> = ({ users }) => {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={users}
        contentContainerStyle={{ flex: 1, paddingVertical: 25 }}
        keyExtractor={(item) => Math.random().toString()} // Chỉ định kiểu cho keyExtractor
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <ChatItems
            noBorder={index + 1 === users.length} // Sửa điều kiện so sánh
            router={router}
            item={item}
            index={index}
          />
        )}
      />
    </View>
  );
};

export default ChatList;




// import { View, Text, FlatList } from 'react-native'
// import React from 'react'
// import ChatItems from './chatItems'
// import { useRouter } from 'expo-router'

// export default function ChatList({users}) {
//     const router = useRouter();
//   return (
//     <View style={{flex:1}}>
//       <FlatList
//         data={users}
//         contentContainerStyle={{flex:1,paddingVertical:25}}
//         keyExtractor={item=> Math.random()}
//         showsVerticalScrollIndicator={false}
//         renderItem={({item,index}) => <ChatItems
//             noBorder={index+1 == users.length}
//             router={router}
//             item={item}
//             index={index}
//         />}
//       />
//     </View>
//   )
// }