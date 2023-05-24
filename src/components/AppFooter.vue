<script>
    export default {
        name: "AppFooter"
    }
</script>

<template>
    <footer>
        <section id="contacts" class="container">
            <div class="row">
                <h4 class="col-12 text-center text-light">I miei contatti</h4>

                <div class="col-4 offset-4 d-flex justify-content-between my-3">
                    <font-awesome-icon class="social-icons" icon="fa-brands fa-github" />

                    <font-awesome-icon class="social-icons" icon="fa-brands fa-linkedin" />

                    <font-awesome-icon class="social-icons" icon="fa-solid fa-envelope" />
                </div>

                <hr class="text-secondary">

                <p class="text-light text-center">Contattami liberamente, non vedo l'ora di lavorare insieme su qualche nuovo progetto!</p>
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