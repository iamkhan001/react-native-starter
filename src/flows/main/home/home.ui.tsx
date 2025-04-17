import { Button, Text, View } from 'react-native';
import ENV from '../../../config/env';
import { useHomeLogic } from './home.logic';

const HomeScreen = () => {

  const {t, styles, user, getScreenInfo, goToButtonExample, getToTextExample } = useHomeLogic();

  return (
      <View style={styles.container}>
        <Text style={styles.text}>{t('welcome')} {user?.firstName ?? 'Guest'} - {ENV.environment}</Text>
        <Text style={styles.text}>{t('screenInfo')}</Text>
        <Text style={styles.text}>{getScreenInfo?.()?.width} x {getScreenInfo?.()?.height}</Text>
        <Text style={styles.text}>{t('platform')}</Text>
        <Text style={styles.text}>{getScreenInfo?.()?.platform}</Text>
        <View style={styles.button}>
          <Button  title={t('buttonExample')} onPress={goToButtonExample} />
        </View>
        <View style={styles.button}>
          <Button title={t('textExample')} onPress={getToTextExample} />
        </View>
      </View>
  );
};

export default HomeScreen;
