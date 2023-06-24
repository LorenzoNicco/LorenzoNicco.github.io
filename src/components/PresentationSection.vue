<script>
    export default {
        name: "PresentationSection"
    }
</script>

<template>
    <section id="presentation" class="container my-section-padding">
        <div class="row">
            <div class="col-8">
                <h2 class="mb-4">Hello World!</h2>

                <p class="fs-5">Mi chiamo Lorenzo e sono un <strong class="my-orange-text">Junior Full Stack Web Developer</strong>.</p>

                <hr>

                <p>Da amante di costruzioni ed enigmi, costruisco pagine e risolvo problemi su Internet per passione e per lavoro. Come Web Developer dedico estrema attenzione ai dettagli e cerco continuamente di imparare nuovi linguaggi e strumenti.</p>
            
                <router-link class="my-button" :to="{ name: 'bio'}">Scopri di più!</router-link>
            </div>

            <div class="col-4 d-flex justify-content-center align-items-center">
                <div class="img-container">
                    <img src="img/profilo1_b.jpg" alt="Immagine non trovata">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .img-container {
        width: 300px;
        height: 300px;
        margin: 0 auto;
        margin-bottom: 7rem;
        border-radius: 50%;
        overflow: hidden;
        border: 5px solid white;

        &>img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .img-debug {
        width: 200px;
        height: 200px;
        background-color: red;
    }
</style>