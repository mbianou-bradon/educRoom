import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './menuItem.styles';

interface Props {
  itemText: string;
  route: string;
}

export default function MenuItem({itemText, route}: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.menuItemText}>{itemText}</Text>
    </TouchableOpacity>
  );
}
