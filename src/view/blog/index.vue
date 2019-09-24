<template>
    <el-row class="blogPage">
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
                            <h2 class="page-title">THE PPC&CRO IDEA FACTORY</h2>
                            <div class="whiteBorder"></div>
                        </el-col>
                    </el-row>

                    <el-row class="page-content">
                        <el-col>
                            <!--首部字体图片-->
                            <el-row>
                                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="title">
                                    <el-col :md="2" :lg="2" :xs="2" class="hidden-sm-and-down block">&nbsp;</el-col>
                                    <el-col :xs="24" :sm="24" :md="20" :lg="20" :xl="20" class="text-left">
                                        <h1>Hey there,Segment</h1>
                                        <p>Join the 445+ businesses that got a proposal from us in August,2019</p>
                                        <a href="#" class="block btn-BRCW">GET MY FREE PROPOSAL</a>
                                    </el-col>
                                </el-col>
                                <el-col :md="12" :lg="12" :xl="12" class="block hidden-sm-and-down">
                                    <div class="smile-ima">
                                        <img src="../../assets/images/blog/ve-upload-1568989093306.png" alt="">
                                    </div>
                                </el-col>
                            </el-row>
                            <!--表单输入框-->
                            <el-row>
                                <el-col>
                                    <div class="formTitle">
                                        <h1>Get PPC&CRO Knowledge Right To Your Inbox</h1>
                                        <p>Covering topics to help your business make more money</p>
                                        <form action="#" class="form">
                                            <input type="email" placeholder="Your favorite Email" class="email"
                                                   id="email">
                                            <input type="submit" value="SUBSCRIBE TO THE BLOG" class="button btn-BRCW">
                                        </form>
                                    </div>
                                </el-col>
                            </el-row>

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
        pd: 60,
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
    .blogPage .page-content .title h1 {
        font-size: 36px !important;
        font-weight: 600 !important;
        color: black;
        margin: 50px auto 30px;
    }

    .blogPage .page-content .title p {
        font-size: 22px;
        max-width: 400px;
        font-weight: 400;
        text-align: center;
        margin: 0 auto 40px;
    }

    .blogPage .page-content .title a {
        padding: 16px 40px;
    }

    .page-content .smile-ima {
        width: 80%;
        padding-left: 30px;
    }

    .page-content .smile-ima img {
        width: 100%;
        margin: auto;
    }

    .blogPage .page-content .formTitle h1 {
        font-size: 28px;
        margin: 0 auto;
        font-weight: 500;
        line-height: 115%;
        color: #30383f;
        padding: 0 10px;
    }

    .blogPage .page-content .formTitle p {
        color: #667482;
        font-weight: 400;
        font-size: 18px;
        line-height: 115%;
        margin-top: 10px;
    }

    .blogPage .page-content .formTitle .form .email {
        /*width: 100%;*/
        /*margin-bottom: 12px;*/
        margin-right: 15px;
        border: 2px solid #d6dade;
        background: none;
        line-height: 100%;
        height: 42px;
        outline: 0;
    }

    .blogPage .page-content .formTitle .form .button {
        padding: 10px 30px;
    }
</style>
