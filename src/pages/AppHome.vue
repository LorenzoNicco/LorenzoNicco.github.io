<script>
    import JumboSection from "../components/JumboSection.vue";
    import PresentationSection from "../components/PresentationSection.vue";
    import StackSection from "../components/StackSection.vue";
    import ProjectsSection from "../components/ProjectsSection.vue";

    export default {
        name: "AppHome",
        components: {
            JumboSection,
            PresentationSection,
            StackSection,
            ProjectsSection
        }
    }
</script>

<template>
    <JumboSection />

    <PresentationSection />

    <StackSection />

    <ProjectsSection />
</template>

<style lang="scss" scoped>
</style>
