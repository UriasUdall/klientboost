<template>
    <el-row class="index">
        <el-col>
            <el-row>
                <el-col>
                    <CommonHeader :ifSelect="ifSelect"></CommonHeader>
                </el-col>
            </el-row>
            <!--首部火箭背景-->
            <el-row>
                <el-col>
                    <el-row id="hero">
                        <el-col class="star"></el-col>
                        <el-col class="small-clouds hidden-xs-only"></el-col>
                        <el-col class="content">
                            <div class="rocket">
                                <img src="../../assets/images/index/hero-rocket.png" alt="Klientboost Rocket">
                            </div>
                            <h1>Your PPC&Paid Social Performance
                                <br>
                                Is About To Take Off</h1>
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

            <!--中间三到五张图片转变-->
            <el-row >
                <!--空格占位-->
                <el-col :xs="0" :sm="1" :md="1" :lg="1" class="block">&nbsp;</el-col>
                <!--图片内容-->
                <el-col :xs="24" :sm="22" :md="22" :lg="22">
                    <el-row >
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
            <!--逗号分隔符-->
            <el-row>
                <el-col>
                    <div class="border"></div>
                    <div class="icon">
                        <div class="icon-inner">
                            <img src="../../assets/images/index/quote.png" alt="">
                        </div>
                    </div>
                </el-col>
            </el-row>
            <!--引文-->
            <el-row>
                <el-col :xs="3" :sm="3" :md="3" :lg="3">&nbsp;</el-col>
                <el-col :xs="18" :sm="18" :md="18" :lg="18">
                    <p class="quote quote-font-size">
                        "KlientBoost isn't your typical crapshoot,dime a dozen
                        PPC agency.They actually understand quality traffic and
                        more importantly,the
                        <strong>
                            vitalness of conversion.
                        </strong>
                        If you have a chance to work with them,take it.
                        <strong>
                            They're marketing unicorns.
                        </strong>"
                    </p>

                </el-col>
            </el-row>
            <!--作者图片-->
            <el-row>
                <el-col>
                    <div class="author">
                        <img src="../../assets/images/index/8856b64e-c2c9-4358-846b-351492d56f44-400x400.jpg"
                             alt="Oli Gardner">
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <h3 class="name">Oli Gardner</h3>
                    <span class="title">Co-Founder @
          <a href="http://unbounce.com" class="company" target="_blank">Unbounce</a>
        </span>
                </el-col>
            </el-row>
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
                        <h3 class="index-h3-fontsize">From Facebook & Google Ads to custom landing pages,
                            we help you discover the highest return
                            on investment you've ever had.</h3>
                    </div>
                </el-col>
                <!--右边图片-->
                <el-col :md="12" :lg="13" class="middle-first-image-big hidden-xs-only">&nbsp;</el-col>
                <el-col :xs="24" :sm="11" class="middle-first-image-small hidden-sm-and-up">&nbsp;</el-col>
            </el-row>
            <!--第2个-->
            <el-row >
                <!--左边图片-->
                <el-col :sm="12" :md="10" :lg="12" :xl="12" class="middle-second-image-big hidden-xs-only">&nbsp;</el-col>
                <el-col :xs="24" :sm="12" :md="14" :lg="12">
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
            <el-row >
                <!--空格占位-->
                <el-col :xs="0" :sm="0" :md="2" :lg="0" class="block">&nbsp;</el-col>
                <!--左边字体-->
                <el-col :xs="24" :sm="24" :md="10" :lg="11" class="mt-80">
                    <div class="middle-font text-center text-left">
                        <h2>You'll Grow Very Fast</h2>
                        <div class="ContentBorder"></div>
                        <h3 class="index-h3-fontsize">
                            From quick wins to long term strategies,we create a
                            profit rich environment to help you scale to new heights
                            while maintaining costs.
                        </h3>
                    </div>
                </el-col>
                <!--右边图片-->
                <el-col :md="12" :lg="13" class="middle-third-image-big hidden-sm-and-down">&nbsp;
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </el-col>
                <el-col :xs="24" :sm="24" class="middle-third-image-small hidden-md-and-up">&nbsp;
                </el-col>
            </el-row>
            <!--第2个逗号分隔符-->
            <el-row style="margin-top: 40px">
                <el-col>
                    <div class="border"></div>
                    <div class="icon">
                        <div class="icon-inner">
                            <img src="../../assets/images/index/quote.png" alt="">
                        </div>
                    </div>
                </el-col>
            </el-row>
            <!--第2个引文-->
            <el-row>
                <el-col :xs="3" :sm="3" :md="3" :lg="3">&nbsp;</el-col>
                <el-col :xs="18" :sm="18" :md="18" :lg="18">
                    <p class="quote quote-font-size">
                        "I thought I knew everything I could about AdWords,
                        but after spending just 5 minutes with these guys,I
                        realized how much more I had to learn.KlientBoost does
                        <strong>more than just produce results,</strong>
                        they teach you along the way."
                    </p>
                </el-col>
            </el-row>
            <!--第2个作者图片-->
            <el-row>
                <el-col>
                    <div class="author">
                        <img src="../../assets/images/index/9aefb1e0f33bc33eeadff6ab053395c8.jpeg"
                             alt="Thue Madsen">
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <h3 class="name">Thue Madsen</h3>
                    <span class="title">Marketing Ops. Manager @
          <a href="http://teitter.com/ThueLMadsen" class="company" target="_blank">Kissmetrics</a>
        </span>
                </el-col>
            </el-row>

            <!--底部样式-->
            <el-row>
                <el-col>
                    <CommonFooterTop></CommonFooterTop>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <CommonFooter></CommonFooter>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>


