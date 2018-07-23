<template>
  <div class="main-page">
      <div class="header"></div>
      <transition :name="transitionName">
          <router-view class="sub-view"></router-view>
      </transition>
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
    console.log(isBack)
    if (isBack) {
      this.transitionName = 'slide-right'
    } else {
      this.transitionName = 'slide-left'
    }
    this.$router.isBack = false
    next()
  },
  components: {}
}
</script>

<style scoped>
.header {
  position: absolute;
  height: 40px;
}
.sub-view {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-in-out;
}

.slide-left-enter,
.slide-right-leave-avtive {
  opacity: 0;
  transform: translate3d(50px, 0, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-50px, 0, 0);
}
</style>
