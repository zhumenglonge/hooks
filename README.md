# @z-m-l/hooks

[ahooks](https://ahooks.js.org/) 的全量透传包。装一个包，ahooks 的所有 hooks 都能从同一个入口引入。

```ts
import { useRequest, useMemoizedFn, useSize, useBoolean } from '@z-m-l/hooks'
```

## 安装

```bash
npm i @z-m-l/hooks ahooks
```

`ahooks` 是 `peerDependency`，需要一并安装，这样项目里不会出现两份 ahooks 实例。

## 用法

用法与 ahooks 完全一致，API、参数、返回值完全相同，只是把包名换掉：

```tsx
import { useRequest, useBoolean } from '@z-m-l/hooks'

function Demo() {
  const [visible, { toggle }] = useBoolean(false)
  const { data, loading } = useRequest('/api/user')

  if (loading) return null
  return (
    <div onClick={toggle}>
      {visible ? data?.name : '隐藏'}
    </div>
  )
}
```

类型定义一并透传，`import type` 同样可用。

## 产物说明

- ESM + CJS 双格式，`sideEffects: false`，支持 tree-shaking
- `ahooks` 与 `react` 均标记为 external，不会被重复打进产物（压缩后约 2 KB）
- 上游版本跟随 `peerDependencies` 中的 `^3`，ahooks 大版本升级时需要重新发版

## 后续扩展

包内预留了自定义 hook 的位置，新增时：

1. 新建 `src/hooks/use-xxx.ts`
2. 在 `src/hooks/index.ts` 中 `export * from './use-xxx'`
3. 在 `src/index.ts` 追加 `export * from './hooks'`
4. 在 `tests/` 补用例后执行 `npm run typecheck && npm test && npm run build`

注意自定义 hook 不要与 ahooks 重名：两个 `export *` 之间出现同名成员时该成员会被丢弃，需要覆盖某个同名 hook 时应使用显式 `export { useX } from './hooks/xxx'`（显式导出优先级更高）。

## License

MIT。本体为 [alibaba/hooks](https://github.com/alibaba/hooks) 的透传，版权归原项目所有。
