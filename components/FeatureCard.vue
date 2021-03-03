<!--
 * @Description:
 * @Author: huxianc
 * @Date: 2021-02-25 21:06:29
 * @LastEditors: huxianc
 * @LastEditTime: 2021-03-03 22:22:29
-->
<template>
  <el-col :span="8" :md="8" :sm="12" :xs="24">
    <div class="single-feature-item padding-sm text-center">
      <div class="feature-icon">
        <i :class="cardItem.iconClass" />
      </div>
      <h5 class="text-md margin-y-default">
        {{ cardItem.title }}
      </h5>
      <p>{{ cardItem.desc }}</p>
    </div>
  </el-col>
</template>

<script>
export default {
  name: 'FeatureCard',
  props: {
    cardItem: {
      type: Object,
      default: () => ({
        iconClass: 'flaticon-donation-1',
        title: 'Our Mission',
        desc: 'Poor people live in unsafe place consectetur adipisicing'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/_variables";
.single-feature-item {
  height: 300px;
  position: relative;
  z-index: 1;
  h5 {
    font-weight: 600;
  }
  i {
    position: relative;
    &:after {
      position: absolute;
      content: "";
      top: -2px;
      left: -2.1875rem;
      width: 4.375rem;
      height: 4.375rem;
      background: $yellow;
      border-radius: 50%;
      z-index: -1;
      opacity: 0.9;
      transition: 0.3s;
    }
  }
}

.feature-icon i:before {
  font-size: 3.75rem;
  font-weight: 400;
  color: $green;
}

.feature-icon:hover i:after {
  width: 5.625rem;
  height: 5.625rem;
  opacity: 0.8;
  left: -1.125rem;
  top: 0;
}
</style>
