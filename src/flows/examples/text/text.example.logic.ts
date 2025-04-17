
import {useContext, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import DesignSystem from '../../../design';
import {BaseLayoutContext} from '../../../context/layout/base.layout.context';
import { useNavigation } from '@react-navigation/native';

const useTextExampleLogic = () => {
  const {t} = useTranslation();
  const {updateHeader} = useContext(BaseLayoutContext);
  const navigation = useNavigation();

  useEffect(() => {
    updateHeader({
      title: t('textExample'),
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

export { useTextExampleLogic };
