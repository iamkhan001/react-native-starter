import React from 'react';
import {View, Text} from 'react-native';
import { useRegisterLogic } from './register.logic';

const RegisterScreen = () => {

  const {t} = useRegisterLogic();

  return (
      <View>
        <Text>{t('register')}</Text>
      </View>
  );
};

export default RegisterScreen;
