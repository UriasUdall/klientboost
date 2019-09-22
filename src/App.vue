<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
  import '@/assets/style/media/media.css'
  import '@/assets/style/media/media-contact.css'
  import '@/assets/style/media/media-index.css'
  import '@/assets/style/public.css'
  import 'element-ui/lib/theme-chalk/display.css'

  export default {
    name: 'App'
  };

  // /* 媒体查询 */
  // (function (doc, win) {
  //   var docEl = doc.documentElement || doc.body,
  //     resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
  //     recalc = function () {
  //       var clientWidth = docEl.clientWidth
  //       if (!clientWidth) return
  //       // if (clientWidth <= 768) {
  //       //   docEl.style.fontSize = '12px'
  //       // } else if (clientWidth > 768 && clientWidth <= 1366) {
  //       //   docEl.style.fontSize = (12 + (clientWidth - 768) * (4.0 / 598)) + 'px'
  //       // } else if (clientWidth > 1366 && clientWidth <= 1920) {
  //       //   docEl.style.fontSize = (16 + (clientWidth - 1366) * (4.0 / 554)) + 'px'
  //       // } else if (clientWidth > 1920) {
  //       //   docEl.style.fontSize = '20px'
  //       // }
  //       if (clientWidth <= 1200) {
  //         docEl.style.fontSize = '12px'
  //       } else if (clientWidth > 1200 && clientWidth <= 1920) {
  //         docEl.style.fontSize = (12 + (clientWidth - 1200) * (4.0 / 720)) + 'px'
  //       } else if (clientWidth > 1920) {
  //         docEl.style.fontSize = '16px'
  //       }
  //     }
  //   if (!doc.addEventListener) return
  //   win.addEventListener(resizeEvt, recalc, false)
  //   doc.addEventListener('DOMContentLoaded', recalc, false)
  // })(document, window)

</script>

<style>
    body {
        /*background: #E0E0E0;*/
        background: white;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /*margin-top: 60px;*/
    }
</style>
