import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store =  new Vuex.Store({
    strict: true,
    modules: {}
});

export const registerModule = (name, module) => {
    if (!Object.keys(store.state).includes(name)) {
        store.registerModule(name, module);
        return store;
    }
} 