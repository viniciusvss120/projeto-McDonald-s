<template>
  <div>
    <article
      class="article"
    >
      <ul>
        <li
          class="container"
          v-for="card in cards"
          :key="card.id"
        >
          <div class="img">
            <img :src="require(`../img/cards/${card.img}`)" alt="">
          </div>
          <div class="descricao">
            <div class="info">
              <h4>{{card.titulo}}</h4>
              <p>{{card.descricao}}</p>
            </div>
            <a href="#">{{card.btn}}</a>
          </div>
        </li>
      </ul>

    </article>
  </div>
</template>

<script>
export default {
  name: 'theServico',
  cards: [
    {
      id: 1,
      img: 'sofa.png',
      titulo: 'Que tal um #MéquiNoSofá?',
      descricao: 'Faça agora seu pedido e receba em casa pelo delivery',
      btn: 'Clique aqui'
    },
    {
      id: 2,
      img: 'campanha.png',
      titulo: 'Confira as medidas que o Méqui adotou!',
      descricao: 'Juntos, vamos sair dessa ainda mais fortes, preparados e unidos.',
      btn: 'Clique aqui'
    },
    {
      id: 3,
      img: 'cidade.png',
      titulo: 'Encontre o Méqui mais próximo de vc',
      descricao: 'Deixamos ainda mais fácil! Ative sua geolocalização e mostraremos o restaurante McDonalds mais próximo de você.',
      btn: 'Clique aqui'
    }
  ]
}
</script>

<style scoped>
  *{
    padding: 0px;
    margin: 0px;
  }
  .container{
    max-width: 350px;
    /* border: 1px solid #000; */
    /* margin-bottom: 10px; */
    border-radius: 5px;
    box-shadow: 0px 1px 2px 0px #000;
  }
  .img{
    width: 100%;
    /* border: 1px solid #000; */
  }
  .img img{
    max-width: 100%;
  }
  .descricao{
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 480px;
    /* border: 1px solid #000; */
    margin-top: 20px;
    /* margin-bottom: 60px; */
  }
  .descricao h4,p{
    text-align: center;
    font-family: 'Roboto', sans-serif;
  }
  .descricao p{
    margin-top: 10px;
  }
  .descricao a{
    text-decoration: none;
    color: #000;
    padding: 10px 20px;
    background: #ffb800;
    border-radius: 5px;
    margin: 0 auto;
    margin-bottom: 30px;
    margin-top: 30px;
  }
</style>
