<template>
    <div id="project">
        <h1
            class="project-title"
            data-aos="fade-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            data-aos-offset="0"
        >
            PROJECTS
        </h1>
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
    border: 1px solid transparent;
    background: #eee;
    overflow: hidden;
}
.project-title {
    text-align: center;
    font-size: 4em;
    font-weight: lighter;
    margin: 160px 0 80px;
    color: #132448;
}
</style>
