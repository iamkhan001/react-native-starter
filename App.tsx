import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/integration/react';
import {KeyboardProvider} from 'react-native-keyboard-controller';
import {I18nextProvider} from 'react-i18next';
import i18n from './src/translations/i18n';
import {store, persister} from './src/redux/store';
import ErrorModal from './src/components/error/GlobalErrorModal';
import ErrorBoundary from './src/components/error/ErrorBoundary';
import AppNavigatorStack from './src/navigation/AppNavigatorStack';

import type {ErrorInfo} from './src/components/error/GlobalErrorModal';
import BaseLayout from './src/components/layout/base/base.layout.ui';

const App: React.FC = () => {

  const [errorInfo, setErrorInfo] = useState<ErrorInfo | null>(null);

  useEffect(() => {
    const globalErrorHandler = (error: Error, isFatal?: boolean) => {
      console.log('[Global Error]', isFatal, error.message);
      setErrorInfo({error, isFatal});
    };

    ErrorUtils.setGlobalHandler(globalErrorHandler);
  }, []);

  const resetApp = () => {
    setErrorInfo(null);
  };

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ErrorBoundary>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persister}>
            <KeyboardProvider>
              <I18nextProvider i18n={i18n}>
                <BaseLayout>
                  <AppNavigatorStack />
                </BaseLayout>
                {errorInfo && (
                  <ErrorModal errorInfo={errorInfo} resetApp={resetApp} />
                )}
              </I18nextProvider>
            </KeyboardProvider>
          </PersistGate>
        </Provider>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
};

export default App;
