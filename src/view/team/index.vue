<template>
    <el-row class="team">
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
                            <h2 class="page-title">TEAM</h2>
                            <div class="whiteBorder"></div>
                        </el-col>
                    </el-row>

                    <el-row class="page-content">
                        <el-col>
                            <el-row class="big-title-1">
                                <el-col>
                                    <h2>About us</h2>
                                    <div class="border top"></div>
                                    <div class="pageText">
                                        <p>We’re a group of
                                            <strong>fast moving&nbsp;marketers</strong>
                                            with a strong understanding of conversion focused&nbsp;design.</p>
                                        <p>We choose to focus on just a
                                            <strong>few clients at a time</strong>.
                                            This way, we can dedicate the resources<br>
                                            it takes to thoroughly understand and grow them
                                            to their fullest potential.</p>
                                        <p>We help
                                            <strong>educate, fuel, and build long lasting relationships</strong>
                                            with the clients we work with.</p>
                                        <p>See if we’re a fit – grab
                                            <a class="a-blue" href="">your free
                                                proposal</a>.
                                        </p>
                                    </div>
                                    <a href="" class="btn-BRCW">GET MY FREE PROPOSAL</a>
                                    <p style="font-style: italic;font-weight: bold;margin-top: 10px;font-size: 16px;">
                                        See if we'd be a good fit!</p>
                                </el-col>
                            </el-row>
                            <el-row class="show-img">
                                <el-col :span="8">
                                    <a href="">
                                        <img class="bt"
                                             src="../../assets/images/about-us/70597495_2407059662664169_5276874183653536785_n.jpg"
                                             alt="">
                                    </a>
                                </el-col>
                                <el-col :span="8">
                                    <a href="">
                                        <img class="bt"
                                             src="../../assets/images/about-us/70127814_124772745574069_6814792690323874355_n.jpg"
                                             alt="">
                                    </a>
                                </el-col>
                                <el-col :span="8">
                                    <a href="">
                                        <img class="bt"
                                             src="../../assets/images/about-us/68965570_124737968890191_1648906298606132957_n.jpg"
                                             alt="">
                                    </a>
                                </el-col>
                                <el-col :span="8">
                                    <a href="">
                                        <img src="../../assets/images/about-us/69878259_2324053451177598_2840719621366631285_n.jpg"
                                             alt="">
                                    </a>
                                </el-col>
                                <el-col :span="8">
                                    <a href="">
                                        <img src="../../assets/images/about-us/66505991_2331961900452860_8146290853617245476_n.jpg"
                                             alt="">
                                    </a>
                                </el-col>
                                <el-col :span="8">
                                    <a href="">
                                        <img src="../../assets/images/about-us/67516457_701174523729976_2469063196961139138_n.jpg"
                                             alt="">
                                    </a>
                                </el-col>
                            </el-row>
                            <el-row class="people">
                                <!--                                <el-col :xs="2" :sm="2" :md="2" :lg="0" class="block">&nbsp;</el-col>-->
                                <el-col>
                                    <el-row v-for="(item,index) in people" :key="index">
                                        <el-col>
                                            <el-row class="type-1 type" v-if="index%2===0">
                                                <el-col :xs="12" :sm="12" :md="12" :lg="12">
                                                    <img :src="item.avatar" alt="" align="left">
                                                </el-col>
                                                <el-col :xs="12" :sm="12" :md="12" :lg="12">
                                                    <div class="header">
                                                        <h2>{{item.bigTitle}}</h2>
                                                        <h3>{{item.smallTitle}}</h3>
                                                        <div class="border"></div>
                                                    </div>
                                                    <div class="pageText" v-html="item.text"></div>
                                                    <ul class="socialNetworks">
                                                        <li v-for="(icon,index2) in item.icons" :key="index2">
                                                            <a href="" class="social-icon" v-html="icon">

                                                            </a>
                                                        </li>
                                                    </ul>
                                                </el-col>
                                            </el-row>
                                            <el-row class="type-2 type" v-if="index%2===1">
                                                <el-col :xs="12" :sm="12" :md="12" :lg="12">
                                                    <div class="header">
                                                        <h2>{{item.bigTitle}}</h2>
                                                        <h3>{{item.smallTitle}}</h3>
                                                        <div class="border"></div>
                                                    </div>
                                                    <div class="pageText" v-html="item.text"></div>
                                                    <ul class="socialNetworks">
                                                        <li v-for="(icon,index2) in item.icons" :key="index2">
                                                            <a href="" class="social-icon" v-html="icon">
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </el-col>
                                                <el-col :xs="12" :sm="12" :md="12" :lg="12">
                                                    <img :src="item.avatar" alt="" align="right">
                                                </el-col>
                                            </el-row>
                                        </el-col>
                                    </el-row>

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
          MenuItem2classTrue: 'true',
          MenuItem3classTrue: 'false',
          MenuItem4classTrue: 'false',
          MenuItem5classTrue: 'false',
          MenuItem6classTrue: 'false',
          MenuItem7classTrue: 'false',
        },
        title: 'Over <strong>445 businesses</strong> got a proposal from us in <strong>August, 2019</strong>',
        people: [
          /*1*/
          {
            avatar: require('../../assets/images/about-us/staff-portrait-graham.png'),
            bigTitle: 'Graham Ahner',
            smallTitle: 'Team Director',
            text: '<p>You might wonder why Graham looks like an innocent millennial who was born in St. Louis, Missouri, moved to Denver, and then moved to Orange County, CA, <em>right?</em></p>\n' +
              '<p>We wondered the same thing –<em>&nbsp;but those looks truly deceive.</em></p>\n' +
              '<p>What you don’t know is that Graham was the lead singer of screamo band, “The Brothers”, and made a <a href="" class="a-blue">smash hit</a> with Daniel and Cameron that topped the Billboard 100 in <a href="" class="a-blue">Kyrgyzstan</a>.</p>\n' +
              '<p><em>So what’s he doing now?</em></p>\n' +
              '<p>Saving up for these sick <a href="" class="a-blue">New Balances</a> with VELCRO® straps.</p>',
            icons: [
              '<i class="fa fa-linkedin"></i>'
            ]
          },
          {
            avatar: require('../../assets/images/about-us/staff-portrait-stone.png'),
            bigTitle: 'Stone Alvaro',
            smallTitle: 'Brand Videographer',
            text: '<p>Stone actually looks decently attractive in his picture, but what you don’t know, is that his real name is “Jan”.</p>\n' +
              '                                                <p>“Jan” which is short for “Janet” was a <a href="" class="a-blue">highly popular name back in 1956</a>&nbsp;– so today, we just call him Stone.</p>\n' +
              '                                                <p><em>Why?&nbsp;</em></p>\n' +
              '                                                <p>No one really knows, and it’s too awkward to ask, but it sounded cool when he introduced himself that way.</p>\n' +
              '                                            ',
            icons: [
              '<i class="fa fa-vimeo"></i>',
              '<i class="fa fa-linkedin"></i>'
            ]
          },
          /*3*/
          {
            avatar: require('../../assets/images/about-us/Staff-Portrait-Matt-475x664.png'),
            bigTitle: 'Matt Assell',
            smallTitle: 'Conversion Designer',
            text: '<p>For someone who has worked as a bicycle mechanic for 43 years, Matt sure knows how to add lube to that conversion chain.</p>\n' +
              '<p>Want someone on your team that wheelie wheelie wants to grow conversion rates? <strong>Get Matt.<br>\n' +
              '</strong><br>\n' +
              'Want someone on your team that’s never two tired? <strong>Get Matt.</strong></p><strong>\n' +
              '</strong><p><strong></strong>Want someone on your team who can also be your spokes person? <strong>Get Matt.</strong></p>\n' +
              '<p>Want someone on your team that’s good at Googling bad bike puns? <strong>Get Johnathan</strong>.</p>',
            icons: [
              '<i class="fa fa-linkedin"></i>',
              '<i class="fa fa-dribbble"></i>'
            ]
          },
          {
            avatar: require('../../assets/images/about-us/Randy-Assell-475x664.png'),
            bigTitle: 'Randy Assell',
            smallTitle: 'Conversion Designer',
            text: '<p>Don’t trust anything that Randy says.</p>\n' +
              '<p>Why? His name is <strong><em>Randy</em></strong>.</p>\n' +
              '<p>And that’s not his real hair.<br>\n' +
              'Those are not his eyebrows.<br>\n' +
              'And he’s definitely not wearing pants when he took this picture.</p>\n' +
              '<p>How did he get hired? We’re not sure.<br>\n' +
              'Is he great at what he does? Debatable.</p>\n' +
              '<p>But is he cool? ',
            icons: [
              '<i class="fa fa-linkedin"></i>',
              '<i class="fa fa-dribbble"></i>'
            ]
          },

          /*5*/
        ]
      }
    }
  }
