<template>
    <el-row class="get-proposal">
        <el-col>
            <el-dialog class="get-proposal-dia" :lock-scroll="false"
                       :visible.sync="visible" center style="display: block!important">
                <div class="progressBarContainer">
                    <div class="progress-planet">
                        <img src="../assets/images/index/planet-1.png"
                             :class="{'big-img':this.active===0}" alt="">
                    </div>
                    <div class="between-planet-line"></div>
                    <div class="progress-planet">
                        <img src="../assets/images/index/planet-2.png"
                             :class="{'big-img':this.active===1}" alt="">
                    </div>
                    <div class="between-planet-line"></div>
                    <div class="progress-planet">
                        <img src="../assets/images/index/planet-3.png"
                             :class="{'big-img':this.active===2}" alt="">
                    </div>
                </div>
                <el-row style="width: 100%">
                    <el-col :xs="2" :sm="4" :md="5" :lg="7" class="block" v-if="active===0">&nbsp;</el-col>
                    <el-col :xs="20" :sm="16" :md="14" :lg="10" class="active-1 active" v-if="active===0">
                        <label class="active-label">What are your goals for AcceGen Biotech?</label>
                        <el-select placeholder="choose" v-model="s0">
                            <el-option value="">Get more conversions</el-option>
                            <el-option value="">Get more phone leads</el-option>
                            <el-option value="">Lower cost per conversion</el-option>
                            <el-option value="">All of the above</el-option>
                            <el-option value="">Other...</el-option>
                        </el-select>
                        <br/><label class="active-label">Where do you advertise?</label>
                        <el-select placeholder="choose" v-model="s1">
                            <el-option value="">Nationally</el-option>
                            <el-option value="">Locally</el-option>
                            <el-option value="">Internationally</el-option>
                            <el-option value="">Other...</el-option>
                        </el-select>
                    </el-col>
                    <el-col :xs="2" :sm="4" :md="5" :lg="7" class="block" v-if="active===1">&nbsp;</el-col>
                    <el-col :xs="20" :sm="16" :md="14" :lg="10" class="active-2 active" v-if="active===1">
                        <label class="active-label">Do you want leads or sales?</label>
                        <el-select placeholder="choose" v-model="s2">
                            <el-option value="">Leads</el-option>
                            <el-option value="">Sales</el-option>
                            <el-option value="">Both, I sell a service and a product</el-option>
                            <el-option value="">Not sure</el-option>
                        </el-select>
                        <br/><label class="active-label">What’s your monthly PPC ad spend?</label>
                        <el-select placeholder="choose" v-model="s3">
                            <el-option value="">$0 - $1,000</el-option>
                            <el-option value="">$1,001 - $5,000</el-option>
                            <el-option value="">$5,001 - $25,000</el-option>
                            <el-option value="">$25,001 - $100,000</el-option>
                            <el-option value="">$100,001+</el-option>
                        </el-select>
                    </el-col>
                    <el-col :xs="1" :sm="1" :md="1" :lg="1" class="block" v-if="active===2">&nbsp;</el-col>
                    <el-col :xs="22" :sm="22" :md="22" :lg="22" class="active-3 active" v-if="active===2">
                        <el-row>
                            <el-col :sm="12" :md="12" :lg="12">
                                <label>What’s your website?</label>
                                <input type="text">
                                <label>What’s your name?</label>
                                <input type="text">
                                <label>What’s your email?</label>
                                <input type="text">
                                <label>What’s your number?</label>
                                <input type="text">
                                <button @click="next()" v-if="active===2" class="btn-BRCW btn-spe">
                                    Send my free proposal
                                </button>
                            </el-col>
                            <el-col :sm="12" :md="12" :lg="12">
                                <div class="img-info">
                                    <img src="../assets/images/index/phone-icon.png" alt="">
                                    <p class="small-title">Prefer to call?</p>
                                    <hr>
                                    <p>Reach us directly to chat with one of our PPC &amp; CRO experts</p>
                                    <hr>
                                    <p>Call Now</p>
                                    <a href="tel:8662042028">(866) 204-2028</a>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>


                </el-row>
                <div>
                    <button @click="next()" v-if="active===0" class="btn-BRCW">CONTINUE ></button>
                    <button @click="next()" v-if="active===1" class="btn-BRCW">LAST-STEP ></button>
                    <!--                    -->
                </div>
                <el-row>
                    <el-col v-if="active===0">
                        <h2>What's In The Proposal?</h2>
                        <el-row>
                            <!--                    <el-col :xs="3" :sm="3" :md="3" :lg="3" class="block">&nbsp;</el-col>-->
                            <el-col :xs="8" :sm="8" :md="8" :lg="8">
                                <div class="info-img">
                                    <img src="../assets/images/index/icon-minimal-eyeball-150x150.png" alt="">
                                </div>
                                <div class="info-text">
                                    Competitor Info
                                </div>
                            </el-col>
                            <el-col :xs="8" :sm="8" :md="8" :lg="8">
                                <div class="info-img">
                                    <img src="../assets/images/index/icon-minimal-dollar-sign-150x150.png" alt="">
                                </div>
                                <div class="info-text">
                                    Competitor Tips
                                </div>
                            </el-col>
                            <el-col :xs="8" :sm="8" :md="8" :lg="8">
                                <div class="info-img">
                                    <img src="../assets/images/index/icon-minimal-info-150x150.png" alt="">
                                </div>
                                <div class="info-text">
                                    Competitor Pricing
                                </div>
                            </el-col>
                        </el-row>
                        <h3>... and so much more!</h3>
                    </el-col>
                    <el-col v-if="active===1">
                        <Sentence class="two-sentence" :content="content"></Sentence>
                    </el-col>
                </el-row>

            </el-dialog>
        </el-col>
    </el-row>

