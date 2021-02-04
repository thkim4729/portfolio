import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        skills: [
            {
                value: 70,
                title: 'HTML',
            },
            {
                value: 60,
                title: 'CSS',
            },
            {
                value: 50,
                title: 'Javascript',
            },
            {
                value: 50,
                title: 'Vue.js',
            },
        ],
        projects: [
            {
                id: 0,
                img: require('@/assets/img/genshin.jpg'),
                name: '원신 프로젝트',
                title: 'CLONE CODING',
                info: 'Genshin Impact',
                link: 'https://thkim4729.github.io/genshin_vue/',
            },
            {
                id: 1,
                img: require('@/assets/img/kellogg.jpg'),
                name: '켈로그 프로젝트',
                title: 'CLONE CODING',
                info: 'Kellogg',
                link: 'https://thkim4729.github.io/kellogg-s/',
            },
        ],
    },
    mutations: {},
    actions: {},
    modules: {},
});
