<template>
  <!-- Footer Area -->

  <footer class="footer-area">
    <el-row class="footer-up">
      <el-col :sm="24" :md="12" :lg="6">
        <div class="logo">
          <a
            class="navbar-brand"
            href="#"
          ><img
            src="assets/img/logo-white.png"
            alt=""
          ></a>
        </div>
        <p>A fresh and modern theme <br>for all charity</p>
        <div class="contact-info">
          <h5>联系我们</h5>
          <p>example@163.com</p>
        </div>
      </el-col>
      <el-col :sm="24" :md="12" :lg="6">
        <h5>页面</h5>
        <ul>
          <li>
            <a>
              <NuxtLink to="/">主页</NuxtLink>
            </a>
            <a>
              <NuxtLink to="/about">关于</NuxtLink>
            </a>
            <!-- <a href="#">Our Causes</a>
            <a href="#">Our Events</a> -->
            <a>
              <NuxtLink to="/contact">联系</NuxtLink>
            </a>
          </li>
        </ul>
      </el-col>
      <el-col :sm="24" :md="12" :lg="6">
        <h5>友情链接</h5>
        <ul>
          <li>
            <a href="#">友站一</a>
            <a href="#">友站二</a>
            <a href="#">友站三</a>
            <a href="#">友站四</a>
            <a href="#">友站五</a>
          </li>
        </ul>
      </el-col>
      <el-col :md="12" :lg="6">
        <div class="subscribe-form">
          <h5>订阅</h5>
          <p>
            我们是一个由社区支持的组织。
          </p>
          <form action="index.html">
            <!-- 无法自定义样式 -->
            <!-- <el-input v-model="subscribeInput" type="email" placeholder="Email" >
                     <el-button slot="append"><i class="fa fa-paper-plane" /></el-button>
                  </el-input> -->
            <input v-model="subscribeInput" type="email" placeholder="Email">
            <button @click="subscribe()">
              <i class="fa fa-paper-plane" />
            </button>
          </form>
        </div>
      </el-col>
    </el-row>

    <el-row class="footer-bottom">
      <el-col :sm="24" :md="12" :lg="12">
        <p class="copyright-line">
          Copyright &copy; 2021. CSO All rights reserved.
        </p>
      </el-col>
      <el-col :sm="24" :md="12" :lg="12">
        <p class="privacy">
          隐私保护政策
        </p>
      </el-col>
      <el-col :sm="24" :md="12" :lg="12">
        <p class="beian">
          沪备****号
        </p>
      </el-col>
    </el-row>
  </footer>
  <!-- Scroll Top Area -->
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

<style lang="scss" scope>
input {
  background: #efc94c;
  border-color: #efc94c;
  margin-top: 30px;
  width: 100%;

  border: 1px solid #ddd;
  padding: 15px 15px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  margin-bottom: 20px;
  border-radius: 5px;
}

input::placeholder {
  color: #fff;
  font-size: 15px;
}

.footer-area {
  padding: 2em;
  background: #13303e;
  color: #fff;
  .footer-up {
  }
  .footer-bottom {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .privacy {
      margin-right: 1em;
    }
  }
}
//Footer Area CSS ==============
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
.subscribe-form el-input {
  background: #efc94c;
  border-color: #efc94c;
  margin-top: 30px;
}

.subscribe-form el-input::placeholder {
  color: #fff;
  font-size: 15px;
}

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
