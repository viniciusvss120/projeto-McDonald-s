<template>
  <div>
    <!-- <header>
      <Menu />
    </header> -->
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
          <a @click="tabelaShow()">
            <h4>Informação nutricional</h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="mcd-svg-collapse mcd-svg-collapse--is-brand mcd-svg-collapse--is-medium mcd-svg-collapse--is-flipped"><g fill="none" fill-rule="evenodd"><path d="M0 0H16V16H0z"></path> <path fill="#6F6F6F" fill-rule="nonzero" d="M12.746 11.776l-.526-.547-1.257-1.309-1.521-1.582-1.314-1.367c-.213-.221-.429-.44-.64-.665l-.008-.009h1.038l-.526.547-1.257 1.309-1.521 1.582L3.9 11.102c-.213.22-.424.445-.64.665l-.008.009c-.133.138-.33.223-.518.223-.18 0-.395-.082-.518-.223-.129-.145-.224-.336-.215-.54.008-.202.074-.393.215-.539l.525-.547L4 8.842l1.52-1.582 1.315-1.367c.212-.221.424-.445.639-.665l.008-.01c.28-.29.757-.292 1.038 0l.526.548 1.257 1.308 1.521 1.582 1.314 1.367c.213.222.428.442.64.665l.008.01c.133.138.215.343.215.538 0 .187-.08.411-.215.54-.14.133-.323.232-.518.223-.197-.01-.382-.077-.521-.223z" class="mcd-svg-collapse-fill"></path></g></svg>
          </a>
          <div class="nutri-info" v-show="showTable">
            <div class="tabela">
              <div class="tabela-head">
                <ul>
                  <li>
                    <h3>319Kcal</h3>
                    <p>Calorias</p>
                  </li>
                  <li>
                    <h3>9g</h3>
                    <p>Gordura total</p>
                  </li>
                  <li>
                    <h3>57g</h3>
                    <p>Carboidratos</p>
                  </li>
                  <li>
                    <h3>4g</h3>
                    <p>Proteinas</p>
                  </li>
                </ul>
              </div>
              <div class="tabela-info">
                <table>
                  <tr>
                    <th>Informação nutricional</th>
                    <th>Por Porção</th>
                    <th>*VD%</th>
                  </tr>

                  <tr v-for="nutri in tabelaNutri" :key="nutri.informacao">
                    <td>{{nutri.informacao}}</td>
                    <td>{{nutri.porcao}}</td>
                    <td>{{nutri.vd}}</td>
                  </tr>
                  <legend>
                      Referência: ANVISA. RDC Nº 360, DE 23 DE DEZEMBRO DE 2003. <br>
                      Regulamento técnico sobre rotulagem nutricional de alimentos embalados. <br><br>

                      *VD: % Valores Diários de referência com base em uma dieta de 2.000 kcal ou 8.400 kJ. Seus valores diários podem ser maiores ou menores, dependendo de suas necessidades energéticas. <br>
                      **VD não estabelecido. <br>
                      ***O peso dos produtos, individualmente, pode oscilar na sua montagem, afetando para mais ou para menos os valores informados na tabela. <br><br>

                      Observações: <br>
                      - A dosagem de xarope dos refrigerantes é fornecida conforme especificação dos fabricantes para bebidas com gelo. <br>
                      - Os resultados nutricionais expressos nas tabelas foram obtidos a partir de cálculos teóricos ou análises bromatológicas realizadas pelo levantamento do peso médio de cada um dos ingredientes que compõem os produtos McDonald’s. <br>
                      - Os valores nutricionais de todos os ingredientes são de responsabilidade dos respectivos fornecedores.
                  </legend>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <!-- <footer>
      <Footer />
    </footer> -->
  </div>
</template>

<script>
// import Menu from '@/components/Menu.vue'
// import Footer from '@/components/Footer.vue'
export default {
  name: 'theItemLancamento',
  data () {
    return {
      tabelaNutri: [
        {
          informacao: 'Energia (kcal)',
          porcao: '319Kcal',
          vd: '16%'
        },
        {
          informacao: 'Carboidratos',
          porcao: '57g',
          vd: '19%'
        },
        {
          informacao: 'Proteínas',
          porcao: '4g',
          vd: '9%'
        },
        {
          informacao: 'Gordura total',
          porcao: '9g',
          vd: '14%'
        },
        {
          informacao: 'Gordura saturadas',
          porcao: '319Kcal',
          vd: '24%'
        },
        {
          informacao: 'Gordura trans',
          porcao: '0g',
          vd: '0%'
        },
        {
          informacao: 'Fibra alimentar',
          porcao: '2g',
          vd: '8%'
        },
        {
          informacao: 'Sódio',
          porcao: '268mg',
          vd: '13%'
        }
      ],
      // components: {
      //   Menu,
      //   Footer
      //   // Produtos
      // },
      showTable: false,
      showCardapio: false
    }
  },
  methods: {
    tabelaShow () {
      this.showTable = !this.showTable
    }
  }
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
    cursor: pointer;
  }

  /* Tabela Nutricional */
  .tabela-head{
    max-width: 100%;
  }
  .tabela-head ul {
    display: flex;
    gap: 50px;
    justify-content: center;
  }
  .tabela-head ul li {
    text-align: center;
  }

  .tabela-head ul li h3{
    margin-bottom: -18px;
  }
  .tabela-head ul li p{
    font-size: 12px;
    font-weight: 400;
    color: #6f6f6f;
  }

  .tabela-info{
    width: 100%;
  }
  .tabela-info table{
    width: 48%;
    margin: 0 auto;
  }
  .tabela-info table tr{
    display: flex;
    justify-content: space-between;
    align-content: center;
    gap: 0px;
  }
  .tabela-info table th{
    width: 100%;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .tabela-info table td{
    width: 100%;
    /* border-top: 1px solid #000; */
    border-bottom: 1px solid #000;
    color: #6f6f6f;
    padding: 10px;
    margin-top: 10px;
    text-align: center;
  }
  legend{
    font-size: 16px;
    color: #6f6f6f;
  }
</style>
