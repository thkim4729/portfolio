import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        drawer: false,
        skills: [
            {
                id: 0,
                img: require('@/assets/img/html_wb.png'),
                value: '60',
                name: 'HTML',
            },
            {
                id: 1,
                img: require('@/assets/img/css_wb.png'),
                value: '60',
                name: 'CSS',
            },
            {
                id: 2,
                img: require('@/assets/img/javascript_wb.png'),
                value: '50',
                name: 'Javascript',
            },
            {
                id: 3,
                img: require('@/assets/img/vue_wb.png'),
                value: '50',
                name: 'Vue.js',
            },
            {
                id: 4,
                img: require('@/assets/img/photoshop_wb.png'),
                value: '50',
                name: 'Photoshop',
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
