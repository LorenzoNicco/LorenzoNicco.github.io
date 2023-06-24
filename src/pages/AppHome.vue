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
    <main class="position-relative">
        <JumboSection />
    
        <PresentationSection />
    
        <StackSection />
    
        <ProjectsSection />
    </main>
</template>

<style lang="scss" scoped>
    main {
        background-image: url('./bgs/sfondo1_ver3.png');
        background-size: contain;
        background-repeat: no-repeat;
    }
</style>
