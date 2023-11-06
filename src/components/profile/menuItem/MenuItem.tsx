import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './menuItem.styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NativeStackParams} from '../../../navigations/NativeNavigation/NativeNavigation';

interface Props {
  itemText: string;
  route: any;
}

export default function MenuItem({itemText, route}: Props) {
  /** State Management */
  const navigation =
    useNavigation<NativeStackNavigationProp<NativeStackParams>>();

  return (
    <TouchableOpacity style={styles.container} onPress={route}>
      <Text style={styles.menuItemText}>{itemText}</Text>
    </TouchableOpacity>
  );
}
