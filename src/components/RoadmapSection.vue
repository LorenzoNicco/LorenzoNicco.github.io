<script>
    export default {
        name: "RoadmapSection",
        props: [
            "data"
        ]
    }
</script>

<template>
    <div class="col-8 mb-5">
        <h4>{{ data.company }}</h4>

        <h5>{{ data.title }}</h5>

        <p>{{ data.location }}</p>

        <p>{{ data.duration }}</p>

        <p>{{ data.description }}</p>
    </div>
</template>

<style lang="scss" scoped>

</style>