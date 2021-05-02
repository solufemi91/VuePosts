import mutations from './mutation.js';
import actions from './actions.js';
import getters from './getters.js';


const defaultState = {
    posts: null
};

export default {
    name: "blogModule",
    state: defaultState,
    mutations: mutations,
    actions: actions,
    getters: getters
}