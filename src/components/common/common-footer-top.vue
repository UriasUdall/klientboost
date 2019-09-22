<template>
  <el-row class="common-footer-top">
    <el-col style="position: relative">
      <el-row>
        <el-col class="title">
          <h3 v-html="title">
          </h3>
        </el-col>
      </el-row>

      <el-row>
        <el-col class="hidden-sm-and-up foot-top-img ">
          <img src="../../assets/images/index/free-proposal-graphic-mobile.png" alt="">
        </el-col>
        <el-col class="hidden-xs-only foot-top-img">
          <img src="../../assets/images/index/free-proposal-graphic-desktop.png" alt="">
        </el-col>
      </el-row>
      <el-row style="z-index: 10;">
        <el-col class="foot-top-content">
          <a href="" class="btn-BRCW-BB">GET MY FREE PROPOSAL</a>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="footer-BB-img">&nbsp;</el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>

    import CommonFooter from '@/components/common/common-footer'

    export default {
        name: 'common-footer-top',
        components: {
            CommonFooter
        },
        props: {
            title: ''
        }
    }
</script>

<style scoped>
  .common-footer-top {
    background: #173147;
    /*background: yellow;*/
  }

  .common-footer-top .title{
      padding-top: 120px;
  }

  .common-footer-top .title h3 {
    font-size: 1.95rem;
    color: white;
    font-weight: 500;
    margin: 0 auto 45px;
    max-width: 100%;
  }

  strong {
    font-weight: 800!important;
  }

  .common-footer-top .btn-BRCW-BB {
    /*width: 300px;*/
    padding: 25px 60px;
    font-size: 20px;
    border-radius: 10px;
    font-weight: 700;
  }

  .common-footer-top .foot-top-img img {
    border: 0px;
    max-width: 1080px;
    width: 100%;
    margin: 0 auto 50px;
  }
</style>
