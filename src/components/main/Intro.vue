<template>
    <div id="intro">
        <div class="intro-wrap">
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
        </div>
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
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;
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
    min-width: 320px;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    flex-flow: column;
    align-items: center;
    text-align: center;
    z-index: 100;
    font-size: 68px;
    font-weight: bold;
    text-align: center;
    color: #132448;
}
.vue-typer {
    .custom.char {
        &.typed {
            color: #132448;
        }
    }
    .custom.caret {
        width: 10px;
        &.pre-type {
            background-color: #132448;
        }
        &.typing {
            background-color: #132448;
        }
    }
}
</style>
