import { View, Text, KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React from 'react';

const ios = Platform.OS === 'ios';

export default function CustomKeyBoardView({ children, inChat }) {
    let kavConfig = {};
    let scrollViewConfig = {};
    if (inChat) {
        kavConfig = { keyboardVerticalOffset: 90 };
        scrollViewConfig = { contentContainerStyle: { flex: 1 } };
    }
    return (
        <KeyboardAvoidingView
            behavior={ios ? 'padding' : 'height'}
            style={{ flex: 1 }}
            {...kavConfig}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView
                    style={{ flex: 1 }}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    {...scrollViewConfig}
                >
                    {children}
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
