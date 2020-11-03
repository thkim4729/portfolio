<template>
    <v-app>
        <router-view></router-view>
    </v-app>
</template>

<script>
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
html {
    scroll-behavior: smooth;
}
a {
    text-decoration: none;
}
* {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}
</style>
