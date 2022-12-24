import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cardapio from '../views/Cardapio.vue'

import Lancamento from '@/views/cardapio/Lancamento.vue'
import NossosProd from '@/views/cardapio/NossosProd.vue'
import Bovino from '@/views/cardapio/Bovino.vue'
import Tasty from '@/views/cardapio/Tasty.vue'

import ItemLancamento from '@/views/cardapio/lancamento/ItemLancamento.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cardapio',
    name: 'theCardapio',
    component: Cardapio,
    children: [
      {
        path: '/cardapio',
        name: 'theNossosProd',
        component: NossosProd
      },
      {
        path: '/cardapio/lancamento',
        name: 'theAnuncios',
        component: Lancamento,
        children: [
          {
            path: '/cardapio/lancamento/item',
            name: 'theItemLancamento',
            component: ItemLancamento
          }
        ]
      },
      {
        path: '/cardapio/bovino',
        name: 'theBovino',
        component: Bovino
      },
      {
        path: '/cardapio/tasty',
        name: 'theTasty',
        component: Tasty
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
