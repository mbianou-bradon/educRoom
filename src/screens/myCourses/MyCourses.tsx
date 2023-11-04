import React from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import styles from './myCourses.screen.styles';
import {MyCourseCard} from '../../components';

export default function MyCourses() {
  /** state management */
  const [search, setSearch] = React.useState<string>('');

  const handleSearch = () => {
    setSearch(search);
  };

  return (
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
              placeholderTextColor={styles.searchTextPlaceholderTextColor.color}
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
  );
}