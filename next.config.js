// const withSass = require('@zeit/next-sass');
// const withCSS = require('@zeit/next-css');
// // const commonsChunkConfig = require('@zeit/next-css/css-loader-config');
// const withPlugins = require('next-compose-plugins');

// const sassConfig = {
//   // cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 1,
//   }
// };
// const withCSSConfig = {};

// module.exports = withPlugins(
//   [[withCSS, withCSSConfig], [withSass, sassConfig]],
//   {
//     webpack: config => {
//       config.module.rules.push(
//         {
//           test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//           use: {
//             loader: 'url-loader',
//             options: {
//               limit: 100000
//             }
//           }
//         },
//         {
//           test: /\.scss$/,
//           use: [
//             {
//               loader: 'sass-resources-loader',
//               resources: './src/assets/css/*.scss'
//             }
//           ]
//         }
//       );
//       // const newConfig = commonsChunkConfig(config, /\.(sass|scss|css)$/);
//       return config;
//     },
//     outDir: 'build'
//   }
// );


module.exports = {
  outDir: 'build'
}