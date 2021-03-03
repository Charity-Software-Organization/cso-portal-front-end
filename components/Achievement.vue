<!--
 * @Description:
 * @Author: huxianc
 * @Date: 2021-03-03 09:54:53
 * @LastEditors: huxianc
 * @LastEditTime: 2021-03-03 22:16:09
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
              <countTo
                ref="count"
                :start-val="0"
                :end-val="item.num"
                :duration="2000"
                separator=","
              />
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
      shouldStart: false,
      acheivementList: [
        { num: 324, title: 'Volunteers' },
        { num: 984, title: 'Campaign' },
        { num: 750, title: 'Donation' },
        { num: 820, title: 'Awards' }
      ]
    }
  },
  mounted () {
    if (process.browser) {
      window.addEventListener('scroll', this.computedHeight)
      this.$once('hook:beforeDestroy', () => {
        window.removeEventListener('scroll', this.computedHeight)
      })
    }
  },
  methods: {
    computedHeight () {
      const rect = this.$el.getBoundingClientRect()
      const topToBottom = rect.top - window.innerHeight + rect.height / 2 <= 0
      const bottomToTop = -rect.top > rect.height / 2
      if (topToBottom && !bottomToTop) {
        if (this.shouldStart) {
          this.start()
        }
        this.shouldStart = false
      } else if (bottomToTop) {
        this.shouldStart = true
        this.start()
      } else {
        this.shouldStart = true
      }
    },
    start () {
      this.$refs.count.forEach((item) => {
        item.start()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.achievement-area {
  height: 18.75rem;
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
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 400;
    &::before {
      position: absolute;
      content: "";
      width: 2.5rem;
      height: 3px;
      top: -0.5rem;
      left: 50%;
      background: #efc94c;
      margin-left: -1.25rem;
    }
  }
}
</style>

<style lang="scss" scoped>
@media (max-width: 768px) {
  .achievement-area{
    height: auto;
    padding: 1.25rem 0;
  }
}
</style>
