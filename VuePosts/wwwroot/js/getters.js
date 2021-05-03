import { getters } from './types.js';

export const getPosts = state => state.posts;

export default {
    [getters.getPosts]: getPosts
};