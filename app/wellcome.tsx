// import { View, Text,StyleSheet,Image, Touchable, TouchableOpacity,SafeAreaView } from 'react-native'
// import React from 'react'
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import { LinearGradient } from 'expo-linear-gradient';
// import Animated,{FadeIn,FadeInDown,FadeOut} from 'react-native-reanimated';
// import { useRouter } from 'expo-router';

// const Wellcome = () => {
//     const router = useRouter();
//   return (
//     <SafeAreaView style={styles.container}> 
//         <Image style={styles.logo} source={require('../assets/images/Logo.png')} />
//         <Text style={styles.wellcomeText}>Wellcome</Text>
//         <Image style={styles.image} source={require('../assets/images/wellcome.png')}/>
//         <LinearGradient style={styles.linearGradient}
//             colors={['transparent',]}
//             start={{x:0.5,y:0}}
//             end={{x:0.5,y:0.8}}
//         >
//             <Animated.View style={{paddingBottom:30}} entering={FadeInDown.delay(100).springify()} >
//                 <Text style={styles.text}>
//                     Nurturing knowledge, Sustainable Education
//                 </Text>
//                 <Text style={styles.text}>
//                     for the future
//                 </Text>
//             </Animated.View>
//             <Animated.View entering={FadeInDown.delay(200).springify()}>
//                 <TouchableOpacity
//                     onPress={()=> router.push('/Login')}
//                     style={styles.button}
//                 >
//                     <Text style={styles.buttonText}>
//                         Get Started
//                     </Text>
//                 </TouchableOpacity>
//             </Animated.View>
//         </LinearGradient>
//     </SafeAreaView>
//   )
// }
// const styles = StyleSheet.create({
//     container:{
//         backgroundColor:"#FFF5EE",
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center',
//     },
//     logo:{
//         width:150,
//         height:150,
//         position:'relative',
//         top:-20
//     },
//     image:{
//         height:320,
//         width:320,
//         resizeMode: 'contain'
//     },
//     linearGradient:{
//         width:wp(100),
//         height:hp(30),
//         display:'flex',
//         justifyContent:'center',
//         alignItems:'center',
//         paddingTop:30,
//     },
//     text:{
//         fontSize:18,
//         color:'black',
//         textAlign:'center',
//     },
//     wellcomeText:{  
//         fontSize:hp(4),
//         fontWeight:'bold',
//         paddingBottom:10,

//     },
//     button:{
//         height:hp(6),
//         width:wp(50),
//         backgroundColor:'rgba(252, 219, 0, 1)',
//         display:'flex',
//         alignItems:'center',
//         justifyContent:'center',
//         marginHorizontal:'auto',
//         borderRadius:9999,
//         borderWidth:2,
//         borderColor:'#D1D5DB',
//     },
//     buttonText:{
//         fontSize:hp(2),
//         color:'white',
//         fontWeight:'bold',
//         letterSpacing: 2,
//     }

// })
// export default Wellcome