import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const isAuthenticated = () => {
  return localStorage.getItem('userLoggedIn') === 'true'; // localStorage'da giriş durumunu kontrol et
};

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated()) {
        next('/login'); // Giriş yapmamışsa login sayfasına yönlendir
      } else {
        next(); // Eğer giriş yapılmışsa sayfaya geçiş yap
      }
    },

  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
