<template>
  <div>
    <Produtos
      :nossoprod="nossosProdutos"
      title="Nossos Produtos"
    />
  </div>
</template>

<script>
import Produtos from '@/components/Produtos.vue'
export default {
  name: 'theNossosProd',
  components: {
    Produtos
  },
  data () {
    return {
      nossosProdutos: [
        {
          img: 'nossosprod/bigmec.png',
          nome: 'Big Mec'
        },
        {
          img: 'nossosprod/queijo.png',
          nome: 'Quarterão com Queijo'
        },
        {
          img: 'nossosprod/hanburgue.png',
          nome: 'Hanburgue'
        },
        {
          img: 'nossosprod/cheesser.png',
          nome: 'Cheeserburger.png'
        },
        {
          img: 'nossosprod/fritas.png',
          nome: 'McFritas Pequena'
        },
        {
          img: 'nossosprod/nuggets.png',
          nome: 'Chicken McNuggets 4 unidades'
        }
      ]
    }
  }
}
</script>
