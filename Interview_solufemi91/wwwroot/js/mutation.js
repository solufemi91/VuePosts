import { mutations } from './types.js';

const initBlogData = (state, data) => {
    state.posts = data.Results;
};

const alterDisplayStatus = (state, id) => {
    state.posts.find(i => i.BlogPostId === id).DisplayComments = !state.posts.find(i => i.BlogPostId === id).DisplayComments;
};

export default {
    [mutations.initBlogData]: initBlogData,
    [mutations.alterDisplayStatus]: alterDisplayStatus
};