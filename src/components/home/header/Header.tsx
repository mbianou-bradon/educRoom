import React from 'react';
import {View, Text} from 'react-native';
import styles from './header.styles';

export default function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.welcomeText}>Welcome back</Text>
        <Text style={styles.useName}>Mbianou Bradon</Text>
      </View>
    </View>
  );
}
