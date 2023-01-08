<template>
  <div>
    <div class="container">
      <nav class="nav-container">
        <div class="produtos">
          <div class="nav"></div>
          <Produtos
            :title="title"
          />
        </div>
        <aside class="navigation">
          <router-link to="#"></router-link>
          <ul class="sidnav">
            <li
              v-for="index in cardapio"
              :key="index.nome"
              @click="alterShowCardapio(index.nome)"
              >
              <router-link :to="index.routerImg" class="sidnav">
                <img :src="require(`../img/cardapio/sidnav/${index.img}`)" alt="">
                 <span>{{index.nome}}</span>
              </router-link>
            </li>
          </ul>
        </aside>
      </nav>
    </div>
  </div>
</template>

<script>
import Produtos from '@/components/Produtos.vue'

export default {
  name: 'theCardapioMobile',
  components: {
    Produtos
  },
  props: {
    title: {
      type: String
    },
    cardapio: {
      type: Array
    },
    produtos: {
      type: Array
    }
  }
}
</script>

<style scoped>
  *{
    margin: 0px;
    padding: 0px;
    list-style: none;
    text-decoration: none;
  }
</style>
