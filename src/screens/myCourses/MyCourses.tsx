import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import styles from './myCourses.screen.styles';
import {LoadingScreen, MyCourseCard} from '../../components';
import {CourseModel} from '../../utils/types/courseModel.type';
import client from '../../utils/config/axios';
import {store} from '../../redux/store/store';
import handleError from '../../utils/functions/handleError';
import theme from '../../utils/theme/theme';

export default function MyCourses() {
  /** state management */
  const id = store.getState().userReducer.currentUser.id;
  const [search, setSearch] = useState<string>('');

  /** Data management state */
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [myCourses, setMyCourses] = useState<CourseModel[]>();

  const handleSearch = () => {
    setSearch(search);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 8000);
    client
      .get(`/mycourses?${id}`)
      .then(response => {
        const data = response.data;
        setMyCourses(data);
      })
      .catch(error => {
        handleError('Error', `${error.message}`);
      });
  }, []);

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
              {myCourses && myCourses?.length > 0 ? (
                myCourses?.map((course, index) => {
                  return <MyCourseCard key={index} />;
                })
              ) : (
                <Text style={{color: theme.COLOR.LIGHT_GRAY}}>
                  No course Found!
                </Text>
              )}
            </View>
          </ScrollView>
        </View>
      )}
    </>
  );
}