</script>

<style scoped>
    .btn-BRCW {
        padding: 20px 30px;
        margin-top: 10px;
    }

    .team /deep/ .a-blue {
        color: #6adaf7;
        padding-bottom: 2px;
    }

    .team .a-blue:hover {
        color: #6adaf7;
        padding-bottom: 2px;
        border-bottom: 1px dotted #6adaf7;
    }

    .team .page-content .big-title-1 {
        padding: 60px 0px;
        background: #F7FBFC;
    }

    .team .page-content .big-title-1 .pageText {
        width: 75%;
        margin: auto;
        font-size: 18px;
        font-weight: 500;
        color: #667482;
    }

    .team .page-content .big-title-1 p {
        margin-bottom: 15px;
    }


    .team .page-content .border {
        height: 2px;
        background: #6adaf7;
        width: 140px;
        margin: 24px auto;
    }

    .team .page-content .big-title-1 h2 {
        font-size: 33px;
    }

    .team .page-content .show-img {
        font-size: 0;
        line-height: 0;
        overflow: hidden;
    }

    .team .page-content .show-img .bt {
        border-top: 1px solid #B3ECFB;
    }

    .team .page-content .show-img img {
        display: block;
        outline: none;
        width: 100%;
        height: 250px;
    }


    .team .people .type {
        display: table;
        width: 100%;
        padding: 60px 75px 0;
        margin: 0;
    }

    .team .people .type-2 {
        background: #f7fbfc;
        border-top: 1px solid #b3ecfb;
        border-bottom: 1px solid #b3ecfb;
    }


    .team .people img {
        width: 80%;
        display: block;
    }

    .team .people .header {
        font-size: 14px;
        text-align: left;
        margin-bottom: 18px;
    }

    .team .people .header h2 {
        font-weight: 700;
        font-size: 23px;
        margin-bottom: 6px;
    }

    .team .people .header h3 {
        font-size: 16px;
        color: #667482;
        margin-bottom: 18px;
        font-weight: 600;
    }

    .team .people .header .border {
        height: 2px;
        background: #6adaf7;
        width: 160px;
        margin-left: 0px !important;
    }

    .team .people .pageText {
        font-size: 16px;
        color: #667482;
        text-align: left;
        line-height: 1.5;
    }

    .team .people .pageText /deep/ p {
        margin-bottom: 22px;
    }

    .team .people .socialNetworks {
        margin-left: -10px;
        text-align: left;
    }

    .team .people .socialNetworks li {
        display: inline-block;
        margin: 10px;
    }

    .team .people .socialNetworks .social-icon {
        display: block;
        background: #6adaf7;
        height: 45px;
        width: 45px;
        line-height: 45px;
        border-radius: 999px;
        text-align: center;
    }

    .team .people .socialNetworks .social-icon /deep/ i {
        font-size: 22px;
        color: #fff;
        line-height: 45px;
        height: 45px;
    }
</style>
