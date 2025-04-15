import { View, Text, Button, StyleSheet, Modal } from 'react-native';

export interface ErrorInfo {
    error: Error;
    isFatal?: boolean;
  }

const ErrorModal: React.FC<{
    errorInfo: ErrorInfo | null;
    resetApp: () => void;
}> = ({ errorInfo, resetApp }) => {
    if (!errorInfo) {
        return null;
    }

    return (
        <Modal visible={!!errorInfo} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Oops! Something went wrong</Text>
          {errorInfo?.isFatal && <Text style={styles.subtitle}>A fatal error occurred.</Text>}
          <Text style={styles.error}>{errorInfo?.error?.message}</Text>
          <Button title="Restart App" onPress={resetApp} />
        </View>
      </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.85)',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 24,
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      color: '#ccc',
      marginBottom: 10,
    },
    error: {
      color: '#f99',
      marginBottom: 20,
      textAlign: 'center',
    },
  });

export default ErrorModal;
