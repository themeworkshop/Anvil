import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

export default {
  input: './src/anvil.js',
  output: {
    name: 'Anvil',
    file: './dist/anvil.js',
    format: 'cjs',
    target: 'es5',
    sourcemap: 'inline'
  },
  plugins: [babel(babelrc)]
};
