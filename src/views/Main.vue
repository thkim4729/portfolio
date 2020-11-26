<template>
    <div class="main">
        <intro class="intro"></intro>
        <about class="about"></about>
        <skills class="skills"></skills>
        <project class="project"></project>
        <contact class="contact"></contact>

        <div id="guide"></div>

        <div id="top" data-aos="fade-in">
            <v-btn fab dark color="primary" @click="scrollToTop()">
                <v-icon>mdi-chevron-up</v-icon>
            </v-btn>
        </div>
        <!--top-->
    </div>
</template>

<script defer>
import { mapState } from 'vuex';
export default {
    name: 'Main',
    components: {
        Intro: () => import('@/components/main/Intro.vue'),
        About: () => import('@/components/main/About.vue'),
        Skills: () => import('@/components/main/Skills.vue'),
        Project: () => import('@/components/main/Project.vue'),
        Contact: () => import('@/components/main/Contact.vue'),
    },
    computed: {
        ...mapState(['']),
    },
    data() {
        return {};
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=poppins:300,400,500,600,700,800,900&display=swap');
.main {
    background: url('../assets/img/bg5.jpg');
    background-size: cover;
    background-attachment: fixed;
}
#top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 100000;
}
</style>
