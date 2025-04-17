import React from 'react';
import { ScreenInfo } from '../../components/layout/base/base.layout.types';

type BaseHeaderConfig = {
    title: string;
    leftIcon?: string;
    rightIcon?: string | null;
    onLeftPress?: () => void;
    onRightPress?: () => void;
};

type BaseLayoutContextType = {
  updateHeader: (config: BaseHeaderConfig) => void;
  showLoading?: () => void;
  hideLoading?: () => void;
  getScreenInfo?: () => ScreenInfo;
  isLoading?: boolean;
};

const BaseLayoutContext = React.createContext<BaseLayoutContextType>({
  updateHeader: () => {},
});

export { BaseLayoutContext };
export type { BaseHeaderConfig, BaseLayoutContextType };
