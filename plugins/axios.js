export default context => {
  const { $axios, redirect } = context
  $axios.onRequest(config => {
    // axios的请求拦截器
    console.log(config)
  })
  $axios.onError(error => {
    // 报错拦截器
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
  $axios.onResponse(res => {
    // axios的响应拦截器
    return Promise.resolve(res.data)
  })
}
