<template>
  <div class="about-page">
    <!-- About Area-->
    <div class="about-area section-padding">
      <big-card v-for="item in bigCardList" :key="item.desc" />
    </div>
    <!-- Feature Area -->
    <div class="feature-area">
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
    <!--Programs Area -->

    <div class="program-area gray-bg section-padding">
      <div class="container">
        <el-row>
          <el-col :span="12" :offset="6" class="text-center">
            <div class="section-title">
              <h6 class="text-green">
                You can join us
              </h6>
              <h2>Our <b class="text-yellow">Programs</b></h2>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="30">
          <program-item
            v-for="(item, index) in programList"
            :key="item.title"
            :index="index"
            :item="item"
          />
        </el-row>
      </div>
    </div>
    <!-- Volunteer Area -->

    <div class="team-area section-padding">
      <div class="container">
        <el-row>
          <el-col :span="12" :offset="6">
            <div class="section-title text-center">
              <h6 class="text-green">
                Meet Our Team
              </h6>
              <h2>Dedicated <b class="text-yellow">Volunteer</b></h2>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <team-member-card v-for="item in 3" :key="item" />
        </el-row>
      </div>
    </div>

    <!-- banner -->
    <banner>
      <h2>A very small <b class="text-yellow">donation</b> <br>can save the world</h2>
      <cso-button style="margin-top:30px;">
        Become a Donor
      </cso-button>
    </banner>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
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
      programList: [
        {
          icon: 'flaticon-food-donation',
          title: 'Healthy Food',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
          icon: 'flaticon-organization',
          title: 'Fair Education',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
          icon: 'flaticon-donation',
          title: 'Safely House & Shelter',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
          icon: 'flaticon-blood-transfusion',
          title: 'Health & Medicine Fund',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
          icon: 'flaticon-education-1',
          title: 'Legal Rights',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
          icon: 'flaticon-money',
          title: 'Political Awareness',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.section-title {
  position: relative;
  h2 {
    font-size: 50px;
    font-weight: 500;
    line-height: 60px;
    letter-spacing: 1px;
    margin: 20px 0;
  }
  h6 {
    font-size: 17px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
}
</style>

<style lang="scss" scoped>
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .section-title h2 {
    font-size: 40px;
    line-height: 55px;
    margin: 10px 0;
    margin-bottom: 20px;
  }
}

@media (max-width: 575px) {
  .section-title h2 {
    font-size: 35px;
    line-height: 45px;
    margin: 8px 0;
    margin-bottom: 15px;
  }
}
</style>
