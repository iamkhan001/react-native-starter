import { Text, View } from 'react-native';
import { useTextExampleLogic } from './text.example.logic';

const TextExampleScreen = () => {

  const {t} = useTextExampleLogic();

  return (
    <View>
      <Text>{t('textExample')}</Text>
    </View>
  );
};

export default TextExampleScreen;
