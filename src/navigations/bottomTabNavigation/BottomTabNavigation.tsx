import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, Profile} from '../../screens';

export type TabStackParams = {
  Home: undefined;
  Profile: undefined;
};

export default function MyTabs() {
  const Tab = createBottomTabNavigator<TabStackParams>();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
