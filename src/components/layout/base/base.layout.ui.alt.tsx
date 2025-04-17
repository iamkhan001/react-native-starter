import React, { useContext, useEffect, useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { RootLayoutProps, BaseHeaderConfig} from './base.layout.types';
import { BaseLayoutContext } from '../../../context/layout/base.layout.context';
import createStyles from './base.layout.styles';
import { RawThemeContext } from '../../../context/theme.provider';
import DesignSystem from '../../../design';

// export const getScreenInfo = (): ScreenInfo => {
//   const { width, height } = Dimensions.get('window');
//   return { width, height, platform: Platform.OS };
// };

const BaseLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const theme = useContext(RawThemeContext);
  const [header, setHeader] = useState<BaseHeaderConfig>({
    title: '',
    leftIcon: '',
    rightIcon: '',
    onLeftPress: () => {},
    onRightPress: () => {},
  });
  const [isLoading, setIsLoading] = useState(false);

  // Styles update automatically when theme changes
  const styles = useMemo(() => createStyles(theme.colors), [theme.colors]);

  const updateHeader = (config: BaseHeaderConfig) => {
    setHeader(prev => ({ ...prev, ...config }));
  };



  useEffect(() => {
    // Optional mount/render/unmount/error callbacks from children
    return () => {
      // Cleanup or unmount callback
    };
  }, []);

  return (
    <BaseLayoutContext.Provider
      value={{
        updateHeader,
        showLoading: () => setIsLoading(true),
        hideLoading: () => setIsLoading(false),
        isLoading,
      }}
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          {header.leftIcon ? (
            <TouchableOpacity onPress={header.onLeftPress}>
              <Image
                source={typeof header.leftIcon === 'string' ? { uri: header.leftIcon } : header.leftIcon}
                style={styles.icon}
              />
            </TouchableOpacity>
          ) : null}
          <Text style={styles.title}>{header.title}</Text>
          {header.rightIcon ? (
            <TouchableOpacity onPress={header.onRightPress}>
              <Image
                source={typeof header.rightIcon === 'string' ? { uri: header.rightIcon } : header.rightIcon}
                style={styles.icon}
              />
            </TouchableOpacity>
          ) : (
            <View style={{ width: DesignSystem.Sizes.headerIconSize }} />
          )}
        </View>

        {/* Main Content */}
        {children}

        {/* Loading Overlay */}
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
