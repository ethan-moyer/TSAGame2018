import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';

export default {
  // tell rollup our main entry point
  input: 'src/Game.ts',
  plugins: [
    typescript({moduleResolution: "node"}),
    uglify()
  ],
  output: {
    file: 'js/rollup-bundle.js',    
    format: "iife"
  },
  sourcemap: true,
  sourcemapFile: "js/rollup-bundle.map.js",
  name: "TheGame"
}