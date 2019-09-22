import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import contact from '@/view/contact'
import test from '@/components/common/common-footer-top-2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ],
  mode:'history'   //去除#号
})
