<template>
<div>{{id}}</div>
</template>

<script type="text/ecmascript-6">

export default {
  name: 'in-video',
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    console.log('mounted', this)
    console.log('id', this.id)
  },
  created () {
    console.log('create', this)
  },
  methods: {
  },
  components: {
  }
}
</script>

<style>
</style>
