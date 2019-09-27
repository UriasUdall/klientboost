<template>
    <!--首部火箭背景-->
    <el-row class="theCover">
        <el-col>
            <el-row id="hero">
                <el-col class="index-star"></el-col>
                <el-col class="small-clouds hidden-xs-only"></el-col>
                <el-col class="index-content">
                    <div class="index-rocket">
                        <img src="../assets/images/index/hero-rocket.png" alt="Klientboost Rocket">
                    </div>
                    <h1 v-html="sentence"></h1>
                    <a href="#">GET MY FREE PROPOSAL</a>
                </el-col>
                <el-col>
                    <el-row>
                        <el-col class="footer-BB-img">&nbsp;</el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
  export default {
    name: 'theCover',
    props:{
      sentence:''
    }
  }
</script>

<style scoped>
    /*首部火箭背景*/
    .theCover #hero {
        background-color: #11253c;
        color: #fff;
        /*背景渐变*/
        background-image: linear-gradient(-180deg, #0e1f35, #21455c);
        position: relative;
        margin: 0;
        padding: 0;
    }

    .theCover .index-star {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        height: 550px;
        background-image: url("../assets/images/index/412ff5165675da0090654d7bc444f725.png");
        background-size: 640px, 550px;
        background-repeat: no-repeat;
    }

    .theCover .small-clouds {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url("../assets/images/index/21898f85c5220f8a6631726c247b2ed0.png");
        background-size: 150px;
        background-repeat: no-repeat;
        background-position: 100% 40%;
    }

    .theCover .index-content {
        position: relative;
        z-index: 10;
        text-align: center;
    }

    .theCover .index-content .index-rocket {
        padding-top: 145px;
        margin: 0 auto 35px;
        width: 110px;
    }

    .theCover .index-content h1 {
        font-size: 50px;
    }

    .theCover .index-content .index-rocket img {
        width: 100%;
    }

    .theCover .index-content a {
        margin: 38px auto 0px;
        width: 300px;
        height: 60px;
        line-height: 60px;
        border-width: 3px;
        padding: 0;
        color: #fff;
        text-decoration: none;
        background: #ff5056;
        text-align: center;
        letter-spacing: .06rem;
        border-radius: 8px;
        border: 0;
        font-weight: 700;
        border-bottom: 2px solid #ff272f;
        vertical-align: middle;
        cursor: pointer;
        display: inline-block;
    }
</style>
