<template>
    <v-row class="skills-item" no-gutters justify="center" refs="fade">
        <v-row class="skills-item-wrap" justify="center" align="center">
            <v-col
                class="skills-item-element"
                cols="12"
                lg="3"
                md="6"
                v-for="(skill, i) in Skills"
                :key="i"
            >
                <!-- <div class="img-wrap"><img :src="skill.img" :alt="skill.name" /></div> -->
                <vue-ellipse-progress
                    :data="circles"
                    :progress="skill.value + '%'"
                    :angle="-90"
                    :size="250"
                    :thickness="7.5"
                    :emptyThickness="4"
                    :color="gradient"
                    emptyColor="#eee"
                    fontSize="2rem"
                >
                    <p slot="legend-caption" class="progress_title">
                        <img :src="skill.img" :alt="skill.name" />
                    </p>
                </vue-ellipse-progress>
            </v-col>
        </v-row>
    </v-row>
</template>

<script defer>
import { mapState } from 'vuex';
export default {
    name: 'SkillsItem',
    computed: {
        ...mapState(['Skills']),
    },
    date() {
        return {
            gradient: {
                radial: false,
                colors: [
                    {
                        color: '#1976D2',
                        offset: '0',
                        opacity: '1',
                    },
                    {
                        color: 'lime',
                        offset: '100',
                        opacity: '0.6',
                    },
                ],
            },
        };
    },
    methods: {
        scrollCallbackElAppear(scrollTop) {
            if (this.$refs.fade.offsetTop < scrollTop && !this.isElAppear) {
                this.isElAppear = true;
                let interval = setInterval(() => {
                    if (this.timeing > 5) {
                        clearInterval(interval);
                    }
                    this.timeing++;
                }, 200);
            }
        },
    },
    components: {},
    props: {},
};
</script>

<style lang="scss" scoped>
.skills-item {
    max-width: 1400px;
    margin: 0 auto;
}
.skills-item-wrap {
    flex-flow: row wrap;
    // height: 100%;
    // margin: 100px 0 100px 0;
    margin: auto auto;
    strong {
        font-size: 20px;
        color: #0a2a43;
    }
}
.skills-item-element {
    display: flex;
    align-items: center;
    justify-content: center;
}
.progress_title {
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 24px;
    img {
        width: 120px;
    }
}
.img-wrap {
    width: 125px;
    height: 125px;
    // margin-right: 50px;
    img {
        width: 100%;
    }
}
</style>
