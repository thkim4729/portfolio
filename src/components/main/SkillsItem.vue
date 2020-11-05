<template>
    <div class="skills-item">
        <v-row
            class="skills-item-wrap"
            justify="center"
            align="center"
            v-for="(skill, i) in Skills"
            :key="i"
        >
            <v-avatar tile size="100"><img :src="skill.img" :alt="skill.alt"/></v-avatar>
            <strong>{{ skill.value }}%</strong>
            <v-col>
                <v-progress-linear :value="skill.value" color="#0a2a43" height="7">
                </v-progress-linear>
            </v-col>
        </v-row>
    </div>
</template>

<script defer>
import { mapState } from 'vuex';
export default {
    name: 'SkillsItem',
    computed: {
        ...mapState(['Skills']),
    },
    props: {},
};
</script>

<style lang="scss" scoped>
.skills-item-wrap {
    flex-flow: wrap-reverse;
    margin-bottom: 48px;
    strong {
        font-size: 20px;
    }
}
.skills-item > div > strong {
    margin: 0 20px;
}
</style>
