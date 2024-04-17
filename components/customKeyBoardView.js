import { View, Text, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import React from 'react'
import { BounceIn } from 'react-native-reanimated';

const ios = Platform.OS == 'ios';
export default function CustomKeyBoardView({children,inChat}) {
    let kavCongfig ={};
    let scrollViewConfig = {};
    if(inChat){
        kavCongfig={keyboardVerticalOffset: 90};
        scrollViewConfig = {contentContainerStyle: {flex:1}};
    }
  return (
    <KeyboardAvoidingView
        behavior={ios? 'padding' : 'height'}
        style={{flex:1}}
        {...kavCongfig}
    >
        <ScrollView
            style={{flex:1}}
            bounces = {false}
            showsVerticalScrollIndicator = {false}
            {...scrollViewConfig}
        >
            {
                children
            }
        </ScrollView>
    </KeyboardAvoidingView>
  )
}