<template>
    <div class="intro">
        <section class="intro-wrap">
            <div data-aos="fade-in" class="text-box">
                <vue-typer
                    :text="['KIM Taehoon Portfolio']"
                    :repeat="0"
                    :shuffle="false"
                    initial-action="typing"
                    :pre-type-delay="1000"
                    :type-delay="150"
                    :pre-erase-delay="2000"
                    :erase-delay="250"
                    erase-style="select-all"
                    :erase-on-complete="false"
                    caret-animation="phase"
                ></vue-typer>
            </div>
            <div
                class="rellax d1"
                ref="rellax"
                v-rellax="{
                    speed: 5,
                }"
            >
                <img src="@/assets/img/keycap01.png" />
            </div>
            <div
                class="rellax d2"
                ref="rellax"
                v-rellax="{
                    speed: 4,
                }"
            >
                <img src="@/assets/img/keycap02.png" />
            </div>
            <div
                class="rellax d3"
                ref="rellax"
                v-rellax="{
                    speed: 0,
                }"
            >
                <img src="@/assets/img/keycap03.png" />
            </div>
            <div
                class="rellax d4"
                ref="rellax"
                v-rellax="{
                    speed: 3,
                }"
            >
                <img src="@/assets/img/keycap04.png" />
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Intro',
    data() {
        return {};
    },
    mounted() {},
    methods: {},
};
</script>

<style lang="scss">
div {
    color: #fff;
}
.intro-wrap {
    position: relative;
    width: 100%;
    height: 120vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
#bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
    filter: brightness(25%);
}
.text-box {
    position: absolute;
    top: 50vh;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    max-width: 100%;
    min-width: 500px;
    display: flex;
    justify-content: center;
    flex-flow: column;
    align-items: center;
    text-align: center;
    z-index: 100;
    font-size: 68px;
    font-weight: bold;
    text-align: center;
    color: #fff;
}
.vue-typer {
    .custom.char {
        &.typed {
            color: #fff;
        }
    }
    .custom.caret {
        width: 10px;
        &.pre-type {
            background-color: #fff;
        }
        &.typing {
            background-color: #fff;
        }
    }
}
.d1 {
    width: 200px;
    margin: 0 0 500px -200px;
    img {
        width: 100%;
    }
}
.d2 {
    width: 300px;
    margin: 500px 0 0 0;
    img {
        width: 100%;
    }
}
.d3 {
    width: 300px;
    margin: 0 0 600px 0;
    img {
        width: 100%;
    }
}
.d4 {
    width: 300px;
    margin: 0 -300px 0 300px;
    img {
        width: 100%;
    }
}
</style>
