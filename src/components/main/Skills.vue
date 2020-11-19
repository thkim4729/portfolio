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
        <skills-item></skills-item>
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
    background: #eee;
}
.skill-title {
    text-align: center;
    font-size: 4em;
    font-weight: lighter;
    margin: 100px 0;
    color: #0a2a43;
}
.skill-wrap > section {
    width: 48%;
    margin-right: 4%;
}
.skill-wrap > section:last-child {
    margin: 0;
}
</style>
