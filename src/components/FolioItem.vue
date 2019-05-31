<template>
  <div class="column" @mouseover="showItem">
    <div class="content">
      <h2>0{{ number }}</h2>
      <article class="box">
        <h3>{{ title }}</h3>
        <p>{{ content }}</p>
      </article>
    </div>
    <div :class="'bg bg' + id"></div>
  </div>
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
  methods: {
    showItem: function () {
      const column = document.getElementsByClassName('column')
      console.log('coucou', column[this.number - 1])
      column[this.number - 1].classList.add('active')
      let next = column[this.number - 1].nextSibling
      let previous = column[this.number - 1].previousSibling
      console.log('siblings', next, previous)
      if (next.classList.contains('active') || previous.classList.contains('active') || (previous.classList.contains('active') && next === null)) {
        previous.classList.remove('active')
        next.classList.remove('active')
      }
    }
  }
}
</script>

<style scoped>
.column {
  width: 25%;
  height: 100%;
  float: left;
  border-right: 1px solid rgba(0,0,0,0.5);
  box-sizing: border-box;
}
.column:last-child {
  border-right: none;
}
.content {
  position: relative;
  height: 100%;
}
.content h2 {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 100%;
  background: rgba(100,100,100,0.5);
  text-align: center;
  margin: 0;
  padding: 0;
  color: rgba(255,255,255,0.2);
  font-size: 15em;
  z-index: 1;
}
.box {
  position: absolute;
  top: 50%;
  width: 100%;
  height: 50%;
  -webkit-transform: translateY(100%);
  -moz-transform: translateY(100%);
  -ms-transform: translateY(100%);
  -o-transform: translateY(100%);
  transform: translateY(100%);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  background: rgba(255,255,255,1);
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  opacity: 0;
}
.column.active .content .box {
  opacity: 1;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 2;
}
.column .bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.column.active .bg.bg1 {
  background: rgba(0,0,0,1);
  -webkit-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  -webkit-transition: 0.5s;
  -moz-transition:  0.5s;
  -ms-transition:  0.5s;
  -o-transition:  0.5s;
  transition:  0.5s;
}
.column.active .bg.bg2 {
  background: rgba(0,100,200,1);
  -webkit-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  -webkit-transition: 0.5s;
  -moz-transition:  0.5s;
  -ms-transition:  0.5s;
  -o-transition:  0.5s;
  transition:  0.5s;
}
.column.active .bg.bg3 {
  background: rgba(0,100,150,1);
  -webkit-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  -webkit-transition: 0.5s;
  -moz-transition:  0.5s;
  -ms-transition:  0.5s;
  -o-transition:  0.5s;
  transition:  0.5s;
}
.column.active .bg.bg4 {
  background: rgba(100,150,200,1);
  -webkit-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  -webkit-transition: 0.5s;
  -moz-transition:  0.5s;
  -ms-transition:  0.5s;
  -o-transition:  0.5s;
  transition:  0.5s;
}
</style>
