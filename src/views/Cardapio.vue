<template>
  <div class="paginacao">
    <header>
      <Menu />
    </header>

    <section>
      <nav class="container" v-show="false">
        <div class="cardapio">
          <aside class="nav">
            <router-link to="/cardapio" class="list"> <img src="../img/cardapio/sidnav/bovino.png" alt="">Nossos produtos</router-link>
            <div class="nav-itens">
              <ul>
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
            </div>
          </aside>

          <!-- navigatio -->
          <div class="itens-container">
            <div class="navigation">
              <div class="navigation-itens">
                <ul>
                  <li>
                    <router-link to="/">inicio</router-link>
                    <img src="https://www.mcdonalds.com.br/images/icons/actions-navigation-chevron-right-16.svg" alt="">
                  </li>
                  <li>
                    <router-link to="/cardapio" v-if="showCardapio">Cardapio</router-link>
                    <span v-else>Cardapio</span>
                  </li>
                  <li v-show="showNavigation" @click="alterNavigation()">
                    <img src="https://www.mcdonalds.com.br/images/icons/actions-navigation-chevron-right-16.svg" alt="">
                     <!-- <router-link to="/cardapio/Lançamento" v-if="showLancamento">Lançamento</router-link> -->
                    <span>{{items}}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="itens">
              <router-view />
            </div>
          </div>
        </div>
      </nav>
    </section>

    <section>
      <nav class="container">
        <div class="cardapio">
          <!-- navigatio -->
          <div class="itens-container">
            <div class="navigation">
              <div class="navigation-itens">
                <ul>
                  <li>
                    <router-link to="/">inicio</router-link>
                    <img src="https://www.mcdonalds.com.br/images/icons/actions-navigation-chevron-right-16.svg" alt="">
                  </li>
                  <li>
                    <router-link to="/cardapio" v-if="showCardapio">Cardapio</router-link>
                    <span v-else>Cardapio</span>
                  </li>
                  <li v-show="showNavigation" @click="alterNavigation()">
                    <img src="https://www.mcdonalds.com.br/images/icons/actions-navigation-chevron-right-16.svg" alt="">
                     <!-- <router-link to="/cardapio/Lançamento" v-if="showLancamento">Lançamento</router-link> -->
                    <span>{{items}}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="itens">
              <router-view />
            </div>
          </div>

          <aside class="nav">
            <router-link to="/cardapio" class="list"> <img src="../img/cardapio/sidnav/bovino.png" alt="">Nossos produtos</router-link>
            <div class="nav-itens">
              <ul>
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
            </div>
          </aside>
        </div>
      </nav>
    </section>

    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue'
import Footer from '../components/Footer.vue'
// import CardapioMobile from '@/components/CardapioMobile.vue'
// import Produtos from '../components/Produtos.vue'
export default {
  name: 'theCardapio',
  components: {
    Menu,
    Footer
    // CardapioMobile
    // Produtos
  },
  data () {
    return {
      cardapio: [
        {
          img: 'lancamento.png',
          nome: 'Lançamento',
          routerImg: '/cardapio/lancamento'
        },
        {
          img: 'bovino.png',
          nome: 'Sanduíche de Carne Bovina',
          routerImg: '/cardapio/bovino'
        },
        {
          img: 'tasty.png',
          nome: 'Família Tasty',
          routerImg: '/cardapio/tasty'
        },
        {
          img: 'frango.png',
          nome: 'Sanduíche de Frango',
          routerImg: '/cardapio/frango'
        },
        {
          img: 'selecoes.png',
          nome: 'Seleções Méqui',
          routerImg: '/cardapio/selecoes'
        },
        {
          img: 'feliz.png',
          nome: 'McLanche Feliz',
          routerImg: '/cardapio/feliz'
        },
        {
          img: 'mequi100.png',
          nome: 'Méqui 1000',
          routerImg: '/cardapio/lancamento'
        },
        {
          img: 'acompanhamento.png',
          nome: 'Acompanhamentos',
          routerImg: '/cardapio/lancamento'
        }
      ],
      nossosProdutos: [
        {
          img: 'bigmec.png',
          nome: 'Big Mec'
        },
        {
          img: 'queijo.png',
          nome: 'Quarterão com Queijo'
        },
        {
          img: 'hanburgue.png',
          nome: 'Hanburgue'
        },
        {
          img: 'cheesser.png',
          nome: 'Cheeserburger.png'
        },
        {
          img: 'fritas.png',
          nome: 'McFritas Pequena'
        },
        {
          img: 'nuggets.png',
          nome: 'Chicken McNuggets 4 unidades'
        }
      ],
      items: '',
      navigation: ['Lançamento', 'Sanduíche de Carne Bovina', 'Família Tasty', 'Sanduíche de Frango'],
      showCardapio: false,
      showNavigation: false
    }
  },
  // computed: {
  //   itemNav () {
  //     const item = this.navigation.find(index => index === '')
  //     return item
  //   }
  // },
  methods: {
    alterShowCardapio (itemNav) {
      this.showCardapio = true
      this.showNavigation = true
      const item = this.navigation.find(index => index === itemNav)

      this.items = item
      console.log(this.items)
    },

    alterNavigation () {
      this.showCardapio = false
      this.showNavigation = false
    }
  }
}
</script>

