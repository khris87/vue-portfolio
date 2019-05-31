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
        <folio-item
                v-for="item in items"
                :key="item.id"
                :number="item.id"
                :title="item.title"
                :content="item.content"
                :id="item.id"
        >
        </folio-item>
      </div>
    </main>
  </div>
</template>

<script>
import About from './components/About.vue'
import FolioItem from './components/FolioItem'

export default {
  name: 'app',
  components: {
    FolioItem,
    About
  },
  data () {
    return {
      show: false,
      items: [
        {
          'id': 1,
          'title': 'projet de site portfolio',
          'image': '',
          'content': ''
        },
        {
          'id': 2,
          'title': 'projet de site vitrine',
          'image': '',
          'content': ''
        },
        {
          'id': 3,
          'title': 'projet de site PWA du cours du bitcoin',
          'image': '',
          'content': ''
        },
        {
          'id': 4,
          'title': 'projet de site transfert de fichiers',
          'image': '',
          'content': ''
        }
      ]
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
</style>
