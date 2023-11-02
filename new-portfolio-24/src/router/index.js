import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {getAuth, onAuthStateChanged} from "firebase/auth"

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
      component: () => import('../views/AdminView.vue'),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/adminSite',
      name: 'adminSite',
      component: () => import('../views/AdminSiteView.vue'),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/adminGraphic',
      name: 'adminGraphic',
      component: () => import('../views/AdminGraphicView.vue'),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/adminPhoto',
      name: 'adminPhoto',
      component: () => import('../views/AdminPhotoView.vue'),
      meta: {
        requiresAuth: true,
      }
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

const getCurrentUser = () => {
  return new Promise((resolve, reject)=>{
    const removeListener = onAuthStateChanged(
      getAuth(),
        (user) => {
          removeListener();
          resolve(user);
        },
      reject
    )
  })
}


router.beforeEach(async(to, from, next) =>{
if (to.matched.some((record)=> record.meta.requiresAuth)) {
if (await getCurrentUser()) {
  next();
} else {
  alert("You don't have the access"),
  next("/")
}
} else {
  next();
}
});


export default router
