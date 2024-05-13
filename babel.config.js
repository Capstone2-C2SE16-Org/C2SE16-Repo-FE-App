module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      // Explicitly override JSX transforms to use the modern automatic runtime
      ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }],
    ],
  };
};