import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: './src/anvil.js',
  output: {
    name: 'Anvil',
    file: './dist/anvil.js',
    format: 'iife',
    sourcemap: false
  },
  plugins: [babel(babelrc), uglify()]
};
