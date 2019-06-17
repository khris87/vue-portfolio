<template>
  <v-hover
          close-delay="100"
  >
    <v-flex
          sm12 md3
          slot-scope="{ hover }"
    >
      <div class="title-head"></div>

      <v-fade-transition>
        <v-card
                v-if="hover"
                class="v-card--reveal"
                hover
        >
          <v-card-title>{{ title }}</v-card-title>
          <v-card-text>{{ content }}</v-card-text>
        </v-card>
      </v-fade-transition>
      <div class="title-number">
        <h2>
          0{{ number }}
        </h2>
    </div>
    </v-flex>
  </v-hover>
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
      // showCard: false
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
  /*transform: translateY(-90%);*/
  width: 25%;
  height: 50vh;
}
@media screen and (max-width:  960px) {
  .v-card--reveal {
    width: 100%;
  }
}
.title-number {
  color: rgba(200,200,200,0.2);
  font-size: 15em;
  height: 40vh;
  border-right: 1px solid rgba(200,200,200,0.2);
}
.title-head {
  height: 25vh;
  border-right: 1px solid rgba(200,200,200,0.2);
}
</style>
