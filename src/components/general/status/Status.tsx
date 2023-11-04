import React from 'react';
import {Text, View} from 'react-native';
import styles from './status.styles';

export default function Status() {
  return (
    <View style={styles.statusContainer}>
      <Text style={styles.statusText}>Open</Text>
    </View>
  );
}
