<template>
  <el-col :span="8" :md="8" :sm="12" :xs="24">
    <div class="each-case-2">
      <div class="case-2-img">
        <a href=""><img :src="cardItem.imageSrc" alt=""></a>
      </div>
      <div class="case-2-bar">
        <p class="goal-raised mb-0">
          Goal: <span>${{ cardItem.goal }}</span> | Raised:
          <span>$<span>{{ cardItem.raised }}</span></span>
        </p>
        <div class="progress-bar-area">
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
      <div class="case-2-texts bg-light-white">
        <img src="img/other/dot-ylo.png" alt="" class="bg-dots-case">
        <span class="case-2-tag">{{ cardItem.tag }}</span>
        <h3 class="slab">
          {{ cardItem.slab }}
        </h3>
        <p>
          {{ cardItem.desc }}
        </p>
        <a href="" class="btn btn-green btn-md">Donate</a>
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
.each-case-2 {
  border-radius: 6px;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 40px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 3px 16px -2px #d0cece;
  }
}

.case-2-img img {
  border-radius: 5px;
}

.case-2-texts {
  h3 {
    font-size: 24px;
    margin: 18px 0;
  }
  p {
    margin-bottom: 5px;
  }
  .btn {
    background: #00b965;
    color: #fff;
    padding: 11px 27px;
    margin: 25px 0;
    letter-spacing: 1px;
  }
}

span.case-2-tag {
  border: 2px solid #ddd;
  display: inline-block;
  padding: 7px;
  font-size: 15px;
  text-transform: uppercase;
  margin: 20px 0;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 1px;
}

.progress-bar-area {
  margin-top: 10px;
}
</style>
