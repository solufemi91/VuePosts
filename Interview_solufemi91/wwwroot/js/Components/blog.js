export default {
    props: {
        blogData: {
            type: Object,
            required: true
        }
    },
    data: function () {
        return {
            items: this.reformat(this.blogData.Results),
        }       
    },

    methods: {
        displayComments(id) {
            this.items.find(i => i.BlogPostId == id).displayComments = !this.items.find(i => i.BlogPostId == id).displayComments;
        },
        reformat(data) {
            data.forEach(function (blog) {
                blog.displayComments = false
            });

            return data
        }
    }

};
