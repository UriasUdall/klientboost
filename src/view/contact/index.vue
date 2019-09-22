<template>
  <el-row class="backgroundColor">
    <el-col>
      <CommonHeader :ifSelect="ifSelect"></CommonHeader>
      <!--顶部-->
      <el-row class="topHeight">
        <div>
          <div class="whiteBorder"></div>
          <h2 class="contact">CONTACT US</h2>
          <div class="whiteBorder"></div>
        </div>
      </el-row>
      <!--中间表单-->
      <el-row>
        <el-col :xs="1" :sm="1" :md="2" :lg="2" :xl="1">&nbsp;</el-col>
        <el-col :xs="22" :sm="22" :md="20" :lg="20" :xl="22" class="form">
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
              <div class="name">
                <div class="title">
                  Name
                  <span class="conStar">*</span>
                </div>
                <div class="field">
                  <input type="text">
                </div>
              </div>
            </el-col>

            <!--信息-->
            <el-col :md="12" :lg="12" class="hidden-sm-and-down">
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
          </el-row>


          <CommonFooterTop :title="title"></CommonFooterTop>
          <CommonFooter></CommonFooter>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
    import CommonHeader from '@/components/common/common-header'
    import CommonFooter from '@/components/common/common-footer'
    import CommonFooterTop from '@/components/common/common-footer-top'

    export default {
        name: 'index',
        components: {
            CommonHeader,
            CommonFooter,
            CommonFooterTop
        },
        data() {
            return {
                ifSelect: {
                    MenuItem1classTrue: 'false',
                    MenuItem2classTrue: 'false',
                    MenuItem3classTrue: 'false',
                    MenuItem4classTrue: 'false',
                    MenuItem5classTrue: 'false',
                    MenuItem6classTrue: 'false',
                    MenuItem7classTrue: 'true',
                },
                title: 'Over <strong>445 businesses</strong> got a proposal from us in <strong>August, 2019</strong>'
            }
        }
    }
</script>

<style scoped>
  .backgroundColor {
    background-color: #173147;
  }

  .topHeight {
    margin: 80px auto;
  }

  .whiteBorder {
    margin: 15px auto;
    width: 80px;
    height: 2px;
    background-color: white;
  }

  .contact {
    color: white;
  }

  .form {
    background-color: white;
  }

  .bigTitle {
    padding: 45px 20px;
    border-bottom: #6adaf7 solid 1px;
    background-color: #F7FBFC;
  }

  .bigTitle h2 {
    margin: 10px auto;
    font-weight: 600;
    font-size: 22px;
    max-width: 680px;
  }

  .information {
    padding: 30px;
    color: #30383f;
    font-size: 18px;
    text-align: left;
  }

  .email, .phone {
    margin: 0 0 10px 0;
  }

  .email a, .phone a {
    color: #6adaf7;
    text-decoration: none;
    cursor: pointer;
  }

  .email a:hover, .phone a:hover {
    border-bottom: #6adaf7 dotted 1px;
  }

  .form hr {
    display: block;
    ooverflow: hidden;
    color: #D1D5D9;
    margin: 0 30px;
  }

  .name {
    color: #667482;
    margin: 20px 30px;
    float: left;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    margin: 5px 0 15px;
    text-align: left;
    width: 100%;
  }

  .title .conStar {
    color: #c0392b;
  }

  .field {
    height: 70px;
    width: 100%;
    padding: 15px;
    background: #d1d5d9;
  }

  .field input {
    vertical-align: middle;
  }
</style>
