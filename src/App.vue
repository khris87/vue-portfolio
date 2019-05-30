<template>
  <div id="app" @mousemove="moveColor">
      <div id="outer" @click="showMenu">
        <div id="innerUp"></div>
        <div id="innerDown"></div>
      </div>
    <transition name="bounce">
      <About v-show="show" />
    </transition>
    <main>
      <div class="container">
        <div class="column active">
          <div class="content">
            <h2>01</h2>
            <article class="box">
              <p>lorem ipsum</p>
            </article>
          </div>
          <div class="bg bg1"></div>
        </div>
        <div class="column">
          <div class="content">
            <h2>02</h2>
            <article class="box">
              <p>lorem ipsum 2</p>
            </article>
          </div>
          <div class="bg bg2"></div>
        </div>
        <div class="column">
          <div class="content">
            <h2>03</h2>
            <article class="box">
              <p>lorem ipsum 3</p>
            </article>
          </div>
          <div class="bg bg3"></div>
        </div>
        <div class="column">
          <div class="content">
            <h2>04</h2>
            <article class="box">
              <p>lorem ipsum 4</p>
            </article>
          </div>
          <div class="bg bg4"></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import About from './components/About.vue'

export default {
  name: 'app',
  components: {
    About
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    moveColor: function (e) {
      const el = document.getElementById('app')
      let x = e.pageX
      let y = e.pageY
      let avg = 150 + (parseInt((x + y) / 25))
      let rgbColor = 'rgb(' + avg + ', ' + avg + ', ' + avg + ')'
      let result = el.style.backgroundColor = rgbColor
      return result
    },
    showMenu: function () {
      this.show = !this.show
      const closeUp = document.getElementById('innerUp')
      const closeDown = document.getElementById('innerDown')
      if (this.show) {
        closeUp.style.transform = 'rotateZ(45deg)'
        closeDown.style.transform = 'rotateZ(-45deg)'
        closeUp.style.top = '50%'
        closeDown.style.bottom = '50%'
      } else {
        closeUp.style.transform = 'rotateZ(0)'
        closeDown.style.transform = 'rotateZ(0)'
        closeUp.style.top = '20%'
        closeDown.style.bottom = '20%'
      }
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  background-color: rgb(150,150,150);
  transition: .2s;
  z-index: -10;
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
    transform: translateX(-50px);
  }
  100% {
    transform: translateX(0px);
  }
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#outer {
  position: absolute;
  top: 50px;
  right: 50px;
  width: 70px;
  height: 50px;
  cursor: pointer;
  z-index: 10;
}
#innerUp, #innerDown {
  position: absolute;
  content: '';
  height: 1px;
  width: inherit;
  background: darkgrey;
  left: 0;
  transition: all 500ms;
}
#innerUp {
  top: 20%;
}
#innerDown {
  bottom: 20%;
}
.container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.column {
  width: 25%;
  height: 100%;
  float: left;
  border-right: 1px solid rgba(0,0,0,0.5);
  box-sizing: border-box;
}
.column:last-child {
  border-right: none;
}
.content {
  position: relative;
  height: 100%;
}
.content h2 {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 100%;
  background: rgba(100,100,100,0.5);
  text-align: center;
  margin: 0;
  padding: 0;
  color: rgba(255,255,255,0.2);
  font-size: 15em;
  z-index: 1;
}
.box {
  position: absolute;
  top: 50%;
  width: 100%;
  height: 50%;
  -webkit-transform: translateY(100%);
  -moz-transform: translateY(100%);
  -ms-transform: translateY(100%);
  -o-transform: translateY(100%);
  transform: translateY(100%);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  background: rgba(255,255,255,1);
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  opacity: 0;
}
.column.active .content .box {
  opacity: 1;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
}
.column .bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.column.active .bg.bg1 {
  background: rgba(0,0,0,1);
  -webkit-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  -webkit-transition: 0.5s;
  -moz-transition:  0.5s;
  -ms-transition:  0.5s;
  -o-transition:  0.5s;
  transition:  0.5s;
}
.column.active .bg.bg2 {
  background: rgba(0,100,200,1);
  -webkit-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  -webkit-transition: 0.5s;
  -moz-transition:  0.5s;
  -ms-transition:  0.5s;
  -o-transition:  0.5s;
  transition:  0.5s;
}
.column.active .bg.bg3 {
  background: rgba(0,100,150,1);
  -webkit-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  -webkit-transition: 0.5s;
  -moz-transition:  0.5s;
  -ms-transition:  0.5s;
  -o-transition:  0.5s;
  transition:  0.5s;
}
.column.active .bg.bg4 {
  background: rgba(100,150,200,1);
  -webkit-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  -webkit-transition: 0.5s;
  -moz-transition:  0.5s;
  -ms-transition:  0.5s;
  -o-transition:  0.5s;
  transition:  0.5s;
}
</style>
