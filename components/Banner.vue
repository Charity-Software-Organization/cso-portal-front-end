<template>
  <div class="banner-container" :style="{'background-image':bgImg}">
    <div class="banner-content text-center">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    height: {
      type: [Number, String],
      default: 'auto'
    },
    bgImg: String
  }
}
</script>

<style lang="scss" scoped>
.banner-container {
  width: 100%;
  min-height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: repeat center center/100% 100%;
}
.banner-content {
  max-width: 1140px;
}
</style>
