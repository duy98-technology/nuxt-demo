import abc from '~/repositories/Repository'

export default (ctx, inject) => {
  inject('repositories', abc(ctx.$axios))
}
