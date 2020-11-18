<template>
    <div class="project">
        <h1
            class="project-title"
            data-aos="fade-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            data-aos-offset="0"
        >
            PROJECTS
        </h1>
    </div>
</template>

<script defer>
export default {
    name: 'Project',
};
</script>

<style lang="scss" scoped>
.project {
    height: 100vh;
    border: 1px solid transparent;
    background: #eee;
}
.project-title {
    text-align: center;
    font-size: 4em;
    font-weight: lighter;
    margin: 100px 0;
    color: #0a2a43;
}
</style>
