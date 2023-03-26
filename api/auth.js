export default {
  login (data) {
    return $axios.post('/auth/login?type=1', {
      ...data
    })
  }
}
