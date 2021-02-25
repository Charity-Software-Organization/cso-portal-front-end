# cso-portal-front-end

## Build Setup

he org website used by VUE.

该项目是CSO门户的前端部分，主要使用VUE进行开发。

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
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


## 主入口

文件夹说明

- public
    - favicon.ico 网站的标签页徽标
    - index.html 主入口
- src
    - assets 资源文件
    - compoents 可重用的组件
    - pages 以页为组织形式的组件，通常依赖与可重用的组件
    - router 路由
    - App.vue 主入口，由main.js唤醒
    - main.js 主入口，由index.html唤醒

## 依赖项

```
    "@nuxt/content": "^1.11.1",  // nuxt内容管理
    "@nuxtjs/axios": "^5.12.5",  // axios，http请求
    "core-js": "^3.8.3",            
    "element-ui": "^2.15.0",     // ElementUI
    "nuxt": "^2.14.12"           // nuxt核心
```


