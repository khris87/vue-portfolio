<template>
  <div>
    <h1>{{ title }}</h1>
    <h3>{{ firstname }}</h3>
    <h3>{{ lastname }}</h3>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    title: String,
    firstname: String,
    lastname: String
  }
}
</script>
