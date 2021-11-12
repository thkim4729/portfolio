import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        skills: [
            {
                value: 75,
                title: 'HTML',
                img: require('@/assets/img/html_icon.png'),
                name: 'html',
            },
            {
                value: 75,
                title: 'CSS',
                img: require('@/assets/img/css_icon.png'),
                name: 'css',
            },
            {
                value: 60,
                title: 'Javascript',
                img: require('@/assets/img/js_icon.png'),
                name: 'javascript',
            },
            {
                value: 60,
                title: 'Vue.js',
                img: require('@/assets/img/vue_icon.png'),
                name: 'vue.js',
            },
        ],
        projects: [
            {
                id: 0,
                img: require('@/assets/img/genshin.jpg'),
                name: '원신 프로젝트',
                title: 'CLONE CODING',
                info: 'Genshin Impact',
                desc: 'desktop',
                tool: 'Vue.js',
                link: 'https://thkim4729.github.io/genshin_vue/',
            },
            {
                id: 1,
                img: require('@/assets/img/kakao_business.png'),
                name: '카카오비즈니스 프로젝트',
                title: 'CLONE CODING',
                info: 'Kakao Business',
                desc: 'Responsive Web',
                tool: 'Vue.js',
                link: 'https://thkim4729.github.io/kakao_business_vue/',
            },
            {
                id: 2,
                img: require('@/assets/img/kellogg.jpg'),
                name: '켈로그 프로젝트',
                title: 'CLONE CODING',
                info: 'Kellogg',
                desc: 'desktop',
                tool: 'jQuery',
                link: 'https://thkim4729.github.io/kellogg-s/',
            },
        ],
    },
    mutations: {},
    actions: {},
    modules: {},
});
