export const About = () => import('../../components/About.vue' /* webpackChunkName: "components/about" */).then(c => wrapFunctional(c.default || c))
export const Languages = () => import('../../components/Languages.vue' /* webpackChunkName: "components/languages" */).then(c => wrapFunctional(c.default || c))
export const Libras = () => import('../../components/Libras.vue' /* webpackChunkName: "components/libras" */).then(c => wrapFunctional(c.default || c))
export const Logo = () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const Repositories = () => import('../../components/Repositories.vue' /* webpackChunkName: "components/repositories" */).then(c => wrapFunctional(c.default || c))
export const Trajectories = () => import('../../components/Trajectories.vue' /* webpackChunkName: "components/trajectories" */).then(c => wrapFunctional(c.default || c))
export const TimelineItemScript = () => import('../../components/TimelineItem/TimelineItem.script.js' /* webpackChunkName: "components/timeline-item-script" */).then(c => wrapFunctional(c.default || c))
export const TimelineItem = () => import('../../components/TimelineItem/TimelineItem.vue' /* webpackChunkName: "components/timeline-item" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
