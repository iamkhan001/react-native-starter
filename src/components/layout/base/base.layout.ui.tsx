import React, { useState, useEffect, useContext, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  BaseHeaderConfig,
  BaseLayoutContext,
} from '@context/layout/base.layout.context';
import { RawThemeContext } from '@context/theme.provider';
import DesignSystem from '@design/index';
import LightColors from '@theme/colors/LightColors';
import createStyles from './base.layout.styles';
import { RootLayoutProps } from './base.layout.types';

const BaseLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const theme = useContext(RawThemeContext);
  const [styles, setStyles] = useState(createStyles(LightColors));
  const [header, setHeader] = useState<BaseHeaderConfig>({
    title: '',
    leftIcon: '',
    rightIcon: '',
    onLeftPress: () => {},
    onRightPress: () => {},
  });
  const [isLoading, setIsLoading] = useState(false);

  const updateHeader = useCallback((config: BaseHeaderConfig) => {
    setHeader(prev => ({ ...prev, ...config }));
  }, []);

  const showLoading = useCallback(() => setIsLoading(true), []);
  const hideLoading = useCallback(() => setIsLoading(false), []);

  useEffect(() => {
    const updatedStyles = createStyles(theme.colors);
    setStyles(updatedStyles);
  }, [theme]);

  useEffect(() => {
    const onMount = () => {};
    const onRender = () => {};
    onMount?.();
    onRender?.();

    return () => {
      const onUnmount = () => {};
      onUnmount?.();
    };
  }, []);

  const { title, leftIcon, rightIcon, onLeftPress, onRightPress } = header;

  return (
    <BaseLayoutContext.Provider
      value={{
        updateHeader,
        showLoading,
        hideLoading,
        isLoading,
      }}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          {leftIcon && (
            <TouchableOpacity onPress={onLeftPress}>
              <Image
                source={
                  typeof leftIcon === 'string' ? { uri: leftIcon } : leftIcon
                }
                style={styles.icon}
              />
            </TouchableOpacity>
          )}
          <Text style={styles.title}>{title}</Text>
          {rightIcon ? (
            <TouchableOpacity onPress={onRightPress}>
              <Image
                source={
                  typeof rightIcon === 'string' ? { uri: rightIcon } : rightIcon
                }
                style={styles.icon}
              />
            </TouchableOpacity>
          ) : (
            <View style={{ width: DesignSystem.Sizes.headerIconSize }} />
          )}
        </View>

        {/* Main Content */}
        {children}

        {/* Show loading */}
        {isLoading && (
          <View style={styles.loadingOverlay}>
            <Text style={styles.title}>Loading...</Text>
          </View>
        )}
      </View>
    </BaseLayoutContext.Provider>
  );
};

export default BaseLayout;
