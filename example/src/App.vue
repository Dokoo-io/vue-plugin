<template>
  <div id="app">
    <pre v-text="result"></pre>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      result: null
    }
  },
  async created () {
    const feed = this.$dokoo.cms.feeds.getFeed('0dacdbc8-9ec9-4418-b5e5-796968550a87')
    this.result = await feed.get()
  }
}
</script>
