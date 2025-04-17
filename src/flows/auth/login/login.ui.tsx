import React from 'react';
import {View, Button, Text} from 'react-native';
import { useLoginLogic } from './login.logic';

const LoginScreen = () => {

  const { t, handleLogin } = useLoginLogic();

  return (
    <View>
      <Text>{t('welcome')}</Text>
      <Button title={t('login')} onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
