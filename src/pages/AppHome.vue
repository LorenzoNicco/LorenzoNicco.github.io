<script>
    import JumboSection from "../components/JumboSection.vue";
    import PresentationSection from "../components/PresentationSection.vue";

    export default {
        name: "AppHome",
        components: {
            JumboSection,
            PresentationSection
        }
    }
</script>

<template>
    <JumboSection />

    <PresentationSection />
</template>

<style lang="scss" scoped>
</style>
