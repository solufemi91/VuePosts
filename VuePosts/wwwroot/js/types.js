export const namespace = "blog";

export const mutations = {
    initBlogData: 'initBlogData',
    alterDisplayStatus: 'alterDisplayStatus'
};

export const actions = {
    init: 'init',
    alterDisplayStatus: 'alterDisplayStatus'
};

export const getters = {
    getPosts: "getPosts"
};

//export const gettersWithNamespace = addNamespaceToEach(getters);
//export const mutationsWithNamespace = addNamespaceToEach(mutations);
//export const actionsWithNamespace = addNamespaceToEach(actions);

//function addNamespaceToEach(objectToNamespace){
//    let objectToNamespaces = { ...objectToNamespace };
//    Object.keys(objectToNamespaces).map(k => { objectToNamespaces[k] = namespace + '/' + objectToNamespaces[k] });
//    return objectToNamespaces;
//}