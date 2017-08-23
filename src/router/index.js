import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/views/HomePage'
import AnnouncementPage from '@/views/AnnouncementPage'
import AnnouncementViewPage from '@/views/AnnouncementViewPage'
import MyPage from '@/views/MyPage'
import LoginPage from '@/views/LoginPage'
import ChangePasswordPage from '@/views/ChangePasswordPage'

import SchoolHomePage from '@/views/school/HomePage'
import SchoolDevicePage from '@/views/school/DevicePage'
import SchoolDeviceFormPage from '@/views/school/DeviceFormPage'
import SchoolDeviceRepairPage from '@/views/school/DeviceRepairPage'
import SchoolDeviceViewPage from '@/views/school/DeviceViewPage'
import SchoolOpenDeviceRepairPage from '@/views/school/OpenDeviceRepairPage'
import SchoolOpenRepairSuccessPage from '@/views/school/OpenRepairSuccessPage'
import SchoolRepairPage from '@/views/school/RepairPage'
import SchoolRepairViewPage from '@/views/school/RepairViewPage'

import OrgHomePage from '@/views/org/HomePage'
import OrgDeviceFormPage from '@/views/org/DeviceFormPage'
import OrgDevicePage from '@/views/org/DevicePage'
import OrgDeviceViewPage from '@/views/org/DeviceViewPage'
import OrgRepairPage from '@/views/org/RepairPage'
import OrgRepairViewPage from '@/views/org/RepairViewPage'

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
    },

    // school
    {
      path: '/school/',
      component: SchoolHomePage
    },
    {
      path: '/school/repair',
      component: SchoolRepairPage
    },
    {
      path: '/school/repair/:id',
      component: SchoolRepairViewPage
    },
    {
      path: '/school/device',
      component: SchoolDevicePage
    },
    {
      path: '/school/device/create',
      component: SchoolDeviceFormPage
    },
    {
      path: '/school/device/:id',
      component: SchoolDeviceViewPage
    },
    {
      path: '/school/device/:id/update',
      component: SchoolDeviceFormPage
    },
    {
      path: '/school/device/:id/repair',
      component: SchoolDeviceRepairPage
    },
    {
      path: '/school/open/device/:id/repair',
      component: SchoolOpenDeviceRepairPage
    },
    {
      path: '/school/open/repair/success',
      component: SchoolOpenRepairSuccessPage
    },

    // org
    {
      path: '/org/',
      component: OrgHomePage
    },
    {
      path: '/org/repair',
      component: OrgRepairPage
    },
    {
      path: '/org/repair/:id',
      component: OrgRepairViewPage
    },
    {
      path: '/org/device',
      component: OrgDevicePage
    },
    {
      path: '/org/device/create',
      component: OrgDeviceFormPage
    },
    {
      path: '/org/device/:id',
      component: OrgDeviceViewPage
    },
    {
      path: '/org/device/:id/update',
      component: OrgDeviceFormPage
    }
  ]
})
