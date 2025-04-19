
import {useCallback, useContext} from 'react';
import {useTranslation} from 'react-i18next';
import DesignSystem from '@design/index';
import {BaseLayoutContext} from '@context/layout/base.layout.context';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useTheme } from '@context/theme.provider';
import { createStyles } from './login.styles';

const useTextExampleLogic = () => {
  const {t} = useTranslation();
  const {updateHeader} = useContext(BaseLayoutContext);
  const navigation = useNavigation();
  const theme = useTheme();
  const styles = createStyles(theme.colors);

  useFocusEffect(
    useCallback(() => {
      updateHeader({
        title: t('textExample'),
        leftIcon: DesignSystem.Icons.leftArrow,
        rightIcon: null,
        onLeftPress: () => navigation.goBack(),
      });
    }, [t, updateHeader]));

  return {
    t,
    styles,
  };
};

export { useTextExampleLogic };
