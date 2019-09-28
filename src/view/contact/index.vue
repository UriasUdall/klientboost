<template>
    <el-row>
        <el-col>
            <CommonHeader :ifSelect="ifSelect"></CommonHeader>
            <!--顶部-->
            <el-row class="contactPage BG-BB-LG">
                <el-col>
                    <el-row class="topHeight">
                        <el-col>
                            <div class="whiteBorder"></div>
                            <h2 class="contact">CONTACT US</h2>
                            <div class="whiteBorder"></div>
                        </el-col>
                    </el-row>
                    <el-row class="contactForm">
                        <el-col :xs="1" :sm="1" class="hidden-md-and-up">&nbsp;</el-col>
                        <el-col :xs="22" :sm="22" :md="24" :lg="24" :xl="24" class="form">
                            <el-row class="bigTitle">
                                <el-col>
                                    <h2>Git in Touch,We Don't Bite</h2>
                                </el-col>
                            </el-row>

                            <el-row>
                                <el-col :xs="24" :sm="24" class="hidden-md-and-up">
                                    <div class="information">
                                        <div class="email">
                                            <a href="mailto:hello@klientboost.com">
                                                hello@klientboost.com
                                            </a>
                                        </div>
                                        <div class="phone">
                                            <a href="tel:8775013447">
                                                (877)5013447
                                            </a>
                                        </div>
                                        <div>
                                            2787 Bristol Street<br/>
                                            Costa Mesa,CA 92626
                                        </div>
                                    </div>
                                </el-col>
                                <!--分割线-->
                                <el-col class="hidden-md-and-up">
                                    <hr>
                                </el-col>

                                <!--输入框-->
                                <el-col :xs="24" :sm="24" :md="12" :lg="12">
                                    <el-form :model="dataForm" :rules="dataRule">
                                        <!--姓名-->
                                        <el-row>
                                            <el-col :xs="1" :sm="1" :md="1" :lg="2">&nbsp;</el-col>
                                            <el-col :xs="22" :sm="22" :md="22" :lg="21">
                                                <div class="item">
                                                    <div class="title">
                                                        Name
                                                        <span class="conStar">*</span>
                                                    </div>
                                                    <div class="field">
                                                        <el-form-item prop="name">
                                                            <el-input type="text" v-model="dataForm.name" name="name"/>
                                                        </el-form-item>
                                                    </div>
                                                </div>
                                            </el-col>
                                        </el-row>
                                        <!--邮箱-->
                                        <el-row>
                                            <el-col :xs="1" :sm="1" :md="1" :lg="2">&nbsp;</el-col>
                                            <el-col :xs="22" :sm="22" :md="22" :lg="21">
                                                <div class="item">
                                                    <div class="title">
                                                        Email
                                                        <span class="conStar">*</span>
                                                    </div>
                                                    <div class="field">
                                                        <el-form-item prop="email">
                                                            <el-input type="text" v-model="dataForm.email"
                                                                      name="email"/>
                                                        </el-form-item>
                                                    </div>
                                                </div>
                                            </el-col>
                                        </el-row>
                                        <!--电话-->
                                        <el-row>
                                            <el-col :xs="1" :sm="1" :md="1" :lg="2">&nbsp;</el-col>
                                            <el-col :xs="22" :sm="22" :md="22" :lg="21">
                                                <div class="item">
                                                    <div class="title">
                                                        Phone
                                                        <span class="conStar">*</span>
                                                    </div>
                                                    <div class="field">
                                                        <el-form-item prop="tel">
                                                            <el-input type="text" v-model="dataForm.tel" name="tel"/>
                                                        </el-form-item>
                                                    </div>
                                                </div>
                                            </el-col>
                                        </el-row>
                                        <!--详细信息-->
                                        <el-row>
                                            <el-col :xs="1" :sm="1" :md="1" :lg="2">&nbsp;</el-col>
                                            <el-col :xs="22" :sm="22" :md="22" :lg="21">
                                                <div class="item">
                                                    <div class="title">
                                                        Message
                                                    </div>
                                                    <div class="messageField">
                                                        <textarea v-model="dataForm.text" name="text"></textarea>
                                                    </div>
                                                </div>
                                            </el-col>
                                        </el-row>
                                        <!--send按钮-->
                                        <el-row>
                                            <el-col :xs="1" :sm="1" :md="1" :lg="2">&nbsp;</el-col>
                                            <el-col :xs="22" :sm="22" :md="22" :lg="21">
                                                <input type="submit" value="SEND" class="btn-BWCR sendBtn"></input>
                                            </el-col>
                                        </el-row>
                                    </el-form>
                                </el-col>

                                <!--信息-->
                                <el-col :md="12" :lg="12" class="hidden-sm-and-down">
                                    <div class="information2 mt-50">
                                        <div class="email">
                                            <a href="mailto:hello@klientboost.com">
                                                hello@klientboost.com
                                            </a>
                                        </div>
                                        <div class="phone">
                                            <a href="tel:8775013447">
                                                (877)5013447
                                            </a>
                                        </div>
                                        <div>
                                            2787 Bristol Street<br/>
                                            Costa Mesa,CA 92626
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>


                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <!--中间表单-->

            <CommonFooterTop :title="title" :pd="pd"></CommonFooterTop>
            <CommonFooter></CommonFooter>
        </el-col>
    </el-row>
