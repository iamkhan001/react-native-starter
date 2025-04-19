import {useCallback, useContext} from 'react';
import {useDispatch} from 'react-redux';
import { useTranslation } from 'react-i18next';
import {login} from '@redux/slices/authSlice';
import {BaseLayoutContext} from '@context/layout/base.layout.context';
import DesignSystem from '@design/index';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '@navigation/navigation.types';
import { useTheme } from '@context/theme.provider';
import { createStyles } from './login.styles';

const useLoginLogic = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  const {updateHeader, showLoading, hideLoading} =
    useContext(BaseLayoutContext);
  const {t} = useTranslation();

  const theme = useTheme();
  const styles = createStyles(theme.colors);

  useFocusEffect(
    useCallback(() => {
      showLoading?.();
      updateHeader({
        title: t('login'),
        leftIcon: DesignSystem.Icons.anbLogo,
        rightIcon: null,
        onLeftPress: () => {
          console.log('Left icon pressed');
        },
      });
      setTimeout(() => {
        hideLoading?.();
      }, 2000);
    }, [t, updateHeader, dispatch]),
  );

  const handleLogin = () => {
    dispatch(
      login({
        user: {
          id: 10,
          firstName: 'Imran',
          lastName: 'khan',
          email: 'fareya@example.com',
          groups: ['customer'],
        },
        accessToken: 'mocked-access-token-xyz123',
      }),
    );
    navigation.navigate('Dashboard');
  };

  return {
    t,
    styles,
    handleLogin,
  };
};

export { useLoginLogic };
