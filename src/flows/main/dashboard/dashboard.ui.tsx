import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import HomeScreen from '../home/home.ui';
import SettingsScreen from '../settings/settings.ui';
import CustomTabBar from './components/CustomTabBar';
import DesignSystem from '../../../design';
import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();

const CustomTabBarWrapper = (props: BottomTabBarProps) => {
  return <CustomTabBar {...props} />;
};

const DashboardScreen = () => {

  const {t} = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={CustomTabBarWrapper}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: t('home'),
          tabBarIcon: DesignSystem.Icons.home,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: t('settings'),
          tabBarIcon: DesignSystem.Icons.settings,
        }}
      />
    </Tab.Navigator>
  );
};

export default DashboardScreen;
