import React from 'react';
import {View, Button, Text} from 'react-native';
import { useLoginLogic } from './login.logic';

const LoginScreen = () => {

  const { t, styles, handleLogin } = useLoginLogic();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('welcome')}</Text>
      <View style={styles.button}>
        <Button title={t('login')} onPress={handleLogin} />
      </View>
    </View>
  );
};

export default LoginScreen;
