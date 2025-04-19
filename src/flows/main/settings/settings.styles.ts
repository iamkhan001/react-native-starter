import {StyleSheet} from 'react-native';
import ThemeColors from '@theme/types';
import DesignSystem from '@design/index';

const createStyles = (theme: ThemeColors) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    settings: {
      width: 'auto',
      marginTop: DesignSystem.Spacing.xl,
      marginHorizontal: DesignSystem.Spacing.md,
      backgroundColor: theme.background,
      borderWidth: DesignSystem.Sizes.borderWidth,
      borderColor: theme.primary,
      borderRadius: DesignSystem.Sizes.borderRadius,
      borderStyle: 'solid',
    },
    title: {
      paddingTop: DesignSystem.Spacing.xl,
      paddingLeft: DesignSystem.Spacing.sm,
      fontSize: DesignSystem.Typography.fontSize.xl,
      color: theme.textPrimary,
    },
    languageItem: {
      padding: DesignSystem.Spacing.lg,
      flexDirection: 'row',
      alignItems: 'center',
    },
    texts: {
      color: theme.textPrimary,
      fontSize: DesignSystem.Typography.fontSize.lg,
    },
    icon: {
      width: DesignSystem.Sizes.iconSizeSm,
      height: DesignSystem.Sizes.iconSizeSm,
    },
    language: {
      padding: DesignSystem.Spacing.lg,
      borderBottomWidth: DesignSystem.Sizes.borderWidth,
    },
    text: {
      fontSize: DesignSystem.Typography.fontSize.md,
      color: theme.textPrimary,
    },
    selectedText: {
      color: theme.primary,
      fontSize: DesignSystem.Typography.fontSize.md,
    },
  });
};

export default createStyles;
