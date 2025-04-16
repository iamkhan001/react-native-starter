import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, Platform } from 'react-native';
import { RootLayoutProps, RootLayoutState, ScreenInfo } from './base.layout.types';
import { BaseHeaderConfig, BaseLayoutContext } from '../../../context/layout/base.layout.context';
import createStyles from './base.layout.styles';
import { RawThemeContext } from '../../../context/theme.provider';
import DesignSystem from '../../../design';
import LightColors from '../../../theme/colors/LightColors';

class BaseLayout extends Component<RootLayoutProps, RootLayoutState> {

  static contextType = RawThemeContext;

  constructor(props: RootLayoutProps) {
    super(props);

    const styles = createStyles(LightColors);

    this.state = {
      header: {
        title: '',
        leftIcon: '',
        rightIcon: '',
        onLeftPress: () => {},
        onRightPress: () => {},
      },
      isLoading: false,
      styles: styles,
    };
  }

  updateHeader = (config: BaseHeaderConfig) => {
    this.setState({ header: { ...this.state.header, ...config } });
  };

  componentDidMount() {
    const theme = this.context as React.ContextType<typeof RawThemeContext>;
    const styles = createStyles(theme.colors);
    this.setState({ styles });
    this.state.onMount?.();
    this.state.onRender?.();
  }

  componentWillUnmount() {
    this.state.onUnmount?.();
  }

  componentDidCatch(error: Error) {
    this.state.onError?.(error);
  }

  showLoading = () => this.setState({ isLoading: true });

  hideLoading = () => this.setState({ isLoading: false });

  getScreenInfo = (): ScreenInfo => {
    const { width, height } = Dimensions.get('window');
    return {
      width,
      height,
      platform: Platform.OS,
    };
  };

  render() {
    const { children } = this.props;
    const {
        title,
        leftIcon,
        rightIcon,
        onLeftPress,
        onRightPress,
     } = this.state.header;

    return (
      <BaseLayoutContext.Provider
        value={{
          updateHeader: this.updateHeader,
          showLoading: this.showLoading,
          hideLoading: this.hideLoading,
          isLoading: this.state.isLoading,
        }}
      >
        <View style={this.state.styles.container}>
          {/* Header */}
          <View style={this.state.styles.header}>
            {leftIcon && (
              <TouchableOpacity onPress={onLeftPress}>
                <Image
                  source={typeof leftIcon === 'string' ? { uri: leftIcon } : leftIcon}
                  style={this.state.styles.icon}
                />
              </TouchableOpacity>
            )}
            <Text style={this.state.styles.title}>{title}</Text>
            {rightIcon ? (
              <TouchableOpacity onPress={onRightPress}>
                <Image
                  source={typeof rightIcon === 'string' ? { uri: rightIcon } : rightIcon}
                  style={this.state.styles.icon}
                />
              </TouchableOpacity>
            ) : (
              <View style={{ width: DesignSystem.Sizes.headerIconSize }} />
            )}
          </View>

          {/* Main Content */}
          {children}
          {/* Show loading */}
          {this.state.isLoading && (
          <View style={this.state.styles.loadingOverlay}>
            <Text>Loading...</Text>
          </View>
        )}
        </View>
      </BaseLayoutContext.Provider>
    );
  }
}

export default BaseLayout;
