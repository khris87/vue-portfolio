import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: ['md', 'fa'],
  theme: {
    primary: '#b71c1c',
    secondary: '#263238',
    accent: '#f57f17',
    error: '#4a148c',
    info: '#2196F3',
    success: '#004d40',
    warning: '#ffb04c'
  }
})
