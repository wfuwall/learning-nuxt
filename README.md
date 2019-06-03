## Build Setup
``` bash
# install dependencies
$ npm install
# serve with hot reload at localhost:3000
$ npm run dev
# build for production and launch server
$ npm run build
$ npm start
# generate static project
$ npm run generate
```
### nuxt框架基础了解
- 安装过程中的配置选项
  - Use a custom server framework  使用自定义服务器框架
  - Choose features to install     选择要安装的功能
  - Use a custom UI framework      使用自定义UI框架
  - Use a custom test framework    使用自定义测试框架
  - Choose rendering mode          选择渲染模式(Universal or SPA)
> spa是单页，所以只有一个入口文件，这会导致该服务端渲染项目最多只被搜索引擎收录一个页面。 Universal则能实现所有网站路径完全被收录。
- nuxt.js目录文件详解
  - assets         资源目录。组织未编译的静态资源
  - components     组件目录。Nuxt.js不会扩展增强该目录下的组件，即这些组件不会像页面组件那样有 asyncData 方法的特性。
  - layouts        布局目录。用于组织应用的布局组件。（不可更改）
  - middleware     中间件目录。用于存放目录的中间件
  - pages          页面目录。Nuxt.js 框架读取该目录下所有的 .vue 文件并自动生成对应的路由配置（不可更改）
  - plugins        插件目录。用于组织那些需要在 根vue.js应用 实例化之前需要运行的 Javascript 插件
  - server         服务端目录。
  - static         静态文件目录。该文件夹下的文件不会被 Nuxt.js 调用 Webpack 进行构建编译处理（不可更改）
  - store          Store 目录。用于组织应用的 Vuex 状态树 文件，Nuxt.js 框架集成了 Vuex 状态树 的相关功能配置，在 store 目录下创建一个 index.js 文件可激活这些配置。（不可更改）
  - nuxt.config.js nuxt.config.js 文件。用于组织Nuxt.js 应用的个性化配置，以便覆盖默认配置（不可更改）
- nuxt.js 中的别名
  - ~ 或 @     src目录  
  - ~~ 或 @@   根目录
> 默认情况下，src目录和根目录相同。在 vue 模板中, 如果你需要引入 assets 或者 static 目录, 使用 ~/assets/your_image.png 和 ~/static/your_image.png方式。 
- nuxt.js 的常用配置 请查看nuxt.config.js文件
