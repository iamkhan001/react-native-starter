import { useEffect } from 'react';
import { Text, View } from 'react-native';
import ENV from '../../config/env';
import { useTranslation } from 'react-i18next';


const HomeScreen = () => {

  const { t } = useTranslation();

  useEffect(() => {
    console.log('HomeScreen mounted', ENV.baseUrl);
    return () => {
      console.log('HomeScreen unmounted');
    };
  }
  , []);

  return (
    <View>
      <Text>{t('welcome')} {ENV.environment}</Text>
    </View>
  );
};

export default HomeScreen;

