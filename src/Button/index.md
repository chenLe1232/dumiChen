---
nav:
  title: 组件库-待更新
  path: /components
---

## Button

Demo:

```tsx
/** 
 * title: I miss you
*/
import React from 'react';
import { Button } from 'dumi';

export default () => <Button title="First Demo aaa" />;
```

## api
## 参数
| 参数 | 作用   |  可选值 |是否必须 或默认值 |
| ---- |  ---- | ----- | ----- |
| size | 定义按钮大小| 'large ' 'middle' 'small'| 'default'|
| text | 按钮名称 | |"默认为登入" |
| startIcon| 带icon按钮 | 可传值 默认大小 16*16 |
|color| 按钮北京颜色| 'transparent' 'red' 'green' 'gradient'| 'transparent'
|endIcon| 带icon按钮| |非必传|
|onClick| 点击事件函数||无|
