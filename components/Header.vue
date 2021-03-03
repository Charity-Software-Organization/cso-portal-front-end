<template>
  <header class="header">
    <!-- 邮件、欢迎语、顶层分享 -->

    <el-row class="header-top-area">
      <el-col :span="8">
        <a class="email-link" href="example@163.com">
          <i class="fa fa-envelope" />邮件联系我们
        </a>
      </el-col>
      <el-col :span="8">
        <p class="welcome-message">
          欢迎你
        </p>
      </el-col>
      <el-col :span="8">
        <div class="social-icon">
          <a href=""><i class="lab la-facebook-f" /></a>
          <a href=""><i class="lab la-instagram" /></a>
          <a href=""><i class="lab la-twitter" /></a>
          <a href=""><i class="la la-dribbble" /></a>
        </div>
      </el-col>
    </el-row>

    <!-- logo、nav、donate-button -->

    <el-row class="header-area">
      <el-col :span="4">
        <a class="logo" href="#">
          <!-- <img src="assets/img/logo.png" alt=""> -->
          logo
        </a>
      </el-col>
      <el-col :span="16">
        <ul class="main-nav">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/">
              首页
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/about">
              关于
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/contact">
              联系
            </NuxtLink>
          </li>
        </ul>
      </el-col>
      <el-col :span="4">
        <cso-button> 捐赠</cso-button>
        <!-- <div class="donate-button">
          捐赠
        </div> -->
      </el-col>
      <!-- 响应式 -->
      <!-- <el-col :lg="0" :sm="4">
        <div class="menu-button">
          菜单
        </div>
      </el-col> -->
    </el-row>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {}
}
</script>

<style lang="scss">
.header {
  // 邮件、欢迎语、顶层分享
  .header-top-area {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 1em;
    background: #00b965;
    .email-link {
      display: block;
      text-align: center;
      color: #fff;
      font-family: 'Courier New', Courier, monospace;
      font-size: 10pt;
      .fa {
        margin-right: 0.5em;
      }
    }
    .welcome-message {
      display: block;
      text-align: center;
      font-family: 'Courier New', Courier, monospace;
      font-size: 10pt;
      color: #fff;
      font-weight: 700;
    }
    .social-icon {
      display: block;
      text-align: center;
      a {
        color: #fff;
      }
    }
  }
  // logo、main-nav、donate-button
  .header-area {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 1em;
    background: #fff;
    .logo {
      display: block;
      text-align: center;
    }
    .main-nav {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .nav-link {
        margin-right: 1em;
        color: #000;
      }
      .nav-link:hover {
        opacity: 1;
        visibility: visible;
        top: 80px;
      }
    }
    .donate-button {
      display: block;
      text-align: center;
      display: inline-block;
      background: #ffd857;
      color: #191919;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 1px;
      text-transform: capitalize;
      padding: 14px 28px;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      border-radius: 5px;
      -webkit-transition: 0.3s;
      transition: 0.3s;
    }
    .menu-button {
    }
  }
}
// .header-top-area {
//   background: #00b965;
//   padding: 7px;
// }

// .header-top-area p {
//   color: #fff;
//   font-size: 15px;
//   margin-bottom: 0;
// }

// .header-area.absolate-header {
//   position: absolute;
//   top: 0;
//   width: 100%;
//   z-index: 99;
//   padding: 10px 0;
//   -webkit-transition: 0.3s;
//   transition: 0.3s;
// }

// .header-area .is-sticky .sticky-area {
//   z-index: 999 !important;
//   -webkit-animation: slideInDown 0.6s forwards;
//   animation: slideInDown 0.6s forwards;
//   box-shadow: 0 3px 16px -2px #d0cece;
// }

// .header-area.theme-2 .is-sticky .sticky-area {
//   background: #10102d;
//   -webkit-box-shadow: none;
//   box-shadow: none;
// }

// .header-area.theme-3 .social i {
//   color: inherit;
// }

// .header-top-area.absolate-header {
//   position: absolute;
//   width: 100%;
//   top: 0;
//   left: 0;
//   z-index: 99;
//   background: transparent;
//   padding: 10px;
// }

// .header-top-area ul li a {
//   color: #fff;
//   font-size: 15px;
//   margin-right: 8px;
//   margin-top: 6px;
// }

// .header-top-area ul li a i {
//   margin-right: 5px;
// }

// .social-icon i {
//   color: #eee;
//   font-size: 20px;
//   padding: 7px;
// }

