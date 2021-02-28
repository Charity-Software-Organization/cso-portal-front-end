<template>
  <el-col :md="8" :sm="12" :xs="24" :span="8">
    <div
      class="single-program-item"
      :class="[index % 2 === 0 ? 'bg-green' : 'bg-yellow']"
    >
      <i :class="item.icon" />
      <h5>{{ item.title }}</h5>
      <p>{{ item.desc }}</p>
    </div>
  </el-col>
</template>

<script>
export default {
  name: 'ProgramItem',
  props: {
    index: {
      type: Number,
      required: true
    },
    item: {
      type: Object,
      default: () => ({
        icon: 'flaticon-food-donation',
        title: 'Healthy Food',
        desc: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/_variables";
.single-program-item {
  color: $white;
  padding: 15px;
  text-align: center;
  margin-top: 30px;
  position: relative;
  z-index: 1;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  border-radius: 15px;
  margin-top: 30px;
  margin-bottom: 40px;
  i {
    position: relative;
    z-index: 1;
    &:before {
      font-size: 60px;
      color: $white;
    }
  }
  h5 {
    font-size: 24px;
    font-weight: 600;
    margin: 28px 0;
    position: relative;
    color: $white;
    &::after {
      position: absolute;
      content: "";
      width: 70px;
      height: 3px;
      bottom: -18px;
      left: 50%;
      margin-left: -35px;
    }
  }
  p {
    color: $white;
  }
}
.bg-green{
  h5:after{
     background: $yellow;
  }
}
.bg-yellow{
  h5:after{
     background: $green;
  }
}
</style>
