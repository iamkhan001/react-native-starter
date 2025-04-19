import React from 'react';
import { User } from '@context/auth/auth.types';
import { BaseHeaderConfig, BaseLayoutContextType } from './base.layout.context';

type AuthLayoutContextType = {
  header: BaseHeaderConfig;
  layoutContext: BaseLayoutContextType;
  user: User | null;
};

const AuthLayoutContext = React.createContext<AuthLayoutContextType>({
  header: { title: '' },
  layoutContext: {
    updateHeader: () => {},
  },
  user: null,
});

export { AuthLayoutContext };
export type { AuthLayoutContextType };
