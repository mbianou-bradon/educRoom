import React from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import styles from './button.styles';

interface Props {
  btnText: string;
  onPress?: any;
}

export default function Button({btnText, onPress}: Props) {
  return (
    <Pressable style={styles.callToActionInnerContainer}>
      <TouchableOpacity style={styles.enrollContainer} onPress={onPress}>
        <Text style={styles.enrollText}>{btnText}</Text>
      </TouchableOpacity>
    </Pressable>
  );
}
