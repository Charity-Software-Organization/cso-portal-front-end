<!--
 * @Description:
 * @Author: huxianc
 * @Date: 2021-02-25 21:06:29
 * @LastEditors: huxianc
 * @LastEditTime: 2021-02-25 22:05:34
-->
<template>
  <div class="container">
    <el-row>
      <el-col :span="12">
        <div class="about-left">
          <img class="lazy-image loaded" :src="cardItem.imageSrc" alt="">
        </div>
      </el-col>
      <el-col :span="12">
        <div class="about-content">
          <div class="section-title">
            <h6>{{ cardItem.tips }}</h6>
            <h2>
              {{ cardItem.title }} <b>{{ cardItem.b }}</b>
            </h2>
          </div>

          <p>
            {{ cardItem.desc }}
          </p>

          <a href="#" class="main-btn">Discover More</a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'BigCard',
  props: {
    cardItem: {
      type: Object,
      default: () => ({
        imageSrc: 'assets/img/about-bg.jpg',
        tips: 'A little Bit More',
        title: 'We serve the ',
        b: 'huminity',
        desc:
          ' Lance was born on the Island of Occidental Mindoro, one of many thousands of Islands in the Philippines. His home town of Santa Cruz is lucky enough to have a community hospital but not the specialized plastic surgery teams needed to repair his Cleft Lip. Unfortunately,'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.about-left {
  margin-right: 60px;
  position: relative;
  &:before,
  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  &:before {
    bottom: -20px;
    right: 20px;
    background: #ffd857;
    z-index: -1;
  }

  &:after {
    position: absolute;

    top: 0;
    left: 0;
    background: #00b965;
    opacity: 0.3;
  }

  img {
    border-radius: 10px;
  }
}

.about-content {
  margin-top: 30px;
  -webkit-transition: transition all 300ms ease;
  transition: all 300ms ease;
}
</style>
