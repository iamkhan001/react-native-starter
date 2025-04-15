import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import HomeScreen from '../home/HomeScreen';
import SettingsScreen from '../settings/SettingScreen';
import CustomTabBar from './components/CustomTabBar';
import DesignSystem from '../../design';

const Tab = createBottomTabNavigator();

const CustomTabBarWrapper = (props: BottomTabBarProps) => {
  return <CustomTabBar {...props} />;
};

const DashboardScreen = () => {

  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={CustomTabBarWrapper}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: DesignSystem.Icons.home,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: DesignSystem.Icons.settings,
        }}
      />
    </Tab.Navigator>
  );
};

export default DashboardScreen;
