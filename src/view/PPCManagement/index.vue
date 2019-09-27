<template>
    <el-row class="PPCManagement">
        <el-col>
            <CommonHeader :ifSelect="ifSelect"></CommonHeader>

            <TheCover :sentence="sentence"></TheCover>

            <el-row class="ppc-spec">
                <el-col>
                    <el-row class="spec-content">
                        <el-col :sm="1" :md="2" :lg="3" class="block">&nbsp;</el-col>
                        <el-col :sm="22" :md="20" :lg="18">
                            <el-row>
                                <el-col :sm="8" :md="8" :lg="8" class="content">
                                    <div class="content-img">
                                        <img src="../../assets/images/PPCManamengent/icon-holisting-research.png"
                                             alt="">
                                    </div>
                                    <div class="content-title">Holistic Research</div>
                                    <div class="content-text">
                                        We use search, display, and social in conjunction with conversion rate
                                        optimization.
                                    </div>
                                </el-col>
                                <el-col :sm="8" :md="8" :lg="8" class="content">
                                    <div class="content-img">
                                        <img src="../../assets/images/PPCManamengent/icon-roi-tracking.png" alt="">
                                    </div>
                                    <div class="content-title">Conversion Focus</div>
                                    <div class="content-text">
                                        All PPC traffic performs differently. We maximize the results of every PPC
                                        channel you use.
                                    </div>
                                </el-col>
                                <el-col :sm="8" :md="8" :lg="8" class="content">
                                    <div class="content-img">
                                        <img src="../../assets/images/PPCManamengent/icon-sales-graph.png" alt="">
                                    </div>
                                    <div class="content-title">Sales Obsession</div>
                                    <div class="content-text">
                                        PPC metrics are great, but nothing beats the focus and execution of driving more
                                        sales.
                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>

            <el-row class="ppc-list pd-60 tb-border">
                <el-col>
                    <el-row class="small-title">
                        <el-col>
                            <h2>Ongoing PPC Management Progress</h2>
                            <div class="PPCManagement-border"></div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :sm="2" :md="4" :lg="5" class="block">&nbsp;</el-col>
                        <el-col :sm="20" :md="16" :lg="14">
                            <div class="list-ul">
                                <ul>
                                    <li class="list-li">Keyword & placement research</li>
                                    <li class="list-li">Multi-channel PPC networks</li>
                                    <li class="list-li">Landing page design/testing</li>
                                    <li class="list-li">Ongoing PPC auditing</li>
                                    <li class="list-li">Smarter retargeting practices</li>
                                    <li class="list-li">Consistent competitor research</li>
                                    <li class="list-li">Text/image ad split testing</li>
                                    <li class="list-li">24/7 custom reporting</li>
                                    <li class="list-li">Search, display, and social traffic</li>
                                    <li class="list-li">Conversion quality care</li>
                                </ul>
                                <ul>
                                    <li class="list-li">Correct audience targeting</li>
                                    <li class="list-li">Negative keyword additions</li>
                                    <li class="list-li">Negative placement additions</li>
                                    <li class="list-li">Keyword & geo granularity</li>
                                    <li class="list-li">Bid management execution</li>
                                    <li class="list-li">Conversion & call tracking</li>
                                    <li class="list-li">Day parting/bid modifications</li>
                                    <li class="list-li">Shopping campaign management</li>
                                    <li class="list-li">Analytics performance insights</li>
                                    <li class="list-li">ROI focused progress</li>
                                </ul>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>

            <el-row class="ppc-icon pd-60">
                <el-col>
                    <el-row class="small-title">
                        <el-col>
                            <h2>PPC Management Channels We Work With</h2>
                            <div class="PPCManagement-border"></div>
                        </el-col>
                    </el-row>
                    <el-row class="icon-ku">
                        <el-col :sm="12" :md="8" :lg="8">
                            <img src="../../assets/images/PPCManamengent/logo-adwords-2x.png" alt="">
                        </el-col>
                        <el-col :sm="12" :md="8" :lg="8">
                            <img src="../../assets/images/PPCManamengent/logo-bing-ads-2x.png" alt="">
                        </el-col>
                        <el-col :sm="12" :md="8" :lg="8">
                            <img src="../../assets/images/PPCManamengent/logo-facebook-2x.png" alt="">
                        </el-col>
                        <el-col :sm="12" :md="8" :lg="8">
                            <img src="../../assets/images/PPCManamengent/logo-twitter-2x.png" alt="">
                        </el-col>
                        <el-col :sm="12" :md="8" :lg="8">
                            <img src="../../assets/images/PPCManamengent/logo-linkedin-2x.png" alt="">
                        </el-col>
                        <el-col :sm="12" :md="8" :lg="8">
                            <img src="../../assets/images/PPCManamengent/logo-doubleclick-2x.png" alt="">
                        </el-col>
                        <el-col :sm="12" :md="8" :lg="8">
                            <img src="../../assets/images/PPCManamengent/logo-7-search-2x-1.png" alt="">
                        </el-col>
                        <el-col :sm="12" :md="8" :lg="8">
                            <img src="../../assets/images/PPCManamengent/logo-buy-sell-ads-2x.png" alt="">
                        </el-col>
                        <el-col :sm="12" :md="8" :lg="8">
                            <img src="../../assets/images/PPCManamengent/logo-site-scout-2x.png" alt="">
                        </el-col>
                        <el-col>
                            <span>And many more…</span>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>

            <el-row class="quick pd-60 tb-border">
                <el-col>
                    <el-row class="small-title">
                        <el-col>
                            <h2>Quicker PPC Results With Custom Landing Pages</h2>
                            <div class="PPCManagement-border"></div>
                        </el-col>
                    </el-row>
                    <el-row class="quick-content">
                        <el-col>
                            <el-row>
                                <el-col>
                                    <div class="content">
                                        <img src="../../assets/images/PPCManamengent/klientboost-high-tempo-landing-page-testing.png"
                                             alt="">
                                        <div class="content-text">
                                            <p>When you pair conversion rate optimization with PPC management, then you
                                                create a powerful two-punch ROI combo.</p>
                                            <p>Higher conversion rates mean more wiggle room on the PPC side to get more
                                                aggressive with bids and average positions to increase conversion
                                                volume,
                                                without paying more per conversion.</p>
                                            <p>Having us do landing page and conversion optimization testing will make
                                                more
                                                of your PPC campaigns more profitable, much faster.</p>
                                        </div>
                                    </div>

                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>


            <el-row class="ppc-case">
                <el-col>
                    <el-row class="small-title">
                        <el-col>
                            <h2>PPC Management Case Studies</h2>
                            <div class="PPCManagement-border"></div>
                        </el-col>
                    </el-row>
                    <el-row class="case-content">
                        <el-col :xs="0" :sm="2" :md="1" :lg="2" class="block">&nbsp;</el-col>
                        <el-col :xs="24" :sm="20" :md="22" :lg="20">
                            <el-row>
                                <el-col :xs="8" :sm="8" :md="8" :lg="8" class="content">
                                    <div class="content-img">
                                        <a href="">
                                            <img src="../../assets/images/PPCManamengent/Lead-Gen-Landing-Page.png"
                                                 alt="">
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :xs="8" :sm="8" :md="8" :lg="8" class="content">
                                    <div class="content-img">
                                        <a href="">
                                            <img src="../../assets/images/PPCManamengent/eCommerce-Landing-Pages.png"
                                                 alt="">
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :xs="8" :sm="8" :md="8" :lg="8" class="content">
                                    <div class="content-img">
                                        <a href="">
                                            <img src="../../assets/images/PPCManamengent/SaaS-Landing-Page.png" alt="">
                                        </a>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>

            <Sentence :content="content" class="ppc-yy"></Sentence>

            <el-row class="ppc-spec">
                <el-col>
                    <el-row class="small-title">
                        <el-col>
                            <h2>Transparency, Clarity, and Insight</h2>
                            <div class="PPCManagement-border"></div>
                        </el-col>
                    </el-row>
                    <el-row class="spec-content">
                        <el-col :sm="1" :md="2" :lg="3" class="block">&nbsp;</el-col>
                        <el-col :sm="22" :md="20" :lg="18">
                            <el-row>
                                <el-col :sm="8" :md="8" :lg="8" class="content">
                                    <div class="content-img">
                                        <img src="../../assets/images/PPCManamengent/klientboost-icon-calendar.png"
                                             alt="">
                                    </div>
                                    <div class="content-title">Month To Month</div>
                                    <div class="content-text">We let the results do the talking. That’s why we don’t
                                        require any long-term contracts. We earn your business.
                                    </div>
                                </el-col>
                                <el-col :sm="8" :md="8" :lg="8" class="content">
                                    <div class="content-img">
                                        <img src="../../assets/images/PPCManamengent/icon-unlock.png" alt="">
                                    </div>
                                    <div class="content-title">It’s All Yours</div>
                                    <div class="content-text">Everything we create will always be yours to keep. We’re
                                        confident in what we do, and you’re always free to leave.
                                    </div>
                                </el-col>
                                <el-col :sm="8" :md="8" :lg="8" class="content">
                                    <div class="content-img">
                                        <img src="../../assets/images/PPCManamengent/icon-diamond.png" alt="">
                                    </div>
                                    <div class="content-title">Consistent Value</div>
                                    <div class="content-text">Once we knock the PPC management out of the park, we start
                                        looking at other areas of your business we can improve.
                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>

            <el-row class="ppc-faq">
                <el-col>
                    <el-row class="MB-40 small-title">
                        <el-col>
                            <h2>Frequently Asked Questions</h2>
                            <div class="PPCManagement-border"></div>
                        </el-col>
                    </el-row>
                    <el-row class="faq">
                        <el-col :xs="0" :sm="0" :md="5" :lg="5" class="block">&nbsp;</el-col>
                        <el-col :xs="24" :sm="24" :md="14" :lg="14">
                            <ul>
                                <li>
                                    <p class="ppc-question">How much does all this cost?</p>
                                    <p class="ppc-answer">Depends on your current situation and your goals. It’s always
                                        fair and transparent.</p>
                                </li>
                                <li>
                                    <p class="ppc-question">You mentioned contracts. Do you require one?</p>
                                    <p class="ppc-answer">Only a 3 month one, then month-to-month afterwards.</p>
                                </li>
                                <li>
                                    <p class="ppc-question">Any way I can follow along on the progress?</p>
                                    <p class="ppc-answer">Always. You’re the admin on all PPC accounts. Nothing is
                                        hidden.</p>
                                </li>
                                <li>
                                    <p class="ppc-question">What if I don’t want landing page design, just PPC help?</p>
                                    <p class="ppc-answer">We’ll most likely offer it to you for free, since you truly
                                        can’t have one without the other.</p>
                                </li>
                                <li>
                                    <p class="ppc-question">What does your reporting look like?</p>
                                    <p class="ppc-answer">You’ll get a custom dashboard with all your PPC channels. And
                                        we formally update you every Monday.</p>
                                </li>
                                <li>
                                    <p class="ppc-question">Do you charge extra per campaigns and such?</p>
                                    <p class="ppc-answer">Nope. All our fees are flat. Nothing will cost you extra
                                        within the scope.</p>
                                </li>
                                <li>
                                    <p class="ppc-question">How soon can we start?</p>
                                    <p class="ppc-answer">Right away. Give us a call at (877) 501-3447</p>
                                </li>
                            </ul>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>


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
        sentence: 'PPC Management<br/>That Continues To Perform',
        ifSelect: {
          MenuItem1classTrue: 'false',
          MenuItem2classTrue: 'false',
          MenuItem3classTrue: 'false',
          MenuItem4classTrue: 'false',
          MenuItem5classTrue: 'false',
          MenuItem6classTrue: 'false',
          MenuItem7classTrue: 'false',
        },
        content: {
          quoteText: '"It’s not often I come across people who truly understand performance marketing and acquisition – <strong><em>KlientBoost does</em></strong>.  With an additional focus on retention and LTVs, they outperform the majority of other marketers who end up with tunnel vision."',
          authorImg: require('../../assets/images/PPCManamengent/dsfafsdgfsd.jpg'),
          authorName: 'Sean Ellis',
          autorText: 'CEO @',
          linkTo: '',
          authorCompany: 'GrowthHackers'
        },
        title: 'Over <strong>445 businesses</strong> got a proposal from us in <strong>August, 2019</strong>'
      }
    }
  }
