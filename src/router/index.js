import { createRouter, createWebHistory } from 'vue-router'
import PaginaPrincipal from '@/views/PaginaPrincipal.vue'
import PaginaSegunda from '@/views/PaginaSegunda.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
      path: '/',
      name: 'PaginaPrincipal',
      component: PaginaPrincipal
    },
    {
      path: '/about',
      name:'PaginaSegunda',
      component: PaginaSegunda
    }
  ]
})

export default router
