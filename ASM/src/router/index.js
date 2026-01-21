import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/home.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import Profile from '../views/profile.vue'
import PostDetail from '../views/postDetail.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/profile', component: Profile },
   {
    path: '/detail/:id',
    component: PostDetail
  },
  
{
  path: '/detail/:id',
  component: PostDetail
}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
