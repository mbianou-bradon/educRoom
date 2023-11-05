import React, {useState} from 'react';
import {Pressable, ScrollView, Text, TextInput, View} from 'react-native';
import {CourseCard, Header, ProgressCard} from '../../components';
import styles from './home.screen.styles';

export default function HomeScreen() {
  /** State management */
  const [search, setSearch] = useState<string>('');

  const handleSearch = () => {
    setSearch(search);
  };

  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.searchHeaderMainContainer}>
        {/* Search Field */}
        <View style={styles.searchHeaderContainer}>
          <TextInput
            placeholder="Search for the course your are looking for..."
            style={styles.searchText}
            placeholderTextColor={styles.searchTextPlaceholderTextColor.color}
            onChangeText={value => setSearch(value)}
            onSubmitEditing={handleSearch}
          />
        </View>
      </View>
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
    </ScrollView>
  );
}
