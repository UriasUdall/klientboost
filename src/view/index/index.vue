<template>
    <el-row class="index">
        <el-col>
            <el-row class="client-testimonials">
                <el-col class="block" :xs="0" :sm="0" :md="1" :lg="2" :xl="3">&nbsp;</el-col>
                <el-col :xs="24" :sm="24" :md="22" :lg="20" :xl="18">
                    <h3>Client Testimonials</h3>
                </el-col>
            </el-row>
            <hr class="black-border hr-line2">
            <el-row>
                <el-col class="block" :xs="6" :sm="0" :md="2" :lg="2" :xl="3">&nbsp;</el-col>
                <el-col :xs="12" :sm="24" :md="22" :lg="20" :xl="18">
                    <el-row class="index-video">
                        <!--                <el-col :xs="0" :sm="0" :md="3" :lg="2" :xl="3" class="block">&nbsp;</el-col>-->
                        <el-col :xs="24" :sm="8" :md="7" :lg="8" :xl="7">
                            <div class="video-btn">
                                <a href="https://www.youtube.com/embed/FPfb6NFmg0w?autoplay=1&vq=hd1080" class="lightbox-a">
                                    <img src="../../assets/images/index/play-btn-final@2x.png" alt="play btn">
                                </a>
                                <img src="../../assets/images/index/kiddom-hero-desktop-new.png"
                                     alt="kiddom client success story">
                                <p>Lead Gen</p>
                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="8" :md="7" :lg="8" :xl="7">
                            <div class="video-btn">
                                <a href="https://www.youtube.com/embed/FPfb6NFmg0w?autoplay=1&vq=hd1080" class="lightbox-a">
                                    <img src="../../assets/images/index/play-btn-final@2x.png" alt="play btn">
                                </a>
                                <img src="../../assets/images/index/fashionphile-hero-desktop.jpg"
                                     alt="fashionphile client success story">
                                <p>eComm</p>
                            </div>
                        </el-col>
                        <el-col :xs="24" :sm="8" :md="7" :lg="8" :xl="7">
                            <div class="video-btn">
                                <a href="https://www.youtube.com/embed/FPfb6NFmg0w?autoplay=1&vq=hd1080" class="lightbox-a">
                                    <img src="../../assets/images/index/play-btn-final@2x.png" alt="play btn">
                                </a>
                                <img src="../../assets/images/index/segment-hero-desktop.jpg"
                                     alt="segment- client success story">
                                <p>SaaS</p>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </el-col>

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
    data () {
      return {
        isNowPage: true
      }
    }
  }
</script>

<style scoped>

    .video-btn img{
        width: 95%;
        margin: 0px auto;
    }

    .client-testimonials h3 {
        font-size: 1.8rem;
        font-weight: 700;
        text-align: center;
        margin: 0;
    }
</style>
