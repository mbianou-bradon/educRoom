import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {CourseDetailPage, MyCourses, Splash} from '../../screens';
import MyTabs, {
  TabStackParams,
} from '../bottomTabNavigation/BottomTabNavigation';

export type NativeStackParams = {
  Splash: undefined;
  Tab: TabStackParams;
  MyCourses: undefined;
  CourseDetail: undefined;
};

export default function NativeNavigation() {
  const NativeStack = createStackNavigator<NativeStackParams>();

  return (
    <NativeStack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <NativeStack.Screen name="Splash" component={Splash} />
      <NativeStack.Screen name="Tab" component={MyTabs} />
      <NativeStack.Screen name="MyCourses" component={MyCourses} />
      <NativeStack.Screen name="CourseDetail" component={CourseDetailPage} />
    </NativeStack.Navigator>
  );
}
