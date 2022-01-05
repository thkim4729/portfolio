<template>
    <div id="design">
        <h1>DESIGN</h1>
        <design-item></design-item>
    </div>
</template>

<script>
export default {
    name: 'Design',
    components: { DesignItem: () => import('@/components/main/DesignItem.vue') },
};
</script>

<style lang="scss" scoped>
#design {
    padding: 10vh 0 0;
    border: 1px solid transparent;
    background: #eee;
    overflow: hidden;
    h1 {
        text-align: center;
        margin: 5vh 0;
        color: #132448;
    }
}
</style>
