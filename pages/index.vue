<template>
  <div>
    <banner height="100vh">
      <h6 class="text-yellow text-sm">
        DONATION IS THE BEST HUMINITY
      </h6>
      <h1 class="text-lg">
        We stands for <br>
        <span class="text-yellow">Greatest</span> Causes
      </h1>
      <cso-button style="margin-top: 20px">
        View Causes
      </cso-button>
    </banner>
    <!-- About Area-->
    <div class="padding-y-lg">
      <big-card v-for="item in bigCardList" :key="item.desc" />
    </div>
    <!-- Feature Area -->
    <div class="padding-bottom-lg-1">
      <div class="container">
        <el-row :gutter="30">
          <feature-card
            v-for="item in featureCardList"
            :key="item.title"
            :card-item="item"
          />
        </el-row>
      </div>
    </div>
    <!-- Service Area-->
    <div class="bg-light padding-y-lg">
      <div class="container">
        <el-row>
          <el-col :span="12" :offset="6">
            <div class="text-center">
              <h6 class="text-green text-sm">
                What We Do
              </h6>
              <h2 class="margin-y-default text-lg">
                We Can Save More <b class="text-yellow">Life</b>
              </h2>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <card
            v-for="(item, index) in cardList"
            :key="item.title"
            :card-active-index="cardActiveIndex"
            :current-index="index"
            :card-item="item"
            @mouseover.native="handleChangeActiveCardIndex(index)"
          />
        </el-row>
      </div>
    </div>
    <!-- Causes Area-->
    <div class="padding-y-lg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <div class="section-title">
              <h6 class="text-green text-sm">
                We are fighting for
              </h6>
              <h2 class="text-lg">
                Recent <b class="text-yellow">Causes</b>
              </h2>
            </div>
          </div>
        </div>
        <el-row :gutter="30">
          <cause-card v-for="item in 3" :key="`${item}-2`" />
        </el-row>
        <el-col :span="12" :offset="6" class="text-center">
          <cso-button plain>
            View All Cases
          </cso-button>
        </el-col>
      </div>
    </div>

    <!-- Acheivement Area -->
    <achievement />

    <!--Events Area -->
    <div class="event-area section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 mar-bt-30 text-center">
            <div class="section-title">
              <h6 class="text-green text-sm">
                You can join us
              </h6>
              <h2 class="margin-y-default text-lg">
                Our <b class="text-yellow">Events</b>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Blog Area-->
    <div class="blog-area gray-bg section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 mar-bt-30 text-center">
            <div class="section-title">
              <h6 class="text-green text-sm">
                Everything Changes
              </h6>
              <h2 class="margin-y-default text-lg">
                Latest <b class="text-yellow">Article</b>
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div v-for="item in 3" :key="`${item}-1`" class="col-lg-4 col-md-6">
            <div class="single-blog-item">
              <div class="blog-bg">
                <img src="assets/img/blog-bg-1.jpg" alt="">
                <div class="blog-content">
                  <p class="blog-meta">
                    Posted by <b>Admin</b> on Mar 30, 2020
                  </p>
                  <h5><a href="#">Awareness of Community Response to COVID-19</a></h5>
                  <p>
                    The provision of education relating to indigenous horticulture,psum
                    dolor sit amet agriculture l
                  </p>
                  <a href="#" class="read-more">Read More</a>
                </div>
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
  name: 'Home',
  data () {
    return {
      bigCardList: [
        {
          imageSrc: 'assets/img/about-bg.jpg',
          tips: 'A little Bit More',
          title: 'We serve the ',
          b: 'huminity',
          desc:
            ' Lance was born on the Island of Occidental Mindoro, one of many thousands of Islands in the Philippines. His home town of Santa Cruz is lucky enough to have a community hospital but not the specialized plastic surgery teams needed to repair his Cleft Lip. Unfortunately,'
        }
      ],
      featureCardList: [
        {
          iconClass: 'flaticon-donation-1',
          title: 'Our Mission',
          desc: 'Poor people live in unsafe place consectetur adipisicing'
        },
        {
          iconClass: 'flaticon-money',
          title: 'Our Program',
          desc: 'Poor people live in unsafe place consectetur adipisicing'
        },
        {
          iconClass: 'flaticon-charity',
          title: 'Our Vision',
          desc: 'Poor people live in unsafe place consectetur adipisicing'
        }
      ],
      cardActiveIndex: 0,
      cardList: [
        {
          imageSrc: 'assets/img/service-bg-1.jpg',
          title: 'Charity for Education',
          desc: 'Pure Water dolor sit amet, consectetur adipisicing elit.'
        },
        {
          imageSrc: 'assets/img/service-bg-2.jpg',
          title: 'Charity for Food',
          desc: 'Pure Water dolor sit amet, consectetur adipisicing elit.'
        },
        {
          imageSrc: 'assets/img/service-bg-3.jpg',
          title: 'Charity for Health',
          desc: 'Pure Water dolor sit amet, consectetur adipisicing elit.'
        },
        {
          imageSrc: 'assets/img/service-bg-4.jpg',
          title: 'Charity for Cloths',
          desc: 'Pure Water dolor sit amet, consectetur adipisicing elit.'
        }
      ]
    }
  },
  methods: {
    handleChangeActiveCardIndex (index) {
      if (this.cardActiveIndex === index) {
        return
      }
      this.cardActiveIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
h6 {
  text-transform: uppercase;
  letter-spacing: 1px;
}
h2 {
  letter-spacing: 1px;
  line-height: 60px;
  font-weight: 500;
}
</style>
