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
                    <div class="row">
                        <div class="col-5">
                            <img :src="project.pic" alt="Immagine non trovata" class="w-100">
                        </div>
        
                        <div class="col-7">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum necessitatibus amet incidunt excepturi deserunt in, doloribus ad quia quas, praesentium unde libero sunt. Deserunt laboriosam labore aperiam, esse eveniet accusamus!</p>
                        </div>
                    </div>
                </div>

                <div class="col-12 my-project-mb">
                    <h2 class="text-center my-4">Linguaggi e Frameworks utilizzati</h2>

                    <div class="row flex-wrap justify-content-center">
                        <div v-for="item in project.technologies" class="col-2 text-center">{{ item.name }}</div>
                    </div>
                </div>

                <video class="col-12 w-75" :src="project.video" controls></video>
            </div>
        </section>

        <router-link class="my-button m-auto mb-5" :to="{ name: 'home'}">Torna alla home</router-link>
    </main>
</template>

<style lang="scss" scoped>
    section {
        margin-top: 104px;
    }
</style>