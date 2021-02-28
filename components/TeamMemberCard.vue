<template>
  <el-col :span="8" :md="8" :sm="12" :xs="24">
    <div class="single-team-member">
      <div class="team-member-bg">
        <div class="team-content">
          <div class="team-title">
            <a href="#">James Cameron</a>
          </div>
          <div class="team-subtitle">
            <p>Social Activist</p>
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
  name: 'TeamMemberCard'
}
</script>

<style lang="scss" scoped>
.single-team-member {
  position: relative;
  margin-top: 25px;
  img {
    filter: grayscale(0.5);
  }
  .team-content {
    position: absolute;
    bottom: -31px;
    left: 0;
    right: 0;
    background: #fff;
    text-align: center;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
  &:hover {
    .team-social li a {
      color: #ffd857;
    }
    .team-content {
      bottom: 0;
      background-color: #00b965;
    }
    .team-title a {
      color: #fff;
    }
    .team-subtitle p {
      color: #fff;
      margin: 0;
    }
  }
}
</style>
