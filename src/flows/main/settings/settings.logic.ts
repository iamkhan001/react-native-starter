import {useCallback, useContext, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import RNRestart from 'react-native-restart'; // add this import
import {I18nManager} from 'react-native';
import {persistor} from '@redux/store'; // Adjust this import to match your setup
import {useAppDispatch, useAppSelector} from '@redux/hooks';
import {setLanguage} from '@redux/slices/languageSlice';
import {useTheme} from '@context/theme.provider';
import {BaseLayoutContext} from '@context/layout/base.layout.context';
import {useFocusEffect} from '@react-navigation/native';
import DesignSystem from '@design/index';
import {logout} from '@redux/slices/authSlice';
import createStyles from './settings.styles';
import {ThemeType} from './settings.types';

export const useSettingsLogic = () => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const [styles, setStyles] = useState(() => createStyles(theme.colors));
  const {updateHeader} = useContext(BaseLayoutContext);

  const languages = [
    {label: t('english'), value: 'en'},
    {label: t('arabic'), value: 'ar'},
  ];

  const themes = [
    {label: t('lightMode'), value: 'light'} as ThemeType,
    {label: t('darkMode'), value: 'dark'} as ThemeType,
  ];

  const lang = useAppSelector(state => state.language.lang);

  useEffect(() => {
    if (lang) {
      setSelectedLanguage(lang);
    }
  }, [lang]);

  const [selectedLanguage, setSelectedLanguage] = useState(lang);
  const [selectedTheme, setSelectedTheme] = useState(theme.theme);

  useFocusEffect(
    useCallback(() => {
      updateHeader({
        title: t('settings'),
        leftIcon: DesignSystem.Icons.home,
        rightIcon: DesignSystem.Icons.logout,
        onLeftPress: () => console.log('Menu opened'),
        onRightPress: () => {
          dispatch(logout());
        },
      });
    }, [t, updateHeader, dispatch]),
  );

  useEffect(() => {
    if (selectedLanguage === lang) {return;}

    const shouldBeRTL = selectedLanguage === 'ar';
    const isCurrentlyRTL = I18nManager.isRTL;

    dispatch(setLanguage(selectedLanguage));

    if (shouldBeRTL !== isCurrentlyRTL) {
      setTimeout(() => {
        I18nManager.forceRTL(shouldBeRTL);
        I18nManager.allowRTL(shouldBeRTL);
        // Wait for Redux persist to flush before restarting
        setTimeout(() => {
          persistor.flush().then(() => {
            RNRestart.Restart();
          });
        }, 300); // Add slight delay to ensure direction change is scheduled
      }, 50);
    }
  }, [selectedLanguage]);

  useEffect(() => {
    theme.setTheme(selectedTheme === 'dark' ? 'dark' : 'light');
  }, [selectedTheme, theme]);

  useEffect(() => {
    setStyles(createStyles(theme.colors));
  }, [theme.colors]);

  return {
    t,
    styles,
    languages,
    themes,
    selectedLanguage,
    setSelectedLanguage,
    selectedTheme,
    setSelectedTheme,
  };
};
