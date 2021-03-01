<template>
  <el-col :span="8" :md="8" :sm="12" :xs="24">
    <div class="single-team-member margin-top-sm">
      <div class="team-member-bg">
        <div class="team-content">
          <div class="team-title">
            <a href="#">{{ memeber.name }}</a>
          </div>
          <div class="team-subtitle">
            <p>{{ memeber.job }}</p>
          </div>
          <ul class="team-social">
            <li>
              <a href="#"><i class="fa fa-facebook-f" aria-hidden="true" /> </a>
            </li>
            <li>
              <a href="#"><i class="fa fa-twitter" aria-hidden="true" /> </a>
            </li>
            <li>
              <a href="#"><i class="fa fa-instagram" aria-hidden="true" /> </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </el-col>
</template>

<script>
export default {
  name: 'TeamMemberCard',
  props: {
    memeber: {
      type: Object,
      default: () => ({
        name: 'James Cameron',
        job: 'Social Activist'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/_variables";
.single-team-member {
  position: relative;
  margin-top: 25px;
  min-height: 450px;
  img {
    filter: grayscale(0.5);
  }
  .team-content {
    position: absolute;
    bottom: -31px;
    left: 0;
    right: 0;
    background: $white;
    text-align: center;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
  .team-title a {
    color: $black-1;
  }
  .team-social li a {
    color: $white;
  }
  &:hover {
    .team-social li a {
      color: $yellow;
    }
    .team-content {
      bottom: 0;
      background-color: $green;
    }
    .team-title a {
      color: $white;
    }
    .team-subtitle p {
      color: $white;
      margin: 0;
    }
  }
}
</style>
