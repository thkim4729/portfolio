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
                info: '',
            },
            {
                id: 1,
                img:
                    'https://c2.peakpx.com/wallpaper/813/374/453/4k-computer-hand-laptop-wallpaper.jpg',
                name: '',
                title: 'CLONE CODING',
                info: '',
            },
        ],
    },
    mutations: {},
    actions: {},
    modules: {},
});
