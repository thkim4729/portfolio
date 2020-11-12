import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        Skills: [
            {
                id: 0,
                img:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png',
                value: '60',
                alt: 'html',
            },
            {
                id: 1,
                img: 'https://louis-grange.github.io/Portfolio/images/Logo/CSS.png',
                value: '50',
                alt: 'css',
            },
            {
                id: 2,
                img:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
                value: '40',
                alt: 'javascript',
            },
            {
                id: 3,
                img: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png',
                value: '30',
                alt: 'vue',
            },
        ],
    },
    mutations: {},
    actions: {},
    modules: {},
});
