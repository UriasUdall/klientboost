<template>
    <el-row>
        <el-col>
            <!--PC端导航开始-->
            <div class="head" id="head">

                <!--	<a name="top"></a>-->
                <!--    <div class="logo lf">-->
                <!--        <a href="javascript:;">-->
                <!--            <img src="statics/images/logo.jpg">-->
                <!--            <div class="p1"></div>-->
                <!--        </a>-->
                <!--    </div>-->
                <div class="nav rg">
                    <ul class="nav_pc">
                        <li>
                            <a class="a1" href="javascript:;">WHAT WE DO</a>
                        </li>
                        <li>
                            <a class="a1 a1a" href="javascript:;">TEAM</a>
                        </li>
                        <li>
                            <a class="a1 a1a" href="javascript:;">CASE STUDIES</a>
                        </li>
                        <li>
                            <a class="a1 a1a" href="javascript:;">RESOURCES</a>
                        </li>
                        <li>
                            <a class="a1 a1a" href="javascript:;">BLOG</a>
                        </li>
                        <div class="clear"></div>
                    </ul>
                </div>
                <div class="clear"></div>
            </div>
            <!--PC端导航结束-->

            <!--移动端导航开始-->
            <div class="moblie_head">
                <!--	<div class="lf">-->
                <!--		<a href="javascript:;">-->
                <!--		<img src="statics/images/logo.jpg"></a>-->
                <!--	</div>-->
                <div class="rg">
                    <a href="javascript:;" class="a_js">
                        <img src="https://3jbq2ynuxa-flywheel.netdna-ssl.com/wp-content/themes/klientboost/img/menu-bars-dark.svg"></a>
                </div>
                <div class="clear"></div>

            </div>

            <div class="a_txt">

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
                            <a href="javascript:;">HOME</a>
                        </li>
                        <li>
                            <a class="a_js2" href="javascript:;">WHAT WE DO</a>
                        </li>
                        <li>
                            <a class="a_js2" href="javascript:;">TEAM</a>
                        </li>
                        <li>
                            <a class="a_js2" href="javascript:;">CASE STUDIE</a>
                        </li>
                        <li>
                            <a class="a_js2" href="javascript:;">SRESOURCES</a>
                        </li>
                        <li>
                            <a class="a_js2" href="javascript:;">BLOG</a>
                        </li>
                        <li>
                            <a class="a_js2" href="javascript:;">CONTACT</a>
                        </li>
                        <div class="clear"></div>
                    </ul>
                </div>
            </div>
            <!--移动端导航结束-->
        </el-col>
    </el-row>
</template>

<script>
  import '@/assets/style/header.css'

  export default {
    name: 'common-header',
    mounted () {
      $(function() {
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
        $(".a_js").click(
          function() {
            $(".a_txt").stop(true, false).delay(0).animate({
              width: "100%",
              height: "100%"
            }, 0);
            $(".a_txt").find(".div1").stop(true, false).delay(0).animate({
              opacity: "0.9"
            }, 100);
            $(".a_txt").find(".div2").stop(true, false).delay(0).animate({
              opacity: "1"
            }, 100);
            $(".a_txt").find(".div3").stop(true, false).delay(0).animate({
              right: "0"
            }, 100);
          }
        )
        //点击关闭，逐渐隐藏
        $(".a_closed").click(
          function() {
            $(".a_txt").stop(true, false).delay(100).animate({
              width: "0",
              height: "0"
            }, 0);
            $(".a_txt").find(".div1").stop(true, false).delay(0).animate({
              opacity: "0"
            }, 100);
            $(".a_txt").find(".div2").stop(true, false).delay(0).animate({
              opacity: "0"
            }, 100);
            $(".a_txt").find(".div3").stop(true, false).delay(0).animate({
              right: "-50%"
            }, 100);
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

      });
    }
  }
</script>

<style scoped>

</style>
