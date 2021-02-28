<template>
  <!-- Footer Area -->
  <div>
    <footer class="footer-area">
      <div class="container">
        <div class="footer-up">
          <el-row>
            <el-col :sm="24" :md="12" :lg="6">
              <div class="logo">
                <a class="navbar-brand" href="#"><img src="assets/img/logo-white.png" alt=""></a>
              </div>
              <p>A fresh and modern theme <br>for all charity</p>
              <div class="contact-info">
                <h5>Contact Us</h5>
                <p>XXX </p>
              </div>
            </el-col>
            <el-col :sm="24" :md="12" :lg="6">
              <h5>Useful Links</h5>
              <ul>
                <li>
                  <a>
                    <NuxtLink to="/">Home</NuxtLink>
                  </a>
                  <a>
                    <NuxtLink to="/about">About Us</NuxtLink>
                  </a>
                  <a href="#">Our Causes</a>
                  <a href="#">Our Events</a>
                  <a>
                    <NuxtLink to="/contact">Contact</NuxtLink>
                  </a>
                </li>
              </ul>
            </el-col>
            <el-col :sm="24" :md="12" :lg="6">
              <h5>Our Causes</h5>
              <ul>
                <li>
                  <a href="#">Water Purify</a>
                  <a href="#">Food Collect</a>
                  <a href="#">Health Fund</a>
                  <a href="#">Free Eduction</a>
                  <a href="#">Nutritution Fact</a>
                </li>
              </ul>
            </el-col>
            <el-col :md="12" :lg="6">
              <div class="subscribe-form">
                <h5>Subscribe</h5>
                <p>Charry is a nonproﬁt organization supported by community leaders,</p>
                <form action="index.html">
                  <!-- 无法自定义样式 -->
                  <!-- <el-input v-model="subscribeInput" type="email" placeholder="Email" >
                     <el-button slot="append"><i class="fa fa-paper-plane" /></el-button>
                  </el-input> -->
                  <input v-model="subscribeInput" type="email" placeholder="Email">
                  <button @click="subscribe()"><i class="fa fa-paper-plane" /></button>
                </form>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="footer-bottom">
          <el-row type="flex" justify="center" align="center">
            <el-col :sm="24" :md="12" :lg="12">
              <p class="copyright-line">
                Copyright &copy; 2021. CSO All rights reserved.
              </p>
            </el-col>
            <el-col :sm="24" :md="12" :lg="12">
              <p class="privacy" />
            </el-col>
          </el-row>
        </div>
      </div>
    </footer>
    <!-- Scroll Top Area -->
    <el-backtop />
  <!-- <div id="nav">
    <h1>Footer</h1>
    <NuxtLink to="/">Home</NuxtLink>
    <span>|</span>
    <NuxtLink to="/about">About</NuxtLink>
    <span>|</span>
    <NuxtLink to="/contact">Contact</NuxtLink>
  </div> -->
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      subscribeInput: ''
    }
  },
  // 订阅按钮发起的事件，获取subscribeInput值
  subscribe: () => {
    console.log(111)
  }
}
</script>

<style scope>
/* Footer Area CSS ============== */
.footer-area {
  background: #13303e;
  color: #fff;
}

.footer-area .logo .navbar-brand {
  color: #fff;
}

.footer-area h5 {
  margin: 20px 0;
  color: #ffd857;
}

.footer-area p {
  color: #eee;
  margin-top: 20px;
}

.footer-area ul li a {
  display: block;
  color: #eee;
  padding: 7px 0;
}

.footer-area ul li a:hover {
  color: #efc94c;
}

.subscribe-form button {
  width: 40px;
  height: 40px;
  font-size: 20px;
  background-color: #efc94c;
  color: #fff;
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
  border: 0;
  position: absolute;
  bottom: 27px;
  right: 5px;
  cursor: pointer;
}

.subscribe-form {
  position: relative;
}

.subscribe-form input {
  background: #efc94c;
  border-color: #efc94c;
  margin-top: 30px;
}

.subscribe-form input::placeholder {
  color: #fff;
  font-size: 15px;
}

/* 是否为shodow root？ */
/* .subscribe-form el-input {
  background: #efc94c;
  border-color: #efc94c;
  margin-top: 30px;
}

.subscribe-form el-input::placeholder {
  color: #fff;
  font-size: 15px;
} */

.footer-up {
  padding: 80px 0;
}

.footer-bottom {
  padding: 20px 0;
  border-top: 1px solid #898b8e;
}

p.privacy {
  text-align: right;
}
</style>
