import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import footer from '@/view/footer'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/footer',
      name: 'footer',
      component: footer
    }
  ]
})
