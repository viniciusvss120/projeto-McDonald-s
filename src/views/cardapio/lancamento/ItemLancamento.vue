<template>
  <div>
    <section class="container">
      <div class="img">
        <img src="@/img/cardapio/lancamento/chocolate.png" alt="">
      </div>
      <div class="descricao">
        <div class="descricao-itens">
          <nav class="navigation">
            <div class="navigation-itens">
                <ul>
                  <li>
                    <router-link to="/">inicio</router-link>
                    <img src="https://www.mcdonalds.com.br/images/icons/actions-navigation-chevron-right-16.svg" alt="">
                  </li>
                  <li @click="alterNavigation()">
                    <router-link to="/cardapio" v-if="showCardapio">Cardapio</router-link>
                    <span v-else>Cardapio</span>
                  </li>
                  <li v-show="showNavigation">
                    <img src="https://www.mcdonalds.com.br/images/icons/actions-navigation-chevron-right-16.svg" alt="">
                     <!-- <router-link to="/cardapio/Lançamento" v-if="showLancamento">Lançamento</router-link> -->
                    <span>{{items}}</span>
                  </li>
                </ul>
              </div>
          </nav>
          <h1>McFlurry Trufa Lingua de Gato DUO Kopenhagen Chocolate</h1>
          <h5>319 Kcal</h5>
          <p>O novo McFlurry promete toda qualidade que só o Méqui e a Kopenhagen podem oferecer! A sobremesa é composta por espetaculares trufas Língua de Gato DUO Kopenhagen, bebida láctea sabor baunilha e cobertura sabor chocolate.</p>
        </div>

      </div>
    </section>
    <section class="info">
      <div class="informacoes">
        <h3>Informação do produto</h3>
        <div class="info-nutricional">
          <a href="#">
            <h4>Informação nutricional</h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="mcd-svg-collapse mcd-svg-collapse--is-brand mcd-svg-collapse--is-medium mcd-svg-collapse--is-flipped"><g fill="none" fill-rule="evenodd"><path d="M0 0H16V16H0z"></path> <path fill="#6F6F6F" fill-rule="nonzero" d="M12.746 11.776l-.526-.547-1.257-1.309-1.521-1.582-1.314-1.367c-.213-.221-.429-.44-.64-.665l-.008-.009h1.038l-.526.547-1.257 1.309-1.521 1.582L3.9 11.102c-.213.22-.424.445-.64.665l-.008.009c-.133.138-.33.223-.518.223-.18 0-.395-.082-.518-.223-.129-.145-.224-.336-.215-.54.008-.202.074-.393.215-.539l.525-.547L4 8.842l1.52-1.582 1.315-1.367c.212-.221.424-.445.639-.665l.008-.01c.28-.29.757-.292 1.038 0l.526.548 1.257 1.308 1.521 1.582 1.314 1.367c.213.222.428.442.64.665l.008.01c.133.138.215.343.215.538 0 .187-.08.411-.215.54-.14.133-.323.232-.518.223-.197-.01-.382-.077-.521-.223z" class="mcd-svg-collapse-fill"></path></g></svg>
          </a>
          <div class="nutri-info">
            <div class="tabela"></div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'theItemLancamento'
}
</script>

<style scoped>
   *{
    padding: 0px;
    margin: 0px;
  }
  ul, li{
    padding: 0px;
    margin: 0px;
    list-style: none;
  }
  a{
    text-decoration: none;
    color: #000;
  }
  .container{
    max-width: 100%;
    display: flex;
    justify-content: center;
    /* border: 1px solid #000; */
  }
  .navigation-itens ul{
    display: flex;
    max-width: 95%;
    margin: 0 auto;
  }

  .img{
    width: 40%;
    /* height: 300px; */
    /* border: 1px solid #000; */
  }
  .img img{
    width: 50%;
    margin: 100px 130px;
    /* border: 1px solid #000; */
  }
  .descricao{
    width: 47%;
    /* height: 300px; */
    /* border: 1px solid #000; */
  }

  .descricao-itens h1{
    font-size: 3.1rem;
    margin: 20px 20px;
    font-weight: bold;
    /* text-align: center; */
  }
  .descricao-itens h5{
    font-size: 1.5rem;
    margin: 20px 20px;
  }
  .descricao-itens p{
    max-width: 95%;
    font-size: 1rem;
    margin: 10px auto;
  }

  /* informações */
  .info{
    width: 100%;
    display: block;
    background: #e6e5e5;
  }
  .info h3{
    text-align: center;
    margin-bottom: 30px;
    padding: 20px;
  }

  .info-nutricional{
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    padding: 20px;
  }
  .info-nutricional a{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
