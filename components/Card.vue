<template>
  <el-col :md="6" :sm="12" :xs="24" :span="6">
    <div
      class="single-service-item"
      :class="{ active: currentIndex === cardActiveIndex }"
    >
      <img :src="cardItem.imageSrc" alt="" />
      <h5>{{ cardItem.title }}</h5>
      <p>{{ cardItem.desc }}</p>
    </div>
  </el-col>
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
    cardActiveIndex: {
      type: Number,
      default: 0,
    },
    currentIndex: Number,
  },
};
</script>

<style scoped>
/* 目前 hover 事件执行的 changeIndex ，如果确认这个方法 可以把所以hover样式删除 反正都会执行active类名 */
.single-service-item {
  background: #fff;
  padding: 15px;
  text-align: center;
  margin-top: 30px;
  overflow: hidden;
  position: relative;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  border-radius: 7px;
}

.single-service-item h5 {
  font-size: 22px;
  font-weight: 600;
  margin: 35px 0;
  position: relative;
}
.single-service-item h5:after {
  position: absolute;
  content: "";
  width: 70px;
  height: 3px;
  bottom: -21px;
  left: 50%;
  margin-left: -35px;
  background: #00b965;
}

.single-service-item p {
  margin: 40px 0;
}


/* active hover */
.single-service-item.active {
  background: #00b965;
  color: #fff;
}

.single-service-item.active h5::after,
.single-service-item:hover h5::after {
  background-color: #ffd857;
}



.single-service-item:hover {
  background: #00b965;
  color: #fff;
}

.single-service-item.active h5,
.single-service-item:hover p,
.single-service-item.active p,
.single-service-item:hover h5 {
  color: #fff;
}
</style>
