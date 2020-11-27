<template>
    <div class="appbar">
        <v-app-bar app inverted-scroll :scroll-threshold="100" color="#132448" dark height="80">
            <router-link to="/">
                <v-btn text @click="reload">KIM TAEHOON'S Portfolio</v-btn>
            </router-link>
            <v-spacer />
            <v-btn text class="mr-2" @click="scrollAbout">ABOUT</v-btn>
            <v-btn text class="mr-2">PROJECTS</v-btn>
            <v-btn text>CONTACT</v-btn>
            <v-spacer />
        </v-app-bar>
    </div>
</template>

<script>
export default {
    name: 'Appbar',
    methods: {
        reload() {
            setTimeout(() => {
                location.reload(true);
            });
        },
        scrollAbout(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition;
            } else {
                return { x: 0, y: 937 };
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.appbar {
    z-index: 1000;
}
</style>
