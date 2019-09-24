import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import carres from '@/view/carres'
import contact from '@/view/contact'
import blog from '@/view/blog'
import test from '@/view/template'

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
    },
    {
      path: '/carres',
      name: 'carres',
      component: carres
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    }
  ],
  mode:'history'   //去除#号
})
