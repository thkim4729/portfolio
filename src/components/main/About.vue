<template>
    <div id="about" ref="about">
        <v-row class="about-wrap" justify="center" align="center">
            <v-col
                class="profile-left"
                data-aos="fade-right"
                data-aos-easing="ease-in-ease"
                data-aos-delay="200"
                data-aos-offset="0"
                cols="12"
                sm="6"
            >
                <div class="profile-basic">
                    <v-avatar class="profile-img" size="280">
                        <img src="@/assets/img/profile.png" alt="프로필" />
                    </v-avatar>
                    <div class="status">
                        <p class="name"><span>김태훈</span><span>KIM Taehoon</span></p>
                        <p class="date">1994.12.20</p>
                        <v-row class="address" justify="flex-start" no-gutters>
                            <div class="phone">
                                <v-icon class="mr-4">mdi-phone</v-icon>010-7115-4729
                            </div>
                            <div class="email">
                                <v-icon class="mr-4">mdi-email-outline</v-icon>thkim4729@naver.com
                            </div>
                            <div class="github">
                                <a href="https://github.com/thkim4729" target="_blank">
                                    <v-icon class="mr-4">mdi-github</v-icon
                                    >https://github.com/thkim4729
                                </a>
                            </div>
                        </v-row>
                    </div>
                </div>
            </v-col>
            <v-col
                class="profile-right"
                data-aos="fade-left"
                data-aos-easing="ease-in-ease"
                data-aos-delay="300"
                data-aos-offset="0"
                cols="12"
                sm="6"
            >
                <div class="edu">
                    <p><span>Education</span></p>
                    <ul>
                        <li>
                            2020.11<span
                                >한국직업전문학교 인터렉티브 앱 & 웹디자인(웹퍼블리셔,
                                프론트엔드)과정 수료</span
                            >
                        </li>
                        <li>2020.02<span>경기대학교 일어일문학과 졸업</span></li>
                    </ul>
                </div>
                <div class="license">
                    <p><span>Achivement</span></p>
                    <ul>
                        <li>
                            2020.11<span
                                >한국직업전문학교 인터렉티브 앱 & 웹디자인(웹퍼블리셔,
                                프론트엔드)과정 우수상</span
                            >
                        </li>
                        <li>2019.08<span>일본어능력시험 JLPT N1</span></li>
                    </ul>
                </div>
                <div class="skill" ref="skill">
                    <p><span>Skill</span></p>
                    <v-row class="skill-list" justify="space-around" align="center" no-gutters>
                        <div class="skill-item" v-for="(skill, i) in skills" :key="i">
                            <v-progress-circular
                                :rotate="-90"
                                :size="100"
                                :width="7.5"
                                :value="skill.value"
                                color="#132448"
                            >
                                {{ skill.value }}
                            </v-progress-circular>
                            <div class="skill-title">{{ skill.title }}</div>
                        </div>
                    </v-row>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'About',
    computed: {
        ...mapState(['skills']),
    },
    data() {
        return {
            // value: 0,
            // isAnimationStart: false
        };
    },
    components: {},
    methods: {
        // scrollCallbackProgressAnimationStart(scrollTop) {
        //     if (this.$refs.about.offsetTop < scrollTop && !this.isAnimationStart) {
        //         this.isAnimationStart = true;
        //     }
        // },
    },
};
</script>

<style lang="scss">
#about {
    // height: 100vh;
    padding: 20vh 0 0;
    border: 1px solid transparent;
    background: #eee;
}
.about-wrap {
    max-width: 1200px;
    min-width: 300px;
    margin: 0 auto;
}
.profile-left {
    width: 50%;
    padding: 10px;
    .profile-basic {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }
    .profile-img {
        margin-bottom: 24px;
    }
    .status {
        text-align: center;
        color: black;
        margin-bottom: 16px;
        .name {
            font-weight: bold;
            margin-bottom: 10px;
            span:first-child:after {
                content: '│';
                color: #111;
            }
        }
        .date {
            margin-bottom: 40px;
        }
    }
    .address {
        flex-flow: column;
        align-items: flex-start;
        .phone {
            color: rgba(0, 0, 0, 0.7);
            margin-bottom: 12px;
            // margin-left: 120px;
            text-align: center;
        }
        .email {
            color: rgba(0, 0, 0, 0.7);
            margin-bottom: 12px;
            // margin-left: 120px;
            text-align: center;
        }
        .github {
            // margin-left: 120px;
            text-align: center;
            a {
                color: rgba(0, 0, 0, 0.7);
                transition: all 0.3s;
            }
            a:hover {
                color: #132448;
            }
        }
    }
}
.profile-right {
    width: 50%;
    padding: 10px;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    .edu,
    .license {
        font-weight: bold;
        margin-bottom: 30px;
        color: black;
        font-size: 20px;
        p {
            margin-bottom: 30px;
            span {
                border-bottom: 2px solid #132448;
            }
        }
        ul {
            li {
                font-size: 16px;
                font-weight: normal;
                margin-bottom: 10px;
                span {
                    margin-left: 20px;
                    letter-spacing: -0.5px;
                }
            }
        }
    }
}
.skill {
    width: 100%;
    font-weight: bold;
    margin-bottom: 30px;
    color: black;
    font-size: 20px;
    p {
        margin-bottom: 30px;
        span {
            border-bottom: 2px solid #132448;
        }
    }
    .skill-list {
        width: 100%;
        .skill-item {
            // margin-right: 50px;
            padding: 10px;
            .skill-title {
                color: black;
                text-align: center;
                font-weight: 500;
            }
        }
    }
    .v-progress-circular__info {
        color: black;
    }
}
</style>
