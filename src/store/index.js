import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        Skills: [
            {
                id: 0,
                img: require('@/assets/img/HTML.png'),
                value: '60',
                name: 'HTML',
            },
            {
                id: 1,
                img: require('@/assets/img/CSS.png'),
                value: '60',
                name: 'CSS',
            },
            {
                id: 2,
                img: require('@/assets/img/JS.png'),
                value: '50',
                name: 'JavaScript',
            },
            {
                id: 3,
                img: require('@/assets/img/Vue.png'),
                value: '50',
                name: 'Vue.js',
            },
        ],
    },
    mutations: {},
    actions: {},
    modules: {},
});
