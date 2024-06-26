import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Payment from '../views/Payment.vue'
import Category from '../views/Category.vue'
import Favorites from '../views/Favorites.vue'
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
    path: '/product/:id',
    name: 'product',
    component: Product,
  },
  {
    path: '/payment',
    name: 'payment',
    component: Payment,
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: Favorites,
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