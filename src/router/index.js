import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/views/HomePage'
import AnnouncementPage from '@/views/AnnouncementPage'
import AnnouncementViewPage from '@/views/AnnouncementViewPage'
import MyPage from '@/views/MyPage'
import LoginPage from '@/views/LoginPage'
import ChangePasswordPage from '@/views/ChangePasswordPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/announcement',
      component: AnnouncementPage
    },
    {
      path: '/announcement/:id',
      component: AnnouncementViewPage
    },
    {
      path: '/my',
      component: MyPage
    },
    {
      path: '/my/change-password',
      component: ChangePasswordPage
    },
    {
      path: '/',
      component: HomePage
    }
  ]
})
