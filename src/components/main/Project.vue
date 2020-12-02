<template>
    <div id="project">
        <project-item></project-item>
    </div>
</template>

<script>
export default {
    name: 'Project',
    components: { ProjectItem: () => import('@/components/main/ProjectItem.vue') },
};
</script>

<style lang="scss" scoped>
#project {
    padding: 20vh 0 0;
    border: 1px solid transparent;
    background: #eee;
    overflow: hidden;
}
</style>
