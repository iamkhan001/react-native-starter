import { TextStyle } from 'react-native';

const Typography = {
    fontFamily: {
      regular: 'System',
      medium: 'System',
      bold: 'System',
    },
    fontWeight: {
      regular: '400' as TextStyle['fontWeight'],
      medium: '500' as TextStyle['fontWeight'],
      bold: '700' as TextStyle['fontWeight'],
    },
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 20,
      xl: 24,
    },
    lineHeight: {
      sm: 20,
      md: 24,
      lg: 28,
      xl: 32,
    },
  };

export default Typography;
