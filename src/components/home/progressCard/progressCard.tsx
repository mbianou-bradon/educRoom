import React from 'react';
import {Text, View} from 'react-native';
import styles from './progressCard.component.styles';

export default function ProgressCard() {
  return (
    <View style={styles.container}>
      <View style={styles.courseInfoContainer}>
        <Text style={styles.courseTitle}>Complete Design Sprint Course</Text>
        <View style={styles.courseInfoSubContainer}>
          {/* <Text style={styles.numberOfModuleText}>06 Modules</Text> */}
          <Text style={styles.courseTotalDuration}>Duration: 8 weeks</Text>
        </View>
      </View>
      {/* Course Progress */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>90%</Text>
      </View>
    </View>
  );
}
