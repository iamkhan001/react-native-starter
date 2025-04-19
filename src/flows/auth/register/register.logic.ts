import {useCallback, useContext,} from 'react';
import { useTranslation } from 'react-i18next';
import {BaseLayoutContext} from '@context/layout/base.layout.context';
import DesignSystem from '@design/index';
import { useFocusEffect } from '@react-navigation/native';

const useRegisterLogic = () => {
  const {t} = useTranslation();
  const {updateHeader, showLoading, hideLoading} =
    useContext(BaseLayoutContext);

    useFocusEffect(
      useCallback(() => {
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
      }, [t, updateHeader]),
    );

  return {
    t,
  };
};

export { useRegisterLogic };
