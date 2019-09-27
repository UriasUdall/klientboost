<template>
    <el-row class="index">
        <el-col>
            <CommonHeader :ifSelect="ifSelect"></CommonHeader>

            <TheCover :sentence="sentence"></TheCover>
            <!--中间三到五张图片转变-->
            <el-row>
                <!--空格占位-->
                <el-col :xs="0" :sm="1" :md="1" :lg="1" class="block">&nbsp;</el-col>
                <!--图片内容-->
                <el-col :xs="24" :sm="22" :md="22" :lg="22">
                    <el-row>
                        <el-col :xs="8" :sm="4" :md="4" :lg="4">
                            <img src="../../assets/images/index/logo-sap-144x48-2x.png" alt="SPA" class="logo-image">
                        </el-col>
                        <el-col :sm="5" :md="5" :lg="5" class="hidden-xs-only">
                            <img src="../../assets/images/index/logo-stanford-university-144x48-2x.png"
                                 alt="Stanford University" class="logo-image">
                        </el-col>
                        <el-col :sm="5" :md="5" :lg="5" class="hidden-xs-only">
                            <img src="../../assets/images/index/logo-juniper-144x48-2x.png" alt="Juniper"
                                 class="logo-image">
                        </el-col>
                        <el-col :xs="8" :sm="5" :md="5" :lg="5">
                            <img src="../../assets/images/index/logo-donatello-144x48-2x.png" alt="Donatello"
                                 class="logo-image">
                        </el-col>
                        <el-col :xs="8" :sm="5" :md="5" :lg="5">
                            <img src="../../assets/images/index/logo-brinks-144x48-2x.png" alt="Brinks"
                                 class="logo-image">
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!--三张图片链接-->
            <el-row>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <h2 class="h2-1">Client Testimonials</h2>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="underline">
                    <hr>
                </el-col>
            </el-row>
            <el-row>
                <!--空格占位-->
                <el-col :xs="4" :sm="1" :md="2" :lg="2">&nbsp;</el-col>
                <!--图片链接-->
                <el-col :xs="16" :sm="22" :md="20" :lg="20">
                    <el-row :gutter="20">
                        <el-col :xs="24" :sm="8" :md="8" :lg="8">
                            <div class="lightbox-btn">
                                <a href="https://www.youtube.com/embed/FPfb6NFmg0w?autoplay=1&vq=hd1080"
                                   class="lightbox-a">
                                    <img src="../../assets/images/index/play-btn-final@2x.png" alt="play btn">
                                </a>
                                <img src="../../assets/images/index/kiddom-hero-desktop-new.png"
                                     alt="kiddom client success story">
                                <p>Lead Gen</p>
                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="8" :md="8" :lg="8">
                            <div class="lightbox-btn">
                                <a href="https://www.youtube.com/embed/FPfb6NFmg0w?autoplay=1&vq=hd1080"
                                   class="lightbox-a">
                                    <img src="../../assets/images/index/play-btn-final@2x.png" alt="play btn">
                                </a>
                                <img src="../../assets/images/index/fashionphile-hero-desktop.jpg"
                                     alt="fashionphile client success story">
                                <p>eComm</p>
                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="8" :md="8" :lg="8">
                            <div class="lightbox-btn">
                                <a href="https://www.youtube.com/embed/FPfb6NFmg0w?autoplay=1&vq=hd1080"
                                   class="lightbox-a">
                                    <img src="../../assets/images/index/play-btn-final@2x.png" alt="play btn"
                                         class="play-video">
                                </a>
                                <img src="../../assets/images/index/segment-hero-desktop.jpg"
                                     alt="segment- client success story">
                                <p>SaaS</p>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <el-row class="view-father">
                <a href="#" class="btn-BWCR">
                    VIEW OUR CASE STUDIES
                </a>
            </el-row>

            <!--引文-->
            <Sentence :content="content[0]"></Sentence>


            <!--图文结合三大组件-->
            <!--第1个-->
            <el-row class="mt-80">
                <!--空格占位-->
                <el-col :xs="0" :sm="1" :md="1" :lg="1" class="block">&nbsp;</el-col>
                <!--左边字体-->
                <el-col :xs="24" :sm="11" :md="11" :lg="10">
                    <div class="middle-font text-center text-left">
                        <h2>You'll Make More Money</h2>
                        <div class="ContentBorder"></div>
                        <h3 class="index-h3-fontsize">From Facebook & Google Ads to custom <br/>landing pages,
                            we help you discover the <br/>highest return
                            on investment you've ever had.</h3>
                    </div>
                </el-col>
                <!--右边图片-->
                <el-col :sm="12" :md="12" :lg="13" class="middle-first-image-big hidden-xs-only">&nbsp;</el-col>
                <el-col :xs="24" class="middle-first-image-small hidden-sm-and-up">&nbsp;</el-col>
            </el-row>
            <!--第2个-->
            <el-row class="LGmt--110">
                <!--左边图片-->
                <el-col :sm="12" :md="12" :lg="12" :xl="12" class="middle-second-image-big hidden-xs-only">&nbsp;
                </el-col>
                <el-col :md="1" :lg="1" :xl="0" class="hidden-sm-and-down block">&nbsp;</el-col>
                <el-col :xs="24" :sm="12" :md="11" :lg="11" class="XSmt-60">
                    <div class="middle-font text-center text-left">
                        <h2>You'll Work With Talent</h2>
                        <div class="ContentBorder"></div>
                        <h3 class="index-h3-fontsize">
                            From deep PPC knowledge to conversion focused
                            design,we bring the best of both worlds to grow your
                            profitability.
                        </h3>
                    </div>
                </el-col>
                <el-col :xs="24" class="middle-second-image-small hidden-sm-and-up">&nbsp;</el-col>
            </el-row>
            <!--第3个-->
            <el-row>
                <!--空格占位-->
                <el-col :xs="0" :sm="1" :md="1" :lg="1" class="block">&nbsp;</el-col>
                <!--左边字体-->
                <el-col :xs="24" :sm="11" :md="11" :lg="10" class="XSmt-60 mt-0">
                    <div class="middle-font text-center text-left">
                        <h2>You'll Grow Very Fast</h2>
                        <div class="ContentBorder"></div>
                        <h3 class="index-h3-fontsize">
                            From quick wins to long term strategies,<br/>we create a
                            profit rich environment to<br/> help you scale to new heights
                            while <br/>maintaining costs.
                        </h3>
                    </div>
                </el-col>
                <!--右边图片-->
                <el-col :sm="12" :md="12" :lg="13" class="middle-third-image-big hidden-xs-only">&nbsp;
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </el-col>
                <el-col :xs="24" class="middle-third-image-small hidden-sm-and-up">&nbsp;
                </el-col>
            </el-row>

            <Sentence :content="content[1]"></Sentence>


            <!--底部样式-->
            <CommonFooterTop :title="title" :pd="pd"></CommonFooterTop>
            <el-row>
                <el-col class="footer-BU-img">&nbsp;</el-col>
            </el-row>
            <CommonFooter></CommonFooter>
        </el-col>
    </el-row>
