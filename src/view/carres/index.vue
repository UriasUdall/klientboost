<template>
    <el-row class="carresPage">
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
                            <h2 class="page-title">CARRES</h2>
                            <div class="whiteBorder"></div>
                        </el-col>
                    </el-row>

                    <el-row class="page-content">
                        <el-col>
                            <el-row class="big-title-1">
                                <el-col>
                                    <h2>We’re Hiring</h2>
                                    <p>
                                        We’re looking for talented, motivated marketers and designers to
                                        join us on our mission to take over the world.
                                    </p>
                                </el-col>
                            </el-row>
                            <el-row class="show-img">
                                <el-col :span="8">
                                    <a href="">
                                        <img src="../../assets/images/carres/69878259_2324053451177598_2840719621366631285_n.jpg"
                                             alt="">
                                    </a>
                                </el-col>
                                <el-col :span="8">
                                    <a href="">
                                        <img src="../../assets/images/carres/68965570_124737968890191_1648906298606132957_n.jpg"
                                             alt="">
                                    </a>
                                </el-col>
                                <el-col :span="8">
                                    <a href="">
                                        <img src="../../assets/images/carres/66505991_2331961900452860_8146290853617245476_n.jpg"
                                             alt="">
                                    </a>
                                </el-col>
                            </el-row>
                            <el-row class="spire">
                                <el-col :xs="24" class="hidden-sm-and-up spire-content">
                                    <h3>Love What You Do</h3>
                                    <p class="p1">KlientBoost isn’t just full of computers, water coolers, and staplers.
                                        It’s full of hungry people.</p>
                                    <p class="p1">You should love the people you work with. And you should feel
                                        empowered to contribute, grow, learn, and have fun while you’re doing it.</p>
                                    <p class="p1">Here at KlientBoost, we’re looking for someone who has that mentality
                                        and creates more of it.
                                        <strong>Someone to make us better, as we make you better.</strong></p>

                                </el-col>
                                <el-col :xs="24" :sm="9" :md="12" :lg="12" :xl="12">
                                    <img src="../../assets/images/carres/image-300k-celebration-2x.png" alt="">
                                </el-col>
                                <el-col :sm="15" :md="12" :lg="12" :xl="12" class="hidden-xs-only spire-content">
                                    <h3>Love What You Do</h3>
                                    <p class="p1">KlientBoost isn’t just full of computers, water coolers, and staplers.
                                        It’s full of hungry people.</p>
                                    <p class="p1">You should love the people you work with. And you should feel
                                        empowered to contribute, grow, learn, and have fun while you’re doing it.</p>
                                    <p class="p1">Here at KlientBoost, we’re looking for someone who has that mentality
                                        and creates more of it.
                                        <strong>Someone to make us better, as we make you better.</strong></p>

                                </el-col>
                            </el-row>
                            <el-row class="team-info">
                                <el-col :md="8" :lg="8" :xl="8" class="team-pic">
                                    <img src="../../assets/images/carres/illustration-team-accounts-sailor-200x200.png"
                                         alt="">
                                    <h3 style="color:#6adaf7">ACCOUNTS TEAM</h3>
                                    <div class="team-info-text">
                                        <p>
                                            Account managers and coordinators sail the high seas of keywords,
                                            audiences, strategy, and growth. We depend on these amazing people
                                            to navigate our clients’ journey
                                            <strong>
                                                to the promised land,
                                                <em>the land of more profit.</em>
                                            </strong>
                                        </p>
                                    </div>
                                </el-col>
                                <el-col :md="8" :lg="8" :xl="8" class="team-pic">
                                    <img src="../../assets/images/carres/illustration-team-design-ninja-200x200-2x.png"
                                         alt="">
                                    <h3 style="color:#7170b2">DESIGN TEAM</h3>
                                    <div class="team-info-text">
                                        <p>
                                            Our designers are cold-blooded, pixel-throwing assassins.
                                            They slice, dice, and create high converting landing pages and ad sets,
                                            and know just what to test to find wins.
                                            <strong>Our design doesn’t just look good, it performs too.</strong>
                                        </p>
                                    </div>
                                </el-col>
                                <el-col :md="8" :lg="8" :xl="8" class="team-pic">
                                    <img src="../../assets/images/carres/illustration-team-marketing-astronaut-200x200-2x.png"
                                         alt="">
                                    <h3 style="color:#80de98">BRAND TEAM</h3>
                                    <div class="team-info-text">
                                        <p>
                                            Our brand team works directly with KB leadership to keep
                                            our own growth moving and expanding out into the unknown.
                                            These brave explorers work hard and smart to push the boundaries to
                                            <strong>
                                                boldly go where
                                                <em>no agency’s gone before.</em>
                                            </strong>
                                        </p>
                                    </div>
                                </el-col>
                            </el-row>
                            <el-row class="wanted-card">
                                <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11" class="card ml-02">
                                    <div class="card-s-title">BRAND TEAM</div>
                                    <h3>Software/Web Developer</h3>
                                    <div class="card-info">
                                        <p>
                                            You’re an experienced software and web developer who can work on
                                            product from the ground up. You’re excited about co-owner
                                            opportunities and the upside of hard work.
                                        </p>
                                    </div>
                                    <a href="" class="btn-BWCR">LEARN MORE AND APPLY</a>
                                </el-col>
                                <el-col :sm="1" :md="1" :lg="1" :xl="1" class="block hidden-xs-only">&nbsp;</el-col>
                                <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11" class="card">
                                    <div class="card-s-title">BRAND TEAM</div>
                                    <h3>Account Executive</h3>
                                    <div class="card-info">
                                        <p>
                                            You’ve successfully sold PPC and CRO services before and you know
                                            you can get better. You get excited to hit goals and earn
                                            limitless commissions.
                                        </p>
                                    </div>
                                    <a href="" class="btn-BWCR">LEARN MORE AND APPLY</a>
                                </el-col>
                                <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11" class="card ml-02">
                                    <div class="card-s-title">BRAND TEAM</div>
                                    <h3>Content Writer</h3>
                                    <div class="card-info">
                                        <p>
                                            You’re a masterful writer with PPC and CRO experience.
                                            You’ll help us strengthen our blog and help us master other
                                            types of content too.
                                        </p>
                                    </div>
                                    <a href="" class="btn-BWCR mt-19">LEARN MORE AND APPLY</a>
                                </el-col>
                                <el-col :sm="1" :md="1" :lg="1" :xl="1" class="block hidden-xs-only">&nbsp;</el-col>
                                <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11" class="card">
                                    <div class="card-s-title">BRAND TEAM</div>
                                    <h3>Director of Marketing</h3>
                                    <div class="card-info">
                                        <p>
                                            You’re knowledge spans wide and deep. Knowing PPC, CRO, email,
                                            and event marketing is just the beginning. You know which levers
                                            to pull and buttons to push.
                                        </p>
                                    </div>
                                    <a href="" class="btn-BWCR">LEARN MORE AND APPLY</a>
                                </el-col>
                                <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11" class="card ml-02">
                                    <div class="card-s-title">BRAND TEAM</div>
                                    <h3>Sales Development Rep</h3>
                                    <div class="card-info">
                                        <p>
                                            You’re familiar with Google AdWords and other channels of
                                            pay-per-click advertising. You have an easy way of persuading
                                            and getting people to take the next step.
                                        </p>
                                    </div>
                                    <a href="" class="btn-BWCR">LEARN MORE AND APPLY</a>
                                </el-col>
                                <el-col :sm="1" :md="1" :lg="1" :xl="1" class="block hidden-xs-only">&nbsp;</el-col>
                                <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11" class="card">
                                    <div class="card-s-title">DESIGN TEAM</div>
                                    <h3>CRO Designer</h3>
                                    <div class="card-info">
                                        <p>
                                            You know what makes a killer landing page. You’re excited to see
                                            traffic on your landing pages, and you’re even more
                                            excited to see their conversions go up and to the right.
                                        </p>
                                    </div>
                                    <a href="" class="btn-BWCR">LEARN MORE AND APPLY</a>
                                </el-col>
                                <el-col :sm="24" :md="23" :lg="23" :xl="23" class="card ml-02">
                                    <div class="card-s-title">ACCOUNTS TEAM</div>
                                    <h3>Account Manager</h3>
                                    <div class="card-info">
                                        <p>
                                            You’re a master at Google AdWords and other channels of pay-per-click
                                            advertising. You’re amazed and fascinated with the industry,
                                            always trying to improve your knowledge.
                                        </p>
                                    </div>
                                    <a href="" class="btn-BWCR">LEARN MORE AND APPLY</a>
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
        pd:60,
        ifSelect: {
          MenuItem1classTrue: 'false',
          MenuItem2classTrue: 'false',
          MenuItem3classTrue: 'false',
          MenuItem4classTrue: 'false',
          MenuItem5classTrue: 'false',
          MenuItem6classTrue: 'false',
          MenuItem7classTrue: 'false',
        },
        title: 'Over <strong>445 businesses</strong> got a proposal from us in <strong>August, 2019</strong>'
      }
    }
  }
