import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import {NavigationContainer} from '@react-navigation/native';

import { I18nextProvider } from 'react-i18next';
import i18n from './src/translations/i18n';


import {store, persister} from './src/redux/store';
import RootNavigator from './src/navigation/RootNavigator';
import ErrorModal from './src/components/error/GlobalErrorModal';
import ErrorBoundary from './src/components/error/ErrorBoundary';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import type {ErrorInfo} from './src/components/error/GlobalErrorModal';


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
                <NavigationContainer>
                  <RootNavigator />
                </NavigationContainer>
                <ErrorModal errorInfo={errorInfo} resetApp={resetApp} />
              </I18nextProvider>
            </KeyboardProvider>
          </PersistGate>
        </Provider>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
};

export default App;
