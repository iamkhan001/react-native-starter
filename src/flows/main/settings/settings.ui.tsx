import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  I18nManager,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {setLanguage} from '../../../redux/slices/languageSlice';
import {useTheme} from '../../../context/theme.provider';
import createStyles from './settings.styles';

const SettingScreen = () => {
  // find a way to use globally
  // layout component

  const {t} = useTranslation();

  const dispatch = useAppDispatch();
  const lang = useAppSelector(state => state.language.lang);

  const theme = useTheme();

  const [styles, setStyles] = useState(() => createStyles(theme.colors));

  const languages = [
    {label: t('english'), value: 'en'},
    {label: t('arabic'), value: 'ar'},
  ];

  const themes: {label: string; value: 'light' | 'dark'}[] = [
    {label: t('lightMode'), value: 'light'},
    {label: t('darkMode'), value: 'dark'},
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(lang);
  const [selectedTheme, setSelectedTheme] = useState(theme.theme);

  useEffect(() => {
    console.log('selectedTheme', selectedTheme);
  }, []);

  useEffect(() => {
    dispatch(setLanguage(selectedLanguage));
    if (selectedLanguage === 'ar') {
      I18nManager.forceRTL(true);
      I18nManager.allowRTL(true);
    } else {
      I18nManager.forceRTL(false);
      I18nManager.allowRTL(false);
    }
  }
  , [dispatch, selectedLanguage]);

  useEffect(() => {
    const newTheme = selectedTheme === 'dark' ? 'dark' : 'light';
    console.log('newTheme', newTheme, selectedTheme, theme.colors);
    theme.setTheme(newTheme);
  }, [selectedTheme, theme]);

  useEffect(() => {
    setStyles(createStyles(theme.colors));
  }, [theme.colors]);

  return (
    <View style={styles.container}>
      <View style={styles.settings}>
        <Text style={styles.title}> {t('changeLanguage')}</Text>
        <FlatList
          data={languages}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                setSelectedLanguage(item.value);
              }}
              style={styles.language}>
              <Text
                style={
                  selectedLanguage === item.value
                    ? styles.selectedText
                    : styles.text
                }>
                {item.label}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.settings}>
        <Text style={styles.title}> {t('changeTheme')}</Text>
        <FlatList
          data={themes}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                setSelectedTheme(item.value);
              }}
              style={styles.language}>
              <Text
                style={
                  selectedLanguage === item.value
                    ? styles.selectedText
                    : styles.text
                }>
                {item.label}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default SettingScreen;
