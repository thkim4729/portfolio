<template>
    <div id="project">
        <h1>PROJECT</h1>
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
