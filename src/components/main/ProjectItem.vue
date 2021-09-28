<template>
    <v-row class="project-item" no-gutters justify="center" align="center">
        <!-- <v-col
            cols="12"
            sm="6"
            class="item-box"
            v-for="(project, i) in projects"
            :key="i"
            data-aos="flip-left"
            data-aos-easing="ease-in-ease"
            data-aos-delay="200"
            data-aos-offset="0"
        > -->
        <v-col cols="12" md="6" class="item-box">
            <hooper class="hooper" infiniteScroll="true" wheelControl="false">
                <slide class="slide" v-for="(project, i) in projects" :key="i">
                    <a :href="project.link" target="_blank">
                        <img :src="project.img" :alt="project.name" />
                        <div class="item-text">
                            <h2>
                                {{ project.title }} <span>with {{ project.tool }}</span>
                            </h2>
                            <p>{{ project.info }}</p>
                            <p>{{ project.desc }}</p>
                        </div>
                    </a>
                </slide>
                <hooper-navigation slot="hooper-addons"></hooper-navigation>
                <hooper-pagination slot="hooper-addons"></hooper-pagination>
            </hooper>
        </v-col>
    </v-row>
</template>

<script>
import { mapState } from 'vuex';
import {
    Hooper,
    Slide,
    Pagination as HooperPagination,
    Navigation as HooperNavigation,
} from 'hooper';
import 'hooper/dist/hooper.css';
export default {
    name: 'ProjectItem',
    computed: {
        ...mapState(['projects']),
    },
    components: {
        Hooper,
        Slide,
        HooperPagination,
        HooperNavigation,
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.hooper {
    height: 500px;
    .slide {
        position: relative;
        overflow: hidden;
        img {
            width: 100%;
            height: 500px;
            filter: brightness(55%);
            transition: all 0.5s;
            object-fit: cover;
        }
        a:hover img {
            transform: scale(1.1);
        }
        .item-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            h2 {
                font-size: 40px;
                font-weight: 500;
                text-align: center;
                color: #fff;
                display: flex;
                flex-flow: column;
                line-height: 40px;
                span {
                    font-size: 20px;
                    margin: -10px 0 0;
                }
            }
            p {
                font-size: 24px;
                margin-bottom: 0;
                text-align: center;
                color: #fff;
            }
            p:last-child {
                font-size: 16px;
            }
        }
    }
}
</style>
