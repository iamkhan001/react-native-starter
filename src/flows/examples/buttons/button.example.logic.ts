import {useCallback, useContext} from 'react';
import {useTranslation} from 'react-i18next';
import DesignSystem from '@design/index';
import {BaseLayoutContext} from '@context/layout/base.layout.context';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useTheme } from '@context/theme.provider';
import { createStyles } from './button.example.styles';

export const useButtonExampleLogic = () => {
  const {t} = useTranslation();
  const {updateHeader} = useContext(BaseLayoutContext);
  const navigation = useNavigation();
  const theme = useTheme();
  const styles = createStyles(theme.colors);

  const onButtonPress = () => {
    console.log('onButtonPress');
  };

  useFocusEffect(
    useCallback(() => {
      updateHeader({
        title: t('buttonExample'),
        leftIcon: DesignSystem.Icons.leftArrow,
        rightIcon: null,
        onLeftPress: () => navigation.goBack(),
      });
    }, [t, updateHeader]));

  return {
    t,
    styles,
    onButtonPress,
  };
};
