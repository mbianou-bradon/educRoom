import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './courseDetail.page.styles';
import {Accordion, Status} from '../../components';
import theme from '../../utils/theme/theme';

export default function CourseDetailPage() {
  return (
    <View style={{position: 'relative'}}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.courseCoverImage}>
          {/* <Image source={require("")} /> */}
        </View>

        {/* Course explicit details */}
        <View style={styles.courseDetailContainer}>
          <View style={styles.handleShape}></View>

          {/* Course title */}
          <View style={styles.courseTitleContainer}>
            <Text style={styles.courseTitle}>Project Management Essential</Text>
            <Status />
          </View>

          <View style={styles.courseInfoContainer}>
            <Text style={{color: theme.COLOR.LIGHT_GRAY}}>256 students</Text>
            <Text style={{color: theme.COLOR.LIGHT_GRAY}}>8 weeks</Text>
            <Text style={{color: theme.COLOR.LIGHT_GRAY}}>Online</Text>
          </View>

          <Text style={{color: theme.COLOR.LIGHT_GRAY}}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
            consequatur, quam fugit nobis, error expedita ut rem quo repellendus
            commodi praesentium accusamus a temporibus repudiandae! Minus ullam
            nobis incidunt. Repellat.
          </Text>

          <View style={styles.section}>
            <Text style={styles.subHeading}>Pre-requisites</Text>
            <View>
              <Text style={{color: theme.COLOR.LIGHT_GRAY}}>
                Basic Knowledge in JavaScript
              </Text>
              <Text style={{color: theme.COLOR.LIGHT_GRAY}}>
                Familiarity with React
              </Text>
            </View>
          </View>

          <View style={styles.syllabusContainer}>
            <Text style={styles.subHeading}>Syllabus</Text>
            <View style={styles.syllabusSubContainer}>
              <Accordion />
              <Accordion />
              <Accordion />
              <Accordion />
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.subHeading}>Instructor info</Text>
            <Text style={{color: theme.COLOR.LIGHT_GRAY}}>
              Instructor name: Joe Doe
            </Text>
          </View>
          <View style={{height: 130}}></View>
        </View>
      </ScrollView>
      <View style={styles.callToActionContainer}>
        <View style={styles.callToActionInnerContainer}>
          <TouchableOpacity style={styles.enrollContainer}>
            <Text style={styles.enrollText}>Enroll Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
