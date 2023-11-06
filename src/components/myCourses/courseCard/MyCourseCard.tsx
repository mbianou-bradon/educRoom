import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './myCourseCard.styles';
import {Status} from '../..';

export default function MyCourseCard() {
  const title = 'React Native | All basics step-by-step';
  const status = 'in progress';

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.coverImageContainer}>
        {/* <Image source={require("")} /> */}
      </View>
      <View style={styles.courseInfoContainer}>
        <Text style={styles.courseTitle}>
          {title.length < 40 ? title : title.substring(0, 40) + '...'}
        </Text>
        <Text style={styles.courseTotalDuration}>8 weeks</Text>
      </View>
      <Status text={status} />
    </TouchableOpacity>
  );
}
