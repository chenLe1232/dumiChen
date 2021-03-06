import { defineConfig } from 'dumi';

export default defineConfig({
  title: '乐臣的博客',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  menus: {
  './blog': [
    {
      title: '简介',
    },
    {
      title: 'hello',
      children: ['blog/test']
    }
  ]
  }
  // more config: https://d.umijs.org/config
});
