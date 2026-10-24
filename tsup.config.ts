import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  // 透传 ahooks 与 react，不打进产物，避免下游出现两份实例
  external: ['react', 'react-dom', 'ahooks'],
})
