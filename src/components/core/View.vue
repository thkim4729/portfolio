<template>
    <div class="view">
        <transition name="component-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script defer>
export default {
    name: 'View',
};
</script>

<style lang="scss" scoped>
.view {
    overflow: hidden;
    background: #0a2a43;
}
.component-fade-enter-active,
.component-fade-leave-active {
    transition: opacity 0.3s ease;
}
.component-fade-enter,
    .component-fade-leave-to
    /* .component-fade-leave-active below version 2.1.8 */
 {
    opacity: 0;
}
</style>
