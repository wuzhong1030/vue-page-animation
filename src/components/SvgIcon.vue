<template>
  <svg :class="svgClass" aria-hidden="true" @click="handleClick">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'svg-icon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    },
    svgClass () {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1.2em;
  height: 1.2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
