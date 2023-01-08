<template>
  <div>
    <header class="container">
      <div class="nav-container">
        <router-link to="/"><img class="img" src="../img/logo1.png" alt="logo" v-show="!menu"></router-link>
        <div class="nav-btn"  v-show="!menu">
          <a class="navbar-mobile" @click="aparecerMenu()">
            <span class="barra"></span>
            <span class="barra"></span>
            <span class="barra negrito"></span>
          </a>
          <!-- <a href="#" class="app-mobile">
            <img src="../img/image 3.png" alt="">
            <span>Peça seu Méqui</span>
          </a> -->
        </div>
        <nav class="nav-mobile">
          <div class="mobile-logo">
           <img class="img" src="../img/logo1.png" alt="logo" v-show="menu">
           <img class="fechar" src="../img/menu/fechar.png" v-show="menu" @click="aparecerMenu()">
          </div>
          <div class="mobile-nav">
            <div :class="showMenu">
              <ul v-show="menu">
                <li
                  v-for="nav in navigation"
                  :key="nav"
                >
                  <router-link :to="nav.router">{{nav.name}}</router-link>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" class="mcd-svg-more"><path fill="#292929" d="M7.076.925c-.367 0-.665.298-.665.665v4.821H1.59c-.367 0-.665.298-.665.665 0 .367.298.665.665.665h4.821v4.82c0 .368.298.666.665.666.367 0 .665-.298.665-.665V7.74h4.82c.368 0 .666-.298.666-.665 0-.367-.298-.665-.665-.665H7.74V1.59c0-.367-.298-.665-.665-.665z"></path></svg>
                </li>
              </ul>
            </div>
            <span class="separador"></span>
            <div class="contato-mobile"></div>
          </div>
        </nav>
        <nav class="nav">
          <div class="contato">
            <ul>
              <li><a href="#">Trabalhe Conosco</a></li>
              <li><a href="#">Fale Conosco</a></li>
              <li><a href="#">Méqui mais Próximo</a></li>
            </ul>
            <div class="app">
              <a href="#" class="app-baixar">
                <img src="../img/image 2.png" alt="">
                <span>Baixe o App</span>
              </a>
              <a href="#" class="app-peca">
                <img src="../img/image 3.png" alt="">
                <span>Peça seu Méqui</span>
              </a>
            </div>
          </div>
          <div class="menu">
            <ul>
              <li><router-link to="/cardapio">Cardápio</router-link> </li>
              <li><a href="#">Lançamentos</a> </li>
              <li><a href="#">Quem Somos</a></li>
              <li><a href="#">Família</a></li>
              <li><a href="#">Promoções</a></li>
              <li><a href="#">Méqui pra você</a></li>
              <li><a href="#">McDia Feliz</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'theMenu',
  data () {
    return {
      navigation: [
        {
          name: 'Cardápio',
          router: '/cardapio'

        },
        {
          name: 'Lançamento',
          router: '/cardapio'

        },
        {
          name: 'Quem Somos',
          router: '/cardapio'

        },
        {
          name: 'Família',
          router: '/cardapio'

        },
        {
          name: 'Promoções',
          router: '/cardapio'

        },
        {
          name: 'Méqui pra você',
          router: '/cardapio'

        },
        {
          name: 'McDia Feliz',
          router: '/cardapio'

        }
      ],
      menu: false
    }
  },
  computed: {
    showMenu () {
      const menu = this.menu ? 'navigation-mobi' : ''

      return menu
    }
  },
  methods: {
    aparecerMenu () {
      if (!this.menu) {
        this.menu = true
      } else {
        this.menu = false
      }
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
    width: 100%;
    display: flex;
    /* grid-template-rows: 1fr 1fr; */
  }
  .nav-container{
    display: flex;
    height: 20%;
    width: 100%;
    align-items: center;
    /* margin-left: 100px; */
    box-shadow: 0px 1px 2px 0px rgb(212, 211, 211);
    background: #fff;
    position: fixed;
    z-index: 4;
  }
  .img{
    max-width: 150px;
    height: 50%;
    margin-left: 70px;
    /* border: 1px solid #000; */
  }
  .fechar{
    display: none;
  }
  .nav{
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    /* border: 1px solid #000; */
    /* display: grid;
    grid-template-rows: 1fr 70px; */
    max-width: 100%;
    margin-left: 20px;
  }
  .contato{
    display: flex;
    justify-content: space-between;
    width: 90%;
    /* border: 1px solid #000; */
    align-items: center;
    margin-top: 0px;
  }
  .contato ul{
    display: flex;
    gap: 15px;
  }

  .contato ul li a{
    font-size: 15px;
    color: #606060;
  }
  .app{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7px;
    height: 80%;
    width: 35%;
    gap: 15px;
    /* margin-right: 50px; */
  }
  .app a{
    display: flex;
    /* margin-right: 30px; */
    /* margin-top: 20px; */
    font-size: 0.888rem;
    width: 200px;
    padding: 7px;
    /* border: 1px solid #000; */
    justify-content: center;
    align-items: center;
  }
  .app-peca{
    background: #ffb800;
    /* width: 500px; */
    border-radius: 4px;
  }
  .app .app-baixar{
    display: flex;
    /* width: 500px; */
    align-content: center;
    /* border: 1px solid #000; */
  }
  .app a img{
    width: 30px;
  }
  .menu{
    display: flex;
    align-content: center;
    height: 70px;
    /* border: 1px solid #000; */
    margin-bottom: 10px;
  }
  .menu ul{
    display: flex;
    align-items: flex-end;
    /* border: 1px solid #000; */
    gap: 35px;
    /* margin-top: 30px; */
  }
  .menu ul li{
    display: flex;
    font-size: 1.15rem;
    border-bottom: 1px solid #000;
    padding-bottom: 10px;
  }
  .menu ul li a{
    color: #292929;
  }

  /* Navbar-mobile */
  .barra{
    width: 100%;
    height: 2px;
    background: #000;
  }
  .app-mobile{
    display: none;
  }
  .negrito{
    height: 3px;
  }
  .navigation-mobi{
    display: none;
  }

  /* responsivo */
  @media only screen and (max-width: 1000px) and (min-width: 350px){

    .contato ul{
      display: none;
    }
    .app{
      display: none;
    }
    .menu{
      display: none;
    }

    .nav-mobile{
      max-width: 100%;
    }
    .navbar-mobile{
      margin: 0px;
      padding: 0px;
      display: grid;
      width: 20px;
      height: 18px;
      cursor: pointer;
      /* border: 1px solid #000; */
    }
    .nav-container{
      display: flex;
      height: initial;
      width: 100%;
      /* gap: 5px; */
      /* align-items: center; */
    }
    .img{
      /* border: 1px solid #000; */
      width: 60px;
      height: 48%;
      margin-left: 20px;

    }
    .nav-btn{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      /* border: 1px solid #000; */
    }
    .app-mobile{
      /* border: 1px solid #000; */
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      background: #ffb800;
    }
    .app-mobile img{
      width: 15%;
    }

    .nav-mobile{
      width: 100%;
    }
    .mobile-logo{
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      /* border: 1px solid #000; */
    }
    .fechar{
      display: inherit;
      width: 25px;
      height: 20px;
    }
    .navigation-mobi{
      display: block;
    }
    .navigation-mobi ul{
      display: block;
      max-width: 100%;
      margin-left: 40px;
    }
    .navigation-mobi ul li{
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }
  }
</style>
