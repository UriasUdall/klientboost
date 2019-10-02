<template>
  <el-row class="caseStudies">
    <el-col>
      <!--顶部开始-->
      <CommonHeader :ifSelect="ifSelect"></CommonHeader>
      <!--顶部结束-->

      <!--主体开始-->
      <!-- 页面大标题 -->
      <el-row class=" BG-BB-LG">
        <el-col class="container">
          <el-row>
            <el-col>
              <div class="whiteBorder MT-80-I"></div>
              <h2 class="page-title">CASE STUDIES</h2>
              <div class="whiteBorder"></div>
            </el-col>
          </el-row>

          <el-row class="caseStudiesImg">
            <!--空格占位-->
            <el-col :xs="4" :sm="1" :md="2" :lg="2">&nbsp;</el-col>
            <!--图片链接-->
            <el-col :xs="16" :sm="22" :md="20" :lg="20">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="8" :md="8" :lg="8">
                  <div class="lightbox-btn">
                    <a href=""
                       class="lightbox-a">
                      <img src="../../assets/images/index/play-btn-final@2x.png" alt="play btn">
                    </a>
                    <img src="../../assets/images/case-studies/dadasd.png"
                         alt="kiddom client success story">
                  </div>
                </el-col>
                <el-col :xs="24" :sm="8" :md="8" :lg="8">
                  <div class="lightbox-btn">
                    <a href="https://www.youtube.com/embed/FPfb6NFmg0w?autoplay=1&vq=hd1080"
                       class="lightbox-a">
                      <img src="../../assets/images/index/play-btn-final@2x.png" alt="play btn">
                    </a>
                    <img src="../../assets/images/case-studies/fwsgre.png"
                         alt="fashionphile client success story">
                  </div>
                </el-col>
                <el-col :xs="24" :sm="8" :md="8" :lg="8">
                  <div class="lightbox-btn">
                    <a href="https://www.youtube.com/embed/FPfb6NFmg0w?autoplay=1&vq=hd1080"
                       class="lightbox-a">
                      <img src="../../assets/images/index/play-btn-final@2x.png" alt="play btn"
                           class="play-video">
                    </a>
                    <img src="../../assets/images/case-studies/gerhgesg.png"
                         alt="segment- client success story">
                  </div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>

          <el-row class="page-content hidden-xs-only">
            <el-col>
              <el-row class="content-1">
                <el-col class="OH">
                  <el-tabs type="border-card" class="hidden-xs-only page-tabs">
                    <el-tab-pane class="tabs-item" label="All">
                      <div class="tabs-pic-1 tabs-pic">
                        <div :class="'pic pic-'+index"
                             v-for="(item, index) in picInfo[0]" :key="index">
                          <div class="inner"
                               :style="{background:'url('+item.imgBG+') center no-repeat'}"></div>
                          <a :href="item.imgToUrl">
                            <span class="btn-BRCW-BB">{{item.imgTittle}}</span>
                            <p>{{item.imgContent}}</p>
                            <hr>
                            <img :src="item.imgSrc">
                          </a>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane class="tabs-item" label="SaaS">
                      <div class="tabs-pic-2 tabs-pic">
                        <div :class="'pic pic-'+index"
                             v-for="(item, index) in picInfo[1]" :key="index">
                          <div class="inner"
                               :style="{background:'url('+item.imgBG+') center no-repeat'}"></div>
                          <a :href="item.imgToUrl">
                            <span class="btn-BRCW-BB">{{item.imgTittle}}</span>
                            <p>{{item.imgContent}}</p>
                            <hr>
                            <img :src="item.imgSrc">
                          </a>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane class="tabs-item" label="Lead Gen">
                      <div class="tabs-pic-3 tabs-pic">
                        <div :class="'pic pic-'+index"
                             v-for="(item, index) in picInfo[2]" :key="index">
                          <div class="inner"
                               :style="{background:'url('+item.imgBG+') center no-repeat'}"></div>
                          <a :href="item.imgToUrl">
                            <span class="btn-BRCW-BB">{{item.imgTittle}}</span>
                            <p>{{item.imgContent}}</p>
                            <hr>
                            <img :src="item.imgSrc">
                          </a>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane class="tabs-item" label="eComm">
                      <div class="tabs-pic-4 tabs-pic">
                        <div :class="'pic pic-'+index"
                             v-for="(item, index) in picInfo[3]" :key="index">
                          <div class="inner"
                               :style="{background:'url('+item.imgBG+') center no-repeat'}"></div>
                          <a :href="item.imgToUrl">
                            <span class="btn-BRCW-BB">{{item.imgTittle}}</span>
                            <p>{{item.imgContent}}</p>
                            <hr>
                            <img :src="item.imgSrc">
                          </a>
                        </div>
                      </div>
                    </el-tab-pane>
                  </el-tabs>
                </el-col>
              </el-row>
              <Sentence class="content-2" :content="content"></Sentence>
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
    import Sentence from '@/components/sentence'

    export default {
        name: 'index',
        components: {
            CommonHeader,
            CommonFooter,
            CommonFooterTop,
            Sentence
        },
        data() {
            return {
                pd: 60,
                content: {
                    quoteText: '"KlientBoost isn’t your typical crap-shoot, dime a dozen PPC agency. They actually understand quality traffic and more importantly, the vitalness of conversion. If you have a chance to work with them, take it. They’re marketing unicorns."',
                    authorImg: require('../../assets/images/case-studies/ecfb08cf-8856b64e-c2c9-4358-846b-351492d56f44-400x400_03c03c03c03c00000001o.jpg'),
                    authorName: 'Oli Gardner',
                    autorText: 'Co-Founder @',
                    linkTo: '',
                    authorCompany: 'Unbounce'
                },
                ifSelect: {
                    MenuItem1classTrue: 'false',
                    MenuItem2classTrue: 'false',
                    MenuItem3classTrue: 'false',
                    MenuItem4classTrue: 'true',
                    MenuItem5classTrue: 'false',
                    MenuItem6classTrue: 'false',
                    MenuItem7classTrue: 'false',
                },
                title: 'Over <strong>445 businesses</strong> got a proposal from us in <strong>August, 2019</strong>',
                picInfo: [
                    [
                        {
                            imgBG: require('../../assets/images/case-studies/428ad337.jpg'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '300% Increase in Conversion Rate',
                            imgSrc: require('../../assets/images/case-studies/jun.png')
                        },
                        {
                            imgBG: require('../../assets/images/case-studies/3c9a08ff-image-mention-hero-280x200-2x-0fk0b40fk0b4000000001.original.jpg'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '343% Increase in Conversions',
                            imgSrc: require('../../assets/images/case-studies/1837d1d8-logo-mention-152x32-2x_04800w04800w000000001.png')
                        },
                        {
                            imgBG: require('../../assets/images/case-studies/551b3c4d-image-autopilot-hero-280x200-2x-0fk0b40fk0b400000001o.original.jpg'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '169% Increase in Conversion Rate',
                            imgSrc: require('../../assets/images/case-studies/1ca0747c-logo-autopilot-184x40-2x_054014054014000000001.png')
                        },
                        {
                            imgBG: require('../../assets/images/case-studies/c4dfb572-image-tyme-hero-280x200-2x-0fk0b40fk0b400000001o.original.jpg'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '1883% Increase in Conversion Rate',
                            imgSrc: require('../../assets/images/case-studies/71b2e14e-logo-tyme-184x35-2x_054011054010000000001.png')
                        },
                        {
                            imgBG: require('../../assets/images/case-studies/https___app.unbounce.com_publish_assets_c11a6b7e-6751-4002-a.jpg'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '97% Decrease in Cost Per Acquisition',
                            imgSrc: require('../../assets/images/case-studies/d3252e23-logo-caresync-176x40-2x_04w01404w014000000001.png')
                        },
                        {
                            imgBG: require('../../assets/images/case-studies/fsdsaf.jpg'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '263% Increase in Conversion Rate',
                            imgSrc: require('../../assets/images/case-studies/e1503d10-logo-le-tote-169x24-2x_04p00o04p00o000000001.png')
                        },
                        {
                            imgBG: require('../../assets/images/case-studies/https___app.unbounce.com_publish_assets_f4506c7d-d9b0-4aad-88.jpg'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '35% Increase in Conversion Volume',
                            imgSrc: require('../../assets/images/case-studies/2455a9f8-logo-rich-uncles-368x74-2x_054011054011000000001.png')
                        },
                        {
                            imgBG: require('../../assets/images/case-studies/e542cee5-image-lemonstand-hero-280x200-2x-0fk0b40fk0b400000001o.original.jpg'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '314% Increase in Click Through Rates',
                            imgSrc: require('../../assets/images/case-studies/85ebe721-logo-lemonstand-168x27-2x_04o00r04o00r000000001.png')
                        },
                        {
                            imgBG: require('../../assets/images/case-studies/https___app.unbounce.com_publish_assets_4fbca7b6-8017-4217-.jpg'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '281% Decrease in Cost Per Conversion',
                            imgSrc: require('../../assets/images/case-studies/004da7cc-logo-usc-cu-136x40-2x_03t01403t014000000001.png')
                        },
                        {
                            imgBG: require('../../assets/images/case-studies/6efe2257-image-sei-hero-280x200-2x-0fk0b40fk0b400000001o.original.jpg'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '311% Increase in Conversion Volume',
                            imgSrc: require('../../assets/images/case-studies/50037b07-logo-sei-183x32-2x_05300w05300w000000001.png')
                        },
                        {
                            imgBG: require('../../assets/images/case-studies/2c2f53ec-image-segment-hero-280x200-2x-0fk0b40fk0b400000001o.original.jpg'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '20% More Paid Acquisition Leads',
                            imgSrc: require('../../assets/images/case-studies/9b38d8ed-logo-segment-176x40-2x_04w01404w014000000001.png')
                        },
                        {
                            imgBG: require('../../assets/images/case-studies/7c0de171-image-comfortable-club-hero-280x200-2x-0fk0b40fk0b400000001o.original.jpg'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '525% Increase in Coupon Redemptions',
                            imgSrc: require('../../assets/images/case-studies/474579c9-logo-comfortable-club-184x114-2x_04v02u04v02u000000001.png')
                        },
                        {
                            imgBG: require('../../assets/images/case-studies/a80a991e-image-business-class-experts-hero-280x200-2x-0fk0b40fk0b400000001o.original.jpg'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '42% Decrease in Cost Per Click',
                            imgSrc: require('../../assets/images/case-studies/fff83236-logo-business-class-experts-180x56-2x_05001k05001k000000001.png')
                        },
                        {
                            imgBG: require('../../assets/images/case-studies/dasda.jpg'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '104% Increase in Free Trial Leads',
                            imgSrc: require('../../assets/images/case-studies/ab27dc1d-logo-adespresso-158x32-2x_04e00w04e00w000000001.png')
                        },
                        {
                            imgBG: require('../../assets/images/case-studies/https___app.unbounce.com_publish_assets_3aad6c15-ffe7-1.png'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '72% Increase in Conversions',
                            imgSrc: require('../../assets/images/case-studies/fgwsd.png')
                        },
                    ],

                    [
                        {
                            imgBG: require('../../assets/images/case-studies/2c2f53ec-image-segment-hero-280x200-2x-0fk0b40fk0b400000001o.original.jpg'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '20% More Paid Acquisition Leads',
                            imgSrc: require('../../assets/images/case-studies/9b38d8ed-logo-segment-176x40-2x_04w01404w014000000001.png')
                        },
                        {
                            imgBG: require('../../assets/images/case-studies/https___app.unbounce.com_publish_assets_c11a6b7e-6751-4002-a.jpg'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '97% Decrease in Cost Per Acquisition',
                            imgSrc: require('../../assets/images/case-studies/d3252e23-logo-caresync-176x40-2x_04w01404w014000000001.png')
                        },
                        {
                            imgBG: require('../../assets/images/case-studies/428ad337.jpg'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '300% Increase in Conversion Rate',
                            imgSrc: require('../../assets/images/case-studies/jun.png')
                        },
                        {
                            imgBG: require('../../assets/images/case-studies/3c9a08ff-image-mention-hero-280x200-2x-0fk0b40fk0b4000000001.original.jpg'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '343% Increase in Conversions',
                            imgSrc: require('../../assets/images/case-studies/1837d1d8-logo-mention-152x32-2x_04800w04800w000000001.png')
                        },
                        {
                            imgBG: require('../../assets/images/case-studies/e542cee5-image-lemonstand-hero-280x200-2x-0fk0b40fk0b400000001o.original.jpg'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '314% Increase in Click Through Rates',
                            imgSrc: require('../../assets/images/case-studies/85ebe721-logo-lemonstand-168x27-2x_04o00r04o00r000000001.png')
                        },
                        {
                            imgBG: require('../../assets/images/case-studies/551b3c4d-image-autopilot-hero-280x200-2x-0fk0b40fk0b400000001o.original.jpg'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '169% Increase in Conversion Rate',
                            imgSrc: require('../../assets/images/case-studies/1ca0747c-logo-autopilot-184x40-2x_054014054014000000001.png')
                        },
                        {
                            imgBG: require('../../assets/images/case-studies/dasda.jpg'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '104% Increase in Free Trial Leads',
                            imgSrc: require('../../assets/images/case-studies/ab27dc1d-logo-adespresso-158x32-2x_04e00w04e00w000000001.png')
                        },
                        {
                            imgBG: require('../../assets/images/case-studies/https___app.unbounce.com_publish_assets_3aad6c15-ffe7-1.png'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '72% Increase in Conversions',
                            imgSrc: require('../../assets/images/case-studies/fgwsd.png')
                        },
                    ],
                    [
                        {
                            imgBG: require('../../assets/images/case-studies/https___app.unbounce.com_publish_assets_f4506c7d-d9b0-4aad-88.jpg'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '35% Increase in Conversion Volume',
                            imgSrc: require('../../assets/images/case-studies/2455a9f8-logo-rich-uncles-368x74-2x_054011054011000000001.png')
                        },
                        {
                            imgBG: require('../../assets/images/case-studies/https___app.unbounce.com_publish_assets_4fbca7b6-8017-4217-.jpg'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '281% Decrease in Cost Per Conversion',
                            imgSrc: require('../../assets/images/case-studies/004da7cc-logo-usc-cu-136x40-2x_03t01403t014000000001.png')
                        },
                        {
                            imgBG: require('../../assets/images/case-studies/6efe2257-image-sei-hero-280x200-2x-0fk0b40fk0b400000001o.original.jpg'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '311% Increase in Conversion Volume',
                            imgSrc: require('../../assets/images/case-studies/50037b07-logo-sei-183x32-2x_05300w05300w000000001.png')
                        },
                        {
                            imgBG: require('../../assets/images/case-studies/a80a991e-image-business-class-experts-hero-280x200-2x-0fk0b40fk0b400000001o.original.jpg'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '42% Decrease in Cost Per Click',
                            imgSrc: require('../../assets/images/case-studies/fff83236-logo-business-class-experts-180x56-2x_05001k05001k000000001.png')
                        },
                        {
                            imgBG: require('../../assets/images/case-studies/https___app.unbounce.com_publish_assets_c11a6b7e-6751-4002-a.jpg'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '97% Decrease in Cost Per Acquisition',
                            imgSrc: require('../../assets/images/case-studies/d3252e23-logo-caresync-176x40-2x_04w01404w014000000001.png')
                        },
                        {
                            imgBG: require('../../assets/images/case-studies/https___app.unbounce.com_publish_assets_3aad6c15-ffe7-1.png'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '72% Increase in Conversions',
                            imgSrc: require('../../assets/images/case-studies/fgwsd.png')
                        },
                    ],
                    [
                        {
                            imgBG: require('../../assets/images/case-studies/c4dfb572-image-tyme-hero-280x200-2x-0fk0b40fk0b400000001o.original.jpg'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '1883% Increase in Conversion Rate',
                            imgSrc: require('../../assets/images/case-studies/71b2e14e-logo-tyme-184x35-2x_054011054010000000001.png')
                        },
                        {
                            imgBG: require('../../assets/images/case-studies/fsdsaf.jpg'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '263% Increase in Conversion Rate',
                            imgSrc: require('../../assets/images/case-studies/e1503d10-logo-le-tote-169x24-2x_04p00o04p00o000000001.png')
                        },
                        {
                            imgBG: require('../../assets/images/case-studies/7c0de171-image-comfortable-club-hero-280x200-2x-0fk0b40fk0b400000001o.original.jpg'),
                            imgToUrl: '',
                            imgTittle: 'VIEW THE CASE STUDY',
                            imgContent: '525% Increase in Coupon Redemptions',
                            imgSrc: require('../../assets/images/case-studies/474579c9-logo-comfortable-club-184x114-2x_04v02u04v02u000000001.png')
                        },
                    ],
                ]
            }
        }
    }
</script>

<style scoped>
  .caseStudies .whiteBorder {
    width: 250px;
  }

  .caseStudies .page-content {
    width: 100%;
    margin-top: 10px !important;
    height: 1773px;
    background: rgba(255, 255, 255, 1);
    border-style: none;
    z-index: 25;
  }

  .caseStudies .page-content .content-2 {
    padding-top: 70px;
  }


  .caseStudies .caseStudiesImg {
    margin-top: 50px;
  }

  .caseStudies .lightbox-btn {
    margin-bottom: 10px;
  }


  .caseStudies .page-tabs .tabs-item .inner {
    height: 100%;
    background-size: cover;
    position: relative;
    border-radius: 8px;
  }

  .caseStudies .page-tabs .tabs-item .inner::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(89, 73, 85, 0.7);
    border-radius: 8px;

  }

  .caseStudies .page-tabs .tabs-item .pic {
    display: inline-block;
    width: 32.15%;
    margin-right: 1.775%;
    margin-bottom: 1.5%;
    text-align: center;
    height: 211px;
    position: relative;
    background-size: cover;
    border-radius: 8px;
    float: left;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.6s;
  }

  .caseStudies .page-tabs .tabs-item .pic:nth-child(3),
  .caseStudies .page-tabs .tabs-item .pic:nth-child(6),
  .caseStudies .page-tabs .tabs-item .pic:nth-child(9),
  .caseStudies .page-tabs .tabs-item .pic:nth-child(12),
  .caseStudies .page-tabs .tabs-item .pic:nth-child(15) {
    margin-right: 0px !important;
    margin-bottom: 0px !important;
  }

  .caseStudies .page-tabs .tabs-item a {
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;
    top: 0;
    color: #0000ff;
    text-decoration: none;
  }

  .caseStudies .page-tabs .tabs-item span {
    border-width: 3px;
    outline: 0 !important;
    border: 0;
    background: #ff5056;
    color: #fff;
    display: inline-block;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: .06em;
    border-radius: 8px;
    font-weight: 700;
    border-bottom: 2px solid #ff272f;
    text-decoration: none;
    width: 208px;
    height: 42px;
    padding: 0;
    font-size: 14px;
    line-height: 42px;
    visibility: hidden;
    margin-top: 70px;
  }

  .caseStudies .page-tabs .tabs-item p {
    padding-top: 0;
    margin-top: -30px;
    font-size: 19px;
    color: #ffffff;
    font-weight: 700;
    line-height: 20px;
  }

  .caseStudies .page-tabs .tabs-item hr {
    max-width: 48px;
    margin: 13px auto 23px auto;
    border: 0;
    height: 3px;
    background: #ffffff;
  }

  .caseStudies .page-tabs .tabs-item img {
    display: block;
    margin: 0 auto;
  }

</style>
<style>
  .el-tabs__nav {
    width: 100%;
  }

  .el-tabs__item {
    width: 25%;
    font-size: 20px;
    font-weight: 700;
    color: #909399 !important;
    line-height: 70px;
    height: 70px;
    border: none !important;
  }

  .el-tabs__item:hover {
  }

  .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
    color: #30383f !important;
  }

  .el-tabs__header {
    border: none !important;
  }

  .el-tabs--border-card {
    display: block;
    width: 100%;
    height: 1250px;
    border: none;
    outline: none;
  }
</style>
