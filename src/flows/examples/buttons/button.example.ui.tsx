import { Text, View } from 'react-native';
import { useButtonExampleLogic } from './button.example.logic';
import { GridLayout} from 'anb-ui-components';

const ButtonsExampleScreen = () => {

  const { t, styles, onButtonPress } = useButtonExampleLogic();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('buttonExample')}</Text>
      <GridLayout columns={3}>
        <Text style={styles.text}>hello</Text>
        <Text style={styles.text}>hello</Text>
        <Text style={styles.text}>hello</Text>
        <Text style={styles.text}>hello</Text>
        <Text style={styles.text}>hello</Text>
        <Text style={styles.text}>hello</Text>
      </GridLayout>
    </View>
  );
};

export default ButtonsExampleScreen;

