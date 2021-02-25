<template>
  <div>
    <!-- About Area-->
    <div class="about-area section-padding">
      <big-card v-for="item in bigCardList" :key="item.desc" />
    </div>
    <!-- Feature Area -->
    <div class="feature-area">
      <div class="container">
        <div class="row">
          <feature-card
            v-for="item in featureCardList"
            :key="item.title"
            :cardItem="item"
          />
        </div>
      </div>
    </div>
    <!-- Service Area-->
    <div class="service-area gray-bg section-padding">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <h6>What We Do</h6>
              <h2>We Can Save More <b>Life</b></h2>
            </div>
          </div>
        </div>
        <div class="row">
          <card
            v-for="(item, index) in cardList"
            :key="item.title"
            :cardActiveIndex="cardActiveIndex"
            :currentIndex="index"
            :cardItem="item"
            @mouseover.native="handleChangeActiveCardIndex(index)"
          ></card>
        </div>
      </div>
    </div>
    <!-- Causes Area-->
    <div class="causes-area section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <div class="section-title">
              <h6>We are fighting for</h6>
              <h2>Recent <b>Causes</b></h2>
            </div>
          </div>
        </div>

        <div class="row">
          <cause-card v-for="item in 3" :key="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      bigCardList: [
        {
          imageSrc: "assets/img/about-bg.jpg",
          tips: "A little Bit More",
          title: "We serve the ",
          b: "huminity",
          desc:
            " Lance was born on the Island of Occidental Mindoro, one of many thousands of Islands in the Philippines. His home town of Santa Cruz is lucky enough to have a community hospital but not the specialized plastic surgery teams needed to repair his Cleft Lip. Unfortunately,",
        },
      ],
      featureCardList: [
        {
          iconClass: "flaticon-donation-1",
          title: "Our Mission",
          desc: "Poor people live in unsafe place consectetur adipisicing",
        },
        {
          iconClass: "flaticon-money",
          title: "Our Program",
          desc: "Poor people live in unsafe place consectetur adipisicing",
        },
        {
          iconClass: "flaticon-charity",
          title: "Our Vision",
          desc: "Poor people live in unsafe place consectetur adipisicing",
        },
      ],
      cardActiveIndex: 0,
      cardList: [
        {
          imageSrc: "assets/img/service-bg-1.jpg",
          title: "Charity for Education",
          desc: "Pure Water dolor sit amet, consectetur adipisicing elit.",
        },
        {
          imageSrc: "assets/img/service-bg-2.jpg",
          title: "Charity for Food",
          desc: "Pure Water dolor sit amet, consectetur adipisicing elit.",
        },
        {
          imageSrc: "assets/img/service-bg-3.jpg",
          title: "Charity for Health",
          desc: "Pure Water dolor sit amet, consectetur adipisicing elit.",
        },
        {
          imageSrc: "assets/img/service-bg-4.jpg",
          title: "Charity for Cloths",
          desc: "Pure Water dolor sit amet, consectetur adipisicing elit.",
        },
      ],
    };
  },
  methods: {
    handleChangeActiveCardIndex(index) {
      if (this.cardActiveIndex === index) return;
      this.cardActiveIndex = index;
    },
  },
};
</script>
