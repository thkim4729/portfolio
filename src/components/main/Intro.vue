<template>
    <div id="intro">
        <div class="intro-wrap">
            <div data-aos="fade-in" class="text-box">
                <div class="animated-title">
                    <div class="text-top">
                        <div>
                            <span>KIM</span>
                            <span>Taehoon</span>
                        </div>
                    </div>
                    <div class="text-bottom">
                        <div>Porfolio</div>
                    </div>
                </div>
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
@import '@/components/css/Intro.scss';
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
    top: 50%;
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
</style>
