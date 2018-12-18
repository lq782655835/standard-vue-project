# standard-vue-project

A standard manager system project by vue-cli3.0 base on [AI TEAM STANDARD](https://lq782655835.github.io/blogs/dist/team-standard/standard-ai-js.html)

## Quick Start
``` bash
git clone https://github.com/lq782655835/standard-vue-project.git
cd standard-vue-project
npm install && npm run dev
```

## Feature

* **对项目结构进行优化**。各资源模块，更专业的分门别类，便捷的编写、维护、查找；同时也是基于前端开发既定共识去设计，更容易为初接触者所理解。
* **简化开始开发流程**。yarn run dev即可开始业务开发。
* **优雅的处理数据请求**。采用Promise，对axios封装，可以极简的进行链式调用，同时便捷地处理返回数据。
* **内置了样式处理方案**。支持sass编译，并内置变量和mixin，轻松开启样式编写、复用、修改等。
* **集成 Prettier & Eslint**。检测代码潜在问题的同时，统一团队代码规范。
* **集成git hooks和代码查重检测**。只允许提交符合规范的代码，保持代码库干净整洁

## Standard Project Structure

<pre>
project
└───src
│   │   app.vue    // 主页面
│   │   main.js    // 主入口
|   |   router.js  // 所有路由
│   │
│   |____assets    // css、image、svg等资源
│   |   |____css   // 所有sass资源
|   |   |    |  reset.scss       // 兼容各浏览器
|   |   |    |  global.scss      // 全局css
|   |   |    |  variable.scss    // sass变量和function等
│   |   |____img   // image图标库
|   |   |____svg   // svg图标库
|   |
|   |____components    // 组件
│   |   |____common    // common自注册组件
│   |        |____base // 原子组件(如果是引入第三方，该文件夹可省略)
│   |        |   ...   // 业务公用组件
│   |   |____entity    // entity页面组件
│   |   |____about     // about页面组件
|   |
|   |____pages     // UI层(原则：轻page，重component)
|   |   |____entity
|   |   |    |  list.vue      // 列表页
|   |   |    |  create.vue    // 新增页
|   |   |    |  edit.vue      // 修改页
|   |   | main.vue
|   |
|   |____plugins   // 自己或第三方插件
|   |   | index.js       // 插件入口文件
|   |   | directives.js  // 所有Vue指令
|   |   | filters.js  // 所有Vue过滤
|   |
|   |____server    // 接口层
|   |   | index.js   // 所有接口
|   |   | http.js  // axios二次封装
|   |
|   |____store     // vuex数据
|   |   | index.js
|   |
|   |____utils     // 工具层
|   |   | config.js// 配置文件，包括常量配置
|
└───public         // 公用文件，不经过webpack处理
│   │   favicon.ico
│   │   index.html
│   vue.config.js  // vue-cli3主配置
│   babel.config.js// babel配置
│   .eslintrc.js   // eslint配置
│   .prettierrc.js // perttier配置
│   package.json   // npm配置
│   README.md      // 项目说明
</pre>

## Light Weight Component

### Base

* u-link
* u-button
* u-icon
* u-layout

### Form
* u-input(&& textarea)
* u-select
* u-switch @hsy
* u-checkbox

### Layout

* u-tab
* u-table @henry
* u-tree @yrq110


### Dialog

* u-modal(&& confirm && alert)
* u-toast

### TODO

* u-radio
* u-popup
* u-pagination
* u-step

## Preview

![image](https://user-images.githubusercontent.com/6310131/47153017-e3d31880-d310-11e8-9bea-f53cb2cb22c6.png)

## License

The code is distributed under the [MIT](http://opensource.org/licenses/MIT) license