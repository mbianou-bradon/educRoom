import React, {useState} from 'react';
import {Pressable, ScrollView, Text, TextInput, View} from 'react-native';
import {
  CourseCard,
  Header,
  LoadingScreen,
  ProgressCard,
} from '../../components';
import styles from './home.screen.styles';
import {CourseModel} from '../../utils/types/courseModel.type';

export default function HomeScreen() {
  /** State management */
  const [search, setSearch] = useState<string>('');
  const [featuredCourses, setFeaturedCourses] = useState<CourseModel[]>();

  /**Display States */
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = () => {
    setSearch(search);
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen text="Getting Data Please wait" />
      ) : (
        <ScrollView style={styles.container}>
          <Header />
          <View style={styles.searchHeaderMainContainer}>
            {/* Search Field */}
            <View style={styles.searchHeaderContainer}>
              <TextInput
                placeholder="Search for the course your are looking for..."
                style={styles.searchText}
                placeholderTextColor={
                  styles.searchTextPlaceholderTextColor.color
                }
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
              {featuredCourses &&
                featuredCourses?.length > 0 &&
                featuredCourses?.map((featuredCourse, index) => {
                  return <CourseCard key={index} props={featuredCourse} />;
                })}
            </ScrollView>
          </View>
        </ScrollView>
      )}
    </>
  );
}
