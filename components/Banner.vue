<!--
 * @Description:
 * @Author: huxianc
 * @Date: 2021-03-02 22:04:14
 * @LastEditors: huxianc
 * @LastEditTime: 2021-03-03 22:22:55
-->
<template>
  <div class="banner-container" :style="{'background-image':bgImg,height:height}">
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
  min-height: 28.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: repeat center center/100% 100%;
}
.banner-content {
  max-width: 75rem;
}
</style>
