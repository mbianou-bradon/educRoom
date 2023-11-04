import React from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {CourseCard, Header, ProgressCard} from '../../components';
import styles from './home.screen.styles';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      {/* Ongoing courses */}
      <View style={styles.section}>
        <View style={styles.ongoingCourseContainerHeader}>
          <Text style={styles.ContinueLearningText}>Continue Learning</Text>
          <Pressable>
            <Text style={styles.seeAllText}>See all</Text>
          </Pressable>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.ongoingCourseList}
          horizontal>
          <ProgressCard />
          <ProgressCard />
          <ProgressCard />
          <ProgressCard />
          <ProgressCard />
          <ProgressCard />
        </ScrollView>
      </View>
      <View style={styles.section}>
        <View style={styles.ongoingCourseContainerHeader}>
          <Text style={styles.ContinueLearningText}>Featured Courses</Text>
          <Pressable>
            <Text style={styles.seeAllText}>See all</Text>
          </Pressable>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.ongoingCourseList}
          horizontal>
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </ScrollView>
      </View>
    </View>
  );
}
