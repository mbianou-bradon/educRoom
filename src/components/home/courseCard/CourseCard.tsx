import {Image, Pressable, Text, View} from 'react-native';
import styles from './courseCard.styles';
import {type CourseModel} from '../../../utils/types/courseModel.type';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NativeStackParams} from '../../../navigations/NativeNavigation/NativeNavigation';

export default function CourseCard(props: {props: CourseModel}) {
  const desc =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, corporis velit! Quo, modi vel ab soluta expedita minima, magnam distinctio atque quaerat nobis, consequatur exercitationem laboriosam dolorem labore sit optio.';
  const navigation =
    useNavigation<NativeStackNavigationProp<NativeStackParams>>();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('CourseDetail')}>
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
        <Text style={styles.courseTitle}>Project Management Essential {} </Text>
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
    </Pressable>
  );
}
