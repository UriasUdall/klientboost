<template>
  <el-row class="index">
    <!--首部火箭背景-->
    <div id="hero">
      <div class="star"></div>
      <div class="small-clouds hidden-xs-only" ></div>
      <div class="content">
        <div class="rocket">
          <img src="../../assets/images/index/hero-rocket.png" alt="Klientboost Rocket">
        </div>
        <h1>Your PPC&Paid Social Performance
          <br>
          Is About To Take Off</h1>
        <a href="#">GET MY FREE PROPOSAL</a>
      </div>
      <div class="cloudStream"></div>
    </div>
    <!--中间三到五张图片转变-->
    <el-row>
      <!--空格占位-->
      <el-col :xs="2" :sm="2" :md="2" :lg="2">&nbsp;</el-col>
      <!--图片内容-->
      <el-col :xs="20" :sm="20" :md="20" :lg="20">
        <el-row :gutter="20">
          <el-col :xs="8" :sm="4" :md="4" :lg="4">
            <img src="../../assets/images/index/logo-sap-144x48-2x.png" alt="SPA" class="logo-image">
          </el-col>
          <el-col :sm="5" :md="5" :lg="5" class="hidden-xs-only">
            <img src="../../assets/images/index/logo-stanford-university-144x48-2x.png" alt="Stanford University" class="logo-image">
          </el-col>
          <el-col :sm="5" :md="5" :lg="5" class="hidden-xs-only">
            <img src="../../assets/images/index/logo-juniper-144x48-2x.png" alt="Juniper" class="logo-image">
          </el-col>
          <el-col :xs="8" :sm="5" :md="5" :lg="5">
            <img src="../../assets/images/index/logo-donatello-144x48-2x.png" alt="Donatello" class="logo-image">
          </el-col>
          <el-col :xs="8" :sm="5" :md="5" :lg="5">
            <img src="../../assets/images/index/logo-brinks-144x48-2x.png" alt="Brinks" class="logo-image">
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <!--三张图片链接-->
    <el-col>
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
        <el-col :xs="5" :sm="1" :md="2" :lg="2">&nbsp;</el-col>
        <!--图片链接-->
        <el-col :xs="14" :sm="22" :md="20" :lg="20">
          <el-row :gutter="20">
            <el-col :xs="24" :sm="8" :md="8" :lg="8">
              <div class="lightbox-btn">
                <a href="https://www.youtube.com/embed/FPfb6NFmg0w?autoplay=1&vq=hd1080" class="lightbox-a">
                  <img src="../../assets/images/index/play-btn-final@2x.png" alt="play btn">
                </a>
                <img src="../../assets/images/index/kiddom-hero-desktop-new.png"
                     alt="kiddom client success story">
                <p>Lead Gen</p>
              </div>
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" :lg="8">
              <div class="lightbox-btn">
                <a href="https://www.youtube.com/embed/FPfb6NFmg0w?autoplay=1&vq=hd1080" class="lightbox-a">
                  <img src="../../assets/images/index/play-btn-final@2x.png" alt="play btn">
                </a>
                <img src="../../assets/images/index/fashionphile-hero-desktop.jpg"
                     alt="fashionphile client success story">
                <p>eComm</p>
              </div>
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" :lg="8">
              <div class="lightbox-btn">
                <a href="https://www.youtube.com/embed/FPfb6NFmg0w?autoplay=1&vq=hd1080" class="lightbox-a">
                  <img src="../../assets/images/index/play-btn-final@2x.png" alt="play btn" class="play-video">
                </a>
                <img src="../../assets/images/index/segment-hero-desktop.jpg" alt="segment- client success story">
                <p>SaaS</p>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row class="view-father">
          <a href="#" class="view-btn" >
            VIEW OUR CASE STUDIES
          </a>
      </el-row>
    </el-col>
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
        <p class="quote">
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
    <el-row>
      <!--空格占位-->
      <el-col :xs="0" :sm="0" :md="1" :lg="1" class="block">&nbsp;</el-col>
      <!--左边字体-->
      <el-col :xs="24" :sm="24" :md="11" :lg="10">
        <div class="middle-font text-center text-left">
          <h2>You'll Make More Money</h2>
          <div class="ContentBorder"></div>
          <h3>From Facebook & Google Ads to custom landing pages,
            we help you discover the highest return
            on investment you've ever had.</h3>
        </div>
      </el-col>
      <!--右边图片-->
      <el-col :md="12" :lg="13" class="middle-first-image-big hidden-sm-and-down">&nbsp;</el-col>
      <el-col :xs="24" :sm="24" class="middle-first-image-small hidden-md-and-up">&nbsp;</el-col>
    </el-row>
    <!--第2个-->
    <el-row class="mt-50">
      <!--左边图片-->
      <el-col :md="12" :lg="13" class="middle-second-image-big hidden-sm-and-down">&nbsp;</el-col>
      <el-col :xs="24" :sm="24" class="middle-second-image-small hidden-md-and-up">&nbsp;</el-col>
      <!--空格占位-->
