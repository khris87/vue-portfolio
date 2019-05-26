<template>

  <div @click="rotate = !rotate" class="scene">
    <transition name="component-rotate">
      <div class="card">
        <div class="card__face card-title" :class="rotate">Coucou</div>
        <div class="card__face card-content" :class="rotate">le contenu de mon projet</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {
      rotate: false
    }
  }
}
</script>

<style scoped>
.scene {
  width: 200px;
  height: 200px;
  perspective: 600px;
}
.card {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 1s;
}
.card__face {
  position: absolute;
  width: 200px;
  height: 200px;
}
.card-title {
  background-color: #2c3e50;
  transform: rotateY(0deg) translateZ(100px);
}
.card-content {
  background-color: #42b983;
  transform: rotateY(90deg) translateZ(100px);
}
.card.rotate {
  transform: rotateY( -90deg) translateZ(-100px);
}
</style>
