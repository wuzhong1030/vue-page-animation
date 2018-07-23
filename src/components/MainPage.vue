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
    return {}
  },
  components: {}
}
</script>

<style scoped>
.header {
  position: absolute;
  height: 40px;
  background: #123456;
}
.sub-view {
  position: absolute;
  display: block;
  transition: all 0.5s ease-in-out;
}
.slide-left-enter,
.slide-right-leave-avtive {
  opacity: 0;
  transform: translateX(50px, 0, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translateX(-50px, 0, 0);
}
</style>