<!--      <el-col :xs="0" :sm="0" :md="2" :lg="0" class="block">&nbsp;</el-col>-->
      <!--左边字体-->
      <el-col :xs="24" :sm="24" :md="12" :lg="11">
        <div class="middle-font text-center text-left">
          <h2>You'll Work With Talent</h2>
          <div class="ContentBorder"></div>
          <h3>
            From deep PPC knowledge to conversion focused
            design,we bring the best of both worlds to grow your
            profitability.
          </h3>
        </div>
      </el-col>
    </el-row>
    <!--第3个-->
    <el-row>
      <!--空格占位-->
      <el-col :xs="0" :sm="0" :md="2" :lg="0" class="block">&nbsp;</el-col>
      <!--左边字体-->
      <el-col :xs="24" :sm="24" :md="10" :lg="11">
        <div class="middle-font text-center text-left">
          <h2>You'll Grow Very Fast</h2>
          <div class="ContentBorder"></div>
          <h3>
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
    <Footer v-bind:class="{'isIndex':isNowPage}"></Footer>
  </el-row>
</template>


<script>
    import Footer from '@/components/footerview'

    export default {
        name: 'index',
        components: {
            // FooterNav,
            Footer
        },
        data() {
            return {
                isNowPage: true
            }
        }
    }
</script>

