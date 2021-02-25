<!--
 * @Description:
 * @Author: huxianc
 * @Date: 2021-02-25 21:06:29
 * @LastEditors: huxianc
 * @LastEditTime: 2021-02-25 22:09:06
-->
<template>
  <el-col :md="6" :sm="12" :xs="24" :span="6">
    <div
      class="single-service-item"
      :class="{ active: currentIndex === cardActiveIndex }"
    >
      <img :src="cardItem.imageSrc" alt="">
      <h5>{{ cardItem.title }}</h5>
      <p>{{ cardItem.desc }}</p>
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
  }
}
</script>

<style lang="scss" scoped>
.single-service-item {
  background: #fff;
  padding: 15px;
  text-align: center;
  margin-top: 30px;
  overflow: hidden;
  position: relative;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  border-radius: 7px;

  &.active {
    background: #00b965;
    color: #fff;

    h5,
    p {
      color: #fff;
    }

    h5:after {
      background-color: #ffd857;
    }
  }

  h5 {
    font-size: 22px;
    font-weight: 600;
    margin: 35px 0;
    position: relative;

    &:after {
      position: absolute;
      content: "";
      width: 70px;
      height: 3px;
      bottom: -21px;
      left: 50%;
      margin-left: -35px;
      background: #00b965;
    }
  }

  p {
    margin: 40px 0;
  }
}
</style>
