const resource = '/auth'
export default $axios => ({
  login (payload) {
    console.log(payload)
    return $axios.post(`${resource}/login?type=1`, payload)
  }
})
