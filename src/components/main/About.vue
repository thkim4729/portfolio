<template>
    <div class="about">
        <h1
            class="about-title"
            data-aos="fade-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            data-aos-offset="0"
        >
            ABOUT
        </h1>
        <v-row class="about-wrap" no-gutters align="center">
            <section
                class="first-side"
                data-aos="fade-right"
                data-aos-easing="ease-in-ease"
                data-aos-delay="300"
                data-aos-offset="0"
            >
                <v-avatar size="360">
                    <img
                        src="https://avatars2.githubusercontent.com/u/71238632?s=460&u=b5324c2efbe20a1dc8eedee4ef39a7fbfe58d383&v=4"
                        alt="프로필"
                    />
                </v-avatar>
            </section>
            <section
                class="second-side"
                data-aos="fade-left"
                data-aos-easing="ease-in-ease"
                data-aos-delay="500"
                data-aos-offset="0"
            >
                <div class="about-me">
                    <h1>ABOUT ME</h1>
                    <h4>KIM TAEHOON</h4>
                    <p>
                        1994.12.20<br />
                        010-7115-4729<br />
                        경기도 김포시 장기동<br />
                        thkim4729@naver.com
                    </p>
                </div>
                <div class="education">
                    <h1>EDUCATION</h1>
                    <p>2020. 11 인터렉티브 앱 & 웹디자인(웹퍼블리셔, 프론트엔드) 수료<br /></p>
                </div>
            </section>
        </v-row>
    </div>
</template>

<script defer>
export default {
    name: 'About',
};
</script>

<style lang="scss" scoped>
.about {
    height: 100vh;
    border: 1px solid transparent;
    background: white;
}
.about-title {
    text-align: center;
    font-size: 4em;
    font-weight: lighter;
    color: #0a2a43;
    margin: 100px 0;
}
.about-wrap {
    width: 70%;
    margin: 0 auto;
    section {
        width: 50%;
        h1,
        h2,
        h3,
        h4,
        p,
        a {
            color: #0a2a43;
        }
        h1 {
            font-size: 2.25em;
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
    .first-side {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .second-side {
        div {
            padding: 20px;
        }
    }
}
</style>
