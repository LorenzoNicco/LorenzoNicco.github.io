<script>
    import { store } from "../store.js"
    export default {
        name: "AppFooter",
        data() {
            return {
                store
            }
        }
    }
</script>

<template>
    <footer>
        <section id="contacts" class="container">
            <div class="row">
                <h4 v-if="store.language == 'ita'" class="col-12 text-center text-light">I miei contatti</h4>
                <h4 v-else-if="store.language == 'eng'" class="col-12 text-center text-light">My contacts</h4>

                <div class="col-12 col-md-4 offset-md-4 my-3">
                    <div class="row justify-content-between">
                        <a href="https://github.com/LorenzoNicco" class="col-4 text-center">                            
                            <font-awesome-icon class="social-icons col" icon="fa-brands fa-github" />
                        </a>

                        <a href="http://www.linkedin.com/in/lorenzoniccolai" class="col-4 text-center">                            
                            <font-awesome-icon class="social-icons col" icon="fa-brands fa-linkedin" />
                        </a>

                        <a href="mailto:lorenzoniccolai91@gmail.com" class="col-4 text-center">                            
                            <font-awesome-icon class="social-icons col" icon="fa-solid fa-envelope" />
                        </a>
                    </div>
                </div>

                <hr class="text-secondary">

                <p v-if="store.language == 'ita'" class="text-light text-center col-12">Contattami liberamente, non vedo l'ora di lavorare insieme su qualche nuovo progetto!</p>
                <p v-else-if="store.language == 'eng'" class="text-light text-center col-12">Feel free to contact me, I can't wait to work together on some new projects!</p>
            </div>
        </section>
    </footer>
</template>

<style lang="scss" scoped>
    footer {
        width: 100%;
        padding: 3rem 0;
        background-color: rgb(22, 22, 22);

        .social-icons {
            height: 2rem;
            filter: invert(1);
        }
    }
</style>