import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import './plugins/axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueTyperPlugin from 'vue-typer';

Vue.config.productionTip = false;
Vue.use(VueTyperPlugin);

new Vue({
    created() {
        AOS.init();
    },
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount('#app');
