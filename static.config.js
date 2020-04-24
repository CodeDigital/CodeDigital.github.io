export default {
    plugins: [
      [
        "react-static-plugin-sass",
        {
          includePaths: ["src/","src/assets/css"], // always includes `src/`
          cssLoaderOptions: {} // options for the css-loader, like modules
          // other options for the sass-loader
        }
      ]
    ],
    outDir: 'build'
  };