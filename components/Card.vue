<template>
  <div class="col-lg-3 col-md-6 col-sm-12">
    <div class="single-service-item" :class="{'active':currentIndex === cardActiveIndex}">
      <img :src="cardItem.imageSrc" alt="" />
      <h5>{{ cardItem.title }}</h5>
      <p>{{ cardItem.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    cardItem: {
      type: Object,
      default: () => ({
        imageSrc: "assets/img/service-bg-1.jpg",
        title: "Charity for Education",
        desc: "Pure Water dolor sit amet, consectetur adipisicing elit.",
      }),
    },
    cardActiveIndex:{
      type:Number,
      default:0
    },
    currentIndex:Number
  },
};
</script>

<style scoped>
.active h5,
.single-service-item:hover h5{
  color: #fff;
}
.single-service-item:hover h5::after{
  background-color: #FFD857;
}
</style>
