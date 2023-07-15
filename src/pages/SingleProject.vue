<script>
    import { store } from "../store.js"
    export default {
        name: "SingleProject",
        data() {
            return {
                store,
                project: ''
            }
        },
        computed: {
            projectFinder() {
                const pathName = this.$route.fullPath.slice(1);

                for (let index = 0; index < store.projects.length; index++) {
                    if(pathName == this.store.projects[index].slug) {
                        this.project = this.store.projects[index];
                    }
                }
            }
        },
        mounted() {
            this.projectFinder;
        }
    }
</script>

<template>
    <main>
        <section class="container my-section-padding">
            <div class="row justify-content-center">
                <h1 class="col-12 text-center mb-5">{{ project.title }}</h1>

                <div class="col-12 my-project-mb">
                    <div class="row justify-content-between">
                        <div class="col-5">
                            <img :src="project.pic" alt="Immagine non trovata" class="w-100">
                        </div>
        
                        <div class="col-6">
                            <p v-if="store.language == 'ita'">{{ project.description }}</p>
                            <p v-if="store.language == 'eng'">{{ project.descriptionEng }}</p>       
                        </div>
                    </div>
                </div>

                <div id="tech" class="top-scroll-margin stack col-12 my-project-mb">
                    <h2 v-if="store.language == 'ita'" class="text-center my-4">Linguaggi e Frameworks utilizzati</h2>
                    <h2 v-if="store.language == 'eng'" class="text-center my-4">Languages and frameworks</h2>

                    <div class="row flex-wrap justify-content-center">
                        <div v-for="item in project.technologies" class="col-2 text-center">
                            <p>{{ item.name }}</p>

                            <img :src="item.icon" alt="Immagine non disponibile">
                        </div>
                    </div>
                </div>

                <video id="video" class="top-scroll-margin col-12 w-75" :src="project.video" controls muted></video>
            </div>
        </section>

        <router-link v-if="store.language == 'ita'" class="my-button m-auto mb-5" :to="{ name: 'home'}">Torna alla home</router-link>
        <router-link v-if="store.language == 'eng'" class="my-button m-auto mb-5" :to="{ name: 'home'}">Home page</router-link>
    </main>
</template>

<style lang="scss" scoped>
    section {
        margin-top: 104px;

        .stack {
            p {
                font-weight: bold;
                color: orange;
            }
    
            img {
                height: 70px;
            }
        }
    }
</style>