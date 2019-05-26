<template>
  <div id="about">
    <slot></slot>
    <h3>{{ firstname }}</h3>
    <h3>{{ lastname }}</h3>
    <span>{{ city }}</span>
    <p>{{ desc }}</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      firstname: 'christophe',
      lastname: 'masdoumier',
      city: 'limoges',
      desc: 'développeur web Junior'
    }
  }
}
</script>

<style scoped>
  #about {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(50,0,0,0.9);
    color: #FFFFFF;
    margin: auto;
    z-index: 2;
  }
</style>
