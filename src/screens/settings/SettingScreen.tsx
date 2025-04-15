import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, StyleSheet, FlatList, TouchableOpacity, I18nManager} from 'react-native';
import i18next from 'i18next';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setLanguage } from '../../redux/slices/languageSlice';

const SettingScreen = () => {

  const {t} = useTranslation();

  const dispatch = useAppDispatch();
  const lang = useAppSelector(state => state.language.lang);

  const languages = [
    {label: t('english'), value: 'en'},
    {label: t('arabic'), value: 'ar'},
  ];
  const [selectedLanguage, setSelectedLanguage] = useState(lang);

  useEffect(() => {
    dispatch(setLanguage(selectedLanguage));
    I18nManager.forceRTL(selectedLanguage === 'ar');
  }, [dispatch, selectedLanguage]);

  return (
    <View style={styles.lang}>
      <Text style={styles.sTitle1}> {t('welcome')}</Text>
      <Text style={styles.sTitle2}>{t('hello')} </Text>

      <FlatList
        data={languages}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              setSelectedLanguage(item.value);
            }}
            style={
              selectedLanguage === item.value
                ? styles.selectedLanguage
                : styles.language
            }>
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

      <View style={styles.btns}>
        <TouchableOpacity
          style={styles.buttonNegative}>
          <Text
            style={styles.textNegative}>
            {t('no')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            i18next.changeLanguage(selectedLanguage);
          }}
          style={styles.buttonPositive}>
          <Text
            style={styles.textPositive}>
            {t('yes')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lang: {
    width: 365,
    left: 20,
    backgroundColor: '#FFFFFF',
    top: 40,
    bottom: 466,
    borderWidth: 1,
    borderColor: '#E9EDF2',
    borderRadius: 16,
    borderStyle: 'solid',
  },
  sTitle1: {
    paddingTop: 34,
    fontFamily: 'Manrope',
    fontStyle: 'normal',

    paddingLeft: 30,
    fontSize: 14,
    color: '#A8B4BF',
  },
  sTitle2: {
    paddingTop: 20,
    paddingBottom: 20,
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    paddingLeft: 30,
    fontSize: 12,

    color: '#576573',
  },
  languageItem: {
    height: 50,

    top: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
  },
  texts: {
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    color: '#576573',

    fontSize: 14,
  },
  icon: {
    width: 24,
    height: 24,
  },
  btns: {
    flexDirection: 'row',

    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  language: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  selectedLanguage: {
    padding: 10,
    backgroundColor: '#eee',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 14,
    color: '#576573',
  },
  selectedText: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
  },
  buttonNegative: {
    width: 143,
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FF5757',
    borderStyle: 'solid',
  },
  textNegative: {
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    color: '#FF5757',
  },
  buttonPositive: {
    width: 150,
    height: 48,
    borderWidth: 0.5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2352D8',
  },
  textPositive: {
    color: '#F7F9FA',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
  },
});

export default SettingScreen;
