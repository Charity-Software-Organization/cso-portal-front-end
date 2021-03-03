<!--
 * @Description:
 * @Author: huxianc
 * @Date: 2021-03-03 09:54:53
 * @LastEditors: huxianc
 * @LastEditTime: 2021-03-03 10:11:04
-->
<template>
  <div class="achievement-area bg-green">
    <div class="container">
      <el-row>
        <el-col
          v-for="item in acheivementList"
          :key="item.title"
          class="text-center"
          :span="6"
          :md="6"
          :sm="12"
          :xs="24"
        >
          <div class="single-counter-box text-white">
            <div class="counter-number text-white text-lg margin-bottom-mini">
              <span>{{ item.num }}</span>
            </div>
            <h6 class="text-sm padding-top-mini">
              {{ item.title }}
            </h6>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      acheivementList: [
        { num: 324, title: 'Volunteers' },
        { num: 984, title: 'Campaign' },
        { num: 750, title: 'Donation' },
        { num: 820, title: 'Awards' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.achievement-area {
  background: #00b965;
  height: 300px;
  background-size: cover;
  background-position: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  z-index: 1;
}

.single-counter-box {
  font-weight: 600;
  h6 {
    position: relative;
    text-transform:uppercase;
    letter-spacing: 2px;
    font-weight: 400;
    &::before {
      position: absolute;
      content: "";
      width: 40px;
      height: 3px;
      top: -8px;
      left: 50%;
      background: #efc94c;
      margin-left: -20px;
    }
  }
}
</style>
