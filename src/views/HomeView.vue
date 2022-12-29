<template>
  <div>
    <header>
      <Menu />
      <Banner />
    </header>
    <section class="card">
      <Cards />
    </section>
    <section class="servico">
      <Servico />
    </section>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
// import HelloWorld from '../components/HelloWorld'
import Menu from '@/components/Menu.vue'
import Banner from '@/components/Banner.vue'
import Cards from '@/components/Cards.vue'
import Servico from '@/components/Servico.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'theHome',
  components: {
    Menu,
    Banner,
    Cards,
    Footer,
    Servico
  }
}
</script>

<style scoped>
  .servico{
    margin: 50px 180px;

  }
</style>
