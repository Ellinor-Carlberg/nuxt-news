import Vuex from 'vuex';


const createStore = () => {
    return new Vuex.Store({
        state: {
        headlines: [],
        loading: false,
        category: ''
        },
        mutations: {

            setLoading( state, loading) {
                state.loading = loading;
            },
            setHeadlines(state, headlines) {
                state.headlines = headlines;
            },
            setCategory(state, category) {
                state.category = category;
            }
        },
        actions: {
            async loadHeadlines({ commit }, apiUrl) {
               commit('setLoading', true);
               const { articles } = await this.$axios.$get(apiUrl);
               commit('setLoading', false);
               commit('setHeadlines', articles);
            }
        },
        getters: {
            headlines: state => state.headlines,
            loading: state => state.loading, 
            category: state => state.category
        }
    });
}


export default createStore;