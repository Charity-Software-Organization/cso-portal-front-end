<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <div class="about-left">
          <img class="lazy-image loaded" :src="cardItem.imageSrc" alt="" />
        </div>
      </div>
      <div class="col-lg-6">
        <div class="about-content">
          <div class="section-title">
            <h6>{{ cardItem.tips }}</h6>
            <h2>{{cardItem.title}} <b>{{ cardItem.b }}</b></h2>
          </div>

          <p>
            {{cardItem.desc}}
          </p>

          <a href="#" class="main-btn">Discover More</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BigCard",
  props: {
    cardItem: {
      type: Object,
      default: () => ({
        imageSrc: "assets/img/about-bg.jpg",
        tips: "A little Bit More",
        title: "We serve the ",
        b: "huminity",
        desc:
          " Lance was born on the Island of Occidental Mindoro, one of many thousands of Islands in the Philippines. His home town of Santa Cruz is lucky enough to have a community hospital but not the specialized plastic surgery teams needed to repair his Cleft Lip. Unfortunately,",
      }),
    },
  },
};
</script>
