import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import NotFound from '../views/NotFound.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/:category',
    name: 'category',
    component: Category,
  },
  {
    path: '/auth/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/auth/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router