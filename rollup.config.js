import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import alias from '@rollup/plugin-alias'
import replace from '@rollup/plugin-replace'
const mode = process.env.MODE

const isLocal = mode === 'local'

export default [
  // {
  //   input: './src/index.js',
  //   plugins: [
  //     resolve(),
  //     alias({
  //       entries: {
  //         a: './a.js',
  //       },
  //     }),
  //     commonjs(),
  //     json(),
  //   ],
  //   external: ['react'],
  //   output: {
  //     file: 'dist/index.umd.js',
  //     format: 'umd',
  //     name: 'Index',
  //     // plugins: [terser()],
  //     banner: `/*! dist/index.umd.js */`,
  //   },
  // },
  {
    input: './src/index.js',
    plugins: [
      resolve(),
      alias({
        entries: {
          a: './a.js',
        },
      }),
      replace({
        preventAssignment: true,
        __TEST__: '123',
      }),
      commonjs(),
      json(),
    ],
    external: ['react'],
    output: {
      file: 'dist/index.es.js',
      format: 'es',
      // plugins: [terser()],
      banner: `/*! dist/index.es.js */`,
    },
  },
]