</template>

<script>
  import CommonHeader from '@/components/common/common-header'
  import CommonFooter from '@/components/common/common-footer'
  import CommonFooterTop from '@/components/common/common-footer-top-1'
  import {isMobile, isEmail, isName, isPhone} from '@/utils/validate'

  export default {
    name: 'index',
    components: {
      CommonHeader,
      CommonFooter,
      CommonFooterTop
    },
    data () {
      var validateAdminName = (rule, value, callback) => {
        if (!isName(value)) {
          callback(new Error('请输入合法的姓名'))
        } else {
          callback()
        }
      }
      var validateEmail = (rule, value, callback) => {
        if (!isEmail(value)) {
          callback(new Error('请输入合法的邮箱'))
        } else {
          callback()
        }
      }
      var validateMobile = (rule, value, callback) => {
        if (!isMobile(value) && !isPhone(value)) {
          callback(new Error('手机号格式错误'))
        } else {
          callback()
        }
      }
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
        title: 'Over <strong>445 businesses</strong> got a proposal from us in <strong>August, 2019</strong>',
        dataForm: {
          name: '',
          email: '',
          tel: '',
          text: '',
        },
        dataRule: {
          name: [
            {required: true, message: '姓名不能为空', trigger: 'blur'},
            {validator: validateAdminName, trigger: 'blur'}
          ],
          email: [
            {required: true, message: '邮箱不能为空', trigger: 'blur'},
            {validator: validateEmail, trigger: 'blur'}
          ],
          tel: [
            {required: true, message: '手机号不能为空', trigger: 'blur'},
            {validator: validateMobile, trigger: 'blur'}
          ]
        }
      }
    }
  }
</script>

<style scoped>
    .mt-50 {
        margin-top: 50px;
    }

    .contactPage {
        /*background-color: #173147;*/
    }

    .contactPage .topHeight {
        margin: 80px auto;
    }

    .contactPage .whiteBorder {
        margin: 15px auto;
        width: 80px;
        height: 2px;
        background-color: white;
    }

    .contactPage .contact {
        color: white;
    }

    .contactPage .form {
        background-color: white;
    }

    .contactPage .bigTitle {
        border-bottom: #6adaf7 solid 1px;
        background-color: #F7FBFC;
    }

    .contactPage .bigTitle h2 {
        margin: 10px auto;
        font-weight: 600;
        font-size: 22px;
        max-width: 680px;
    }

    .contactPage .information {
        padding: 30px;
        color: #30383f;
        font-size: 18px;
        text-align: left;
    }

    .contactPage .information2 {
        padding: 30px;
        color: #30383f;
        font-size: 22px;
        text-align: left;
    }

    .contactPage .email, .phone {
        margin: 0 0 10px 0;
    }

    .contactPage .email a, .phone a {
        color: #6adaf7;
        text-decoration: none;
        cursor: pointer;
    }

    .contactPage .email a:hover, .phone a:hover {
        border-bottom: #6adaf7 dotted 1px;
    }

    .contactPage .form hr {
        display: block;
        ooverflow: hidden;
        color: #D1D5D9;
        margin: 0 30px;
    }

    .contactPage .item {
        color: #667482;
        float: left;
        width: 100%;
        margin: 30px 0;
    }

    .contactPage .title {
        font-size: 16px;
        font-weight: 700;
        margin: 5px 0 15px;
        text-align: left;
        width: 100%;
    }

    .contactPage .title .conStar {
        color: #c0392b;
    }

    .contactPage .field {
        height: 70px;
        width: 100%;
        background: #d1d5d9;
    }

    .contactPage .messageField {
        height: 200px;
        width: 100%;
        background: #d1d5d9;
    }

    .contactPage .messageField textarea {
        width: calc(100% - 24px);
        height: 150px;
        vertical-align: top;
        border: none;
        background: transparent;
        outline: none;
        padding: 20px 12px;
        font-size: 20px;
    }

    .contactPage .sendBtn {
        padding: 20px 35px;
        font-size: 22px;
        float: left;
        margin-top: 15px;
        margin-bottom: 40px;
        font-weight: 600;
    }
</style>

<style>
    .el-input {
        padding-top: 15px !important;
    }

    .el-form-item__error {
        font-size: 20px !important;
        padding-top: 24px !important;
    }
</style>