// /*Logo*/

// .logo {
//   width: 180px;
//   margin-top: 13px;
// }

// .logo img {
//   filter: none;
// }

// /*Main Menu */

// .header-area .navigation {
//   padding: 0px 30px;
//   background: #fff;
//   height: 80px;
// }

// .main-menu .navbar {
//   padding: 0;
// }

// .main-menu li.nav-item {
//   position: relative;
//   margin-right: 30px;
// }

// .main-menu li.nav-item:last-child {
//   margin-right: 0;
// }

// .main-menu .navbar-nav .nav-link {
//   font-size: 16px;
//   font-weight: 500;
//   color: #191919;
//   display: block;
//   padding: 30px 0;
// }

// .main-menu .navbar-nav .nav-link.active {
//   color: #00b965;
// }

// .main-menu li.nav-item:hover > a {
//   color: #00b965;
// }

// .header-area.theme-2 .navigation {
//   background: transparent;
// }

// .header-area.theme-2 .navigation ul li a {
//   color: #fff;
// }

// /*Menu Theme#3*/

// .header-area.theme-3 .navigation {
//   background: #fff;
//   margin-top: 35px;
//   border-radius: 7px;
// }

// .header-top-area:after {
//   position: absolute;
//   content: "";
//   width: 100%;
//   height: 100px;
//   top: 0;
//   left: 0;
//   background: #00b965;
//   z-index: -1;
// }

// .is-sticky .sticky-area {
//   background: #fff;
//   height: 80px;
// }

// .is-sticky .sticky-area .navigation {
//   margin-top: 0;
// }

// /*Dropdown Menu */

// .sub-menu {
//   position: absolute;
//   left: 0;
//   top: 104px;
//   width: 220px;
//   background-color: #fff;
//   opacity: 0;
//   visibility: hidden;
//   -webkit-transition: all 600ms ease;
//   transition: all 600ms ease;
//   z-index: 99;
//   -webkit-box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.05),
//     -2px 0px 5px 1px rgba(0, 0, 0, 0.05);
//   box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.05),
//     -2px 0px 5px 1px rgba(0, 0, 0, 0.05);
// }

// .sub-menu::after {
//   position: absolute;
//   content: "";
//   width: 100%;
//   height: 2px;
//   top: 0;
//   left: 0;
//   background: #ffd857;
//   visibility: hidden;
//   opacity: 0;
// }

// .main-menu li:hover .sub-menu {
//   opacity: 1;
//   visibility: visible;
//   top: 80px;
// }

// .main-menu li:hover .sub-menu::after {
//   opacity: 1;
//   visibility: visible;
// }

// .main-menu ul.sub-menu {
//   list-style: none;
//   margin: 0;
//   padding: 0;
// }

// .main-menu .sub-menu li {
//   display: block;
//   border-bottom: 1px solid #eee;
// }

// .main-menu .sub-menu li a {
//   font-size: 15px;
//   font-weight: 400;
//   display: block;
//   padding: 12px;
//   color: #191919;
//   -webkit-transition: 0.3s;
//   transition: 0.3s;
// }

// .theme-2 .main-menu ul.sub-menu li a {
//   color: #191919;
// }

// .main-menu .sub-menu li:hover > a {
//   color: #00b965;
// }

// .header-area.theme-2 .main-menu .sub-menu li:hover > a {
//   color: #00b965;
// }

// .dropdown-toggle::after {
//   display: none !important;
// }

// .navigation .navbar .navbar-nav .nav-item .sub-nav-toggler {
//   display: none;
// }

// /*Header Right Content */

// .header-area .main-btn {
//   margin-top: 14px;
// }

// .theme-3 .main-btn {
//   padding: 15px 20px;
// }

// .theme-3.header-area .main-btn {
//   margin-top: 18px;
// }

// .header-area .social {
//   padding: 0px;
//   margin-top: 28px;
// }

// @media only screen and (min-width: 768px) and (max-width: 991px) {
//   .header-area .social {
//     display: none;
//   }
// }

// @media only screen and (min-width: 576px) and (max-width: 767px) {
//   .header-area .social {
//     display: none;
//   }
// }

// @media (max-width: 575px) {
//   .header-area .social {
//     display: none;
//   }
// }

// .header-area .social i {
//   color: #fff;
// }

// .header-area .social i:before {
//   font-size: 20px;
//   padding: 6px;
// }

// .header-area .social ul {
//   margin: 15px 0;
//   padding: 0;
// }
</style>
