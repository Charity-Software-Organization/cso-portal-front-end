<template>

<div>


    <!-- Header Top Area -->
    <div class="header-top-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-12 col-sm-12">
                    <div class="site-info">
                        <ul>
                            <li><a href="Jameszow@163.com"><i class="fa fa-envelope"></i> XXX</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <p class="welcome-message">Welcome to the <b>Charity</b> Software Organization</p>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 text-right">
                    <div class="social-icon">
                        <a href=""><i class="lab la-facebook-f"></i></a>
                        <a href=""><i class="lab la-instagram"></i></a>
                        <a href=""><i class="lab la-twitter"></i></a>
                        <a href=""><i class="la la-dribbble"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!-- Header Area -->

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
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									<span class="navbar-toggler-icon"></span>
									<span class="navbar-toggler-icon"></span>
									<span class="navbar-toggler-icon"></span>
								</button>

                                <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                                    <ul class="navbar-nav m-auto">
                                        <li class="nav-item"><NuxtLink class="nav-link" to="/">Home</NuxtLink></li>
                                        <li class="nav-item"><NuxtLink class="nav-link" to="/about">About</NuxtLink></li>
                                        <li class="nav-item"><NuxtLink class="nav-link" to="/contact">Contact</NuxtLink></li>
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
  name: "Header",
  props: {
    // cardItem: {
    //   type: Object,
    //   default: () => ({
    //     imageSrc: "assets/img/service-bg-1.jpg",
    //     title: "Charity for Education",
    //     desc: "Pure Water dolor sit amet, consectetur adipisicing elit.",
    //   }),
    // },
    // cardActiveIndex:{
    //   type:Number,
    //   default:0
    // },
    // currentIndex:Number
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
