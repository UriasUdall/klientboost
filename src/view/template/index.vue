<template>
    <el-row class="xxxx">
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
                            <h2 class="page-title">This Is The Page Tittle!</h2>
                            <div class="whiteBorder"></div>
                        </el-col>
                    </el-row>

                    <el-row class="page-content">
                        <el-col>
                            <br/><h1>This Is The Page Content!!!</h1><br/>
                            You can write whatever you want in it,<br/><br/>
                            the rest of the page is done.<br/><br/>
                            you just need to fill in the custom content,<br/><br/>
                            start your journey now!<br/>&nbsp;
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

</style>
