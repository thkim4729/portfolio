<template>
    <div class="main">
        <section class="main-wrap">
            <img src="@/assets/img/bg2.jpg" alt="배경화면" id="bg" />
            <div class="text-box">
                <h3 class="text1">KIM Taehoon's</h3>
                <h2 class="text2">Portfolio</h2>
            </div>
        </section>

        <about class="about"></about>
        <skills class="skills"></skills>
        <project class="project"></project>
        <contact class="contact"></contact>
    </div>
</template>

<script defer>
import { mapState } from 'vuex';
export default {
    name: 'Main',
    components: {
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
    methods: {},
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=poppins:300,400,500,600,700,800,900&display=swap');
.main-wrap:before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 75px;
    background: linear-gradient(to top, #0a2a43, transparent);
    z-index: 10000;
}
.main-wrap:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0a2a43;
    z-index: 10000;
    mix-blend-mode: color;
}
#bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
    filter: brightness(25%);
}
.main-wrap {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
.text-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    flex-flow: column;
    align-items: center;
    z-index: 1;

    .text1 {
        color: #fff;
        font-size: 6em;
        line-height: 1;
    }
    .text2 {
        color: #fff;
        font-size: 8em;
        line-height: 1.5;
    }
}
</style>
