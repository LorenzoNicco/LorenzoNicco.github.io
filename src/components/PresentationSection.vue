<script>
    import { store } from "../store.js"
    export default {
        name: "PresentationSection",
        data() {
            return {
                store
            }
        }
    }
</script>

<template>
    <section id="presentation" class="container-fluid my-section-padding">
        <div class="row">
            <div class="col-12 col-lg-8">
                <h2 class="mb-4 text-center text-md-start">Hello World!</h2>

                <p v-if="store.language == 'ita'" class="fs-5 mb-4 text-center text-md-start">Mi chiamo Lorenzo e sono un <strong class="my-orange-text">Junior Full Stack Web Developer</strong>.</p>
                <p v-else-if="store.language == 'eng'" class="fs-5 mb-4 text-center text-md-start">My name is Lorenzo and I'm a <strong class="my-orange-text">Junior Full Stack Web Developer</strong>.</p>

                <hr>

                <p v-if="store.language == 'ita'" class="mb-4 text-center text-md-start">Da amante di costruzioni ed enigmi, costruisco pagine e risolvo problemi su Internet per passione e per lavoro. Come Web Developer dedico estrema attenzione ai dettagli e cerco continuamente di imparare nuovi linguaggi e strumenti.</p>
                <p v-else-if="store.language == 'eng'" class="mb-4 text-center text-md-start">I build web pages and solve problems for passion and for work. As Web Developer I put extreme attention to the details and I continuously try to learn new languages and tools.</p>   
                
                <router-link v-if="store.language == 'ita'" class="my-button mx-auto mx-md-0" :to="{ name: 'bio'}">Scopri di più!</router-link>
                <router-link v-else-if="store.language == 'eng'" class="my-button mx-auto mx-md-0" :to="{ name: 'bio'}">Find more!</router-link>
            </div>

            <div class="col-12 col-lg-4 d-flex justify-content-center align-items-center pt-5 pt-md-0">
                <div class="img-container">
                    <img src="/img/profilo1_b.jpg" alt="Immagine non trovata">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    #presentation {
        background-color: white;
        padding-top: 200px;
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
    }
</style>