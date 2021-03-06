import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueGlide from 'vue-glide-js';
import 'vue-glide-js/dist/vue-glide.css';

Vue.config.productionTip = false;
Vue.use(VueGlide);

new Vue({
    created() {
        AOS.init();
    },
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount('#app');
