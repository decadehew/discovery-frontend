<template>
  <div>
    <Tutorial :lists="lists" />
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      lists: []
    }
  },
  mounted () {
    this.callApi()
  },
  methods: {
    async callApi () {
      this.lists = await this.$axios.$get('/api/intro')
    }
  }
}
</script>
