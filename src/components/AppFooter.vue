<script>
    export default {
        name: "AppFooter"
    }
</script>

<template>
    <footer>
        <section id="contacts" class="container">
            <div class="row">
                <h4 class="col-12 text-center text-light">My contacts</h4>

                <div class="col-4 offset-4 d-flex justify-content-between my-3">
                    <font-awesome-icon class="social-icons" icon="fa-brands fa-github" />

                    <font-awesome-icon class="social-icons" icon="fa-brands fa-linkedin" />

                    <font-awesome-icon class="social-icons" icon="fa-solid fa-envelope" />
                </div>

                <hr class="text-secondary">

                <p class="text-light text-center">Feel free to contact me, I can't wait to work together on some fantastic projects!</p>
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