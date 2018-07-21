import typescript from 'rollup-plugin-typescript2';

export default {
  input: './src/anvil.ts',
  output: {
    name: 'Anvil',
    file: './tmp/anvil.js',
    format: 'umd',
    target: 'es5',
    sourcemap: 'inline'
  },
  plugins: [typescript()]
};
