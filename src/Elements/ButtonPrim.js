import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native'
import { gs } from '../inc/Global';

export const ButtonPrim = (props) => {

const navigator = useNavigation();
const screenName = props.navigateTo;

    return (
        <TouchableOpacity
            onPress={() => {navigator.navigate(screenName)}}
            style={[gs.button, gs.buttonPrimary]}>
            <Text 
            style={[{fontSize: 18, fontWeight: "bold", textAlign: "center"}, gs.textColor1]}>
            {props.title}</Text>
        </TouchableOpacity>
    );
}