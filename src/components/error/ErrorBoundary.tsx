import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {ENVIRONMENT_NAME} from '@env';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    if (!this.isEnabled()) {
        return;
      }
    console.error('Unhandled error caught:', error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  isEnabled(): boolean {
    return (
      ENVIRONMENT_NAME === 'development' || ENVIRONMENT_NAME === 'uat'
    );
  }

  render() {
    if (this.isEnabled() && this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Something went wrong</Text>
          <Text style={styles.message}>{this.state.error?.message}</Text>
          <Button title="Try Again" onPress={this.handleReset} />
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20,
  },
  title: {
    fontSize: 24, fontWeight: 'bold', marginBottom: 10,
  },
  message: {
    fontSize: 16, marginBottom: 20, textAlign: 'center',
  },
});

export default ErrorBoundary;
