<template>
    <v-row class="design-item" no-gutters justify="center" align="center">
        <v-col cols="12" md="6" class="item-box">
            <hooper class="hooper" :settings="hooperSettings">
                <slide class="slide" v-for="(design, i) in designs" :key="i">
                    <img :src="design.img" :alt="design.name" />
                    <div class="item-text">
                        <h2>
                            {{ design.title }} <span>with {{ design.tool }}</span>
                        </h2>
                        <p>{{ design.info }}</p>
                        <p>{{ design.desc }}</p>
                        <v-btn class="button" elevation="0" color="#132448">
                            <a :href="design.link" target="_blank">
                                Learn More
                                <v-icon class="icon" dense right>
                                    mdi-arrow-right
                                </v-icon>
                            </a>
                        </v-btn>
                    </div>
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
    name: 'DesignItem',
    computed: {
        ...mapState(['designs']),
    },
    components: {
        Hooper,
        Slide,
        HooperPagination,
        HooperNavigation,
    },
    methods: {},
    data() {
        return {
            hooperSettings: {
                wheelControl: false,
                infiniteScroll: true,
            },
        };
    },
};
</script>

<style lang="scss" scoped>
.hooper-navigation .icon {
    background-color: white;
    color: white;
}
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
        .item-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
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
            .button {
                margin: 8px 0 0 0;
            }
        }
    }
    .slide:hover img {
        transform: scale(1.1);
    }
    a {
        font-size: 16px;
        color: #fff;
        // margin: 10px 0 0 0;
        display: flex;
    }
}
.v-icon--right {
    margin: 2px 0 0 5px;
}
</style>
