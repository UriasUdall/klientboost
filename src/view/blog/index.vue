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

              <el-row class="backgroundIma">
                <el-col :xs="1" :sm="1" class="hidden-md-and-up block">&nbsp;</el-col>
                <el-col :xs="22" :sm="22" :md="24" :lg="24" :xl="24">
                  <div class="titleCon">
                    <div class="featureClass">Featured Article</div>
                    <div class="whiteBorder"></div>
                    <h2 class="featureH2">
                      25 Reasons Single Keyword Ad Groups(SKAGs)
                      <br>
                      Always Win[UPDATE]
                    </h2>
                  </div>
                </el-col>
              </el-row>

              <!--目录标题-->
              <el-row>
                <el-col class="hidden-lg-and-up">
                  <select class="CategoriesClass">
                    <option value="Categories">Categories</option>
                    <option value="Most Recent">Most Recent</option>
                    <option value="Conversion Rate Optimization">Conversion Rate Optimization</option>
                    <option value="PPC">PPC</option>
                    <option value="Analytics">Analytics</option>
                    <option value="BoostSauce">BoostSauce</option>
                  </select>
                </el-col>
              </el-row>

              <el-row>
                <el-col class="hidden-md-and-down blogNav">
                  <ul class="navUl">
                    <li>
                      <a href="#">Most Recent</a>
                    </li>
                    <li>
                      <a href="#">Conversion Rate Optimization</a>
                    </li>
                    <li>
                      <a href="#">PPC</a>
                    </li>
                    <li>
                      <a href="#">Retargeting</a>
                    </li>
                    <li>
                      <a href="#" class="show-more">More</a>
                    </li>
                    <li>
                      <a href="#" class="searchIcon"><i class="fa fa-search"></i></a>
                    </li>
                  </ul>
                </el-col>
              </el-row>

              <!--图片陈列-->
              <el-row>
                <el-col class="imaPad-35">


                  <el-row>
                    <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="presentation-block" :class="'pic'+index"
                            v-for="(item,index) in photo" :key="index">
                      <a href="#" title="Episode 004 Transcript:Reviews & Ratings">
                        <div class="inner">
                          <!--图片-->
                          <div class="image">
                            <img :src="item.photoUrl" alt="">
                          </div>
                          <!--文字-->
                          <div class="contentTitle">
                            <h2 class="title" v-html="item.photoAlt"></h2>
                          </div>
                        </div>
                      </a>
                    </el-col>
                  </el-row>

                </el-col>
              </el-row>

              <el-row>
                <el-col>
                  <a href="" class="btn-BWCR">Load more posts</a>
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
        data() {
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
                photo: [
                    /*1*/
                    {
                        photoUrl: require('../../assets/images/blog/boostsauce_sitethumbnail_ratings_reviews.png'),
                        photoAlt: 'Episode 004 Transcript:Reviews & Ratings',
                    },
                    /*2*/
                    {
                        photoUrl: require('../../assets/images/blog/boostsauce_sitethumbnail_linkedinads__2_.png'),
                        photoAlt: 'Episode 003 Transcript:LinkedIn Ads Mastery',
                    },
                    /*3*/
                    {
                        photoUrl: require('../../assets/images/blog/boostsauce_sitethumbnail_seotools-1.png'),
                        photoAlt: 'Episode 002 Transcript:SEO Tools Mastery"',
                    },
                    /*4*/
                    {
                        photoUrl: require('../../assets/images/blog/boostsauce_sitethumbnail_facebookads.png'),
                        photoAlt: 'Episode 001 Transcript:Facebook Ads Mastery',
                    },
                    /*5*/
                    {
                        photoUrl: require('../../assets/images/blog/Blog-Post-Feat-Image-Icon-Blog-Post-GoogleAds-ExpandedTextAds.jpg'),
                        photoAlt: 'The Case For Expanded Text Ads:What You Need To Know',
                    },
                    /*6*/
                    {
                        photoUrl: require('../../assets/images/blog/Blog-Post-Feat-Image-Icon-facebook-adspend.jpg'),
                        photoAlt: 'Scaling Facebook Ads: 9 Tactics To Increase Spend & Protect Your ROI',
                    },
                    /*7*/
                    {
                        photoUrl: require('../../assets/images/blog/blog-post-feat-image-icon-facebook-ad-types.jpg'),
                        photoAlt: '9 Powerful Facebook Ad Types That You Can Use Today',
                    },
                    /*8*/
                    {
                        photoUrl: require('../../assets/images/blog/blog-post-feat-image-icon-ads-express.jpg'),
                        photoAlt: 'How Google Ads Express Can Help Your Business + Why You Might Need More',
                    },
                    /*9*/
                    {
                        photoUrl: require('../../assets/images/blog/blog-post-feat-image-icon-facebook-messenger-bots-1.jpg'),
                        photoAlt: 'Using Facebook Messenger Ads To Boost Customer Engagement',
                    },
                    /*10*/
                    {
                        photoUrl: require('../../assets/images/blog/Blog-Post-Feat-Image-Icon-facebook-adspend.jpg'),
                        photoAlt: 'How To Use Google Ads Callout Extensions To Boost Your PPC CTR',
                    },
                ],
                title: 'Over <strong>445 businesses</strong> got a proposal from us in <strong>August, 2019</strong>'
            }
        }
    }
