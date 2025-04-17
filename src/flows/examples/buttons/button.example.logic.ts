import {useContext, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import DesignSystem from '../../../design';
import {BaseLayoutContext} from '../../../context/layout/base.layout.context';
import { useNavigation } from '@react-navigation/native';

export const useButtonExampleLogic = () => {
  const {t} = useTranslation();
  const {updateHeader} = useContext(BaseLayoutContext);
  const navigation = useNavigation();

  useEffect(() => {
    updateHeader({
      title: t('buttonExample'),
      leftIcon: DesignSystem.Icons.leftArrow,
      rightIcon: null,
      onLeftPress: () => navigation.goBack(),
    });

    return () => {
      console.log('Screen unmounted');
    };
  }, []);

  return {
    t,
  };
};
