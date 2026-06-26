import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReportDetails from '../views/ReportDetails.vue'
import FirstView from '../views/FirstView.vue'
import UploadPage from '../views/UploadPage.vue'
import ReportDone from '../views/ReportDone.vue'
import ReportEdit from '../views/ReportEdit.vue'
import ReportEditCheck from '../views/ReportEditCheck.vue'
import UploadCheck from '../views/UploadCheck.vue'
import UploadDone from '../views/UploadDone.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'first',
      component: FirstView,
    },
    {
      path: '/reports',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/reports/:id',
      name: 'ReportDetails',
      component: ReportDetails,
    },
    {
      path: '/reports/:id/edit',
      name: 'ReportEdit',
      component: ReportEdit,
    },
    {
      path: '/reports/:id/edit/check',
      name: 'ReportEditCheck',
      component: ReportEditCheck,
    },
    {
      path: '/reports/:id/done',
      name: 'ReportDone',
      component: ReportDone,
    },
    {
      path: '/upload',
      name: 'upload',
      component: UploadPage,
    },
    {
      path: '/upload/check',
      name: 'uploadcheck',
      component: UploadCheck,
    },
    {
      path: '/upload/check/done',
      name: 'uploadDone',
      component: UploadDone,
    },
  ],
})

export default router
