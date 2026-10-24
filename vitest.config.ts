import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: false,
    include: ['tests/**/*.test.{ts,tsx}'],
    // 当前只有 ahooks 透传，暂无测试用例；待补自定义 hook 后去掉此项
    passWithNoTests: true,
  },
})
