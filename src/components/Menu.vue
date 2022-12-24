<template>
  <div>
    <header class="container">
      <div class="nav-container">
        <img class="img" src="../img/logo1.png" alt="logo">
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
                Baixe o App
              </a>
              <a href="#" class="app-peca">
                <img src="../img/image 3.png" alt="">
                Peça se Méqui
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
  name: 'theMenu'
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
    max-width: 100%;
    display: grid;
    /* grid-template-rows: 1fr 1fr; */
  }
  .nav-container{
    display: flex;
    height: 20%;
    width: 100%;
    align-items: center;
    /* margin-left: 100px; */
    box-shadow: 1px 0px 1px 0px rgb(235, 229, 229);
    background: #fff;
    position: fixed;
    z-index: 4;
  }
  .img{
    height: 90%;
    margin-left: 70px;
  }
  .nav{
    display: grid;
    grid-template-rows: 1fr 70px;
    width: 100%;
    margin-left: 50px;
  }
  .contato{
    display: flex;
    justify-content: space-between;
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
    padding: 10px;
    height: 80%;
    width: 30%;
    margin-right: 200px;
  }
  .app a{
    display: flex;
    margin-right: 30px;
    /* margin-top: 20px; */
    font-size: 0.888rem;
    padding: 10px;
    width: 450px;
    justify-content: center;
    align-items: center;
  }
  .app-peca{
    background: #ffb800;
    border-radius: 4px;
  }
  .app .app-baixar{
    display: flex;
    align-content: center;
    /* border: 1px solid #000; */
  }
  .app a img{
    width: 30px;
  }
  .menu{
    display: flex;
    align-items: end;
    max-height: 100%;
    /* margin-bottom: 10px; */
  }
  .menu ul{
    display: flex;
    gap: 40px;
    margin-top: 30px;
  }
  .menu ul li{
    display: flex;
    align-items: flex-end;
    font-size: 1.25rem;
    border-bottom: 1px solid #000;
    padding: 10px;
  }
  .menu ul li a{
    color: #292929;
  }

  /* Banner */
</style>
