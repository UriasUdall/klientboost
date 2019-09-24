<template>
    <el-row class="common-footer-top-2">
        <el-col style="position: relative">
            <el-row>
                <el-col class="title" :style="PaD">
                    <h3>We help our clients make more money</h3>
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
  export default {
    name: 'common-footer-top-2',
    props:{
      title2:'',
      pd:''
    },
    data(){
      return{
        PaD:'padding-top:'+this.pd+'px'
      }
    }
  }
</script>

<style scoped>
    .common-footer-top-2 {
        background: linear-gradient(#1B384F,#1D3E54);
    }
    .common-footer-top-2 .title {
        padding-top: 120px;
    }
    .common-footer-top-2 .title h3 {
        font-size: 27px;
        color: white;
        font-weight: 500;
        margin: 0 auto 45px;
        max-width: 100%;
    }
    .common-footer-top-2 .btn-BRCW-BB {
         /*width: 300px;*/
         padding: 25px 50px;
         font-size: 16px;
         border-radius: 7px;
         font-weight: 700;
     }
    .common-footer-top-2 .foot-top-img img {
        border: 0px;
        max-width: 1080px;
        width: 100%;
        margin: 0 auto 50px;
    }
</style>
