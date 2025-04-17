import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {StyleSheet, View} from 'react-native';
import TabBarItem from './TabBarItem';
import ThemeColors from '../../../../theme/types';
import {useTheme} from '../../../../context/theme.provider';

const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const theme = useTheme();
  const styles = createStyles(theme.colors);

  return (
    <View style={styles.tab}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel as string;
        const isFocused = state.index === index;

        const icon = options.tabBarIcon;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TabBarItem
            key={route.key}
            label={label}
            icon={icon}
            isFocused={isFocused}
            onPress={onPress}
          />
        );
      })}
    </View>
  );
};

const createStyles = (theme: ThemeColors) => {
  return StyleSheet.create({
    tab: {
      flexDirection: 'row',
      height: 60,
      backgroundColor: theme.background,
    },
  });
};

export default CustomTabBar;
