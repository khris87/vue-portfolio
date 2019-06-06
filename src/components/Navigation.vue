<template>
  <v-menu
          transition="slide-x-transition"
          :close-on-content-click="false"
          content-class="navigation"
          min-width="100%"
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
    <v-layout>
      <v-flex id="left-menu" sm4>
        <v-list class="list">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>fas fa-home</v-icon>
            </v-list-tile-action>
            <v-list-tile-title class="display-1 font-weight-thin text--lighten-1" style="height: 50px;">Accueil</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>fas fa-address-card</v-icon>
            </v-list-tile-action>
            <v-list-tile-title class="display-1 font-weight-thin text--lighten-1" style="height: 50px;">A propos</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="showForm = !showForm">
            <v-list-tile-action>
              <v-icon>fab fa-telegram-plane</v-icon>
            </v-list-tile-action>
            <v-list-tile-title class="display-1 font-weight-thin text--lighten-1" style="height: 50px;">Contactez moi</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>fas fa-file-download</v-icon>
            </v-list-tile-action>
            <v-list-tile-title class="display-1 font-weight-thin text--lighten-1" style="height: 50px;"><a :href="require('../assets/essai.jpg')" download="cv-christophe-masdoumier">Téléchargez mon CV</a></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-flex>
      <v-flex id="right-menu" sm8>
        <Contact v-show="showForm" />
      </v-flex>
    </v-layout>
  </v-menu>
</template>

<script>
import Contact from './Contact'
export default {
  name: 'navigation',
  components: { Contact },
  data () {
    return {
      showForm: false
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
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(50,0,0,0.8);
    margin: auto;
    white-space: normal;
    overflow-x: hidden;
  }
  .list {
    background-color: rgba(50,0,0,0);
  }
  .list a {
    text-decoration: none;
    color: #000;
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
</style>
