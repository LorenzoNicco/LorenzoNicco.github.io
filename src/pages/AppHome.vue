<script>
    import JumboSection from "../components/JumboSection.vue";
    import PresentationSection from "../components/PresentationSection.vue";
    import StackSection from "../components/StackSection.vue";

    export default {
        name: "AppHome",
        components: {
            JumboSection,
            PresentationSection,
            StackSection
        }
    }
</script>

<template>
    <JumboSection />

    <PresentationSection />
    
    <StackSection />
</template>

<style lang="scss" scoped>
</style>
