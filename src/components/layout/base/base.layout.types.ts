import { BaseHeaderConfig } from '../../../context/layout/base.layout.context';
import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

interface RootLayoutStyles {
  container: ViewStyle;
  header: ViewStyle;
  title: TextStyle;
  icon: ImageStyle;
  loadingOverlay: ViewStyle;
}

type RootLayoutProps = {
    children: React.ReactNode;
  };

type RootLayoutState = {
    header: BaseHeaderConfig;
    isLoading: boolean;
    styles: RootLayoutStyles;
    onMount?: () => void;
    onUnmount?: () => void;
    onRender?: () => void;
    onError?: (error: Error) => void;
};

type ScreenInfo = {
    width: number;
    height: number;
    platform: string;
};

export type { RootLayoutProps, RootLayoutState, ScreenInfo};
