<template>
  <div class="header">
    <!-- 邮件、欢迎语、顶层分享 -->
    <div class="header-top-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-12 col-sm-12">
            <div class="site-info">
              <ul>
                <li><a href="Jameszow@163.com"><i class="fa fa-envelope" /> XXX</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <p class="welcome-message">
              Welcome to the <b>Charity</b> Software Organization
            </p>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 text-right">
            <div class="social-icon">
              <a href=""><i class="lab la-facebook-f" /></a>
              <a href=""><i class="lab la-instagram" /></a>
              <a href=""><i class="lab la-twitter" /></a>
              <a href=""><i class="la la-dribbble" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- logo、nav、donate-button -->
    <div class="header-area">
      <div class="sticky-area">
        <div class="navigation">
          <div class="row">
            <div class="col-lg-2">
              <div class="logo">
                <a class="navbar-brand" href="#"><img src="assets/img/logo.png" alt=""></a>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="main-menu">
                <nav class="navbar navbar-expand-lg">
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon" />
                    <span class="navbar-toggler-icon" />
                    <span class="navbar-toggler-icon" />
                  </button>
                  <div id="navbarSupportedContent" class="collapse navbar-collapse justify-content-center">
                    <ul class="navbar-nav m-auto">
                      <li class="nav-item">
                        <NuxtLink class="nav-link" to="/">
                          Home
                        </NuxtLink>
                      </li>
                      <li class="nav-item">
                        <NuxtLink class="nav-link" to="/about">
                          About
                        </NuxtLink>
                      </li>
                      <li class="nav-item">
                        <NuxtLink class="nav-link" to="/contact">
                          Contact
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <div class="col-lg-2 text-right">
              <div class="header-right-content">
                <a href="#" class="main-btn">Donate Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {

  }
};
</script>

<style>
/* Header Area CSS
======================= */

.header-top-area {
    background: #00b965;
    padding: 7px;
}

.header-top-area p {
    color: #fff;
    font-size: 15px;
    margin-bottom: 0;
}

.header-area.absolate-header {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 99;
    padding: 10px 0;
    -webkit-transition: 0.3s;
    transition: 0.3s;
}

.header-area .is-sticky .sticky-area {
    z-index: 999 !important;
    -webkit-animation: slideInDown 0.6s forwards;
    animation: slideInDown 0.6s forwards;
    box-shadow: 0 3px 16px -2px #d0cece;
}

.header-area.theme-2 .is-sticky .sticky-area {
    background: #10102d;
    -webkit-box-shadow: none;
    box-shadow: none;
}

.header-area.theme-3 .social i {
    color: inherit;
}

.header-top-area.absolate-header {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 99;
    background: transparent;
    padding: 10px;
}

.header-top-area ul li a {
    color: #fff;
    font-size: 15px;
    margin-right: 8px;
    margin-top: 6px;
}

.header-top-area ul li a i {
    margin-right: 5px;
}

.social-icon i {
    color: #eee;
    font-size: 20px;
    padding: 7px;
}
</style>
