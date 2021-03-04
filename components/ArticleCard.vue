<!--
 * @Description:
 * @Author: huxianc
 * @Date: 2021-03-04 21:20:55
 * @LastEditors: huxianc
 * @LastEditTime: 2021-03-04 21:37:10
-->
<template>
  <el-col :span="8" :md="8" :sm="12" :xs="24">
    <div class="single-blog-item margin-y-default">
      <div class="blog-bg">
        <img src="assets/img/blog-bg-1.jpg" alt="">
        <div class="blog-content padding-default bg-white">
          <p class="blog-meta text-sm">
            Posted by <b class="text-yellow text-mini">Admin</b> on Mar 30, 2020
          </p>
          <h5 class="text-green margin-y-default">
            <a class="text-green text-md-1" href="#">Awareness of Community Response to COVID-19</a>
          </h5>
          <p>
            The provision of education relating to indigenous horticulture,psum
            dolor sit amet agriculture l
          </p>
          <a href="#" class="read-more text-green text-sm">Read More</a>
        </div>
      </div>
    </div>
  </el-col>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../assets/css/_variables";
.blog-bg{
  img{
    width: 100%;
    border-radius: 0.625rem 0.625rem 0 0;
  }

}
.blog-content {
  position: relative;
}

.blog-content h5 a {
  font-size: 1.25rem;
  line-height: 2.1875rem;
}

p.blog-meta {
  font-style: italic;
  font-size: 85%;
}

.single-blog-item h5 {
  font-size: 1.1875rem;
  line-height: 2rem;
}

.single-blog-item p {
  line-height: 2.125rem;
}

.read-more{
  padding-left: 2.8125rem;
  position: relative;
  transition: .3s ease;
  line-height: 1.875rem;
  &::before{
    position: absolute;
    content: "";
    top: 50%;
    left: 0;
    width: 1.875rem;
    height: 2px;
    background-color: $yellow;
  }
}
</style>
