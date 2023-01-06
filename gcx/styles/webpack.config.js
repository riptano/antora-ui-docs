const path = require('path');
const glob = require('glob')

module.exports = {
  entry: glob.sync('./src/js/*.js'),
  output: {
    filename: 'site.js',
    path: path.resolve(__dirname, 'build/js'),
  },
  module: {
    rules: [
      {
        test: /\.(svg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
                name: '[path][name].[ext]',
                outputPath: (file) => {
                    let path = file.split("src/")[1];
                    return path
                  }
              }
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ],
  },
};


// module.exports = {
//     module : {
//         rules: [
//           {
//             test: /\.(svg|png)$/,
//             include: [
//                 path.resolve(__dirname, 'src/img')
//             ],
//             loader: 'file-loader',
//             options: {
//               name: '[path][name].[ext]',
//               outputPath: path.resolve(__dirname, 'build/img'),
//             }
//           }
//         ]
//     }
// }

// module.exports = {
//     module: {
//       rules: [
//         {
//           test: /\.(svg|png)$/i,
//           include: [
//             path.resolve(__dirname, 'src/img')
//           ],
//           use: [
//             {
//               loader: 'file-loader',
//               options: {
//                   name: '[path][name].[ext]',
//                   outputPath: path.resolve(__dirname, 'build/img'),
//                 }
//             },
//           ],
//         },
//       ],
//     },
//   };