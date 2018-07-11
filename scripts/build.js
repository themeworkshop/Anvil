/* eslint-disable no-console */
'use strict';

const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const { terser } = require('rollup-plugin-terser');

const entryFile = 'src/anvil.js';
const configs = [
  {
    name: 'Anvil',
    format: 'umd',
    fileName: 'anvil',
    fileExt: '.js',
    plugins: [
      babel({
        babelrc: false,
        presets: {
          presets: [
            [
              'env',
              {
                modules: false
              }
            ]
          ],
          plugins: ['external-helpers']
        }
      }),
      terser()
    ]
  },
  {
    format: 'es',
    fileName: 'anvil',
    fileExt: '.mjs',
    plugins: [terser()]
  }
];

configs.forEach(config =>
  Promise.resolve()
    .then(() =>
      rollup.rollup({
        input: entryFile,
        plugins: config.plugins
      })
    )
    .then(bundle =>
      bundle.write({
        name: config.name,
        file: `dist/${config.fileName}${config.fileExt}`,
        format: config.format
      })
    )
    .catch(err => console.log(err))
);