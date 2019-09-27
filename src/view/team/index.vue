<template>
  <el-row class="teamPage">
    <el-col>
      <!--顶部开始-->
      <CommonHeader :ifSelect="ifSelect"></CommonHeader>
      <!--顶部结束-->

      <!--主体开始-->
      <!-- 页面大标题 -->
      <el-row class=" BG-BB-LG">
        <el-col class="container" style="padding: 0px 15px">
          <el-row>
            <el-col>
              <div class="whiteBorder MT-80-I"></div>
              <h2 class="page-title">TEAM</h2>
              <div class="whiteBorder"></div>
            </el-col>
          </el-row>

          <el-row class="page-content">
            <el-col>
              <!--小图标-->
              <el-row>
                <el-col class="littleImg">
                  <div>
                    <img src="../../assets/images/team/klientboost-logo-blue.png" alt="" class="logo">
                    <span class="symbol">+</span>
                    <img src="../../assets/images/team/icon-heart-48x45@2x.png" alt="" class="heart1">
                    <span class="symbol">=</span>
                    <img src="../../assets/images/team/icon-heart-48x45@2x.png" alt="" class="heart2">
                  </div>
                </el-col>
              </el-row>

              <!--文字-->
              <el-col>
                <div></div>
              </el-col>

            </el-col>
          </el-row>
        </el-col>
      </el-row>


      <!--主体结束-->

      <!--底部开始-->
      <CommonFooterTop :title="title" :pd="pd"></CommonFooterTop>
      <CommonFooter></CommonFooter>
      <!--底部开始-->
    </el-col>
  </el-row>
</template>

<script>
    import CommonHeader from '@/components/common/common-header'
    import CommonFooter from '@/components/common/common-footer'
    import CommonFooterTop from '@/components/common/common-footer-top-1'

    export default {
        name: 'index',
        components: {
            CommonHeader,
            CommonFooter,
            CommonFooterTop
        },
        data () {
            return {
                pd:60,
                ifSelect: {
                    MenuItem1classTrue: 'false',
                    MenuItem2classTrue: 'false',
                    MenuItem3classTrue: 'false',
                    MenuItem4classTrue: 'false',
                    MenuItem5classTrue: 'false',
                    MenuItem6classTrue: 'false',
                    MenuItem7classTrue: 'true',
                },
                title: 'Over <strong>445 businesses</strong> got a proposal from us in <strong>August, 2019</strong>'
            }
        }
    }
</script>

<style scoped>
  .teamPage .page-content .littleImg{
    margin: 40px auto;
    display: inline;
  }
  .teamPage .page-content .littleImg .logo,
  .teamPage .page-content .littleImg .heart1{
    height: 33px;
    margin-right: 5px;
    vertical-align: middle;
    border: 0;
  }

  .teamPage .page-content .littleImg .heart2{
    height: 33px;
    margin: 0 14px 0 7px;
    vertical-align: middle;
    border: 0;
  }
</style>
