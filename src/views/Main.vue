<template>
    <div class="main">
        <intro id="intro" class="intro"></intro>
        <about id="about" class="about" ref="about"></about>
        <skill id="skill" class="skill"></skill>
        <project id="project" class="project"></project>
        <contact id="contact" class="contact"></contact>

        <div id="guide"></div>

        <div id="top" data-aos="fade-in">
            <v-btn small fab dark color="#132448" @click="scrollToTop()">
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
        Skill: () => import('@/components/main/Skill.vue'),
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
    bottom: 25px;
    right: 25px;
    z-index: 100000;
}
</style>
