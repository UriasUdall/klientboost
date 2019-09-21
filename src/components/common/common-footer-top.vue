<template>
    <el-row class="common-footer-top">
        <el-col>
            <el-row>
                <el-col class="title">
                    <h3>Over <strong>445 businesses</strong> got a proposal from us in <strong>August, 2019</strong>
                    </h3>
                </el-col>
            </el-row>
            <el-row>
                <el-col class="foot-top-img">
                    <img src="../../assets/images/index/free-proposal-graphic-desktop.png" alt="">
                </el-col>
            </el-row>
            <el-row>
                <el-col class="content">
                    <a href="" class="btn-BRCW-BB">GET MY FREE PROPOSAL</a>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <div class="footer-border-img"></div>
                </el-col>
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
  }
</script>

<style scoped>
    .common-footer-top {
        background: #173147;
        /*background: yellow;*/
    }

    .common-footer-top .title h3 {
        font-size: 2rem;
        color: white;
        font-weight: 600;
        margin-bottom: 45px;
        max-width: 100%;
    }

    .common-footer-top .title h3 strong {
        font-weight: 800;
    }

    .common-footer-top .btn-BRCW-BB {
        width: 250px;
        padding: 18px 15px;
        font-size: 1.4rem;
        /*font-weight: 700;*/
    }

    .common-footer-top .foot-top-img img {
        border: 0px;
        max-width: 866px;
        width: 100%;
        margin: 0 auto 30px;
    }

    .common-footer-top .footer-border-img{
        margin-top: -100px;
        width: 100%;
        height: 290px;
        background: url("../../assets/images/index/5b677ccb69601fde7ca3f49758f72f75.png") no-repeat;
        background-size: 100%;
    }
</style>
