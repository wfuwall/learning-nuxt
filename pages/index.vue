<template>
  <section class="container">
    <span>首页 {{ name }} {{ storeName }}</span>
    <div class="btn">点我</div>
  </section>
</template>

<script>
export default {
  middleware: 'page',
  computed: {
    storeName() {
      // 获取vuex中主仓库下的name变量
      return this.$store.state.name
    }
  },
  async asyncData(context) {
    // 服务端和客户端都能执行,这有页面组件中才有
    // 如果在服务端执行，通过服务端获取数据； 如果在客户端执行，通过ajax获取数据，会把返回的结果自动合并到data上
    console.log(process.client, 'client客户端渲染')
    console.log(process.server, 'server服务端渲染')
    const { $axios } = context
    console.log(context)
    const { name } = await $axios.get(
      'http://www.fullstackjavascript.cn:8080/api/user'
    )
    return {
      name
    }
  },
  // fetch 它不用返回结果， 服务端和客户端都执行，一般只用来操作vuex
  // transition: 'name', // 针对这个页面的动画
  mounted() {
    // 这个方法只能在浏览器中用，只有beforeCreate和created两个方法才能在服务端运行
    // 进度条需要等待加载完后才能执行
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => {
        this.$nuxt.$loading.finish()
      }, 1000)
    })
  }
}
</script>

<style lang="less" scoped>
.btn {
  position: relative;
  height: 20px;
  width: max-content;
  &::after {
    position: absolute;
    content: '';
    top: -10px;
    left: -10px;
    bottom: -10px;
    right: -10px;
  }
}
</style>
