<template>
    <!--引文-->
    <el-row class="sentence">
        <el-col>
            <!--逗号分隔符-->
            <el-row class="dot">
                <el-col>
                    <div class="border"></div>
                    <div class="sentence-icon">
                        <div class="sentence-icon-inner">
                            <img src="../assets/images/index/quote.png" alt="">
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="3" :sm="3" :md="3" :lg="3">&nbsp;</el-col>
                <el-col :xs="18" :sm="18" :md="18" :lg="18">
                    <p class="sentence-quote sentence-quote-font-size" v-html="content.quoteText">
                    </p>

                </el-col>
            </el-row>
            <!--作者图片-->
            <el-row>
                <el-col>
                    <div class="sentence-author">
                        <img :src="content.authorImg" alt="">
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <h3 class="sentence-name" v-html="content.authorName"></h3>
                    <span class="sentence-title">{{content.autorText}}
                         <a :href="content.linkTo" class="sentence-company" target="_blank">{{content.authorCompany}}</a>
                    </span>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
  export default {
    name: 'sentence',
    props:{
      content:{
        quoteText:'',
        authorImg:'',
        authorName:'',
        autorText:'',
        linkTo:'',
        authorCompany:''
      }
    }
  }
</script>

<style scoped>
    .sentence .border {
        height: 2px;
        background: #11253c;
        width: 250px;
        margin: 20px auto 0;
    }

    .sentence .sentence-icon {
        height: 75px;
        width: 90px;
        margin: -30px auto auto;
        background: #fff;
    }

    .sentence .sentence-icon-inner {
        height: 60px;
        width: 60px;
        background: #11253c;
        color: #fff;
        border-radius: 999px;
        white-space: nowrap;
        display: inline-block;
        text-align: center;
    }

    .sentence .sentence-icon img {
        width: 26px;
        display: inline-block;
        vertical-align: middle;
        margin-top: 30%;
    }

    /*引文*/
    .sentence .sentence-quote {
        max-width: 800px;
        /*font-size: 1.5rem;*/
        font-weight: 500;
        line-height: 130%;
        margin: 20px auto 10px;
        display: block;
        color: #667482;
    }

    .sentence .sentence-quote-font-size {
        font-size: 21px;
    }


    /*作者*/
    .sentence .sentence-author {
        width: 120px;
        margin: 20px auto 20px;
    }

    .sentence .sentence-author img {
        border-radius: 999px;
        width: 100%;
    }

    .sentence .sentence-name {
        font-size: 21px;
        font-weight: 700;
        margin: 0 0 2px;
    }

    .sentence .sentence-title {
        font-size: 18px;
        font-weight: 400;
        color: #667482;
        display: block;
        margin-top: 10px;
        margin-bottom: 50px;
    }

    .sentence .sentence-company {
        color: #30383f;
        cursor: pointer;
        font-size: 18px;
    }

</style>
