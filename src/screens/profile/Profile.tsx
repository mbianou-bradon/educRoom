import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {MenuItem} from '../../components';
import styles from './profile.screen.styles';

export default function Profile() {
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
        <MenuItem itemText={'My Courses'} route={''} />
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
