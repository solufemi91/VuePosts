import blog from './Components/blog.js';
import Vue from 'vue';

var app = new Vue({
  el: '#BlogWrapper',
  components: {
    'blog': blog
  }
})

Vue.config.devtools = true
