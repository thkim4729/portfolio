<template>
    <div id="about">
        <h1
            class="about-title"
            data-aos="fade-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="0"
            data-aos-offset="0"
        >
            ABOUT
        </h1>
        <v-row class="about-wrap" no-gutters align="center">
            <div
                class="profile-img"
                data-aos="fade-right"
                data-aos-easing="ease-in-ease"
                data-aos-delay="200"
                data-aos-offset="0"
            >
                <v-avatar size="360">
                    <img
                        src="https://avatars2.githubusercontent.com/u/71238632?s=460&u=b5324c2efbe20a1dc8eedee4ef39a7fbfe58d383&v=4"
                        alt="프로필"
                    />
                </v-avatar>
            </div>
            <div
                class="profile-text"
                data-aos="fade-left"
                data-aos-easing="ease-in-ease"
                data-aos-delay="300"
                data-aos-offset="0"
            >
                <!-- <h1>PROFILE</h1> -->
                <v-row class="information" justify="center" align="center">
                    <div class="info-item">
                        <span class="call-title info-title">CALL</span>
                        <span class="call-desc info-desc">010 7115 4729</span>
                    </div>

                    <div class="info-item">
                        <span class="mail-title info-title">MAIL</span>
                        <span class="mail-desc info-desc">thkim4729@naver.com</span>
                    </div>
                    <div class="info-item">
                        <span class="edu-title info-title">EDUCATION</span
                        ><span class="edu-desc info-desc">
                            2020. 11<br />
                            인터렉티브 앱 & 웹디자인(웹퍼블리셔, 프론트엔드)과정 수료
                        </span>
                    </div>
                    <div class="info-item">
                        <span class="award-title info-title">AWARD</span>
                        <span class="award-desc info-desc">
                            2020. 11 <br />
                            인터렉티브 앱 & 웹디자인(웹퍼블리셔, 프론트엔드)과정 우수상
                        </span>
                    </div>
                </v-row>
            </div>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'About',
};
</script>

<style lang="scss" scoped>
#about {
    min-width: 320px;
    height: 100vh;
    border: 1px solid transparent;
    background: #eee;
}
.about-title {
    text-align: center;
    font-size: 4em;
    font-weight: lighter;
    color: #132448;
    margin: 160px 0 80px;
}
.about-wrap {
    max-width: 1300px;
    margin: 0 auto;
    div {
        h1,
        h2,
        h3,
        h4,
        p,
        a {
            color: #132448;
        }
        h1 {
            font-size: 2em;
            font-weight: bold;
            margin: 0 0 5px 0;
        }
        h4 {
            font-size: 1.15em;
            color: #111;
        }
        p {
            font-size: 0.85em;
            color: #111;
        }
        a:hover {
            text-decoration: underline;
        }
    }
    .profile-img {
        width: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 50px;
    }
    .profile-text {
        width: 650px;
    }
    .information {
        .info-item {
            margin-bottom: 24px;
        }
        span {
            color: #3a3a3a;
        }
    }
}
</style>
