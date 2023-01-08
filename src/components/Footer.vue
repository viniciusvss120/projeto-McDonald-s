<template>
  <div>
    <footer>
      <div class="baixar-app">
        <div class="container">

          <div class="descricao">
            <img src="../img/footer.png" alt="">
            <div class="title">
              <h2>Já baixou o nosso App?</h2>
              <p>Peça seu delivery, veja o menu, baixe stickers, peça e retire, encontre os restaurantes mais próximos, tenha todos os cupons e muito mais.</p>
            </div>
          </div>
          <div class="baixa">
            <a href="#">Baixe agora</a>
          </div>
        </div>
      </div>
      <!-- <div class="chedar">
        <svg xmlns="http://www.w3.org/2000/svg" width="1047" height="53" viewBox="0 0 1047 53"><g fill="#FFBC0D"><path d="M783 0h8.898c27.346 1.109 41.205 29.39 70.124 24.947 10.435-1.602 19.12-7.673 30.019-7.762 26.084-.21 38.888 29.7 63.222 34.884 7.298 1.555 14.958 1.35 21.71-2.062 5.922-2.992 10.522-7.947 14.51-13.13 6.888-8.958 13.024-18.669 21.26-26.511 4.48-4.262 9.887-8.221 16.028-9.521 2.384-.506 4.793-.72 7.207-.845H1046M0 0c95.445 0 125.033 46.115 167.984 46.115C219.525 46.115 251.974 0 325.469 0c53.687 0 70.33 25.94 94.489 25.94C448.951 25.94 467.205 0 508.544 0" transform="translate(.32)"></path></g></svg>
      </div> -->
      <div class="info">
        <nav class="info-container">
          <ul class="info-title">
            <li class="info-colum">
              <div class="quem-somos titulo">
                <h5>Quem somos</h5>
              </div>
              <ul>
                <li><a href="#">Institucional</a></li>
                <li><a href="#">Franquias</a></li>
                <li><a href="#">Trabalhe Conosco</a></li>
                <li><a href="#">Privacidade</a></li>
                <li><a href="#">Desenvolvimento Sustentável e Compromisso Social</a></li>
                <li><a href="#">Portas Abertas</a></li>
                <li><a href="#">Publicidade Responsável</a></li>
              </ul>
            </li>

            <li class="info-colum">
              <div class="familia titulo">
                <h5>Família</h5>
              </div>
              <ul>
                <li><a href="#">Lançamentos</a></li>
                <li><a href="#">McLanche Feliz</a></li>
                <li><a href="#">Méqui Box</a></li>
                <li><a href="#">Privacidade</a></li>
                <li><a href="#">McLanche Feliz App</a></li>
                <li><a href="#">Compromisso com as Famílias</a></li>
              </ul>
            </li>

            <li class="info-colum">
              <div class="mequi titulo">
                <h5>Méqui para você</h5>
              </div>
              <ul>
                <li><a href="#">App do Méqui</a></li>
                <li><a href="#">McDelivery</a></li>
                <li><a href="#">Méqui no iFood</a></li>
                <li><a href="#">Peça e Retire</a></li>
                <li><a href="#">Gift Card</a></li>
                <li><a href="#">Méqui Zap</a></li>
                <li><a href="#">Drive-Thru</a></li>
              </ul>
            </li>

            <li class="info-colum">
              <div class="contato titulo">
                <h5>Contato</h5>
              </div>
              <ul>
                <li><a href="#">Contato</a></li>

              </ul>
            </li>
          </ul>
        </nav>
      </div>

      <div class="info-mobile">
        <nav class="info-container-mobile">
          <ul class="info-title-mobile">
            <li
              class="info-colum-mobile"
              v-for="(nav, index) in navFooter"
              :key="index"
            >
              <div class="titulo">
                <h5>{{nav}}</h5>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" class="mcd-svg-more"><path fill="#292929" d="M7.076.925c-.367 0-.665.298-.665.665v4.821H1.59c-.367 0-.665.298-.665.665 0 .367.298.665.665.665h4.821v4.82c0 .368.298.666.665.666.367 0 .665-.298.665-.665V7.74h4.82c.368 0 .666-.298.666-.665 0-.367-.298-.665-.665-.665H7.74V1.59c0-.367-.298-.665-.665-.665z"></path></svg>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      <div class="rede-social">
        <div class="social-container">
        <div class="social">
          <ul>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34"><g fill="none" fill-rule="evenodd"><path stroke="#ADADAD" d="M32.69 16.845c0 8.75-7.094 15.844-15.845 15.844C8.095 32.69 1 25.596 1 16.845S8.094 1 16.845 1c8.75 0 15.845 7.094 15.845 15.845" class="mcd-icon-stroke"></path> <path fill="#6F6F6F" d="M14.542 17.063v7.735c0 .112.085.202.19.202h2.706c.104 0 .189-.09.189-.202v-7.861h1.961c.099 0 .181-.08.19-.185l.188-2.368c.01-.118-.078-.219-.189-.219h-2.15v-1.68c0-.394.3-.713.672-.713h1.511c.105 0 .19-.09.19-.202V9.202C20 9.09 19.915 9 19.81 9h-2.554c-1.498 0-2.714 1.29-2.714 2.882v2.283H13.19c-.105 0-.19.09-.19.202v2.368c0 .112.085.202.19.202h1.352v.126" class="mcd-icon-fill"></path></g></svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" class="mcd-svg-twitter"><g fill="none" fill-rule="evenodd"><path stroke="#ADADAD" d="M32.69 16.845c0 8.75-7.094 15.844-15.845 15.844C8.095 32.69 1 25.596 1 16.845S8.094 1 16.845 1c8.75 0 15.845 7.094 15.845 15.845" class="mcd-icon-stroke"></path> <path fill="#6F6F6F" d="M24.94 11.558c-.508.227-1.068.365-1.616.456.26-.044.644-.508.798-.697.234-.287.428-.613.538-.966.014-.028.024-.063-.004-.083-.035-.014-.057-.007-.085.007a8.331 8.331 0 0 1-1.92.724.13.13 0 0 1-.132-.034c-.056-.063-.109-.121-.168-.17a3.409 3.409 0 0 0-.93-.562 3.27 3.27 0 0 0-1.427-.226 3.471 3.471 0 0 0-2.445 1.257 3.285 3.285 0 0 0-.651 1.287c-.113.454-.104.902-.035 1.36.01.076.004.087-.066.076-2.637-.387-4.823-1.318-6.597-3.312-.077-.087-.119-.087-.182.007-.777 1.147-.4 2.992.57 3.899.13.12.262.241.406.351-.053.01-.698-.058-1.274-.351-.076-.049-.115-.02-.122.065-.007.124.004.238.02.373.15 1.164.967 2.24 2.086 2.66.133.055.28.104.423.128-.255.055-.518.094-1.249.038-.09-.017-.126.027-.09.114.549 1.477 1.734 1.916 2.622 2.167.12.02.239.02.358.048-.007.01-.015.01-.021.02-.295.443-1.316.773-1.792.937a6.5 6.5 0 0 1-2.721.343c-.146-.02-.177-.019-.217 0-.04.025-.005.06.042.097.186.12.375.228.567.331.58.304 1.186.546 1.819.718 3.268.89 6.95.236 9.404-2.17 1.928-1.888 2.603-4.493 2.603-7.101 0-.102.123-.158.195-.212.501-.372.9-.817 1.274-1.314.084-.111.079-.21.079-.251v-.014c0-.042.005-.029-.06 0" class="mcd-icon-fill"></path></g></svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" class="mcd-svg-instagram"><g fill="none" fill-rule="evenodd"><path stroke="#ADADAD" d="M32.69 16.845c0 8.75-7.094 15.844-15.845 15.844C8.095 32.69 1 25.596 1 16.845S8.094 1 16.845 1c8.75 0 15.845 7.094 15.845 15.845" class="mcd-icon-stroke"></path> <path fill="#6F6F6F" d="M20.017 24.748H13.73A4.735 4.735 0 0 1 9 20.018V13.73A4.735 4.735 0 0 1 13.73 9h6.287a4.736 4.736 0 0 1 4.73 4.73v6.287a4.736 4.736 0 0 1-4.73 4.73z" class="mcd-icon-fill"></path> <path fill="#FFF" d="M16.938 19.358a2.487 2.487 0 0 1-2.484-2.484 2.487 2.487 0 0 1 2.484-2.484 2.487 2.487 0 0 1 2.485 2.484 2.487 2.487 0 0 1-2.485 2.484zm0-6.362a3.882 3.882 0 0 0-3.878 3.878 3.882 3.882 0 0 0 3.878 3.878 3.883 3.883 0 0 0 3.879-3.878 3.883 3.883 0 0 0-3.879-3.878zM21.043 11.812a.923.923 0 1 0 0 1.846.923.923 0 0 0 0-1.846" class="mcd-icon-bg"></path></g></svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" class="mcd-svg-youtube"><g fill="none" fill-rule="evenodd"><g><g><g><path stroke="#ADADAD" d="M31.69 15.845c0 8.75-7.094 15.844-15.845 15.844C7.095 31.69 0 24.596 0 15.845S7.094 0 15.845 0c8.75 0 15.845 7.094 15.845 15.845" transform="translate(-286 -377) translate(131 378) translate(156)" class="mcd-icon-stroke"></path> <path fill="#6F6F6F" d="M18.3 16.229l-3.602 2.117c-.157.09-.298-.031-.298-.222V13.78c0-.194.145-.315.302-.22l3.628 2.23c.16.097.133.345-.03.44zm5.7-2.497C24 11.671 22.44 10 20.517 10h-9.034C9.56 10 8 11.67 8 13.732v4.536C8 20.329 9.56 22 11.483 22h9.034C22.441 22 24 20.33 24 18.268v-4.536z" transform="translate(-286 -377) translate(131 378) translate(156)" class="mcd-icon-fill"></path></g></g></g></g></svg>
              </a>
            </li>

          </ul>
        </div>

        <div class="store">
          <ul>
            <li>
              <a href="#">
                <img class="store-img" src="../img/app-store.png" alt="app-store">
              </a>
            </li>
            <li>
              <a href="#">
                <img class="store-img" src="../img/google-play.png" alt="app-store">
              </a>
            </li>
          </ul>

        </div>
        </div>
      </div>
      <div class="linha">
      </div>
      <div class="privacidade">
        <ul>
          <li><a href="#"></a>Privacidade</li>
          <li><a href="#"></a>Termos e Condições</li>
        </ul>
        <div class="logotipo">
          <img src="../img/logo1.png" alt="">
          <p>
            © McDonald's 2022
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'theFooter',
  data () {
    return {
      navFooter: ['Quem somos', 'Família', 'Méqui para você', 'Contato']
    }
  }
}
</script>

