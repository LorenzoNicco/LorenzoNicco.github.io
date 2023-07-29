<script>
    import { store } from "../store.js"
    export default {
        name: "JumboSection",
        data() {
            return {
                store
            }
        }
    }
</script>

<template>
    <!-- Jumbotron --------------------------------------------------------------------------->
    <section id="jumbotron" class="container-fluid">
        <div class="row justify-content-center">
            <h1 v-if="store.language == 'ita'" class="col-4 my-section-padding text-center">
                Costruisco cose per internet
            </h1>
            <h1 v-else-if="store.language == 'eng'" class="col-4 my-section-padding text-center">
                I build things for the internet
            </h1>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #jumbotron {
        margin-top: 110px;
    }
</style>