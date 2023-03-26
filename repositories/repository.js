import AuthRepository from '~/repositories/AuthRepository'

export default ($axios) => {
  return {
    auth: AuthRepository($axios)
  }
}
