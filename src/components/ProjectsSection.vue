<script>
    export default {
        name: "ProjectsSection",
        data() {
            return {
                
            }
        }
    }
</script>

<template>
    <section id="projects" class="container my-section-padding">
        <div class="row">
            <div class="col-12">
                <h2 class="text-center mb-5">I miei progetti</h2>

                <div class="row">
                    <div class="col-12">
                        <div class="project-container row rounded-pill py-3">
                            <div class="col-5 text-center d-flex justify-content-center align-items-center">
                                <img src="../assets/registrazioni/Cinemato.JPG" alt="Image not found">
                            </div>
        
                            <div class="col-7 d-flex flex-column justify-content-center align-items-start">
                                <h3>Cinemato</h3>
        
                                <p>Home page per un'azienda di produzione video.</p>
                                
                                <button class="my-button">Esplora</button>
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

    .project-container {
        background-color: white;
        border: 3px solid orange;
        position: relative;
        overflow: hidden;
        box-shadow: inset -4px 8px 15px -11px #000000;
    }

    .project-container::before {
        position: absolute;
        content: 'Show';
        z-index: 2;
        height: 100%;
        left: -35%;
        top: 0;
        transform:skew(45deg);
        transition-duration: 0.5s;
        transform-origin: top left;
        width: 135%;
        background-color: cadetblue;
    }

    .project-container:hover::before {
        height: 100%;
        width: 0;
    }
</style>