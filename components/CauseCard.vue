<template>
  <el-col :span="8" :md="8" :sm="12" :xs="24">
    <div class="each-case padding-default margin-top-default margin-bottom-md-2">
      <div class="case-img">
        <a href=""><img :src="cardItem.imageSrc" alt=""></a>
      </div>
      <div class="case-2-bar">
        <p class="goal-raised mb-0">
          Goal: <span>${{ cardItem.goal }}</span> | Raised:
          <span>$<span>{{ cardItem.raised }}</span></span>
        </p>
        <div class="margin-top-mini-1">
          <div class="single-bar-item">
            <el-progress
              :text-inside="true"
              :stroke-width="20"
              :percentage="(cardItem.raised / cardItem.goal) * 100"
              color="#FFD857"
            />
          </div>
        </div>
      </div>
      <div class="case-texts bg-light-white">
        <img src="img/other/dot-ylo.png" alt="" class="bg-dots-case">
        <!-- <span class="case-tag">{{ cardItem.tag }}</span> -->
        <el-tag type="info" size="normal" class="margin-y-default">
          {{ cardItem.tag }}
        </el-tag>

        <h3 class="slab text-md text-mini-2">
          {{ cardItem.slab }}
        </h3>
        <p class="margin-bottom-mini-0">
          {{ cardItem.desc }}
        </p>
        <a href="" class="btn bg-green text-white margin-y-sm">Donate</a>
      </div>
    </div>
  </el-col>
</template>

<script>
export default {
  name: 'CauseCard',
  props: {
    cardItem: {
      type: Object,
      default: () => ({
        imageSrc: 'assets/img/cause-img-1.jpg',
        goal: 60000,
        raised: 30000,
        tag: 'Healthcare',
        slab: 'Education for all Children',
        desc:
          'Education For All Children provides an education-to-employment program for bright.'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/_variables";
.each-case {
  border-radius: 6px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 3px 16px -2px #d0cece;
  }
}

.case-img img {
  border-radius: 5px;
}

.case-texts {
  .btn {
    padding: 11px 27px;
    letter-spacing: 1px;
    border-radius: 0.25rem;
  }
}
</style>
