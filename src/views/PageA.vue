<template>
  <div class="page">
      PageA.vue
      <button @click="goBack">goBack</button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {

    }
  },
  components: {

  },
  methods: {
    goBack () {
      this.$router.goBack()
    }
  }
}
</script>

<style scoped>
.page {
    height: 100vh;
}
</style>
