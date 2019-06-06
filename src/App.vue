<template>
  <v-app>
    <Navigation />
    <v-content>
      <v-container fluid pa-0>
        <v-layout row wrap>
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
import Navigation from './components/Navigation'

export default {
  name: 'App',
  components: {
    FolioItem,
    Navigation
  },
  data () {
    return {
      show: false,
      items: [
        {
          'id': 1,
          'title': 'projet de site portfolio',
          'image': '',
          'content': 'véritable fil rouge de la formation Aformac, le site portfolio est réalisé entièrement' +
            ' sous le framework VueJs'
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
    //
  }
}
</script>

<style>
</style>