<style scoped>
  *{
    padding: 0px;
    margin: 0px;
    text-decoration: none;
    list-style: none;
  }
  footer{
    width: 100%;
  }
  .baixar-app{
    width: 100%;
    /* margin-bottom: 20px; */
    /* border: 1px solid #000; */
    background: #ffb800;
  }
  .container{
    display: grid;
    grid-template-columns: 1fr 350px;
    max-width: 85%;
    align-items: center;
    margin: 0 auto;
  }
  .descricao{
    display: flex;
    justify-content: space-around;
    max-width: 100%;
    padding: 10px 5px;
    /* gap: 50px; */
    /* margin: 0 auto; */
  }
  .title{
    width: 70%;
  }
  .title p{
    width: 100%;
  }
  .descricao img{
    /* width: 100%; */
    height: 150px;
    /* margin: 10px auto; */
  }
  .descricao h2{
    font-weight: 800;
    font-size: 2rem;
  }

  .descricao p{
    font-size: 1rem;
  }
  .baixa{
    display: flex;
    justify-content: center;
  }
  .baixa a{
    text-decoration: none;
    color: #000;
    /* border: 1px solid #000; */
    border-radius: 5px;
    background: #fff;
    padding: 15px 25px;
  }
  .chedar{
    margin: 0 230px;
  }

  .info-title{
    display: flex;
    max-width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    /* border: 1px solid #000; */
  }
  .info-colum{
    max-width: 130px;
    margin: 0 5px auto 100px;
    /* border: 1px solid #000; */
  }
  .info-mobile{
    display: none;
  }
  .titulo{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
  }
  .titulo h5{
    color: #858585;
  }
  .info-colum ul{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .info-colum a{
    font-size: 0.860rem;
    color: #858585;
  }

  .info-colum a:hover{
    color: #464545;
  }

  .rede-social{
    width: 100%;
    /* height: 50px; */
    margin: 30px auto 10px auto;
  }
  .social-container{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .social{
    width: 50%;
    display: flex;
  }
  .social ul{
    display: flex;
    /* width: 100%; */
    align-items: center;
    margin-left: 110px;
    /* border: 1px solid #000; */
    gap: 15px;
  }

  .store{
    /* width: 50%; */
  }
  .store ul{
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    /* border: 1px solid #000; */
    margin-right: 200px;
  }
  .store-img{
    height: 45px;
  }

  .linha {
    max-width: 80%;
    height: 1px;
    margin: 0px 110px 30px 110px;
    padding: 20px auto;
    background: #dddada;
  }

  .privacidade{
    display: flex;
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .privacidade ul{
    display: flex;
    width: 100%;
    gap: 20px;
    margin-left: 110px;
  }
  .privacidade ul li{
    color: #858585;
    font-size: 0.960rem;
  }
  .logotipo{
    display: flex;
    /* margin-right: 30px; */
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .logotipo img{
    max-width: 100%;
    height: 50px;
  }

  /* responsivo */
  @media only screen and (max-width: 1000px) and (min-width: 350px) {
    .container{
      display: flex;
      /* grid-template-columns: 100%; */
      /* margin: 0px;
      padding: 0px; */
      flex-wrap: wrap;
      max-width: 100%;
    }

    .descricao{
      gap: 30px;
      margin: 0px;
      width: 100%;
    }
    .descricao h2{
    font-weight: 800;
    font-size: 28px;
    }
    .descricao img{
      height: 100px;
    }
    .title{
      width: 100%;
    }
    .title p{
      font-size: 0.900rem;
      margin-top: 15px;
    }

    .info{
      display: none;
    }
    .info-mobile{
      display: block;
    }

    .baixa{
      margin: 20px auto;
    }

    .store{
      margin: 20px 50px;
    }

    .linha{
      width: 100%;
      margin: 0 auto;
    }

    .logotipo{
      margin-left: 50px;
    }
}

</style>
