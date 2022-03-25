import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  // Commande
  {
    path: '/commandes',
    name: 'Command',
    component: () => import('../views/Commands.vue')

  },
  {
    path: '/command/:id',
    name: 'ThisCommand',
    component: () => import('../views/Command.vue')
  },
  // Product
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/product/:id',
    name: 'ThisProduct',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/product/create',
    name: 'CreateProduct',
    props: { product:{
      "id": null,
      "title": "",
      "description": "",
      "postDescription": "",
      "imageUrl": "",
      "author": null,
      "created_at": "",
      "updated_at": "",
      "price": 0,
      "quatity": 0,
      "tags": null
    } },
    component: () => import('../components/command/ItemProduct.vue')
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
