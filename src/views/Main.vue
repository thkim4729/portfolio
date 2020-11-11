<template>
    <div class="main">
        <section class="main-wrap">
            <img src="@/assets/img/bg2.jpg" alt="배경화면" id="bg" />
            <div data-aos="fade-in" class="text-box">
                <vue-typer
                    :text="['KIM Taehoon Portfolio']"
                    :repeat="0"
                    :shuffle="false"
                    initial-action="typing"
                    :pre-type-delay="1000"
                    :type-delay="150"
                    :pre-erase-delay="2000"
                    :erase-delay="250"
                    erase-style="select-all"
                    :erase-on-complete="false"
                    caret-animation="phase"
                ></vue-typer>
            </div>
        </section>

        <about class="about"></about>
        <skills class="skills"></skills>
        <project class="project"></project>
        <contact class="contact"></contact>

        <div id="guide"></div>

        <div id="top" data-aos="fade-in">
            <v-btn fab dark small color="primary" @click="scrollToTop()">
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

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=poppins:300,400,500,600,700,800,900&display=swap');

.main-wrap {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
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
.text-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    min-width: 500px;
    display: flex;
    justify-content: center;
    flex-flow: column;
    align-items: center;
    text-align: center;
    z-index: 100;
    font-size: 72px;
    font-weight: bold;
    color: #fff;
}
.vue-typer {
    .custom.char {
        &.typed {
            color: #fff;
        }
    }
    .custom.caret {
        width: 10px;
        &.pre-type {
            background-color: #fff;
        }
        &.typing {
            background-color: #fff;
        }
    }
}
#top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 100000;
}
</style>
