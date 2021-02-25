# cso-portal-front-end

cso org website used by VUE.

该项目是 CSO 门户的前端部分，主要使用 VUE 进行开发。

## 参考文档

[Nuxt.js docs](https://nuxtjs.org).

## 命令行工具

```
安装依赖项
npm install
本地运行，占用3000端口
npm run dev
本地打包、运行
npm run build
npm run start
本地构造器
npm run generate
eslint格式化文档
eslint --fix [targetFile]
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## 主入口

pages/index.vue 和 layouts/default.vue

## 文件夹说明

- assets 资源文件
- compoents 可重用的组件
- content 内容，一般为 md
- layouts 页面布局中的可重用文件，如 header
- middleware 中间件，未使用
- pages 以页为组织形式的组件，通常依赖与可重用的组件
- plugins 插件，集成了 element
- static 静态文件，保存了一些图标
- store 未使用
- nuxt.config.js 配置文件

## 依赖项

```
    "@nuxt/content": "^1.11.1",  // nuxt内容管理
    "@nuxtjs/axios": "^5.12.5",  // axios，http请求
    "core-js": "^3.8.3",
    "element-ui": "^2.15.0",     // ElementUI
    "nuxt": "^2.14.12"           // nuxt核心
```
