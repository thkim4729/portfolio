<template>
    <div class="home">
        <core-view></core-view>
        <core-footer></core-footer>
    </div>
</template>

<script defer>
// @ is an alias to /src
export default {
    name: 'Home',
    components: {
        CoreView: () => import('@/components/core/View.vue'),
        CoreFooter: () => import('@/components/core/Footer.vue'),
    },
};
</script>
<style lang="scss" scoped></style>
