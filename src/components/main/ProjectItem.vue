<template>
    <v-row class="project-item" no-gutters justify="center" align="center">
        <div class="item-box">
            <img src="@/assets/img/genshin.jpg" alt="프로젝트 1" />
            <div class="item-text">
                <h2>CLONE CODING</h2>
            </div>
        </div>
        <div class="item-box">
            <img
                src="https://c2.peakpx.com/wallpaper/813/374/453/4k-computer-hand-laptop-wallpaper.jpg"
                alt="프로젝트 1"
            />
            <div class="item-text">
                <h2>CLONE CODING</h2>
            </div>
        </div>
    </v-row>
</template>

<script>
export default {
    name: 'ProjectItem',
};
</script>

<style lang="scss" scoped>
.item-box {
    width: 50%;
    max-height: 500px;
    position: relative;
    overflow: hidden;
    img {
        width: 100%;
        filter: brightness(70%);
        transition: all 0.5s;
    }
    img:hover {
        transform: scale(1.1);
    }
    .item-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        h2 {
            font-size: 36px;
            font-weight: 500;
        }
    }
}
</style>
