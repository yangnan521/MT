import Vue from 'vue'
import Router from 'vue-router'
// import goodslist from '@/components/goodslist'
// import goodsdetail from '@/components/goodsdetail'
import sec from '@/components/sec'
import ordersec from '@/components/ordersec'
import login from '@/components/login'
import reg from '@/components/reg'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sec',
      component: sec
    },
    {
      path: '/sec',
      name: 'sec',
      component: sec
    },
    {
      path: '/ordersec',
      name: 'ordersec',
      component: ordersec
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    }
  ]
});
