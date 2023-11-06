import React from 'react';
import {View, Text} from 'react-native';
import styles from './header.styles';
import {store} from '../../../redux/store/store';
import Button from '../../general/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {NativeStackParams} from '../../../navigations/NativeNavigation/NativeNavigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function Header() {
  /** State Management */
  const isAuth = store.getState().userReducer.isAuth;

  const navigation =
    useNavigation<NativeStackNavigationProp<NativeStackParams>>();
  return (
    <View style={styles.container}>
      {isAuth ? (
        <View>
          <Text style={styles.welcomeText}>Welcome back</Text>
          <Text style={styles.useName}>Mbianou Bradon</Text>
        </View>
      ) : (
        <View>
          <Button
            btnText="Login"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      )}
    </View>
  );
}
