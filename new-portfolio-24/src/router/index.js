import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/graphics',
      name: 'graphics',
      component: () => import('../views/GraphicsView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/coding',
      name: 'coding',
      component: () => import('../views/CodingView.vue')
    },
    {
      path: '/photography',
      name: 'photography',
      component: () => import('../views/PhotographyView.vue')
    },
    {
      path: '/cv',
      name: 'cv',
      component: () => import('../views/CvView.vue')
    }
  ]
})

export default router
