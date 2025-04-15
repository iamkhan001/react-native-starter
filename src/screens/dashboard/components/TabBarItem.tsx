import React from 'react';
import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useTheme } from '../../../context/ThemeProvider';

interface TabBarItemProps {
  label: string;
  icon: any;
  isFocused: boolean;
  onPress: () => void;
}
const TabBarItem: React.FC<TabBarItemProps> = ({
  label,
  icon,
  isFocused,
  onPress,
}) => {

  const theme = useTheme();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <Image
        source={icon}
        style={[styles.icon, { tintColor: isFocused ? theme.colors.primary : theme.colors.textSecondary }]}
      />
      <Text style={{ color: isFocused ? theme.colors.primary : theme.colors.textSecondary }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabBarItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 2,
  },
  label: {
    fontSize: 12,
  },
});
