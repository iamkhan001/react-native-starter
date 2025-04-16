import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import {BaseLayoutContext} from '../../../context/layout/base.layout.context';
import DesignSystem from '../../../design';

const RegisterScreen = () => {
  const {updateHeader, showLoading, hideLoading, getScreenInfo} = useContext(BaseLayoutContext);

  useEffect(() => {
    showLoading?.();
    console.log('Screen Info:', getScreenInfo?.());
    updateHeader({
      title: 'Register',
      leftIcon: DesignSystem.Icons.home,
      rightIcon: DesignSystem.Icons.settings,
      onLeftPress: () => {
        console.log('Left icon pressed');
      },
      onRightPress: () => {
        console.log('Right icon pressed');
      },
    });
    setTimeout(() => {
      hideLoading?.();
    }
    , 2000);
  }, []);

  return (
      <View>
        <Text>Register</Text>
      </View>
  );
};

export default RegisterScreen;
