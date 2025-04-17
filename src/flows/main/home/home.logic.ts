import {useContext, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import DesignSystem from '../../../design';
import {BaseLayoutContext} from '../../../context/layout/base.layout.context';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import { logout } from '../../../redux/slices/authSlice';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/navigation.types';

export const useHomeLogic = () => {

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {t} = useTranslation();
  const {updateHeader, getScreenInfo} = useContext(BaseLayoutContext);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    updateHeader({
      title: t('Home'),
      leftIcon: DesignSystem.Icons.home,
      rightIcon: DesignSystem.Icons.logout,
      onLeftPress: () => console.log('Menu opened'),
      onRightPress: () => { dispatch(logout());},
    });

    return () => {
      console.log('HomeScreen unmounted');
    };
  }, []);

  const goToButtonExample = () => {
    navigation.navigate('ButtonExample');
  };

  const getToTextExample = () => {
    navigation.navigate('TextExample');
  };

  return {
    t,
    user,
    getScreenInfo,
    goToButtonExample,
    getToTextExample,
  };
};
