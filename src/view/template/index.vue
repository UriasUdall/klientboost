<template>
    <el-row>
        <el-col>
            <!--顶部开始-->
            <CommonHeader :ifSelect="ifSelect"></CommonHeader>
            <!--顶部结束-->

            <!--主体开始-->
            <el-row>
                <el-col>

                </el-col>
            </el-row>
            <!--主体结束-->

            <!--底部开始-->
            <CommonFooterTop :title="title"></CommonFooterTop>
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
