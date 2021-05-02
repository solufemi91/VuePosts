import { actions, getters } from '../types.js';

export default {

    computed: {
        items() {
            return this.$store.getters[getters.getPosts];
        }
    },

    methods: {
        displayComments(selectedBlogId) {
            this.$store.dispatch(actions.alterDisplayStatus, {
                id: selectedBlogId
            });
        }
    }

};
