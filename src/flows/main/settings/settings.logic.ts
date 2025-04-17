import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { I18nManager } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { setLanguage } from '../../../redux/slices/languageSlice';
import { useTheme } from '../../../context/theme.provider';
import createStyles from './settings.styles';
import { ThemeType } from './settings.types';

export const useSettingsLogic = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const lang = useAppSelector(state => state.language.lang);
  const theme = useTheme();
  const [styles, setStyles] = useState(() => createStyles(theme.colors));

  const languages = [
    { label: t('english'), value: 'en' },
    { label: t('arabic'), value: 'ar' },
  ];

  const themes = [
    { label: t('lightMode'), value: 'light' } as ThemeType,
    { label: t('darkMode'), value: 'dark' }  as ThemeType,
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(lang);
  const [selectedTheme, setSelectedTheme] = useState(theme.theme);

  useEffect(() => {
    dispatch(setLanguage(selectedLanguage));
    if (selectedLanguage === 'ar') {
      I18nManager.forceRTL(true);
      I18nManager.allowRTL(true);
    } else {
      I18nManager.forceRTL(false);
      I18nManager.allowRTL(false);
    }
  }, [dispatch, selectedLanguage]);

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
