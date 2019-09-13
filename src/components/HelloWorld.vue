<template>
    <div class="hello">
        <h1 style="font-size: 2.5rem">{{ msg }}</h1>
        <h2 style="font-size: 1.5rem">Ecosystem</h2>
        <ul>
            <li>
                <a href="http://router.vuejs.org/" target="_blank">
                    vue-router
                </a>
            </li>
            <li>
                <a href="http://vuex.vuejs.org/" target="_blank">
                    vuex
                </a>
            </li>
            <li>
                <a href="http://vue-loader.vuejs.org/" target="_blank">
                    vue-loader
                </a>
            </li>
            <li>
                <a href="https://github.com/vuejs/awesome-vue" target="_blank">
                    awesome-vue
                </a>
            </li>
        </ul>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="text">文字按钮</el-button>
        <el-row>
<!--            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>-->
<!--            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>-->
<!--            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>-->
<!--            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>-->
            <el-col :xs="24" :sm="24" :md="24" :lg="24"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
    </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App!!!'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        font-size: 1rem;
        color: #42b983;
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
</style>
