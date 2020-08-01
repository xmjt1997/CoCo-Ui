import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../components/home.vue'
import Read from '../components/read.vue'
import ButtonShow from '../views/ButtonShow.vue'

import LinkShow from '../views/LinkShow.vue'


import InputNumberShow from '../views/InputNumberShow.vue'
import RadioShow from '../views/RadioShow.vue'


class home { }

const routes = [
  { path: '/home', component: Home },
  { path: '/read', component: Read },
  { path: '/button', component: ButtonShow },
  { path: '/link', component: LinkShow },
  { path: '/inputnum', component: InputNumberShow },
  { path: '/radio', component: RadioShow }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
