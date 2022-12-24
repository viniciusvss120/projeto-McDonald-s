<template>
  <div>
    <article class="container">
      <div class="img">
        <img src="../img/card1.png" alt="">
      </div>
      <div class="descricao">
        <div class="info">
          <h4>Que tal um #MéquiNoSofá?</h4>
          <p>Faça agora seu pedido e receba em casa pelo delivery.</p>
        </div>
        <a href="#">Eu quero</a>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'theCards'
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
