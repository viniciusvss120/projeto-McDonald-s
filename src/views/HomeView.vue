<template>
  <div>
    <header>
      <Menu />
      <Banner />
    </header>
    <section>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </section>
    <section class="servico">
      <Servico />
      <Servico />
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
  section{
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    margin: 0 180px;
    gap: 50px;
  }
  .servico{
    margin: 50px 180px;

  }
</style>
