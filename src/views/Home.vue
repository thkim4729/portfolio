<template>
    <div class="home">
        <core-view></core-view>
    </div>
</template>

<script defer>
// @ is an alias to /src
export default {
    name: 'Home',
    components: {
        CoreView: () => import('@/components/core/View.vue'),
    },
};
</script>
