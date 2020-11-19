<template>
    <v-row class="skills-item" no-gutters justify="center" align="center">
        <v-row
            class="skills-item-wrap"
            justify="center"
            align="center"
            v-for="(skill, i) in Skills"
            :key="i"
            data-aos="fade-right"
            data-aos-easing="ease-in-ease"
            data-aos-delay="400"
            data-aos-offset="0"
        >
            <!-- <v-avatar tile size="100"><img :src="skill.img" :alt="skill.alt"/></v-avatar>
            <strong>{{ skill.value }}%</strong>
            <v-col>
                <v-progress-linear :value="skill.value" color="#0a2a43" height="7">
                </v-progress-linear>
            </v-col> -->
            <div class="img-wrap"><img :src="skill.img" :alt="skill.alt" /></div>
            <Progress :radius="50" :strokeWidth="10" :value="skill.value" class="progress">
                <template v-slot:footer></template>
            </Progress>
        </v-row>
    </v-row>
</template>

<script defer>
import Progress from 'easy-circular-progress';
import { mapState } from 'vuex';
export default {
    name: 'SkillsItem',
    computed: {
        ...mapState(['Skills']),
    },
    components: {
        Progress,
    },
    props: {},
};
</script>

<style lang="scss" scoped>
.skills-item {
    width: 1200px;
    margin: 0 auto;
}
.skills-item-wrap {
    flex-flow: row wrap;
    margin-bottom: 48px;
    strong {
        font-size: 20px;
        color: #0a2a43;
    }
}
.progress {
    text-align: center;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
}
.img-wrap {
    width: 100px;
    height: 100px;
    img {
        width: 100%;
    }
}
</style>
