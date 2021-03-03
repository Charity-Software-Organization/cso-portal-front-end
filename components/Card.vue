<!--
 * @Description:
 * @Author: huxianc
 * @Date: 2021-02-25 21:06:29
 * @LastEditors: huxianc
 * @LastEditTime: 2021-03-03 22:23:28
-->
<template>
  <el-col :md="6" :sm="12" :xs="24" :span="6">
    <div class="single-service-item padding-mini margin-top-md" :class="activeClass">
      <img :src="cardItem.imageSrc" alt="">
      <h5 class="text-md-1 margin-y-md-1">
        {{ cardItem.title }}
      </h5>
      <p class="margin-y-md-2">
        {{ cardItem.desc }}
      </p>
    </div>
  </el-col>
</template>

<script>
export default {
  name: 'Card',
  props: {
    cardItem: {
      type: Object,
      default: () => ({
        imageSrc: 'assets/img/service-bg-1.jpg',
        title: 'Charity for Education',
        desc: 'Pure Water dolor sit amet, consectetur adipisicing elit.'
      })
    },
    cardActiveIndex: {
      type: Number,
      default: 0
    },
    currentIndex: { type: Number, required: true }
  },
  computed: {
    activeClass () {
      if (this.cardActiveIndex === this.currentIndex) {
        return ['active', 'bg-green']
      } else {
        return ['bg-white']
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/_variables";
.single-service-item {
  text-align: center;
  overflow: hidden;
  position: relative;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  border-radius: 0.4375rem;

  &.active {
    color: $white;

    h5,
    p {
      color: $white;
    }

    h5:after {
      background-color: $yellow;
    }
  }

  h5 {
    font-weight: 600;
    position: relative;

    &:after {
      position: absolute;
      content: "";
      width: 4.375rem;
      height: 3px;
      bottom: -1.3125rem;
      left: 50%;
      margin-left: -2.1875rem;
      background: $green;
    }
  }
}
</style>
