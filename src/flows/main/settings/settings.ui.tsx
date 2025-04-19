import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useSettingsLogic} from './settings.logic';

const SettingScreen = () => {
  const { styles, t, languages, themes, selectedTheme, selectedLanguage, setSelectedLanguage, setSelectedTheme } = useSettingsLogic();

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
        <Text style={styles.title}>{t('changeTheme')}</Text>
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
                  selectedTheme === item.value
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
