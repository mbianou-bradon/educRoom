import {Image, Text, View} from 'react-native';
import styles from './courseCard.styles';

export default function CourseCard() {
  const desc =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, corporis velit! Quo, modi vel ab soluta expedita minima, magnam distinctio atque quaerat nobis, consequatur exercitationem laboriosam dolorem labore sit optio.';
  return (
    <View style={styles.container}>
      <View style={styles.courseRatingStatus}>
        {/* Course status */}
        <View style={styles.courseStatus}>
          <Text style={styles.statusText}>Open</Text>
        </View>
      </View>
      {/* Course Cover Image Container */}
      <View style={styles.courseCoverImageContainer}>
        {/* <Image source={require('')} /> */}
      </View>
      {/* Course Details container */}
      <View style={styles.courseInfoContainer}>
        <Text style={styles.courseTitle}>Project Management Essential</Text>
        <View style={styles.courseInfoSubContainer}>
          <Text style={styles.courseSchedule}>
            Schedule: Tuesdays and Thursdays, 6:00 PM - 8:0PM
          </Text>
          <Text style={styles.courseTotalDuration}>Duration: 8 weeks</Text>
        </View>
        <View style={styles.courseDescriptionContainer}>
          <Text style={styles.courseDescription}>{desc}</Text>
        </View>
      </View>
      {/* Instructor info and cost */}
      <View style={styles.courseInstructorContainer}>
        <Text style={styles.courseInstructor}>Instructor: Joe Doe</Text>
      </View>
    </View>
  );
}
