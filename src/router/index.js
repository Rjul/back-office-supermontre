import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  // Commande
  {
    path: '/commands',
    name: 'Commands',

  },
  {
    path: '/command/:id',
    name: 'ThisCommand'
  },
  // Product
  {
    path: '/products',
    name: 'Products'

  },
  {
    path: '/product/:id',
    name: 'ThisProduct'
  },
  // Client
  {
    path: '/clients',
    name: 'Clients'

  },
  {
    path: '/client/:id',
    name: 'ThisClient'

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
