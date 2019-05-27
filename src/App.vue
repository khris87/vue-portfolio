<template>
  <div id="app">
    <div class="cross" @click="show = !show">
      <span :class="{topCross: show}"></span>
      <span :class="{downCross: show}"></span>
    </div>
    <transition name="bounce">
      <About v-show="show">
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
.cross {
  position: absolute;
  top: 50px;
  right: 50px;
  width: 40px;
  height: 20px;
  cursor: pointer;
  z-index: 3;
}
.cross > span {
  display: block;
  width: 40px;
  height: 10px;
  transform: translateY(0) rotateZ(0);
}
.cross > span:first-child {
  border-top: 1px solid #2c3e50;
}
.cross > span:last-child {
  top: 60px;
  border-bottom: 1px solid #2c3e50;
}
.topCross {
  animation: 1s crossTop;
  animation-fill-mode: forwards;
}
.downCross {
    animation: 1s crossDown;
    animation-fill-mode: forwards;
}
@keyframes crossTop {
  to {
    transform: translateY(10px) rotateZ(45deg);
  }
}
@keyframes crossDown {
  to {
    transform: translateY(-10px) rotateZ(-45deg);
  }
}
</style>
