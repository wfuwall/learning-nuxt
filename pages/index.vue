<template>
  <section class="container">
    首页
  </section>
</template>

<script>
export default {
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
