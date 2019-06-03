<template>
  <nav id="navigation">
    <a href="#">Accueil</a>
    <a href="#">A propos</a>
    <a href="#">Réseau social</a>
    <a :href="require('../assets/essai.jpg')" download="gainsbarre.jpg">Téléchargez mon curriculum vitae</a>
  </nav>
</template>

<script>
export default {
  name: 'navigation'
}
</script>

<style scoped>
  #navigation {
    width: 25%;
    margin: 250px 0 0 30px;
    border-left: 1px solid darkgrey;
  }
  #navigation a {
    color: darkgrey;
    font-size: 36px;
    text-decoration: none;
    padding: 8px 8px 8px 32px;
    display: block;
  }
  #navigation a:hover {
    color: lightgray;
  }
</style>
