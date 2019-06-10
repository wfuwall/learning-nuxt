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

### context 上下文对象常用属性
- app       包含所有插件的 Vue 根实例, 可以通过 context.app.$axios 来获取axios的实例
- $axios    axios的实例
- store     vuex实例
- route     vue-router的实例
- from      上个页面的router实例
- req       Node.js API 的 Request 对象
- res       Node.js API 的 Response 对象
- error     用这个方法展示错误页：error(params) 。params 参数应该包含 statusCode 和 message 字段
- env       nuxt.config.js 中配置的环境变量
- isStatic  是否来自 nuxt generate 静态化（预渲染）（即将废弃，isClient、isServer已经废弃，使用 process.static、process.client、process.server 代替）
- isDev     是否是开发模式，在生产环境的数据缓存中用到

### pages页面属性
- asyncData 服务端和客户端都能执行,渲染组件之前异步获取数据
- fetch     服务端和客户端都执行，一般只用来操作vuex,填充应用的状态树（store）数据
- head      head 方法设置当前页面的头部标签。需要使用 hid 键为meta标签配一个唯一的标识编号
- layout    指定页面使用哪种布局
- loading   禁用特定页面上的默认加载进度条的选项
- middleware 指定页面使用哪个中间件
- scrollToTop 控制页面在渲染前是否滚动到顶部 
- transition  实现路由切换时的过渡动效
- validate   此方法用来校验动态路由参数的有效性
- watchQuery 监听参数字符串更改并在更改时执行组件方法 (asyncData, fetch, validate, layout, ...)

### nuxt内部组件
- nuxt组件    只适用于在布局中显示页面组件
- nuxt-child组件   用于显示嵌套路由场景下的页面内容
- nuxt-link组件    用于在页面中添加链接至别的页面
- no-ssr组件       用于设置组件不在服务器渲染中呈现