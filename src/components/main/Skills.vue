<template>
    <v-parallax class="skill" :height="isMobile" :src="img">
        <skills-item ref="fade"></skills-item>
    </v-parallax>
</template>

<script defer>
export default {
    name: 'Skill',
    data() {
        return {
            isMobile: 600,
            img: require('@/assets/img/bg4.jpg'),
        };
    },
    components: { SkillsItem: () => import('@/components/main/SkillsItem.vue') },
    mounted() {
        let onresize = () => {
            let width = document.body.clientWidth;
            // console.log(width);
            if (width < 600) {
                this.isMobile = 1200;
            } else if (width < 1264) {
                this.isMobile = 700;
            } else {
                this.isMobile = 600;
            }
        };
        window.addEventListener('resize', onresize);

        document.addEventListener('scroll', () => {
            this.$refs.fade.scrollCallbackElAppear(window.scrollY);
        });
    },
};
</script>

<style lang="scss" scoped>
.skill {
    border: 1px solid transparent;
}
.skill-title {
    text-align: center;
    font-size: 4em;
    font-weight: lighter;
    color: #eee;
}
.skill-wrap > section {
    width: 48%;
    margin-right: 4%;
}
.skill-wrap > section:last-child {
    margin: 0;
}
</style>
