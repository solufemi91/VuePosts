import { actions } from '../types.js';
import blogCommentSection from './blogCommentsSection.js';

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
    },

    computed: {
        renderCommentsSection() {
            return this.blogPostData.BlogComments.length > 0;
        }
    },

    components: {
        'blogCommentSection': blogCommentSection
    }
};