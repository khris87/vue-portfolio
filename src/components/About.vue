<template>
  <div id="about">
    <div class="left_part">
      <h2 class="display-3 text--secondary text-xs-left">{{ firstname | capitalize }} {{ lastname | capitalize }}</h2>
      <span>{{ city }}</span>
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
      speech: 'Aliqua veniam excepteur et deserunt voluptate. Ut adipisicing consequat est cupidatat amet. Reprehenderit qui nulla non sunt ut sit reprehenderit non cupidatat nulla aliqua occaecat duis laboris. Amet exercitation Lorem et non non laboris sit dolor in nisi. Ad officia voluptate aliquip irure commodo in exercitation ad ea. Sunt commodo fugiat non velit non aute labore excepteur aliqua. Aliqua laboris fugiat veniam sunt consectetur dolor occaecat aliquip laboris dolore ipsum reprehenderitDolor enim eiusmod nulla ex et magna exercitation amet proident sunt nisi esse nisi voluptate. Et est cupidatat consequat enim pariatur sit ipsum fugiat dolore tempor commodo aliqua velit mollit. Ullamco deserunt nisi consequat elit pariatur nulla consequat.Exercitation incididunt incididunt enim pariatur occaecat esse magna quis officia. Cupidatat occaecat anim exercitation labore nostrud sunt tempor voluptate. Deserunt culpa consequat ullamco cillum duis magna officia sit do. Anim consequat ad aliqua consectetur voluptate.Tempor est nostrud irure anim mollit dolor excepteur ipsum in aliquip velit quis est occaecat. Id dolore veniam in ad. Pariatur cupidatat et pariatur reprehenderit Lorem voluptate anim reprehenderit ullamco ipsum aliquip nisi. Sint laborum aliquip magna ad cupidatat consectetur ut magna excepteur anim culpa commodo ullamco. Officia occaecat Lorem dolore laboris sint anim incididunt culpa consequat. Ipsum ad reprehenderit eiusmod magna aliquip sit do nulla est esse reprehenderit.Amet sunt sint occaecat laboris irure ipsum duis exercitation excepteur tempor magna nulla. Est minim eu dolor aliqua est sunt magna labore est cillum consectetur. Adipisicing nostrud non aliquip excepteur laborum sint eiusmod non eiusmod. Adipisicing veniam officia ullamco exercitation veniam. Dolor fugiat nisi reprehenderit aute Lorem nulla consequat consectetur laborum id eu aliqua amet enim. Labore culpa cillum ad proident culpa ex Lorem.'
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
  .background_title {
    font-family: 'Monoton', cursive;
    font-size: 10em;
    color: rgba(50,0,0,0.2);
    z-index: -1;
    position: absolute;
    top: 50px;
  }
  .speech {
    display: block;
    width: 75%;
    text-align: justify;
  }
</style>
