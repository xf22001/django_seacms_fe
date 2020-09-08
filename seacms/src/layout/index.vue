<template>
  <div class="app-wrapper">
    <div class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <navbar ref="nav" />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script>
import { Navbar, AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import seacms from '@/api/seacms'

export default {
  name: 'layout',
  components: {
    Navbar,
    AppMain
  },
  mixins: [ResizeMixin],
  computed: {
    device () {
      return this.$store.state.settings.device
    },
    fixedHeader () {
      return this.$store.state.settings.fixedHeader
    }
  },
  mounted () {
    console.log(this, 'mounted')
    window.addEventListener('scroll', this.handleScroll)
    console.log('his.$store.state.settings.csrfToken', this.$store.state.settings.csrfToken)
    this.csrfToken()
  },
  destroyed () {
    console.log(this, 'destroyed')
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleClickOutside () {
      console.log('handleClickOutside')
    },
    handleScroll () {
      // 得到页面滚动的距离
      console.log(this, 'window.pageYOffset:' + window.pageYOffset)
      console.log(this, 'document.documentElement.scrollTop:' + document.documentElement.scrollTop)
      console.log(this, 'document.body.scrollTop:' + document.body.scrollTop)
      console.log(this.$refs.nav, 'nav:', this.$refs.nav.$el.getBoundingClientRect())
    },
    csrfToken () {
      seacms.csrfToken().then(response => {
        console.log('csrf token', response)
        if (response.error === '') {
          this.$store.dispatch('settings/setCsrfToken', response.token)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: 100%;
    transition: width 0.28s;
  }

  .fixed-header {
    width: 100%;
  }
</style>
