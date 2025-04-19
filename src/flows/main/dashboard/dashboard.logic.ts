import {useTranslation} from 'react-i18next';
import {useTheme} from '@context/theme.provider';

const useDashboardLogic = () => {
  const theme = useTheme();
  const {t} = useTranslation();

  return {
    theme,
    t,
  };
};

export {useDashboardLogic};
