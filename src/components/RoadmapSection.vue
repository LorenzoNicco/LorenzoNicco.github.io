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
        <h4 data-bs-toggle="modal" :data-bs-target="'#'+data.id">{{ data.company }}</h4>

        <!-- Modal -->
        <div class="modal fade" :id="data.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title fs-5" id="exampleModalLabel">{{ data.title }}</h2>

                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">
                        <h5>🏢 {{ data.company }}</h5>

                        <p>🗺 {{ data.location }}</p>

                        <p>⏳ {{ data.duration }}</p>

                        <p>❔ {{ data.description }}</p>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- <h5>{{ data.title }}</h5>

        <p>{{ data.location }}</p>

        <p>{{ data.duration }}</p>

        <p>{{ data.description }}</p> -->
    </div>
</template>

<style lang="scss" scoped>

</style>