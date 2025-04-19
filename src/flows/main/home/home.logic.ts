import {useContext, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import DesignSystem from '@design/index';
import {BaseLayoutContext} from '@context/layout/base.layout.context';
import {RootState} from '@redux/store';
import {logout} from '@redux/slices/authSlice';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '@navigation/navigation.types';
import { useTheme } from '@context/theme.provider';
import { createStyles } from './home.styles';

export const useHomeLogic = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {t} = useTranslation();
  const {updateHeader, getScreenInfo} = useContext(BaseLayoutContext);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const theme = useTheme();
  const styles = createStyles(theme.colors);

  useFocusEffect(
    useCallback(() => {
      updateHeader({
        title: t('home'),
        leftIcon: DesignSystem.Icons.home,
        rightIcon: DesignSystem.Icons.logout,
        onLeftPress: () => console.log('Menu opened'),
        onRightPress: () => {
          dispatch(logout());
          navigation.navigate('Login');
        },
      });
    }, [t, updateHeader, dispatch]),
  );

  const goToButtonExample = () => {
    navigation.navigate('ButtonExample');
  };

  const getToTextExample = () => {
    navigation.navigate('TextExample');
  };

  return {
    t,
    styles,
    user,
    getScreenInfo,
    goToButtonExample,
    getToTextExample,
  };
};
