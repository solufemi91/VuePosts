import { actions, getters } from '../types.js';
import blogPost from './blogPost.js';

export default {

    computed: {
        items() {
            return this.$store.getters[getters.getPosts];
        }
    },

    components: {
        'blogPost': blogPost
    }

};
