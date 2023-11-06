import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {CourseDetailPage, MyCourses, Splash} from '../../screens';

export default function NativeNavigation() {
  const NativeStack = createStackNavigator();

  return (
    <NativeStack.Navigator>
      <NativeStack.Screen name="Splash" component={Splash} />
      <NativeStack.Screen name="My Courses" component={MyCourses} />
      <NativeStack.Screen name="Course Detail" component={CourseDetailPage} />
    </NativeStack.Navigator>
  );
}