</template>


<script>
  import CommonFooter from '@/components/common/common-footer'
  import CommonFooterTop from '@/components/common/common-footer-top-1'
  import CommonHeader from '@/components/common/common-header'
  import Sentence from '@/components/sentence'
  import TheCover from '@/components/theCover'

  export default {
    name: 'index',
    components: {
      CommonFooter,
      CommonHeader,
      CommonFooterTop,
      Sentence,
      TheCover
    },
    data () {
      return {
        pd: 120,
        sentence: 'Your PPC & Paid Social Performance<br/>Is About To Take Off',
        isNowPage: true,
        content: [{
          quoteText: '"KlientBoost isn\'t your typical crapshoot,dime a dozen PPC agency.They actually understand quality traffic and more importantly,the<strong>vitalness of conversion.</strong> If you have a chance to work with them,take it.<strong>They\'re marketing unicorns.</strong>"',
          authorImg: require('../../assets/images/index/8856b64e-c2c9-4358-846b-351492d56f44-400x400.jpg'),
          authorName: 'Oli Gardner',
          autorText: 'Co-Founder @',
          linkTo: '',
          authorCompany: 'Unbounce'
        },
          {
            quoteText: '"I thought I knew everything I could about AdWords, but after spending just 5 minutes with these guys,I realized how much more I had to learn.KlientBoost does<strong>more than just produce results,</strong>they teach you along the way."',
            authorImg: require('../../assets/images/index/9aefb1e0f33bc33eeadff6ab053395c8.jpeg'),
            authorName: 'Thue Madsen',
            autorText: 'Marketing Ops. Manager @',
            linkTo: '',
            authorCompany: 'Kissmetrics'
          }
        ],
        ifSelect: {
          MenuItem1classTrue: 'true',
          MenuItem2classTrue: 'false',
          MenuItem3classTrue: 'false',
          MenuItem4classTrue: 'false',
          MenuItem5classTrue: 'false',
          MenuItem6classTrue: 'false',
          MenuItem7classTrue: 'false',
        },
        title: 'Hey there, AcceGen Biotech' +
          '<img style="height: 40px;position: relative;top: 15px;margin: 0 0px 6px 6px;" ' +
          'src="https://s.w.org/images/core/emoji/12.0.0-1/svg/1f44b.svg">'
      }
    }
  }