<style scoped>
  .index{
    font-family:Lato,Helvetica Neue,Helvetica;
  }
  /*首部火箭背景*/
  #hero {
    background-color: #11253c;
    color: #fff;
    /*背景渐变*/
    background-image: linear-gradient(-180deg, #0e1f35, #21455c);
    height: 811px;
    position: relative;
    margin: 0;
    padding: 0;
  }

  .star{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 640px;
    height: 550px;
    background-image: url("../../assets/images/index/412ff5165675da0090654d7bc444f725.png");
    background-size: 640px, 550px;
    background-repeat: no-repeat;
  }

  .small-clouds {
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

  .content {
    position: relative;
    z-index: 10;
    text-align: center;
  }

  .content .rocket {
    padding-top: 145px;
    margin: 0 auto 35px;
    width: 6rem;
  }
  .content h1{
    font-size: 2rem;
  }
  .content .rocket img {
    width: 100%;
  }

  .content a {
    margin: 38px auto 225px;
    width: 300px;
    height: 60px;
    font-size: 1.5rem;
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

  .cloudStream {
    height: 450px;
    position: absolute;
    left: 0;
    right: 0;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: bottom;
    background-image: url("../../assets/images/index/5b677ccb69601fde7ca3f49758f72f75.png");
    bottom: -2px;
  }
/*中间三到五张图片转变 */
  .logo-image{
    width: 12rem;
    margin: 20px auto 60px;
  }

  /*三张图片链接*/
  .h2-1 {
    font-size: 1.8rem;
    font-weight: 700;
    text-align: center;
    margin: 0;
  }

  .underline hr {
    width: 48px;
    border-width: 1px;
    border-color: #30383f;
    margin: 20px auto 40px;
  }

  .lightbox-btn {
    position: relative;
  }

  .lightbox-a {
    display: block;
    position: absolute;
    left: 50%;
    top: 40%;
    -webkit-transform: translate(-50%, -50%);
    cursor: pointer;
  }

  .lightbox-a img {
    max-width: 6rem;
  }

  .lightbox-btn img {
    width: 100%;
  }

  .lightbox-btn p {
    color: #55616d;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    margin: 7px 0 20px;
  }
  .view-btn{
    line-height: 54px;
    display: block;
    color: #ff5056;
    background: #fff;
    border: 3px solid #ff5056;
    width: 320px;
    height: 55px;
    padding: 0;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 700;
    margin: 40px auto 80px;
    cursor: pointer;
    font-size: 1.4rem;
  }
  .view-father a:hover{
    background: #ff5056;
    color: white;
  }

  /*逗号分隔符*/
  .border {
    height: 2px;
    background: #11253c;
    width: 250px;
    margin: 20px auto 0;
  }
  .icon{
    height: 75px;
    width: 90px;
    margin: -30px auto auto;
    background: #fff;
  }
  .icon-inner{
    height: 60px;
    width: 60px;
    background: #11253c;
    color: #fff;
    border-radius: 999px;
    white-space: nowrap;
    display: inline-block;
    text-align: center;
  }

  .icon img {
    width: 26px;
    display: inline-block;
    vertical-align: middle;
    margin-top: 18px;
  }
  /*引文*/
  .quote{
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 130%;
    margin: 20px 0 10px;
    display: block;
    color: #667482;
  }

  /*作者*/
  .author{
    width: 120px;
    margin: 40px auto 20px;
  }
  .author img{
    border-radius: 999px;
    width: 100%;
  }
  .name {
    font-size: 1.6rem;
    font-weight: 700;
    margin: 0 0 2px;
  }
  .title {
    font-size: 1.2rem;
    font-weight: 400;
    color: #667482;
    display: block;
    margin-top:10px;
  }

  /*图文结合三大组件*/
  /*col*/
  .middle-font{
    width: 450px;
    margin: 100px auto 0;
  }
  .middle-font h2{
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 18px;
    color: #30383F;
    font-family: Lato,Helvetica Neue,Helvetica;
  }
  .ContentBorder{
    height: 2px;
    width: 150px;
    background:#6adaf7;
    display: inline-block;
    margin-bottom: 15px;
  }
  .middle-font h3{
    color: #667482;
    font-size: 1.6rem;
    margin-bottom: 50px;
  }
  .middle-first-image-big{
    height: 43rem;
    float: right;
    background: url("../../assets/images/index/home-planet-klientboost.png") no-repeat;
    background-size: 100%  100%;
  }
  .middle-first-image-small{
    width: 360px;
    height: 200px;
    float: none;
    clear: both;
    background: url("../../assets/images/index/18107a0f3ea1ea18ba61b895da61b198.jpg") no-repeat;
    background-size: 100% 100%;
    margin: 20px auto;
  }
  .middle-second-image-big{
    height: 25rem;
    width: 48rem;
    float: left;
    background: url("../../assets/images/index/home-astronauts.png") no-repeat;
    background-size: 100%  100%;
    background-position-x: -170px;
  }
  .mt-50{
    margin-top: -50px;
  }
  .middle-second-image-small{
    width: 360px;
    height: 200px;
    float: none;
    clear: both;
    background: url("../../assets/images/index/home-astronauts.png") no-repeat;
    background-size: 100% 100%;
    margin: 20px auto;
  }
  .middle-third-image-big{
    height: 30rem;
    float: right;
    background: url("../../assets/images/index/illustration-plants.jpg") no-repeat;
    background-position-x: -170px;
    background-size: 100%  100%;
  }
  .middle-third-image-small{
    width: 360px;
    height: 200px;
    float: none;
    clear: both;
    background: url("../../assets/images/index/785e6348d8866b16cafc8c1ff65460b1.jpg") no-repeat;
    background-size: 100% 100%;
    margin: 20px auto;
  }
</style>
