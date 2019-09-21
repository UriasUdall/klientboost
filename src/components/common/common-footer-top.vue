<template>
    <el-row class="common-footer-top">
        <el-col>
            <el-row>
                <el-col class="title">
                    <h3>Over <strong>445 businesses</strong> got a proposal from us in <strong>August, 2019</strong></h3>
                </el-col>
            </el-row>
            <el-row>
                <el-col class="content" style="background-color: yellow;">
                    <a href="" class="btn-BRCW-BB">GET MY FREE PROPOSAL</a>
                </el-col>
            </el-row>
        </el-col>
        <el-col>
            <CommonFooter></CommonFooter>
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
.common-footer-top .title h3{
    font-size: 2rem;
    font-weight: 600;
}
.common-footer-top .title h3 strong{
    font-weight: 800;
}

.common-footer-top  .btn-BRCW-BB{
    width: 300px;
    padding: 22px 20px;
    font-size: 1.5rem;
}
</style>
