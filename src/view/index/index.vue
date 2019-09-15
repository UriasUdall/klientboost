<template>
    <div>
        <img style="width:12.5rem"  src="@/assets/logo.png"><br/>
        <span style="margin: 10px auto">这里是首页</span>
        <Footer v-bind:class="{'isIndex':isNowPage}"></Footer>
    </div>
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

</style>
