<template>
 <!-- Footer Area -->
<div>
    <footer class="footer-area">
        <div class="container">
            <div class="footer-up">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="logo">
                            <a class="navbar-brand" href="#"><img src="assets/img/logo-white.png" alt=""></a>
                        </div>
                        <p>A fresh and modern theme <br>for all charity</p>

                        <div class="contact-info">
                            <h5>Contact Us</h5>
                            <p>XXX </p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 com-sm-12">
                        <h5>Useful Links</h5>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                                <a href="#">About Us</a>
                                <a href="#">Our Causes</a>
                                <a href="#">Our Events</a>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
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
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="subscribe-form">
                            <h5>Subscribe</h5>
                            <p>Charry is a nonproﬁt organization supported by community leaders,</p>
                            <form action="index.html">
                                <input type="email" placeholder="Email">
                                <button><i class="fa fa-paper-plane"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <p class="copyright-line">Copyright &copy; 2021. CSO All rights reserved.</p>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <p class="privacy"></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!-- Scroll Top Area -->
    <el-backtop>
       <a href="#top" class="go-top" style="display: block;"><i class="fa fa-angle-up"></i></a>
    </el-backtop>
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
  name: 'Footer'
}
</script>

<style>


/* Scrolltop section */
.go-top {
    background-color: #EFC94C;
    color: #FFF;
    width: 40px;
    height: 40px;
    border-radius: 0;
    /* bottom: 4em;
    right: 2em; */
    font-size: 20px;
    line-height: 43px;
    text-align: center;
    text-decoration: none;
    display: none;
    position: fixed;
    -webkit-transition: .3s;
    transition: .3s;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .go-top {
        width: 25px;
        height: 25px;
        /* bottom: 5em;
        right: 2em; */
        font-size: 15px;
        line-height: 26px;
    }
}

@media (max-width: 575px) {
    .go-top {
        width: 25px;
        height: 25px;
        /* bottom: 5em;
        right: 2em; */
        font-size: 15px;
        line-height: 26px;
    }
}

.go-top i {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    color: #fff;
}

.go-top:hover {
    background-color: #e09e27;
    color: #fff;
}
</style>
