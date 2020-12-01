<template>
    <div class="appbar">
        <v-app-bar app inverted-scroll :scroll-threshold="100" color="#132448" dark height="80">
            <router-link to="/">
                <v-btn text class="logo" @click="reload">KIM TAEHOON</v-btn>
            </router-link>
            <v-spacer />
            <v-btn
                text
                class="mr-2 appbar-btn"
                v-for="(item, i) in items"
                :key="i"
                :href="item.href"
            >
                <div class="appbar-title">{{ item.title }}</div>
            </v-btn>
            <v-spacer />
            <v-btn text class="github" href="https://github.com/thkim4729" target="_blank">
                <v-icon class="mr-2">mdi-github</v-icon>
                Github
            </v-btn>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    name: 'Appbar',
    data() {
        return {
            items: [
                { href: '#about', title: 'About' },
                { href: '#project', title: 'Project' },
                { href: '#contact', title: 'Contact' },
            ],
        };
    },
    methods: {
        reload() {
            setTimeout(() => {
                location.reload(true);
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.appbar {
    z-index: 1000;
}
.logo {
}
.email {
    padding: 0 16px;
    letter-spacing: 0.0892857143em;
}
.github {
}
</style>
