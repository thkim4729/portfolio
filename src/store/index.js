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
                desc: 'Desktop',
                tool: 'Vue.js',
                link: 'https://thkim4729.github.io/genshin_vue/',
            },
            {
                id: 1,
                img: require('@/assets/img/kakao_business.png'),
                name: '카카오비즈니스 프로젝트',
                title: 'CLONE CODING',
                info: 'Kakao Business',
                desc: 'Desktop & Mobile',
                tool: 'Vue.js',
                link: 'https://thkim4729.github.io/kakao_business_vue/',
            },
            {
                id: 2,
                img: require('@/assets/img/kellogg.jpg'),
                name: '켈로그 프로젝트',
                title: 'CLONE CODING',
                info: 'Kellogg',
                desc: 'Desktop',
                tool: 'jQuery',
                link: 'https://thkim4729.github.io/kellogg-s/',
            },
        ],
        designs: [
            {
                id: 1,
                img: require('@/assets/img/laneige_thumbnail.png'),
                name: '라네즈 포토샵 리디자인',
                title: 'REDESIGN',
                info: 'LANEIGE',
                tool: 'Photoshop',
                link: require('@/assets/img/laneige_redesign.png'),
            },
            {
                id: 2,
                img: require('@/assets/img/etudehouse_thumbnail.png'),
                name: '에뛰드하우스 포토샵 리디자인',
                title: 'REDESIGN',
                info: 'ETUDE HOUSE',
                tool: 'Photoshop',
                link: require('@/assets/img/etudehouse_redesign.png'),
            },
            {
                id: 3,
                img: require('@/assets/img/doosanbears_thumbnail.png'),
                name: '두산베어스 포토샵 리디자인',
                title: 'REDESIGN',
                info: 'DOOSAN BEARS',
                tool: 'Photoshop',
                link: require('@/assets/img/doosanbears_redesign.png'),
            },
            {
                id: 4,
                img: require('@/assets/img/foodforthehungry_thumbnail.png'),
                name: '기아대책 포토샵 리디자인',
                title: 'REDESIGN',
                info: 'FOOD FOR THE HUNGRY',
                tool: 'Photoshop',
                link: require('@/assets/img/foodforthehungry_redesign.png'),
            },
        ],
    },
    mutations: {},
    actions: {},
    modules: {},
});
