# React 自定义组件库

## 技术栈

- React
- React Hook
- Typescript
- jest
- storybook
- travis

## 主要命令

```json
"lint": "eslint --ext js,ts,tsx src --max-warnings 5",  // 代码规范检查，最多容许5个warn
"build": "npm run clean && npm run build-ts && npm run build-css", // 打包
"clean": "rimraf ./dist", // 打包附属命令
"build-ts": "tsc -p tsconfig.build.json", // 打包附属命令
"build-css": "node-sass ./src/styles/index.scss ./dist/index.css", // 打包附属命令
"test": "node scripts/test.js", // 测试
"test:nowatch": "cross-env CI=true node scripts/test.js", // 只走一遍的测试
"test:generate-output": "jest --json --outputFile=.jest-test-results.json", // 为storybook jest 插件导出的test json
"storybook": "npm run test:generate-output && npm run dev-storybook", // 本地开发用的storybook文档
"dev-storybook": "start-storybook -p 9009 -s public", // 本地开发用的storybook文档 附属
"build-storybook": "npm run test:generate-output &&  build-storybook -s public",  // 打包输出storybook文档
"prepublishOnly": "npm run test:nowatch && npm run lint && npm run build" // npm publish 前的检查
```
