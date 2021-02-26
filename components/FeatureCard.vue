<!--
 * @Description:
 * @Author: huxianc
 * @Date: 2021-02-25 21:06:29
 * @LastEditors: huxianc
 * @LastEditTime: 2021-02-25 22:12:12
-->
<template>
  <el-col :span="8" :md="8" :sm="12" :xs="24">
    <div class="single-feature-item">
      <div class="feature-icon">
        <i :class="cardItem.iconClass" />
      </div>
      <h5>{{ cardItem.title }}</h5>
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
  text-align: center;
  padding: 25px;
  height: 300px;
  position: relative;
  z-index: 1;
  h5 {
    font-size: 24px;
    font-weight: 600;
    margin: 20px 0;
  }
  i {
    position: relative;
    &:after {
      position: absolute;
      content: "";
      top: -2px;
      left: -35px;
      width: 70px;
      height: 70px;
      background: $yellow;
      border-radius: 50%;
      z-index: -1;
      opacity: 0.9;
      transition: 0.3s;
    }
  }
}

.feature-icon i:before {
  font-size: 60px;
  font-weight: 400;
  color: $green;
}

.feature-icon:hover i:after {
  width: 90px;
  height: 90px;
  opacity: 0.8;
  left: -18px;
  top: 0;
}
</style>
