import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import Step1View from '@/views/Step1View.vue'
import Step2View from '@/views/Step2View.vue'
import Step3View from '@/views/Step3View.vue'
import Step4View from '@/views/Step4View.vue'

const title = 'Pokemon Shop';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return {
      top: 0
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: title
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        title: `${title} - 登入`,
      }
    },
    {
      path: '/step1',
      name: 'step1',
      component: Step1View,
      meta: {
        title: `${title} - 第一步`,
      }
    },
    {
      path: '/step2',
      name: 'step2',
      component: Step2View,
      meta: {
        title: `${title} - 第二步`,
      }
    },
    {
      path: '/step3',
      name: 'step3',
      component: Step3View,
      meta: {
        title: `${title} - 第三步`,
      }
    },
    {
      path: '/step4',
      name: 'step4',
      component: Step4View,
      meta: {
        title: `${title} - 第四步`,
      }
    },
  ]
})

export default router
