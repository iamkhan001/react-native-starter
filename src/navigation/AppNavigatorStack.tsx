import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootState} from '@redux/store';

import LoginScreen from '@flows/auth/login/login.ui';
import RegisterScreen from '@flows/auth/register/register.ui';
import DashboardScreen from '@flows/main/dashboard/dashboard.ui';
import ButtonExampleScreen from '@flows/examples/buttons/button.example.ui';
import TextExampleScreen from '@flows/examples/text/text.example.ui';

const Stack = createNativeStackNavigator();

const renderProtectedScreen = (
  name: string,
  component: React.ComponentType<any>,
  isAuthenticated: boolean,
): React.ReactElement => (
  <Stack.Screen
    key={name}
    name={name}
    component={component}
    options={{
      animationTypeForReplace: isAuthenticated ? 'push' : 'pop',
    }}
    listeners={({navigation}) => ({
      focus: () => {
        if (!isAuthenticated) {
          navigation.replace('Login');
        }
      },
    })}
  />
);

const AppNavigatorStack: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* Public screens */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />

        {/* Protected screens */}
        {renderProtectedScreen('Dashboard', DashboardScreen, isAuthenticated)}
        {renderProtectedScreen('ButtonExample', ButtonExampleScreen, isAuthenticated)}
        {renderProtectedScreen('TextExample', TextExampleScreen, isAuthenticated)}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigatorStack;
