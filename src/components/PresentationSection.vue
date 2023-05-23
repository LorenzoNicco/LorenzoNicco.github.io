<script>
    export default {
        name: "PresentationSection"
    }
</script>

<template>
    <section id="presentation" class="container">
        <div class="row">
            <div class="col-8">
                <h2>Hello World!</h2>

                <p>My name is Lorenzo, and I am a <strong>Junior Full Stack Web Developer</strong>.</p>
            </div>

            <div class="col-4">
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