</script>

<style scoped>
    .index {
        font-family: Lato, Helvetica Neue, Helvetica;
    }

    .index .LGmt--110 {
        margin-top: -110px;
    }

    .index .mt-80 {
        margin-top: 80px;
    }


    /*中间三到五张图片转变 */
    .index .logo-image {
        width: 100%;
        max-width: 150px;
    }

    /*三张图片链接*/
    .index .h2-1 {
        font-size: 26px;
        font-weight: 700;
        text-align: center;
        margin-top: 70px;
    }

    .index .underline hr {
        width: 48px;
        border-width: 1px;
        border-color: #30383f;
        margin: 20px auto 40px;
    }

    .btn-BWCR {
        font-size: 17px;
        padding: 21px 36px;
        border-width: 3px;
        margin: 30px auto 100px;
    }

    .index .view-father a:hover {
        background: #ff5056;
        color: white;
    }


    .index .index-h3-fontsize {
        font-size: 20px;
        margin: 0;
    }

    /*!*逗号分隔符*!*/
    /*.index .border {*/
    /*    height: 2px;*/
    /*    background: #11253c;*/
    /*    width: 250px;*/
    /*    margin: 20px auto 0;*/
    /*}*/

    /*.index .icon {*/
    /*    height: 75px;*/
    /*    width: 90px;*/
    /*    margin: -30px auto auto;*/
    /*    background: #fff;*/
    /*}*/

    /*.index .icon-inner {*/
    /*    height: 60px;*/
    /*    width: 60px;*/
    /*    background: #11253c;*/
    /*    color: #fff;*/
    /*    border-radius: 999px;*/
    /*    white-space: nowrap;*/
    /*    display: inline-block;*/
    /*    text-align: center;*/
    /*}*/

    /*.index .icon img {*/
    /*    width: 26px;*/
    /*    display: inline-block;*/
    /*    vertical-align: middle;*/
    /*    margin-top: 30%;*/
    /*}*/


    /*图文结合三大组件*/
    .index .middle-font {
        margin: 0 auto;
        max-width: 500px;
    }

    .index .middle-font h2 {
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 18px;
        color: #30383F;
        font-family: Lato, Helvetica Neue, Helvetica;
    }

    .index .ContentBorder {
        height: 2px;
        width: 150px;
        background: #6adaf7;
        display: inline-block;
        margin-bottom: 15px;
    }

    .index .middle-font h3 {
        color: #667482;
        max-width: 500px;
        font-weight: 400;
        margin-bottom: 50px;
    }

    .index .text-left {
        text-align: left;
    }

    .index .middle-first-image-big {
        max-width: 680px;
        height: 612px;
        float: right;
        background: url("../../assets/images/index/home-planet-klientboost.png") no-repeat;
        background-size: 100% 100%;
    }

    .index .middle-first-image-small {
        width: 278px;
        height: 200px;
        float: none;
        clear: both;
        background: url("../../assets/images/index/18107a0f3ea1ea18ba61b895da61b198.jpg") no-repeat;
        background-size: 100% 100%;
        margin: 20px auto;
    }

    .index .middle-second-image-big {
        max-width: 660px;
        height: 374px;
        background: url("../../assets/images/index/home-astronauts.png") no-repeat;
        background-size: 100% 100%;
    }

    .index .middle-second-image-small {
        width: 360px;
        height: 200px;
        float: none;
        clear: both;
        background: url("../../assets/images/index/home-astronauts.png") no-repeat;
        background-size: 100% 100%;
        margin: 20px auto;
    }

    .index .middle-third-image-big {
        height: 550px;
        /*float: right;*/
        background: url("../../assets/images/index/illustration-plants.jpg") no-repeat;
        background-size: 100% 100%;
    }

    .index .middle-third-image-small {
        width: 360px;
        height: 200px;
        float: none;
        clear: both;
        background: url("../../assets/images/index/785e6348d8866b16cafc8c1ff65460b1.jpg") no-repeat;
        background-size: 100% 100%;
        margin: 20px auto;
    }
</style>
