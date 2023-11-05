import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './button.styles';

interface Props {
  btnText: string;
  onPress?: any;
}

export default function Button({btnText, onPress}: Props) {
  return (
    <View style={styles.callToActionInnerContainer}>
      <TouchableOpacity style={styles.enrollContainer}>
        <Text style={styles.enrollText}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
}
