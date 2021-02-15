import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        skills: [
            {
                value: 75,
                title: 'HTML',
            },
            {
                value: 75,
                title: 'CSS',
            },
            {
                value: 60,
                title: 'Javascript',
            },
            {
                value: 60,
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
                desc: 'only desktop',
                tool: 'Vue.js',
                link: 'https://thkim4729.github.io/genshin_vue/',
            },
            {
                id: 1,
                img: require('@/assets/img/kellogg.jpg'),
                name: '켈로그 프로젝트',
                title: 'CLONE CODING',
                info: 'Kellogg',
                desc: 'only desktop',
                tool: 'jQuery',
                link: 'https://thkim4729.github.io/kellogg-s/',
            },
        ],
    },
    mutations: {},
    actions: {},
    modules: {},
});
