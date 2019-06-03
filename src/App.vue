<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-container fluid class="pa-0">
        <v-layout row>
          <folio-item
                  v-for="item in items"
                  :key="item.id"
                  :id="item.id"
                  :number="item.id"
                  :title="item.title"
                  :content="item.content"
          >
          </folio-item>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import FolioItem from './components/FolioItem'

export default {
  name: 'App',
  components: {
    FolioItem
  },
  data () {
    return {
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
  }
}
</script>
