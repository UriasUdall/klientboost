import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import footer from '@/view/footer'
import contact from '@/view/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/footer',
      name: 'footer',
      component: footer
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ],
  mode:'history'   //去除#号
})
