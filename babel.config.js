module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo',
    'module:metro-react-native-babel-preset'],
    plugins: [
      // Required for expo-router
      'expo-router/babel',
      '@babel/plugin-transform-react-jsx-source',
      'react-native-reanimated/plugin',
    ],
  };
};
