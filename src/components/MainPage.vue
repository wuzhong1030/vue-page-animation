<template>
  <div class="main-page">
      <header class="header">
        <svg-icon icon-class="back" @click="handleBack"></svg-icon>
      </header>
      <transition :name="transitionName">
          <router-view class="sub-view"></router-view>
      </transition>
      <footer class="footer">
        <router-link to="/pageA" tag="div">moduleA</router-link>
        <router-link to="/pageB" tag="div">moduleB</router-link>
      </footer>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  beforeRouteUpdate (to, from, next) {
    let isBack = this.$router.isBack
    if (isBack) {
      this.transitionName = 'slide-right'
    } else {
      this.transitionName = 'slide-left'
    }
    this.$router.isBack = false
    next()
  },
  methods: {
    handleBack () {
      this.$router.goBack()
    }
  },
  components: {}
}
</script>

<style scoped lang="postcss">
.main-page {
  position: relative;
  height: 100vh;
  .header {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    width: 100%;
    height: 40px;
    background: #e4cf70;
  }
  .footer {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    width: 100%;
    background: #e4cf70;
    .tab {
      color: #827777;
    }
  }
  .sub-view {
    position: absolute;
    top: 40px;
    bottom: 50px;
    width: 100%;
    transition: all 0.5s ease-in-out;
  }
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 1;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
}
</style>
