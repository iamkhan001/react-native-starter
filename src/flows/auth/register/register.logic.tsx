import {useContext, useEffect} from 'react';

import {BaseLayoutContext} from '../../../context/layout/base.layout.context';
import DesignSystem from '../../../design';
import { useTranslation } from 'react-i18next';

const useRegisterLogic = () => {
  const {t} = useTranslation();
  const {updateHeader, showLoading, hideLoading} =
    useContext(BaseLayoutContext);

  useEffect(() => {
    showLoading?.();
    updateHeader({
      title: 'Register',
      leftIcon: DesignSystem.Icons.leftArrow,
      onLeftPress: () => {
        console.log('Left icon pressed');
      },
    });
    setTimeout(() => {
      hideLoading?.();
    }, 2000);
  }, []);

  return {
    t,
  };
};

export { useRegisterLogic };
