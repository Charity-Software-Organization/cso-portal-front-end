<!--
 * @Description:
 * @Author: huxianc
 * @Date: 2021-03-03 21:35:19
 * @LastEditors: huxianc
 * @LastEditTime: 2021-03-03 22:02:37
-->
<template>
  <div class="padding-md-2 event-card" :class="{ reverse: index % 2 === 1 }">
    <div class="img-container">
      <img :src="cardItem.img" alt="">
    </div>

    <div>
      <p class="text-yellow">
        <i class="las la-calendar-check" />{{ cardItem.date }}
      </p>
      <h6 class="text-md-1 margin-y-mini text-dark">
        {{ cardItem.title }}
      </h6>
      <p class="text-green">
        <i class="las la-clock" />
        <span>{{ cardItem.time }} | <i class="las la-map-marker" /> </span>
        <span>{{ cardItem.address }}</span>
      </p>
      <p>
        {{ cardItem.desc }}
      </p>
      <a href="" class="text-green text-bold">Learn More</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    index: {
      type: Number,
      default: 0
    },
    cardItem: {
      type: Object,
      default: () => ({
        img: '',
        date: 'April 28, 2020',
        title: 'Vitamin A Capsule Campaign',
        time: ' 08.00 a.m.',
        address: 'Chelsea Street',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quis omnis dolor'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.event-card {
  display: flex;
  border: 1px solid #fff;
  &.reverse {
    flex-direction: row-reverse;
  }
  > div {
    flex: 1;
  }
  img {
    width: 100%;
  }
}
</style>

<style lang="scss" scoped>
@media (max-width: 768px) {
  .img-container{
    display: none;
  }
}
</style>
