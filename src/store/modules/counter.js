const state = {
    counter: 0
};

const getters = {
    doubleCounter: state => {
        return state.counter * 2;
    },
    clickCounter: state => {
        return state.counter + ' Clicks';
    }
}

const mutations = {
    increment: state => {
        state.counter++
    },
    decrement: state => {
        state.counter--
    }
}

const actions = {
    increment: ({ commit }) => {
        commit('increment');
    },
    decrement: ({ commit }) => {
        commit('decrement');
    },
    asyncIncrement: ({ commit }) => {
        setTimeout(() => {
            commit('increment')
        }, 1000);
    },
    asyncDecrement: ({ commit }) => {
        setTimeout(() => {
            commit('decrement')
        }, 1000)
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}