</script>

<style scoped>
  .btn-BWCR{
    font-size: 24px!important;
    border-color: #6adaf7;
    color: #6adaf7;
    padding: 12px 22px;
    border-radius: 5px;
    margin-bottom: 50px;
    margin-top: -35px;
  }

  .btn-BWCR:hover{
    background: #6adaf7;
    color: white;
  }

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

  .blogPage .page-content .formTitle .form {
    margin: 20px auto;
  }

  .blogPage .page-content .formTitle .form .email {
    margin-right: 15px;
    margin-bottom: 20px;
    border: 2px solid #d6dade;
    background: none;
    line-height: 100%;
    height: 35px;
    outline: 0;
    border-radius: 8px;
    text-align: center;
  }

  .blogPage .page-content .formTitle .form .button {
    padding: 10px 30px;
  }

  .blogPage .page-content .backgroundIma {
    background: url("../../assets/images/blog/skags-help.jpg") 100% 100% no-repeat;
  }

  .blogPage .page-content .backgroundIma .titleCon {
    color: white;
  }

  .blogPage .page-content .backgroundIma .titleCon .featureClass {
    text-align: center;
    font-size: 18px;
    margin: 100px auto 10px;
  }

  .blogPage .page-content .backgroundIma .titleCon .featureH2 {
    margin: 30px auto 100px;
  }

  .blogPage .page-content .CategoriesClass {
    background: #F7FBFC;
    border: 0;
    outline: 0;
    height: 60px;
    line-height: 60px;
    width: auto;
    font-size: 18px;
    color: #30383f;
    font-weight: 600;
    padding: 0 5%;
    margin: 0 auto;
  }

  .blogPage .page-content .CategoriesClass option {
    text-align: center;
    width: 100%;
    height: 74px;
    outline: 0;
  }

  .blogPage .page-content .blogNav {
    overflow: hidden;
  }

  .blogPage .page-content .navUl {
    overflow: hidden;
    height: 70px;
    width: 100%;
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    padding-left: 30px;
    display: block;
    background: #fff;
  }

  .blogPage .page-content .navUl .searchIcon {
    float: right;
    padding-right: 0 !important;
  }

  .blogPage .page-content .navUl .show-more {
    float: right;
    padding-left: 160px !important;
    padding-right: 0px !important;
  }

  .blogPage .page-content .navUl li {
    float: left;
    display: block;
  }

  .blogPage .page-content .navUl li a {
    color: #46525c;
    line-height: 100%;
    padding: 30px 35px;
    display: block;
    font-weight: normal;
  }

  .blogPage .page-content .presentation-block {
    color: #30383f;
    padding: 0 15px;
    display: block;
    margin: 0 0 40px;
  }

  .blogPage .page-content .presentation-block .inner {
    border: 1px solid #d6dade;
    border-radius: 6px;
    height: 100%;
    overflow: hidden;
  }

  .blogPage .page-content .presentation-block .inner .image {
    width: 100%;
  }

  .blogPage .page-content .presentation-block .inner .image img {
    width: 100%;
    height: 100%;
  }

  .blogPage .page-content .presentation-block .contentTitle {
    height: 90px;
    line-height: 90px;
    width: 100%;
    background: #f7fbfc;
    vertical-align: middle;
    overflow: hidden;
  }

  .blogPage .page-content .presentation-block .inner .title {
    font-size: 18px;
    text-align: center;
    font-weight: 700;
    vertical-align: middle;
  }

  .blogPage .page-content .presentation-block .inner .title:hover {
    color: #6adaf7;
  }

  .blogPage .page-content .imaPad-35 {
    padding: 35px;
    overflow: hidden;
  }
</style>
