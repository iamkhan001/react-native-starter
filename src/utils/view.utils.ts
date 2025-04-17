import { Dimensions, Platform } from 'react-native';
import { ScreenInfo } from '../components/layout/base/base.layout.types';


const getScreenInfo = (): ScreenInfo => {
  const { width, height } = Dimensions.get('window');
  return { width, height, platform: Platform.OS };
};

export { getScreenInfo };
