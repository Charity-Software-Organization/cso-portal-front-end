<!--
 * @Description:
 * @Author: huxianc
 * @Date: 2021-03-02 22:04:14
 * @LastEditors: huxianc
 * @LastEditTime: 2021-03-04 21:59:24
-->
<template>
  <!-- div.page 页 -->
  <div class="page">
    <Header />
    <Nuxt />
    <Footer />
    <el-backtop />
  </div>
</template>

<script>
export default {
  mounted () {
    if (process.browser) {
      this.computedRem()
      window.addEventListener('resize', this.computedRem)
    }
  },
  methods: {
    computedRem () {
      const docEl = document.documentElement
      const width = document.body.clientWidth || document.documentElement.clientWidth

      if (width > 992) {
        docEl.style.fontSize = '16px'
      } else if (width > 768) {
        docEl.style.fontSize = '14px'
      } else {
        docEl.style.fontSize = '12px'
      }
    }
  }
}
</script>

<style lang="scss">
.page {
  min-height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  overflow-x: hidden;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
