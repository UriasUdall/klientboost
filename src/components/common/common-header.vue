<template>
    <el-row style="height: 82px">
<!--        <el-col class="block hidden-xs-only" :sm="0" :md="1" :lg="2" :xl="3">&nbsp;</el-col>-->
        <el-col class="head hidden-xs-only" id="head" >
            <el-row>
                <el-col class="block hidden-xs-only" :sm="0" :md="0" :lg="1" :xl="3">&nbsp;</el-col>
                <el-col  class="header-logo hidden-xs-only" :sm="4" :md="4" :lg="4" :xl="4">
                    <a href="javascript:;">
                        <img src="../../assets/images/index/klientboost-logo-blue.png">
                        <div class="p1"></div>
                    </a>
                </el-col>
<!--                <el-col class="block hidden-xs-only" :sm="0" :md="4" :lg="4" :xl="3">&nbsp;</el-col>-->
                <el-col class="nav hidden-xs-only" :sm="20" :md="20" :lg="18" :xl="14">
                    <ul class="nav_pc">
                        <li>
                            <a class="a1" href="javascript:;">WHAT WE DO</a>
                        </li>
                        <li>
                            <a class="a1" href="javascript:;">TEAM</a>
                        </li>
                        <li>
                            <a class="a1" href="javascript:;">CASE STUDIES</a>
                        </li>
                        <li>
                            <a class="a1" href="javascript:;">RESOURCES</a>
                        </li>
                        <li>
                            <a class="a1" href="javascript:;">BLOG</a>
                        </li>
                        <li>
                            <a class="a1 head-button" href="javascript:;">GET PROPOSAL</a>
                        </li>
                        <div class="clear"></div>
                    </ul>
                    <div class="clear"></div>
                </el-col>
            </el-row>
        </el-col>
        <!--PC端导航结束-->

        <!--移动端导航开始-->
        <el-col class="moblie_head hidden-md-and-up" >
            <div class="rg">
                <a href="javascript:;" class="a_js">
                    <img src="https://3jbq2ynuxa-flywheel.netdna-ssl.com/wp-content/themes/klientboost/img/menu-bars-dark.svg"></a>
            </div>
            <div class="clear"></div>

        </el-col>

        <el-col class="a_txt hidden-md-and-up" >

            <div class="div1 a_closed"></div>

            <div class="div3">
                <ul>
                    <li>
                        <a href="javascript:;" class="a_closed">
                            <img src="https://3jbq2ynuxa-flywheel.netdna-ssl.com/wp-content/themes/klientboost/img/menu-close-dark.svg"
                                 width="22">
                        </a>
                    </li>
                    <li>
                        <a :class="{'HeaderMenuItemSelect':this.ifSelect.MenuItem1classTrue==='true'}"
                           href="javascript:;">HOME</a>
                    </li>
                    <li>
                        <a class="a_js2" :class="{'HeaderMenuItemSelect':this.ifSelect.MenuItem2classTrue==='true'}"
                           href="javascript:;">WHAT WE DO</a>
                    </li>
                    <li>
                        <a class="a_js2" :class="{'HeaderMenuItemSelect':this.ifSelect.MenuItem3classTrue==='true'}"
                           href="javascript:;">TEAM</a>
                    </li>
                    <li>
                        <a class="a_js2" :class="{'HeaderMenuItemSelect':this.ifSelect.MenuItem4classTrue==='true'}"
                           href="javascript:;">CASE STUDIE</a>
                    </li>
                    <li>
                        <a class="a_js2" :class="{'HeaderMenuItemSelect':this.ifSelect.MenuItem5classTrue==='true'}"
                           href="javascript:;">SRESOURCES</a>
                    </li>
                    <li>
                        <a class="a_js2" :class="{'HeaderMenuItemSelect':this.ifSelect.MenuItem6classTrue==='true'}"
                           href="javascript:;">BLOG</a>
                    </li>
                    <li>
                        <a class="a_js2" :class="{'HeaderMenuItemSelect':this.ifSelect.MenuItem7classTrue==='true'}"
                           href="javascript:;">CONTACT</a>
                    </li>
                    <li>
                        <a class="a1 moblie_head-button" href="javascript:;">GET PROPOSAL</a>
                    </li>
                    <div class="clear"></div>
                </ul>
            </div>
        </el-col>
        <!--移动端导航结束-->
    </el-row>
</template>

<script>
  import '@/assets/style/header.css'

  export default {
    name: 'common-header',
    props: {
      ifSelect: {
        MenuItem1classTrue: '',
        MenuItem2classTrue: '',
        MenuItem3classTrue: '',
        MenuItem4classTrue: '',
        MenuItem5classTrue: '',
        MenuItem6classTrue: '',
        MenuItem7classTrue: '',
      }
    },
    mounted () {
      console.log(this.ifSelect.MenuItem1classTrue),
        console.log(this.ifSelect.MenuItem2classTrue),
        $(function () {
          //PC端鼠标浮动展示子导航
          // $(".nav ul li").hover(
          // 	function() {
          // 		$(this).children('').next().stop(true, true).delay(300).slideDown(400);
          // 	},
          // 	function() {
          // 		$(this).children('').next().stop(true, true).delay(300).slideUp(400);
          // 	}
          // );
          //点击逐渐展开移动端导航
          $('.a_js').click(
            function () {
              $('.a_txt').stop(true, false).delay(0).animate({
                width: '100%',
                height: '100%'
              }, 0)
              $('.a_txt').find('.div1').stop(true, false).delay(0).animate({
                opacity: '0.9'
              }, 100)
              $('.a_txt').find('.div2').stop(true, false).delay(0).animate({
                opacity: '1'
              }, 100)
              $('.a_txt').find('.div3').stop(true, false).delay(0).animate({
                right: '0'
              }, 100)
            }
          )
          //点击关闭，逐渐隐藏
          $('.a_closed').click(
            function () {
              $('.a_txt').stop(true, false).delay(100).animate({
                width: '0',
                height: '0'
              }, 0)
              $('.a_txt').find('.div1').stop(true, false).delay(0).animate({
                opacity: '0'
              }, 100)
              $('.a_txt').find('.div2').stop(true, false).delay(0).animate({
                opacity: '0'
              }, 100)
              $('.a_txt').find('.div3').stop(true, false).delay(0).animate({
                right: '-50%'
              }, 100)
            }
          )
          // //点击顶级菜单展开关闭子导航
          // $('.div3 ul li').click(function() {
          //   $('.a_txt2:visible').slideUp().prev().removeClass('a_js2_on');
          //   var subnav = $(this).find('.a_txt2');
          //   console.log(subnav.is(':hidden'))
          //   if(subnav.is(':hidden')) {
          //     subnav.slideDown().prev().addClass('a_js2_on');
          //   } else {
          //     subnav.slideUp().prev().removeClass('a_js2_on');
          //   };
          // })

        })
    }
  }
</script>

<style scoped>

</style>
