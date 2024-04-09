import { View, Text, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import React from 'react'
import { BounceIn } from 'react-native-reanimated';

const ios = Platform.OS == 'ios';
export default function CustomKeyBoardView({children}) {
  return (
    <KeyboardAvoidingView
        behavior={ios? 'padding' : 'height'}
        style={{flex:1}}
    >
        <ScrollView
            style={{flex:1}}
            bounces = {false}
            showsVerticalScrollIndicator = {false}
        >
            {
                children
            }
        </ScrollView>
    </KeyboardAvoidingView>
  )
}