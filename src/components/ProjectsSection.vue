<script>
    export default {
        name: "ProjectsSection"
    }
</script>

<template>
    <section id="projects" class="container my-section-padding">
        <div class="row">
            <div class="col-12">
                <h2 class="text-center mb-5">My projects</h2>

                <div class="row">
                    <div class="col-5 text-center">
                        <img src="../assets/registrazioni/Cinemato.JPG" alt="Image not found">
                    </div>

                    <div class="col-7 d-flex flex-column justify-content-center align-items-start">
                        <h3>Cinemato</h3>

                        <p>Home page for a film making company.</p>
                        
                        <button class="my-button">More Info</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    img {
        width: 80%;
    }
</style>