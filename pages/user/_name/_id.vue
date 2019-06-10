<template>
  <div>
    有id和name多参数的用户详情
    {{ $route.params.name }}
    {{ $route.params.id }}
  </div>
</template>
<script>
export default {
  asyncData(context) {
    const { params, query } = context
    console.log(params, 'route.params路由的params参数')
    console.log(query, 'route.query路由的query参数')
  }
}
</script>
