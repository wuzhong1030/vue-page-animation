import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      children: [
        {
          path: '',
          component: () => import('../views/Home.vue')
        },
        {
          path: '/pageA',
          component: () => import('../views/moduelA/PageA.vue')
        },
        {
          path: '/pageB',
          component: () => import('../views/moduleB/PageB.vue')
        }
      ]
    }
  ]
})
