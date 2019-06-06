<template>
  <v-flex
          xs12 sm3
    >
    <h2 @click="showCard = !showCard">0{{ number }}</h2>
    <v-expand-transition>
      <v-card
              v-if="showCard"
              class="v-card--reveal"
      >
        <v-card-title>{{ title }}</v-card-title>
        <v-card-text>{{ content }}</v-card-text>
      </v-card>
    </v-expand-transition>
  </v-flex>
</template>

<script>
export default {
  name: 'FolioItem',
  props: {
    number: Number,
    title: String,
    content: String,
    id: Number
  },
  data () {
    return {
      showCard: false
    }
  },
  methods: {
    //
  }
}
</script>

<style scoped>
.v-card--reveal {
  background: darkgrey;
  position: absolute;
  transform: translateY(-75vh);
  width: 25%;
  height: 50vh;
}
@media screen and (max-width: 600px) {
  .v-card--reveal {
    width: 100%;
  }
}
h2 {
  display: block;
  color: rgba(200,200,200,0.2);
  font-size: 15em;
  height: 100vh;
  padding-top: 50%;
  border-right: 1px solid rgba(200,200,200,0.2);
}
</style>
