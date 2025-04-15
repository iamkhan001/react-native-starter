import Config from 'react-native-config';

const ENV = {
  environment: Config.ENV,
  baseUrl: Config.BASE_URL,
  serverKey: Config.SERVER_KEY,
};

export default ENV;
