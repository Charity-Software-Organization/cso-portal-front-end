<template>
  <div class="col-lg-4 col-md-6 col-sm-6">
    <div class="single-feature-item">
      <div class="feature-icon">
        <i :class="cardItem.iconClass"></i>
      </div>
      <h5>{{ cardItem.title }}</h5>
      <p>{{ cardItem.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureCard",
  props: {
    cardItem: {
      type: Object,
      default: () => ({
        iconClass: "flaticon-donation-1",
        title: "Our Mission",
        desc: "Poor people live in unsafe place consectetur adipisicing",
      }),
    },
  },
};
</script>

<style scoped></style>
