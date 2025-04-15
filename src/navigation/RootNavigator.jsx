import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashboardScreen from '../screens/dashboard/DashboardScreen';
import ButtonExampleScreen from '../screens/components/buttons/ButtonsExampleScreen';
import TextExampleScreen from '../screens/components/text/TextExampleScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
    initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="ButtonExample" component={ButtonExampleScreen} />
      <Stack.Screen name="TextExample" component={TextExampleScreen} />
    </Stack.Navigator>
  );
}
