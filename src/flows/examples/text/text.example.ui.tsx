import { Text, View } from 'react-native';
import { useTextExampleLogic } from './text.example.logic';

const TextExampleScreen = () => {

  const {t, styles} = useTextExampleLogic();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('textExample')}</Text>
    </View>
  );
};

export default TextExampleScreen;
