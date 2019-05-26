<template>
  <div id="app">
    <img @click="show = !show" id="vue-logo" alt="Vue logo" src="./assets/logo.png">
    <transition name="bounce">
      <About v-show="show">
        <span @click="show = !show" id="close">X</span>
      </About>
    </transition>
    <main>
      <Card />
    </main>
    <footer>
      <HelloWorld msg="Portfolio Vue.js App"/>
    </footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import About from './components/About.vue'
import Card from './components/Card.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    About,
    Card
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
}
#vue-logo {
  position: absolute;
  top: 10px;
  left: CALC(100vw - 110px);
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
    transform: translateX(-100vw);
  }
  50% {
    transform: translateX(-75px);
  }
  100% {
    transform: translateX(0px);
  }
}
#close {
  position: relative;
  top: 50px;
  left: CALC(100vw - 74px);
  cursor: pointer;
  font-size: 24px;
}
</style>
