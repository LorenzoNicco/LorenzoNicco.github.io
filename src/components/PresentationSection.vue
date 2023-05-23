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

                <p class="fs-5">My name is Lorenzo, and I am a <strong>Junior Full Stack Web Developer</strong>.</p>

                <hr>

                <p>I build web pages and solve problems for passion and for work. As Web Developer I put extreme attention to the details and I continuously try to learn new languages and tools.</p>
            
                <button class="my-button mt-3">More on me!</button>
            </div>

            <div class="col-4 d-flex justify-content-center align-items-center">
                <div class="img-debug"></div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .img-debug {
        width: 200px;
        height: 200px;
        background-color: red;
    }
</style>