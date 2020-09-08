import store from '@/store'

const { body } = document
const WIDTH = 992 // refer to Bootstrap's responsive design

export default {
  watch: {
    $route (oldRoute, newRoute) {
      console.log('oldRoute:', oldRoute, 'newRoute:')
    }
  },
  created () {
    console.log(this, 'created')
  },
  beforeMount () {
    console.log(this, 'beforeMount')
    window.addEventListener('resize', this.$_resizeHandler)
  },
  beforeDestroy () {
    console.log(this, 'beforeDestroy')
    window.removeEventListener('resize', this.$_resizeHandler)
  },
  mounted () {
    const isMobile = this.$_isMobile()
    if (isMobile) {
      store.dispatch('settings/toggleDevice', 'mobile')
    }
    console.log(this, 'mounted')
  },
  methods: {
    // use $_ for mixins properties
    // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
    $_isMobile () {
      const rect = body.getBoundingClientRect()
      return rect.width - 1 < WIDTH
    },
    $_resizeHandler () {
      if (!document.hidden) {
        console.log('device:', this.device)
        console.log('isMobile:', this.$_isMobile())
        const isMobile = this.$_isMobile()
        store.dispatch('settings/toggleDevice', isMobile ? 'mobile' : 'desktop')
      }
    }
  }
}