</script>

<style scoped>

    .carresPage .ml-02 {
        margin-left: 2%;
    }

    .carresPage .page-content .big-title-1 {
        padding: 60px 0px;
        background: #F7FBFC;
    }

    .carresPage .page-content .big-title-1 h2 {
        font-size: 33px;
    }

    .carresPage .page-content .big-title-1 p {
        font-size: 14px;
        font-weight: 400;
        margin: 15px auto 0px;
        max-width: 360px;
        line-height: 140%;
        color: #667482;
    }

    .carresPage .page-content .show-img {
        font-size: 0;
        line-height: 0;
        overflow: hidden;
    }

    .carresPage .page-content .show-img img {
        display: block;
        outline: none;
        border-top: 1px solid #B3ECFB;
        width: 100%;
        height: 200px;
    }

    .carresPage .page-content .spire {
        padding: 60px 65px 60px 112px;
    }

    .carresPage .page-content .spire img {
        width: 400px;
        box-shadow: 2px 5px 18px 0 rgba(47, 56, 63, .24);
        border-radius: 10px;
    }

    .carresPage .page-content .spire .spire-content {
        text-align: left;
        font-size: 15px;
        line-height: 160%;
        color: #667482;
        max-width: 420px;
        padding-left: 30px;
    }

    .carresPage .page-content .spire h3 {
        font-size: 31px;
        margin-bottom: 10px;
        color: #667482;
        font-weight: 700;
    }

    .carresPage .page-content .spire p {
        font-size: 15px;
        margin: 0 0 10px;
    }

    .carresPage .page-content .spire p:last-child {
        margin-bottom: 0 !important;
    }

    .carresPage .page-content .team-info {
        background: #f7fbfc;
        border-bottom: 1px solid #b3ecfb;
        border-top: 1px solid #b3ecfb;
    }

    .carresPage .page-content .team-info .team-pic {
        padding: 50px;
    }

    .carresPage .page-content .team-info .team-pic img {
        max-width: 100%;
        margin-bottom: 20px;
    }

    .carresPage .page-content .team-info h3 {
        font-size: 21px;
        margin-bottom: 8px;
    }

    .carresPage .page-content .team-info .team-info-text {
        font-size: 17px;
        color: #667482;
        text-align: center;
    }

    .carresPage .page-content .team-info .team-info-text p {
        margin: 0px;
    }

    .carresPage .page-content .wanted-card {
        padding: 100px 120px 60px;
        margin: auto;
        text-align: left;
    }

    .carresPage .page-content .wanted-card .card {
        line-height: 1.42857;
        height: 100%;
        color: #667482;
        border-radius: 8px;
        padding: 20px;
        background-color: #fafdfd;
        border: 1px solid #ecf0f1;
        box-shadow: 0 0 3px 0 #89949f;
        margin-bottom: 40px;
    }

    .carresPage .page-content .wanted-card .card .card-s-title {
        color: #5de291;
        font-size: 13px;
        text-transform: uppercase;
        margin-bottom: 6px;
        font-weight: 700;
    }

    .carresPage .page-content .wanted-card .card h3 {
        font-size: 21px;
        color: #667482;
        position: relative;
        margin-bottom: 28px;
        font-weight: 700;
    }

    .carresPage .page-content .wanted-card .card h3:after {
        content: " ";
        position: absolute;
        height: 2px;
        background-color: #fed069;
        width: 75px;
        left: 0;
        bottom: -16px;
    }

    .carresPage .page-content .wanted-card .card .card-info {
        margin-bottom: 18px;
        font-size: 13.5px;
    }

    .carresPage .page-content .wanted-card .card a {
        width: 100%;
        text-align: center;
        line-height: 42px;
        border-width: 2px;
        /*margin-top: auto;*/
    }

</style>
