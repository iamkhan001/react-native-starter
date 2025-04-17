import {StyleSheet} from 'react-native';
import ThemeColors from '../../../theme/types';
import DesignSystem from '../../../design';

const createStyles = (theme: ThemeColors) => {
  return StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background,
    },
    header: {
      height: DesignSystem.Sizes.headerHeight,
      backgroundColor: theme.header,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: DesignSystem.Spacing.md,
      justifyContent: 'space-between',
    },
    title: {
        fontSize: DesignSystem.Typography.fontSize.lg,
        fontWeight: DesignSystem.Typography.fontWeight.bold,
        color: theme.textPrimary,
    },
    icon: {
        width: DesignSystem.Sizes.headerIconSize,
        height: DesignSystem.Sizes.headerIconSize,
        tintColor: theme.primary,
    },
    loadingOverlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};

export default createStyles;
