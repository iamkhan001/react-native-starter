import { Text, View } from 'react-native';
import { useButtonExampleLogic } from './button.example.logic';

const ButtonsExampleScreen = () => {

  const { t } = useButtonExampleLogic();

  return (
    <View>
      <Text>{t('buttonExample')}</Text>
    </View>
  );
};

export default ButtonsExampleScreen;

