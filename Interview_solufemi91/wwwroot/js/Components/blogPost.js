import { actions } from '../types.js';

export default {
    props: {
        blogPostData: Object
    },

    methods: {
        displayComments(selectedBlogId) {
            this.$store.dispatch(actions.alterDisplayStatus, {
                id: selectedBlogId
            });
        }
    }
};