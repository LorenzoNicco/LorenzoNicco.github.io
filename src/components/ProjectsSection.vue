<script>
import { store } from "../store.js"
    export default {
        name: "ProjectsSection",
        data() {
            return {
                store,
            }
        }
    }
</script>

<template>
    <section id="projects" class="container my-section-padding">
        <div class="row">
            <div class="col-12">
                <h2 v-if="store.language == 'ita'" class="text-center mb-5">I miei progetti</h2>
                <h2 v-else-if="store.language == 'eng'" class="text-center mb-5">My projects</h2>

                <div class="row justify-content-center">
                    <div v-for="item in store.projects" class="project-external col-10 rounded-pill mb-3">
                        <div class="project-container row rounded-pill py-3">
                            <div class="col-5 text-center d-flex justify-content-center align-items-center">
                                <img :src="item.pic" alt="Image not found">
                            </div>
        
                            <div class="col-7 d-flex flex-column justify-content-center align-items-start">
                                <h3>{{ item.title }}</h3>
        
                                <p v-if="store.language == 'ita'">{{ item.shortDescription_ita }}</p>
                                <p v-else-if="store.language == 'eng'">{{ item.shortDescription_eng }}</p>
                                
                                <router-link :to="{ name: 'single-project', params: { slug: item.slug } }" class="my-button">Esplora</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    img {
        width: 60%;
    }

    .project-external {
        border: 3px solid orange;
        .project-container {
            background-color: cadetblue;
            border: 2px solid rgb(61, 61, 61);
            position: relative;
            overflow: hidden;
            box-shadow: inset -4px 8px 15px -11px #000000;
            z-index: 10;
            color: white;
        }
    
        .project-container::before {
            position: absolute;
            content: 'Show';
            z-index: 20;
            height: 100%;
            left: -35%;
            top: 0;
            transform:skew(45deg);
            transition-duration: 0.5s;
            transform-origin: top left;
            width: 135%;
            background-color: rgb(255, 200, 99);
            border: 2px solid rgb(61, 61, 61);
        }
    
        .project-container:hover::before {
            height: 100%;
            width: 0;
        }
    }
</style>