import React, {useState} from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import styles from './myCourses.screen.styles';
import {LoadingScreen, MyCourseCard} from '../../components';
import {CourseModel} from '../../utils/types/courseModel.type';

export default function MyCourses() {
  /** state management */
  const [search, setSearch] = useState<string>('');

  /** Data management state */
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [myCourses, setMyCourses] = useState<CourseModel[]>();

  const handleSearch = () => {
    setSearch(search);
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen text="Getting all your courses, Please wait" />
      ) : (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>My Courses</Text>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              {/* Search Field */}
              <View style={styles.searchHeaderContainer}>
                <TextInput
                  placeholder="Search for the course your are looking for..."
                  style={styles.searchText}
                  autoFocus={true}
                  placeholderTextColor={
                    styles.searchTextPlaceholderTextColor.color
                  }
                  onChangeText={value => setSearch(value)}
                  onSubmitEditing={handleSearch}
                />
              </View>
            </View>

            {/* courses enrolled by student */}
            <View style={styles.section}>
              <MyCourseCard />
              <MyCourseCard />
              <MyCourseCard />
              <MyCourseCard />
              <MyCourseCard />
              <MyCourseCard />
            </View>
          </ScrollView>
        </View>
      )}
    </>
  );
}
