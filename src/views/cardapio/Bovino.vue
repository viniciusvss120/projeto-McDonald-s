<template>
  <div>
    <Produtos
      :nossoprod="nossosProdutos"
      title="Sanduíche de Carne Bovina"
    />
  </div>
</template>

<script>
import Produtos from '@/components/Produtos.vue'
export default {
  name: 'theBovino',
  components: {
    Produtos
  },
  data () {
    return {
      nossosProdutos: [
        {
          img: 'bovino/bigmec.png',
          nome: 'Big Mac'
        },
        {
          img: 'bovino/quartesao.png',
          nome: 'Duplo Quarterão'
        },
        {
          img: 'bovino/queijo.png',
          nome: 'Quarterão com Queijo'
        },
        {
          img: 'bovino/mcnifico.png',
          nome: 'McNifíco Bacon'
        },
        {
          img: 'bovino/duplochedar.png',
          nome: 'Duplo Cheddar McMelt'
        },
        {
          img: 'bovino/cheddar.png',
          nome: 'Cheddar McMelt'
        },
        {
          img: 'bovino/bacon.png',
          nome: 'Duplo Burger Bacon'
        },
        {
          img: 'bovino/burguerqueijo.png',
          nome: 'Duplo Burger com Queijo'
        },
        {
          img: 'bovino/triplo.png',
          nome: 'Triplo Burguer'
        },
        {
          img: 'bovino/mcfiesta.png',
          nome: 'McFiesta'
        },
        {
          img: 'bovino/cheesser.png',
          nome: 'Cheeseburguer'
        },
        {
          img: 'bovino/hanburgue.png',
          nome: 'Hamburgue'
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
    max-width: 25%;
    /* border: 1px solid #000; */
  }
  .itens ul li span{
    text-align: center;
    width: 60%;
    margin: 15px 0px;
  }
</style>
