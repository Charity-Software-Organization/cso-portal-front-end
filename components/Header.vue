<template>
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

</template>

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
