<template>
    <div class="intro">
        <section class="intro-wrap">
            <img src="@/assets/img/bg2.jpg" alt="배경화면" id="bg" />
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
        </section>
    </div>
</template>

<script>
export default {
    name: 'Intro',
};
</script>

<style lang="scss">
.intro-wrap {
    position: relative;
    width: 100%;
    height: 100vh;
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
    top: 50%;
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
    font-size: 72px;
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
</style>
