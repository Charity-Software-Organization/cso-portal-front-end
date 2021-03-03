<!--
 * @Description:
 * @Author: huxianc
 * @Date: 2021-02-28 20:16:00
 * @LastEditors: huxianc
 * @LastEditTime: 2021-03-03 22:27:07
-->
<template>
  <el-col :md="8" :sm="12" :xs="24" :span="8">
    <div
      class="single-program-item padding-mini text-white text-center margin-top-md margin-bottom-md-2"
      :class="[index % 2 === 0 ? 'bg-green' : 'bg-yellow']"
    >
      <i :class="item.icon" />
      <h5 class="text-md text-bold">
        {{ item.title }}
      </h5>
      <p class="text-white">
        {{ item.desc }}
      </p>
    </div>
  </el-col>
</template>

<script>
export default {
  name: 'ProgramItem',
  props: {
    index: {
      type: Number,
      required: true
    },
    item: {
      type: Object,
      default: () => ({
        icon: 'flaticon-food-donation',
        title: 'Healthy Food',
        desc: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/_variables";
.single-program-item {
  position: relative;
  z-index: 1;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  border-radius: 0.9375rem;
  i {
    position: relative;
    z-index: 1;
    &:before {
      font-size: 60px;
      color: $white;
    }
  }
  h5 {
    margin: 1.75rem 0;
    position: relative;
    color: $white;
    &::after {
      position: absolute;
      content: "";
      width: 4.375rem;
      height: 3px;
      bottom: -1.125rem;
      left: 50%;
      margin-left: -2.1875rem;
    }
  }
}
.bg-green{
  h5:after{
     background: $yellow;
  }
}
.bg-yellow{
  h5:after{
     background: $green;
  }
}
</style>
