<template>
    <el-row>
        <el-col>
            <CommonHeader :ifSelect="ifSelect"></CommonHeader>
        </el-col>
        <el-col>

        </el-col>
        <el-col>
            <CommonFooter></CommonFooter>
        </el-col>
    </el-row>
</template>

<script>
  import CommonHeader from '@/components/common/common-header'
  import CommonFooter from '@/components/common/common-footer'
  export default {
    name: 'index',
    components: {
      CommonHeader,
      CommonFooter
    },
    data (){
      return{
        ifSelect:{
          MenuItem1classTrue:'false',
          MenuItem2classTrue:'false',
          MenuItem3classTrue:'false',
          MenuItem4classTrue:'false',
          MenuItem5classTrue:'false',
          MenuItem6classTrue:'false',
          MenuItem7classTrue:'true',
        }
      }
    }
  }
</script>

<style scoped>

</style>