<script>
  import CommonFooter from '@/components/common/common-footer'
  import CommonFooterTop from '@/components/common/common-footer-top'
  import CommonHeader from '@/components/common/common-header'

  export default {
    name: 'index',
    components: {
      CommonFooter,
      CommonHeader,
      CommonFooterTop
    },
    data () {
      return {
        isNowPage: true,
        ifSelect: {
          MenuItem1classTrue: 'true',
          MenuItem2classTrue: 'false',
          MenuItem3classTrue: 'false',
          MenuItem4classTrue: 'false',
          MenuItem5classTrue: 'false',
          MenuItem6classTrue: 'false',
          MenuItem7classTrue: 'false',
        }
      }
    }
  }
</script>

<style scoped>
    .index {
        font-family: Lato, Helvetica Neue, Helvetica;
    }

    .index .mt-80{
        margin-top: 80px;
    }

    /*首部火箭背景*/
    .index #hero {
        background-color: #11253c;
        color: #fff;
        /*背景渐变*/
        background-image: linear-gradient(-180deg, #0e1f35, #21455c);
        /*height: 811px;*/
        position: relative;
        margin: 0;
        padding: 0;
    }

    .index .star {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        height: 550px;
        background-image: url("../../assets/images/index/412ff5165675da0090654d7bc444f725.png");
        background-size: 640px, 550px;
        background-repeat: no-repeat;
    }

    .index .small-clouds {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url("../../assets/images/index/21898f85c5220f8a6631726c247b2ed0.png");
        background-size: 150px;
        background-repeat: no-repeat;
        background-position: 100% 40%;
    }

    .index .content {
        position: relative;
        z-index: 10;
        text-align: center;
    }

    .index .content .rocket {
        padding-top: 145px;
        margin: 0 auto 35px;
        width: 110px;
    }

    .index .content h1 {
        font-size: 3.7rem;
    }

    .index .content .rocket img {
        width: 100%;
    }

    .index .content a {
        margin: 38px auto 0px;
        width: 300px;
        height: 60px;
        /*font-size: 1.5rem;*/
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

    /*中间三到五张图片转变 */
    .index .logo-image {
        width: 100%;
        max-width: 150px;
    }

    /*三张图片链接*/
    .index .h2-1 {
        font-size: 23px;
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

    .index .lightbox-btn {
        position: relative;
    }

    .index .lightbox-a {
        display: block;
        position: absolute;
        left: 50%;
        top: 40%;
        -webkit-transform: translate(-50%, -50%);
        cursor: pointer;
    }

    .index .lightbox-a img {
        max-width: 75px;
    }

    .index .lightbox-btn img {
        width: 100%;
    }

    .index .lightbox-btn p {
        color: #55616d;
        font-weight: 700;
        font-size: 20px;
        text-align: center;
        margin: 7px 0 20px;
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

    /*逗号分隔符*/
    .index .border {
        height: 2px;
        background: #11253c;
        width: 250px;
        margin: 20px auto 0;
    }

    .index .icon {
        height: 75px;
        width: 90px;
        margin: -30px auto auto;
        background: #fff;
    }

    .index .icon-inner {
        height: 60px;
        width: 60px;
        background: #11253c;
        color: #fff;
        border-radius: 999px;
        white-space: nowrap;
        display: inline-block;
        text-align: center;
    }

    .index .icon img {
        width: 26px;
        display: inline-block;
        vertical-align: middle;
        margin-top: 30%;
    }

    /*引文*/
    .index .quote {
        /*font-size: 1.5rem;*/
        font-weight: 500;
        line-height: 130%;
        margin: 20px 0 10px;
        display: block;
        color: #667482;
    }

    .index .quote-font-size{
        font-size: 21px;
    }
    .index .index-h3-fontsize{
        font-size: 21px;
        margin: 0;
    }

    /*作者*/
    .index .author {
        width: 120px;
        margin: 20px auto 20px;
    }

    .index .author img {
        border-radius: 999px;
        width: 100%;
    }

    .index .name {
        font-size: 21px;
        font-weight: 700;
        margin: 0 0 2px;
    }

    .index .title {
        font-size: 18px;
        font-weight: 400;
        color: #667482;
        display: block;
        margin-top: 10px;
    }

    .index .company {
        color: #30383f;
        cursor: pointer;
        font-size: 18px;
    }

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
        max-width: 400px;
        font-weight: 400;
        margin-bottom: 50px;
    }

    .index .middle-first-image-big {
        max-width: 680px;
        height: 612px;
        float: right;
        background: url("../../assets/images/index/home-planet-klientboost.png") no-repeat;
        background-size: 100% 100%;
    }

    .index .middle-first-image-small {
        width: 360px;
        height: 200px;
        float: none;
        clear: both;
        background: url("../../assets/images/index/18107a0f3ea1ea18ba61b895da61b198.jpg") no-repeat;
        background-size: 100% 100%;
        margin: 20px auto;
    }

    .index .middle-second-image-big {
        /*width: 660px;*/
        height: 374px;
        /*float: left;*/
        background: url("../../assets/images/index/home-astronauts.png") no-repeat;
        background-size: 100% 100%;
        /*background-position-x: -180px;*/
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
        height: 43rem;
        float: right;
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
