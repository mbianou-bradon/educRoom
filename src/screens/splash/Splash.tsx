import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {Logo} from '../../components';
import theme from '../../utils/theme/theme';
import styles from './splash.styles';

export default function Splash() {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={theme.COLOR.LIGHT_DARK} />
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
      </View>
    </SafeAreaView>
  );
}
