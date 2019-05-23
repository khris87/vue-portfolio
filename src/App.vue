<template>
  <div id="app">
    <img @click="show = !show" id="vue-logo" alt="Vue logo" src="./assets/logo.png">
    <transition name="bounce">
    <About
      v-if="show"
      title="portfolio"
      firstname="christophe"
      lastname="masdoumier"
    />
    </transition>
    <footer>
      <HelloWorld msg="Portfolio Vue.js App"/>
    </footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import About from './components/About.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    About
  },
  data () {
    return {
      show: false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}
#vue-logo {
  width: 100px;
  cursor: pointer;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
