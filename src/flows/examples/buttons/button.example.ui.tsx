import { Text, View } from 'react-native';
import { useButtonExampleLogic } from './button.example.logic';

const ButtonsExampleScreen = () => {

  const { t, styles } = useButtonExampleLogic();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('buttonExample')}</Text>
    </View>
  );
};

export default ButtonsExampleScreen;

