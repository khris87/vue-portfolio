<template>
  <div id="about">
    <div class="left_part">
      <h1 class="text-xs-left">{{ firstname | capitalize }} {{ lastname | capitalize }}</h1>
      <span>{{ city |capitalize }}</span>
      <span>{{ contact_tel }}</span>
      <span>{{ contact_mail }}</span>
      <span>{{ contact_linkedin }}</span>
      <span>{{ contact_github }}</span>
    </div>
    <div class="center_part">
      <span class="speech">{{ speech }}</span>
    </div>
    <span class="background_title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'About',
  components: {
    //
  },
  data () {
    return {
      firstname: 'christophe',
      lastname: 'masdoumier',
      city: 'limoges',
      title: 'développeur web Junior',
      contact_tel: '0662390033',
      contact_mail: 'cmasdoumier@free.fr',
      contact_linkedin: '',
      contact_github: '',
      speech: 'Mes acquis professionnels en analyse et gestion de production sont des atouts supplémentaires à mes compétences de développeur web junior.'
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<style scoped>
  * {
    font-family: 'Roboto thin', sans-serif;
    font-size: 24px;
  }
  .background_title {
    font-family: 'Monoton', cursive;
    font-size: 7em;
    color: rgba(255,255,255,0.1);
    z-index: -1;
    position: absolute;
    top: 1em;
  }
  .speech {
    display: block;
    width: 75%;
    text-align: justify;
  }
  span {
    display: block;
  }
</style>
