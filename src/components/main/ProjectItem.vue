<template>
    <v-row class="project-item" no-gutters justify="center" align="center">
        <div
            class="item-box"
            v-for="(project, i) in projects"
            :key="i"
            data-aos="zoom-in"
            data-aos-easing="ease-in-ease"
            data-aos-delay="200"
            data-aos-offset="0"
        >
            <a href="#">
                <img :src="project.img" :alt="project.name" />
                <div class="item-text">
                    <h2>{{ project.title }}</h2>
                    <p>{{ project.info }}</p>
                </div>
            </a>
        </div>
    </v-row>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'ProjectItem',
    computed: {
        ...mapState(['projects']),
    },
};
</script>

<style lang="scss" scoped>
.item-box {
    width: 50%;
    height: 500px;
    position: relative;
    overflow: hidden;
    img {
        width: 100%;
        height: 500px;
        filter: brightness(70%);
        transition: all 0.5s;
        object-fit: cover;
    }
    img:hover {
        transform: scale(1.1);
    }
    .item-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        h2 {
            font-size: 36px;
            font-weight: 500;
        }
        p {
            margin-bottom: 0;
        }
    }
}
</style>
