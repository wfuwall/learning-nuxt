<template>
  <section class="container">
    首页
  </section>
</template>

<script>
export default {
  // transition: 'name', // 针对这个页面的动画
  mounted() {
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
