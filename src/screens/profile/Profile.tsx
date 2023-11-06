import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {MenuItem} from '../../components';
import styles from './profile.screen.styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NativeStackParams} from '../../navigations/NativeNavigation/NativeNavigation';

export default function Profile() {
  /** State Management */
  const navigation =
    useNavigation<NativeStackNavigationProp<NativeStackParams>>();
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.profileImageContainer}>
          {/* <Image source={require('')} style={styles.profileImage}/> */}
        </View>
        <Text style={styles.userName}>Mbianou Bradon</Text>
      </View>

      <View style={styles.menuItemsContainer}>
        <MenuItem itemText={'Edit Profile'} route={''} />
        <MenuItem
          itemText={'My Courses'}
          route={() => navigation.push('MyCourses')}
        />
        <MenuItem itemText={'Certificates'} route={''} />
        <MenuItem itemText={'Theme'} route={''} />
        <MenuItem itemText={'Settings'} route={''} />
        <Pressable style={styles.logoutContainer}>
          <Text style={styles.logout}>Log out</Text>
        </Pressable>
      </View>
    </View>
  );
}
