<template>
  <el-col :span="8" :md="8" :sm="12" :xs="24">
    <div class="single-feature-item">
      <div class="feature-icon">
        <i :class="cardItem.iconClass"></i>
      </div>
      <h5>{{ cardItem.title }}</h5>
      <p>{{ cardItem.desc }}</p>
    </div>
  </el-col>
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

<style scoped>
.single-feature-item {
  text-align: center;
  padding: 25px;
  height: 300px;
  position: relative;
  z-index: 1;
}
.single-feature-item h5 {
  font-size: 24px;
  font-weight: 600;
  margin: 20px 0;
}

.single-feature-item i {
  position: relative;
}

.single-feature-item i:after {
  position: absolute;
  content: "";
  top: -2px;
  left: -35px;
  width: 70px;
  height: 70px;
  background: #ffd857;
  border-radius: 50%;
  z-index: -1;
  opacity: 0.9;
  transition: 0.3s;
}

.feature-icon i:before {
  font-size: 60px;
  font-weight: 400;
  color: #00b965;
}

.feature-icon:hover i:after {
  width: 90px;
  height: 90px;
  opacity: 0.8;
  left: -18px;
  top: 0;
}
</style>
