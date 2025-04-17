import { Button, Text, View } from 'react-native';
import ENV from '../../../config/env';
import { useHomeLogic } from './home.logic';

const HomeScreen = () => {

  const {t, user, getScreenInfo, goToButtonExample, getToTextExample } = useHomeLogic();

  return (
      <View>
        <Text>{t('welcome')} {user?.firstName ?? 'Guest'} - {ENV.environment}</Text>
        <Text>{t('screenInfo')}</Text>
        <Text>{getScreenInfo?.()?.width} x {getScreenInfo?.()?.height}</Text>
        <Text>{t('platform')}</Text>
        <Text>{getScreenInfo?.()?.platform}</Text>
        <Button title={t('buttonExample')} onPress={goToButtonExample} />
        <Button title={t('textExample')} onPress={getToTextExample} />
      </View>
  );
};

export default HomeScreen;