<style scoped>
  *{
    padding: 0px;
    margin: 0px;
  }
  a{
    text-decoration: none;
    color: #000;
  }
  ul, li{
    padding: 0px;
    margin: 0px;
    list-style: none;
  }
  .container{
    margin-top: 150px;
    max-width: 100%;
    /* height: 500px; */
    /* border: 1px solid #000; */
  }

  .cardapio{
    display: flex;
    margin: 30px 100px 30px 100px;
    /* width: 100%; */
    /* height: 100%; */
    /* gap: 100px; */
  }

  .nav{
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    width: 30%;
  }

  .nav a{
    display: grid;
    grid-template-columns: 40% 1fr;
    padding: 10px 0px;
  }
  .nav-itens{
    width: 100%;
  }

  .list{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    width: 100%;
    box-shadow: 0px 0px 1px 2px rgb(216, 211, 211);
    border-radius: 5px;
    /* padding: 20px 0px; */
  }
  .list:focus-within{
    border-left: 5px solid #ffb800;
  }

  .list img{
    max-width: 100%;
    height: 60px;
    justify-self: center;
    margin-left: 30px;
  }

  .nav-itens{
     box-shadow: 0px 0px 1px 1px rgb(216, 211, 211);
     border-radius: 5px;
  }
  .sidnav{
    display: flex;
    /* justify-content: center; */
    align-items: center;
    width: 100%;
    /* padding: 10px 0px; */
  }

  .sidnav:focus-within{
    font-weight: bold;
    border-left: 5px solid #ffb800;
  }

  .sidnav img{
    max-width: 100%;
    height: 60px;
    justify-self: center;
    margin-left: 30px;
  }
  .sidnav span{
    font-size: 1.125rem;
    font-weight: 400;
  }

  /* Itens */
  .itens-container{
    width: 100%;
    /* border: 1px solid #000; */
  }
  .navigation{
    width: 100%;
    padding: 25px 0px;
    /* border: 1px solid #000; */
  }
  .navigation-itens ul{
    display: flex;
    max-width: 95%;
    margin: 0 auto;
    /* padding: 27px 0px; */
  }
  .navigation-itens a{
    text-decoration: underline;
    color: blue;
  }

  /* responsivo */
  @media only screen and (max-width: 1000px) and (min-width: 350px) {
    .container{
      /* margin: 0 auto; */
    }
    .cardapio{
      flex-wrap: wrap;
      margin: 0px;
    }

    .nav{
      width: 98%;
      margin: 0px 0px 10px 5px;
    }

    .nav-itens ul{
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
    }
    .nav-itens ul li{
      width: 40%;
      margin: 0 auto;
    }
    .nav-itens ul li a {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      padding: 15px;
      color: #292929;
    }
    .nav-itens ul li span{
      text-align: center;
      font-weight: 500;
      font-size: 00.885rem;
    }

    .nav a{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      /* grid-template-columns: 1fr; */
      /* justify-items: center; */
      /* border: 1px solid #000; */
    }

    .sidnav:focus-within{
    font-weight: bold;
    border: 5px solid #ffb800;
  }
  }
</style>
