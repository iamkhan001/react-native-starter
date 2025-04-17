import {StyleSheet} from 'react-native';
import ThemeColors from '../../../theme/types';
import DesignSystem from '../../../design';

const createStyles = (theme: ThemeColors) => {
  return StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background,
    },
    text: {
        color: theme.textPrimary,
        fontSize: DesignSystem.Typography.fontSize.md,
        fontWeight: DesignSystem.Typography.fontWeight.regular,
    },
  });
};

export { createStyles };
