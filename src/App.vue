<template>
    <v-app>
        <router-view></router-view>
    </v-app>
</template>

<script defer>
export default {
    name: 'App',
    components: {},
    data: () => ({
        //
    }),
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=poppins:300,400,500,600,700,800,900&display=swap');
@font-face {
    font-family: 'NEXON Lv1 Gothic OTF Light';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF Light.woff')
        format('woff');
    font-weight: normal;
    font-style: normal;
}
html {
    scroll-behavior: smooth;
}
a {
    text-decoration: none;
}
* {
    margin: 0;
    padding: 0;
    font-family: 'NEXON Lv1 Gothic Light', sans-serif;
}
</style>
