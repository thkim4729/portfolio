<template>
    <v-row id="skill" no-gutters justify="center" align="center">
        <div class="skill-list">
            <div class="skill-list-inner">
                <vue-glide
                    class="slide-wrap"
                    autoplay
                    perView="2"
                    animationDuration="2500"
                    gap="50"
                    rewind
                    rewindDuration="2500"
                    bound
                    hoverpause="true"
                >
                    <vue-glide-slide class="slide-item" v-for="(skill, i) in skills" :key="i">
                        <img class="slide-img" :src="skill.img" :alt="skill.name" />
                        <p class="slide-text">{{ skill.name }}</p>
                    </vue-glide-slide>
                    <!-- <template slot="control" id="control-btn">
                        <v-btn icon data-glide-dir="<" class="left-btn">
                            <v-icon>mdi-chevron-left</v-icon>
                        </v-btn>
                        <v-btn icon data-glide-dir=">" class="right-btn">
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-btn>
                    </template> -->
                </vue-glide>
            </div>
        </div>
        <div class="skill-info"></div>
    </v-row>
</template>

<script defer>
import { Glide, GlideSlide } from 'vue-glide-js';
import { mapState } from 'vuex';
export default {
    name: 'Skill',
    components: {
        [Glide.name]: Glide,
        [GlideSlide.name]: GlideSlide,
    },
    data() {
        return {};
    },
    computed: {
        ...mapState(['skills']),
    },
};
</script>

<style lang="scss">
#skill {
    background: #eee;
    height: 50vh;
    border: 1px solid transparent;
    flex-flow: row;
    .skill-list,
    .skill-info {
        width: 50%;
    }
}
.skill-list-inner {
    width: 600px;
    margin: 0 auto;
}
.slide-wrap {
    position: relative;
}
.slide-item {
    margin: 0 -36px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 100px;
    }
    p {
        margin-bottom: 0;
        margin-left: 20px;
        color: #111;
        font-size: 24px;
    }
}
// #control-btn {
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
//     .left-btn,
//     .right-btn {
//         position: absolute;
//     }
// }
</style>