</script>

<style scoped>
    .tb-border {
        border-bottom: 1px solid #b3ecfb;
        border-top: 1px solid #b3ecfb;
        background: #F7FBFC;
    }

    .pd-60 {
        padding-top: 60px;
        padding-bottom: 60px;
    }

    .PPCManagement .ppc-case {
        padding-top: 60px;
        padding-bottom: 60px;
    }

    .PPCManagement .ppc-icon .icon-ku {
        max-width: 880px;
        padding-left: 15px;
        padding-right: 15px;
        margin: auto;
    }

    .PPCManagement .ppc-icon .icon-ku:before {
        content: " ";
        display: table;
    }

    .PPCManagement .ppc-icon .icon-ku .el-col{
        margin-bottom: 60px;
    }

    .PPCManagement .ppc-icon .icon-ku .el-col:last-child{
        margin-bottom: 0px;
    }

    .PPCManagement .ppc-icon .icon-ku img{
        margin: auto;
        height: 35px;
    }

    .PPCManagement .ppc-icon span{
        text-align: center;
        font-size: 17px;
        color: #667482;
        width: 100%;
        clear: both;
    }

    .PPCManagement .ppc-list .list-li {
        font-size: 18px;
        color: #667482;
        line-height: 1.42857;
        padding-left: 13px;
        text-indent: 9px;
        margin-bottom: 8px;
        text-align: left;
    }

    .PPCManagement .ppc-list .list-li:before {
        content: "\2022 ";
        color: #6adaf7;
    }

    .PPCManagement .ppc-list .list-ul ul {
        width: 50%;
        float: left;
    }

    .PPCManagement .quick {
        background: #F7FBFC;
    }

    .PPCManagement .quick .content img {
        width: 80%;
        margin: 0 auto 30px;
        display: block;
    }

    .PPCManagement .quick .quick-content {
        margin: auto;
        max-width: 650px;
    }

    .PPCManagement .quick .quick-content p {
        margin-bottom: 15px;
    }

    .PPCManagement .quick .content-text {
        padding-left: 15px;
        padding-right: 15px;
        font-size: 21px;
        line-height: 1.42857;
        text-align: center;
        color: #667482;
    }

    .PPCManagement .case-content .content {
        padding: 30px;
    }

    .PPCManagement .case-content .content a {
        color: #6adaf7;
        outline: 0 !important;
        transition: all .1s ease;
    }

    .PPCManagement .case-content .content a:active,
    .PPCManagement .case-content .content a:focus,
    .PPCManagement .case-content .content a:hover,
    .PPCManagement .case-content .content a:visited {
        text-decoration: none;
        color: #6adaf7;
    }

    .PPCManagement .case-content .content img {
        border: 0px;
        box-shadow: 0 1px 5px 0 rgba(47, 56, 63, 0.24);
        border-radius: 8px;
        display: block;
        max-width: 100%;
        height: auto;
    }


    .PPCManagement .ppc-yy {
        padding-top: 50px;
        padding-bottom: 10px;
        border-bottom: 1px solid #b3ecfb;
        border-top: 1px solid #b3ecfb;
    }

    .PPCManagement .ppc-spec {
        padding: 60px 0px;
    }

    .PPCManagement .ppc-spec .spec-content .content-img {
        margin-bottom: 15px;
    }

    .PPCManagement .ppc-spec .spec-content .content-img img {
        height: 60px;

    }

    .PPCManagement .ppc-spec .spec-content .content {
        text-align: center;
        margin-bottom: 30px;
        position: relative;
        min-height: 1px;
        padding-left: 15px;
        padding-right: 15px;
    }

    .PPCManagement .ppc-spec .spec-content .content-title {
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 5px;
    }

    .PPCManagement .ppc-spec .spec-content .content-text {
        font-size: 15px;
        color: #667482;
        padding: 0 10px;
        max-width: 300px;
        line-height: 1.42857;
        display: inline-block;
    }


    .PPCManagement .ppc-faq {
        max-width: 1170px;
        margin: 0px auto 50px;
        padding-left: 15px;
        padding-right: 15px;
        box-sizing: border-box;
    }


    .PPCManagement .small-title {
        margin-bottom: 40px;
    }

    .PPCManagement .small-title h2 {
        font-size: 26px;
    }

    .PPCManagement .PPCManagement-border {
        height: 2px;
        width: 150px;
        max-width: 200px;
        background: #6adaf7;
        display: inline-block;
    }


    .PPCManagement .faq ul li {
        margin-bottom: 35px;
    }

    .PPCManagement .faq p {
        text-align: left;
        margin: 0 0 10px;
        font-size: 18px;
    }

    .PPCManagement .faq .ppc-question {
        font-weight: 500;
        font-style: italic;
        color: #3B4B5E;
        margin-bottom: 8px;
    }

    .PPCManagement .faq .ppc-answer {
        color: #667482;
        margin-bottom: 0;
    }
</style>
