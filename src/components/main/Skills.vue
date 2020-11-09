<template>
    <div class="skill">
        <h1
            class="skill-title"
            data-aos="fade-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            data-aos-offset="0"
        >
            SKILLS
        </h1>
        <v-row class="skill-wrap" no-gutters align="center">
            <section class="right-side">
                <skills-item></skills-item>
            </section>
            <section class="left-side"></section>
        </v-row>
    </div>
</template>

<script defer>
export default {
    name: 'Skill',
    data() {
        return {};
    },
    components: { SkillsItem: () => import('@/components/main/SkillsItem.vue') },
};
</script>

<style lang="scss" scoped>
.skill {
    height: 100vh;
    border: 1px solid transparent;
    background: #0a2a43;
}
.skill-title {
    text-align: center;
    font-size: 4em;
    font-weight: lighter;
    margin: 100px 0;
    color: white;
}
.skill-wrap {
    width: 70%;
    margin: 0 auto;
    flex-flow: wrap-reverse;
    align-content: center;
}
.skill-wrap > section {
    width: 48%;
    margin-right: 4%;
}
.skill-wrap > section:last-child {
    margin: 0;
}
</style>
