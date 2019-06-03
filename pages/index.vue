<template>
  <section class="container">首页 {{ name }}</section>
</template>

<script>
export default {
  middleware: 'page',
  async asyncData(context) {
    // 服务端和客户端都能执行,这有页面组件中才有
    // 如果在服务端执行，通过服务端获取数据； 如果在客户端执行，通过ajax获取数据，会把返回的结果自动合并到data上
    const { $axios } = context
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

<style></style>
