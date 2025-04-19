module.exports = function (api) {
  api.cache(true);

  const env = process.env.APP_ENV || 'development';

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@config': './src/config',
            '@context': './src/context',
            '@design': './src/design',
            '@flows': './src/flows',
            '@navigation': './src/navigation',
            '@redux': './src/redux',
            '@theme': './src/theme',
            '@translations': './src/translations',
            '@utils': './src/utils',
          },
        },
      ],
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: `.env.${env}`,
          safe: true,
        },
      ],
    ],
  };
};