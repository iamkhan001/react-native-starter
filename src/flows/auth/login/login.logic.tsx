import {useContext, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../../../redux/slices/authSlice';
import {BaseLayoutContext} from '../../../context/layout/base.layout.context';
import DesignSystem from '../../../design';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigation/navigation.types';
import { useTranslation } from 'react-i18next';

const useLoginLogic = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  const {updateHeader, showLoading, hideLoading} =
    useContext(BaseLayoutContext);
  const {t} = useTranslation();

  useEffect(() => {
    showLoading?.();
    updateHeader({
      title: 'Login',
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
    }, 2000);
  }, []);

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
    handleLogin,
  };
};

export { useLoginLogic };
