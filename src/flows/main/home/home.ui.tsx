import { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import ENV from '../../../config/env';
import { useTranslation } from 'react-i18next';
import { BaseLayoutContext } from '../../../context/layout/base.layout.context';
import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';
import DesignSystem from '../../../design';

const HomeScreen = () => {
  const { t } = useTranslation();
  const { updateHeader } = useContext(BaseLayoutContext);
  const user = useSelector(
    (state: RootState) => state.auth.user,
  );

  useEffect(() => {
    updateHeader({
      title: t('Home'),
      leftIcon: DesignSystem.Icons.home,
      rightIcon: DesignSystem.Icons.settings,
      onLeftPress: () => console.log('Menu opened'),
    });

    return () => {
      console.log('HomeScreen unmounted');
    };
  }, []);

  return (
      <View>
        <Text>{t('welcome')} {user?.firstName ?? 'Guest'} - {ENV.environment}</Text>
      </View>
  );
};

export default HomeScreen;
