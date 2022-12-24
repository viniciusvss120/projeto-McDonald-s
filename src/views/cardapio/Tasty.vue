<template>
  <div>
    <Produtos
      :nossoprod="nossosProdutos"
      title="Família Tasty"
    />
  </div>
</template>

<script>
import Produtos from '@/components/Produtos.vue'
export default {
  name: 'theLancamento',
  components: {
    Produtos
  },
  data () {
    return {
      nossosProdutos: [
        {
          img: 'tasty/bigtasty.png',
          nome: 'Big Tasty'
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
  h2{
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
  }
  .container{
    max-width: 100%;
    /* border: 1px solid #000; */
  }
  img{
    max-width: 90%;
    margin: 15px 0px;
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
    justify-content: center;
    max-width: 26%;
    /* border: 1px solid #000; */
  }
  .itens ul li span{
    text-align: center;
    width: 60%;
    margin: 15px 0px;
  }
</style>
