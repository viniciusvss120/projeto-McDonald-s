<template>
    <div>
        <div class="container">
            <img src="@/img/banner.png" alt="banner">
            <div class="descricao">
              <h2>Todo dia um sanduíche diferente!</h2>
              <p>Que tal já aquecer com as soluções do Méqui? São 8 sanduíches e um Mcflurry pra você experimentar!</p>
              <a href="#" class="btn">Partiu?</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'theBanner'
}
</script>

<style scoped>
  *{
    padding: 0px;
    margin: 0px;
  }
  .container{
    max-width: 100vw;
    height: 690px;
    margin: 120px auto 50px auto;
    /* border: 1px solid #000; */
  }

  img{
    max-width: 100%;
  }
  .descricao{
    display: grid;
    grid-template-columns: 1fr;
    max-width: 40%;
    position: relative;
    top: -350px;
    margin-left: 100px;
    color: #fff;
    z-index: 2;
  }
  .descricao h2{
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .descricao p{
    font-size: 1.25rem;
    margin-bottom: 10px;
  }

  .btn{
    padding: 15px;
    background: #ffb800;
    max-width: 120px;
  }
</style>
