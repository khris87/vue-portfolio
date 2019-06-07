<template>
  <v-menu
          transition="slide-x-transition"
          :close-on-content-click="false"
          content-class="navigation"
          min-width="100%"
          lazy
  >
    <template v-slot:activator="{ on }">
      <div
              id="outer"
              v-on="on"
              @click="cross"
      >
        <div id="innerUp"></div>
        <div id="innerDown"></div>
      </div>
    </template>
    <v-layout row wrap>
      <v-flex xs12 sm3>
        <v-list class="list">
          <v-list-tile @click="showMe = !showMe">
            <v-list-tile-action>
              <v-icon>fas fa-address-card</v-icon>
            </v-list-tile-action>
            <v-list-tile-title class="font-weight-thin text--lighten-1">A propos</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="showForm = !showForm">
            <v-list-tile-action>
              <v-icon>fab fa-telegram-plane</v-icon>
            </v-list-tile-action>
            <v-list-tile-title class="font-weight-thin text--lighten-1">Contactez moi</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>fas fa-file-download</v-icon>
            </v-list-tile-action>
            <v-list-tile-title class="font-weight-thin text--lighten-1"><a :href="require('../assets/essai.jpg')" download="cv-christophe-masdoumier">Téléchargez mon CV</a></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-flex>
      <v-flex xs12 sm9>
        <v-layout column>
          <v-flex xs12-and-up class="show-in-content">
            <transition
                    name="custom-classes-transition"
                    enter-active-class="animated slideInDown"
                    leave-active-class="animated slideOutUp"
            >
              <About v-show="showMe" />
            </transition>
          </v-flex>
          <v-flex xs12-and-up class="show-in-content">
            <transition
                    name="custom-classes-transition"
                    enter-active-class="animated bounceInRight"
                    leave-active-class="animated bounceOutRight"
            >
              <Contact v-show="showForm" />
            </transition>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-menu>
</template>

<script>
import Contact from './Contact'
import About from './About'

export default {
  name: 'navigation',
  components: {
    Contact,
    About
  },
  data () {
    return {
      show: false,
      showForm: false,
      showMe: false
    }
  },
  methods: {
    cross: function () {
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

<style scoped>
  .navigation {
    position: fixed;
    top: 0 !important;
    width: 100vw;
    height: 100vh;
    margin: auto;
    white-space: normal;
    overflow-x: hidden;
    background-color: rgba(183,28,28,0.9);
  }
  .list {
    background-color: rgba(0,0,0,0);
  }
  .list a {
    text-decoration: none;
    color: #000;
  }
  #outer {
    position: fixed;
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
  .show-in-content {
    height: 50%;
  }
</style>
