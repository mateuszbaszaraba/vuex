import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        value: 10
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        clickCounter: state => {
            return state.counter + ' Clicks';
        },
        value: state => {
            return state.value;
        }
    },
    mutations: {
        increment: state => {
            state.counter++
        },
        decrement: state => {
            state.counter--
        },
        updateValue: (state, payload) => {
            state.value = payload
        }
    },
    actions: {
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
        },
        updateValue({commit}, payload) {
            commit('updateValue', payload)
        }
    }
});