import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Observer from '../views/Observer.vue'
import Notifications from '../views/Notifications.vue'
import Checker301 from '../views/Checker301.vue'
import PageBuilder404 from '../views/PageBuilder404.vue'
import Settings from '../views/Settings.vue'
import Academy from '../views/Academy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/observer',
    name: 'Observer',
    component: Observer
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications
  },
  {
    path: '/301-checker',
    name: '301 checker',
    component: Checker301
  },
  {
    path: '/404-page-builder',
    name: '404 page builder',
    component: PageBuilder404
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/academy',
    name: 'Academy',
    component: Academy
  }
]

const router = new VueRouter({
  routes
})

export default router
