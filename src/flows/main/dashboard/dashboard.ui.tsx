import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import HomeScreen from '../home/home.ui';
import SettingsScreen from '../settings/settings.ui';
import CustomTabBar from './components/CustomTabBar';
import DesignSystem from '../../../design';
import { useDashboardLogic } from './dashboard.logic';

const Tab = createBottomTabNavigator();

const CustomTabBarWrapper = (props: BottomTabBarProps) => {
  return (
      <CustomTabBar {...props} />
  );
};

const DashboardScreen = () => {

  const {theme, t} = useDashboardLogic();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={CustomTabBarWrapper}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: t('home'),
          tabBarIcon: DesignSystem.Icons.home,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.textSecondary,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: t('settings'),
          tabBarIcon: DesignSystem.Icons.settings,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.textSecondary,
        }}
      />
    </Tab.Navigator>
  );
};

export default DashboardScreen;
