import { User } from '../../../context/auth/auth.types';
import { BaseHeaderConfig } from '../../../context/layout/base.layout.context';

type AuthLayoutProps = {
    children: React.ReactNode;
  };

type AuthLayoutState = {
    header: BaseHeaderConfig;
    user: User
};

export type { AuthLayoutState, AuthLayoutProps };
