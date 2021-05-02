import { actions, mutations } from './types.js';

export const init = ({ commit }, { data }) => {
    commit(mutations.initBlogData, data);
};

export const alterDisplayStatus = ({ commit }, { id }) => {
    commit(mutations.alterDisplayStatus, id);
};

export default {
    [actions.init]: init,
    [actions.alterDisplayStatus]: alterDisplayStatus
};
