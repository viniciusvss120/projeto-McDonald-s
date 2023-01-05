<template>
  <div>
    <article
      class="article"
    >
      <ul>
        <li
          class="container"
          v-for="card in cards"
          :key="card.img"
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
  name: 'theCards',
  data () {
    return {
      cards: [
        {
          img: 'diversao.png',
          titulo: 'A diversão do McLanche Feliz virou Super.',
          descricao: 'O Super Mario chegou no McLanche Feliz pra garantir a diversão da família. Que tal passar no Méqui?',
          btn: 'Vamos lá?'
        },
        {
          img: 'use.png',
          titulo: 'Use Méqui',
          descricao: 'Conheça aqui todas as novidades e a linha completa de roupas e acessórios do Méqui.',
          btn: 'Saiba mais.'
        },
        {
          img: 'card1.png',
          titulo: 'Quem é Chicken Lover vai amar essa novidade',
          descricao: 'Agora tem McCrispy Chicken Melt & Bacon e McCrispy Chicken Spicy Deluxe. ',
          btn: 'Eu quero'
        },
        {
          img: 'cola.png',
          titulo: 'Tá colecionando o álbum?',
          descricao: 'Cola no Méquique tá rolando um combo especial pra você.',
          btn: 'Saiba mais.'
        },
        {
          img: 'trufa.png',
          titulo: 'Novo McFlurry Kopenhagen Trufa Língua de Gato DUO',
          descricao: 'Bora matar a fome geladinha de Méqui!',
          btn: 'Experimente.'
        },
        {
          img: 'menosFila.png',
          titulo: 'Menos fila, mais Méqui',
          descricao: 'Se você não gosta de fila, então pega essa.',
          btn: 'Consulte Restaurantes'
        },
        {
          img: 'mecZap.png',
          titulo: 'Já add o Méqui Zap?',
          descricao: 'Aquele contato do whatsapp que nunca te deixa no vácuo e sempre manda promoção boa é o nosso.',
          btn: 'Clique aqui'
        }
      ]
    }
  }
}
</script>

<style scoped>
  *{
    padding: 0px;
    margin: 0px;
  }
  ul,li{
    padding: 0px;
    margin: 0px;
    list-style: none;
  }
  .article{
    width: 100vw;
  }
  .article ul{
    display: flex;
    flex-wrap: wrap;
    margin: 0 180px;
    gap: 15px;
  }
  .container{
    width: 580px;
    /* margin-bottom: 10px; */
    border-radius: 5px;
    box-shadow: 0px 1px 2px 0px #000;
  }
  .img{
    /* max-width: 100%; */
    /* border: 1px solid #000; */
  }
  .img img{
    width: 100%;
  }
  .descricao{
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 450px;
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

  /* responsivo */

  @media only screen and (max-width: 1000px) and (min-width: 350px){
    .article{
      width: 100%;
    }
    .article ul{
      margin: 0 auto;
    }
    .container{
      width: 500PX;
      margin: 0px;
    }
  }
</style>
