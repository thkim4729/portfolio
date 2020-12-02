<template>
    <div id="about">
        <v-row class="about-wrap" no-gutters justify="center" align="center">
            <div
                class="profile-left"
                data-aos="fade-right"
                data-aos-easing="ease-in-ease"
                data-aos-delay="200"
                data-aos-offset="0"
            >
                <div class="profile-basic">
                    <v-avatar class="profile-img" size="320">
                        <img src="@/assets/img/profile.jpg" alt="프로필" />
                    </v-avatar>
                    <div class="status">
                        <p class="name"><span>김태훈</span><span>KIM Taehoon</span></p>
                        <p class="date">1994.12</p>
                    </div>
                </div>

                <div class="email">
                    <v-icon class="mr-4">mdi-email-outline</v-icon>thkim4729@naver.com
                </div>
                <div class="address">
                    <a href="https://github.com/thkim4729" target="_blank">
                        <v-icon class="mr-4">mdi-github</v-icon>https://github.com/thkim4729
                    </a>
                </div>
            </div>
            <div
                class="profile-right"
                data-aos="fade-left"
                data-aos-easing="ease-in-ease"
                data-aos-delay="300"
                data-aos-offset="0"
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
                    <p><span>License</span></p>
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
                <div class="skill">
                    <p><span>Skill</span></p>
                    <v-progress-circular
                        :rotate="-90"
                        :size="100"
                        :width="5"
                        :value="value"
                        color="#132448"
                    >
                        {{ value }}
                    </v-progress-circular>
                    <div class="skill-title">HTML</div>
                </div>
            </div>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            interval: {},
            value: 0,
        };
    },
    beforeDestroy() {
        clearInterval(this.interval);
    },
    mounted() {
        this.interval = setInterval(() => {
            if (this.value === 100) {
                return (this.value = 0);
            }
            this.value += 10;
        }, 1000);
    },
};
</script>

<style lang="scss">
#about {
    // height: 100vh;
    padding: 24vh 0 0;
    border: 1px solid transparent;
    background: #eee;
}
.about-wrap {
    max-width: 1200px;
    min-width: 300px;
    margin: 0 auto;
}
.profile-left {
    width: 40%;
    margin-right: 10%;
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
            span:first-child:after {
                content: '│';
                color: #111;
            }
        }
    }
    .email {
        color: rgba(0, 0, 0, 0.7);
        margin-bottom: 12px;
        // margin-left: 120px;
        text-align: center;
    }
    .address {
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
.profile-right {
    width: 50%;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    .edu,
    .license,
    .skill {
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
            letter-spacing: -1px;
            li {
                font-size: 14px;
                font-weight: normal;
                margin-bottom: 10px;
                span {
                    margin-left: 20px;
                }
            }
        }
        .skill-title {
            color: black;
            text-align: center;
        }
        .v-progress-circular__info {
            color: black;
        }
    }
}
</style>
