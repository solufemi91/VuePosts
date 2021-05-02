import blog from './Components/blog.js';
import Vue from 'vue';
import blogModule from './blogModule.js';
import { registerModule } from './store.js';
import { actions } from './types.js';

let store = registerModule(blogModule.name, blogModule);

const domContainer = document.getElementById('BlogWrapper');
const data = domContainer.getAttribute('data');
const obj = JSON.parse(data);

store.dispatch(actions.init, {
    data: obj
});

var app = new Vue({
    el: '#BlogWrapper',
    store,
    components: {
        'blog': blog
    }
});

Vue.config.devtools = true;