</template>

<script>

  import Sentence from '@/components/sentence'

  export default {
    name: 'getProposal',
    components: {
      Sentence
    },
    data () {
      return {
        active: 0,
        visible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
        s0: '',
        s1: '',
        s2: '',
        s3: '',
        formLabelWidth: '120px',
        content: {
          quoteText: '"When it comes to PPC, the first person I turn to is Johnathan Dane. He and his team cut through the bullshit and get straight to the point with the goal of making you more money. Work with him.',
          authorImg: require('../assets/images/index/Peep-Laja-400x400.jpg'),
          authorName: 'Peep Laja',
          autorText: 'Founder @ ',
          linkTo: '',
          authorCompany: 'ConversionXL'
        }
      }
    },
    methods: {
      init () {
        this.visible = true
        console.log('已完成加载！')
      },
      // prev(){
      //   -- this.active
      //   if(this.active<0)
      //     this.active=0
      // },
      next () {
        if (this.active++ > 1) {
          this.active = 0
        }
      },
    },
  }
</script>

<style scoped>
    .get-proposal .two-sentence /deep/ .dot {
        display: none;
    }

    .get-proposal /deep/ .sentence .sentence-quote {
        font-size: 19px !important;
    }

    .get-proposal /deep/ .sentence .sentence-quote,
    .get-proposal /deep/ .sentence .sentence-name,
    .get-proposal /deep/ .sentence .sentence-title,
    .get-proposal /deep/ .sentence .sentence-company {
        text-align: center;
        color: white !important;
    }

    .btn-BRCW {
        padding: 15px 100px;
        font-size: 15px;
        margin: 15px auto 30px;
        display: block;
    }

    .btn-spe {
        margin-top: 20px !important;
        padding: 13px 0px !important;
        width: 90%;
        font-weight: 600;
    }

    .get-proposal .active {
        text-align: center;
    }


    .get-proposal .progressBarContainer {
        transition: all .3s ease;
        opacity: 1;
        display: block;
        margin: 0 auto 20px calc(60% - 210px);;
        width: 400px;
    }


    .get-proposal .between-planet-line {
        width: 14%;
        border-top: 2px dashed #30383f;
        margin: 19px 0;
        transition: all .8s ease;
    }


    .get-proposal .progress-planet {
        position: relative;
        border-radius: 100%;
        padding: 18px;
        margin: 0 10px;
        transition: all .3s ease;
    }


    .get-proposal .progress-planet img {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        border: 0;
        box-sizing: border-box;
        vertical-align: middle;
    }

    .big-img {
        width: 150% !important;
        height: 150% !important;
        left: -55% !important;
        top: -30% !important;
    }

    .get-proposal .progress-planet img:after {
        position: absolute;
        top: 50%;
        left: 50%;
        /*transform: translate(-50%, -50%);*/
        -webkit-transform: translate(-50%, -50%);
        /*-ms-transform: translate(-50%, -50%);*/
        content: "";
        border-radius: 100%;
        padding: 22px;
        border: 2px dashed #30383f;
        transition: all .3s ease;
    }


    .get-proposal .progressBarContainer,
    .get-proposal .between-planet-line,
    .get-proposal .progress-planet {
        display: inline-block;
    }

    .get-proposal .get-proposal-dia h2 {
        text-align: center;
        margin-top: 20px;
        margin-bottom: 10px;
        /*margin: 0 0 35px;*/
        font-weight: 700;
        font-size: 20px;
        color: white;
    }

    .get-proposal .get-proposal-dia h3 {
        font-style: italic;
        font-size: 16px;
        color: white;
        margin-top: 15px;
        text-align: center;
    }

    .get-proposal .info-img img {
        height: 60px;
        width: 60px;
        display: block;
        margin: auto;
    }

    .get-proposal .info-text {
        color: white;
        text-align: center;
    }

    .get-proposal .active-3 label {
        color: white;
        font-size: 15px;
        display: block;
        margin-bottom: 8px;
        margin-top: 20px;
        font-weight: 600;
    }

    .get-proposal .active-3 input {
        padding: 12px 15px;
        border: 2px solid transparent;
        outline: 0 !important;
        background: #fff;
        color: #667482;
        font-size: 14px;
        font-weight: 500;
        width: 90%;
    }

    .get-proposal .active-3 .img-info {
        background: #fff;
        border-radius: 20px;
        border: 10px solid #edf0f1;
        color: #000;
        margin-left: 30px;
        margin-top: 50px;
    }

    .get-proposal .active-3 .img-info img {
        max-width: 61px;
        margin: 15px 0 3px;
    }

    .get-proposal .active-3 .img-info p:first-of-type {
        font-size: 20px;
        font-weight: 700;
        color: #30383f;
    }

    .get-proposal .active-3 .img-info hr:first-of-type {
        max-width: 40px;
        margin: 7px auto 6px;
        border: 1px solid #6adaf7;
    }

    .get-proposal .active-3 .img-info p:nth-of-type(2) {
        font-size: 16px;
        color: #30383f;
        max-width: 225px;
        margin: 0 auto;
    }

    .get-proposal .active-3 .img-info hr:last-of-type {
        max-width: 205px;
        border: 1px solid #ecf0f1;
        margin: 14px auto 10px;
    }

    .get-proposal .active-3 .img-info p:nth-of-type(3) {
        color: #30383f;
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 7px;
    }

    .get-proposal .active-3 .img-info a {
        font-size: 20px;
        font-weight: 700;
        color: #ff5056;
        display: block;
        margin-bottom: 18px;
    }

    /*.get-proposal .active-1 select {*/
    /*    position: relative;*/
    /*    margin: 0 0 10px;*/
    /*    width: 100%;*/
    /*    cursor: pointer;*/
    /*    border: 2px solid transparent;*/
    /*    outline: 0 !important;*/
    /*    background: #fff;*/
    /*    color: #667482;*/
    /*    font-size: 13px;*/
    /*    font-weight: 500;*/
    /*    height: 52px;*/
    /*    line-height: 52px;*/
    /*    padding-left: 10px;*/
    /*}*/


    /*.get-proposal .active-1 select option{*/
    /*    height: 52px;*/
    /*    line-height: 52px;*/
    /*    padding-left: 10px;*/
    /*}*/

    .get-proposal .active-1 label,
    .get-proposal .active-2 label {
        font-size: 14px;
        margin-bottom: 8px;
        font-weight: 700;
        color: white;
        display: block;
        margin-top: 20px !important;

    }

    .get-proposal .active-1 .active-label {

    }


</style>
