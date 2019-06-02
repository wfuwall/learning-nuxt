<template>
  <div>
    <!-- 如果是前端跳转是不经过服务端的 -->
    <!-- 刷新页面 会通过服务端返回页面 -->
    <nuxt-link to="/">首页</nuxt-link> |
    <nuxt-link to="/detail">详情</nuxt-link> |
    <nuxt-link to="/user">用户</nuxt-link> |
    <nuxt-link to="/user/1">用户1</nuxt-link> |
    <nuxt-link to="/user/2">用户2</nuxt-link> |
    <nuxt-link to="/user/3/4">用户34</nuxt-link>
    <nuxt />
  </div>
</template>

<style></style>
