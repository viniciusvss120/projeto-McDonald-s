<template>
  <div>
    <div class="container">
      <h2>{{title}}</h2>
      <div class="itens">
        <ul>
          <li
            v-for="index in nossoprod"
            :key="index.nome"
          >
            <router-link :to="routerItem" class="produtos">
              <img :src="require(`@/img/cardapio/${index.img}`)" alt="">
              <span>{{index.nome}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'theProdutos',
  props: {
    nossoprod: {
      type: Array
    },
    title: {
      type: String
    },
    routerItem: {
      type: String,
      default: '/cardapio'
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
  h2{
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
  }
  .container{
    max-width: 100%;
    /* border: 1px solid #000; */
  }

  .itens{
    margin-top: 50px;
  }
  .itens ul {
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    justify-content: center;
    /* border: 1px solid #000; */
  }
  .itens ul li{
    display: flex;
    flex-wrap: wrap;
    max-width: 28%;
    /* border: 1px solid #000; */
  }
  .produtos{
    display: grid;
    /* flex-wrap: wrap; */
    justify-items: center;
    align-content: center;
    margin: 15px 0px;
  }
  .produtos img{
    max-width: 60%;
    margin: 15px 0px;
  }
  .produtos span{
    text-align: center;
    max-width: 80%;
    font-weight: 500;
    font-size: 1.125rem;
  }

  @media only screen and (max-width: 1000px) and (min-width: 350px) {
    h2{
      font-size: 2.3rem;
    }
  }
</style>
