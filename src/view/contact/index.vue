<template>
    <el-row>
        <el-col>
            <CommonHeader :ifSelect="ifSelect"></CommonHeader>
            <CommonFooterTop></CommonFooterTop>
            <CommonFooter></CommonFooter>
        </el-col>
    </el-row>
</template>

<script>
  import CommonHeader from '@/components/common/common-header'
  import CommonFooter from '@/components/common/common-footer'
  import CommonFooterTop from '@/components/common/common-footer-top'

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
        }
      }
    }
  }
</script>

<style scoped>

</style>
