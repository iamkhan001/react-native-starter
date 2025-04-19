import React, { Component } from 'react';
import BaseLayout from '@components/layout/base/base.layout.ui';
import { RootState } from '@redux/store';
import { connect } from 'react-redux';
import { BaseHeaderConfig } from '@context/layout/base.layout.context';
import { AuthLayoutContext } from '@context/layout/auth.layout.context';

interface AuthLayoutProps {
  children: React.ReactNode;
  user: RootState['auth']['user'];
}

interface AuthLayoutState {
  header: BaseHeaderConfig;
  isLoading: boolean;
}

class AuthLayout extends Component<AuthLayoutProps, AuthLayoutState> {
  constructor(props: AuthLayoutProps) {
    super(props);
    this.state = {
      header: {
        title: '',
        leftIcon: '',
        rightIcon: '',
        onLeftPress: () => {},
        onRightPress: () => {},
      },
      isLoading: false,
    };
  }

  updateHeader = (header: BaseHeaderConfig) => {
    this.setState({ header });
  };

  showLoading = () => this.setState({ isLoading: true });
  hideLoading = () => this.setState({ isLoading: false });

  render() {
    const { children, user } = this.props;
    const { header, isLoading } = this.state;

    return (
      <AuthLayoutContext.Provider
        value={{
          header,
          user,
          layoutContext: {
            updateHeader: this.updateHeader,
            showLoading: this.showLoading,
            hideLoading: this.hideLoading,
            isLoading,
          },
        }}
      >
        <BaseLayout>
          {children}
        </BaseLayout>
      </AuthLayoutContext.Provider>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(AuthLayout);
