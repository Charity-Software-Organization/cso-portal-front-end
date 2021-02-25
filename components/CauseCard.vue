<template>
  <div class="col-lg-4 col-md-6">
    <div class="each-case-2">
      <div class="case-2-img">
        <a href=""><img :src="cardItem.imageSrc" alt="" /></a>
      </div>
      <div class="case-2-bar bg-yellow">
        <p class="goal-raised mb-0">
          Goal: <span>${{ cardItem.goal }}</span> | Raised:
          <span
            >$<span>{{ cardItem.raised }}</span></span
          >
        </p>
        <div class="progress-bar-area">
          <div class="single-bar-item">
            <el-progress
              :text-inside="true"
              :stroke-width="20"
              :percentage="cardItem.raised / cardItem.goal * 100"
              color="#FFD857"
            ></el-progress>
          </div>
        </div>
      </div>
      <div class="case-2-texts bg-light-white">
        <img src="img/other/dot-ylo.png" alt="" class="bg-dots-case" />
        <span class="case-2-tag">{{ cardItem.tag }}</span>
        <h3 class="slab">{{ cardItem.slab }}</h3>
        <p>
          {{ cardItem.desc }}
        </p>
        <a href="" class="btn btn-green btn-md">Donate</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CauseCard",
  props: {
    cardItem: {
      type: Object,
      default: () => ({
        imageSrc: "assets/img/cause-img-1.jpg",
        goal: 60000,
        raised: 30000,
        tag: "Healthcare",
        slab: "Education for all Children",
        desc:
          "Education For All Children provides an education-to-employment program for bright.",
      }),
    },
  },
};
</script>

<style scoped></style>
