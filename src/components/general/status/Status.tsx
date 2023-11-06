import React from 'react';
import {Text, View} from 'react-native';
import styles from './status.styles';

type Props = {
  text: string;
};

export default function Status({text}: Props) {
  return (
    <View style={styles.statusContainer}>
      <Text style={styles.statusText}>{text}</Text>
    </View>
  );
}
