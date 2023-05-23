<script>
    export default {
        name: "StackSection",
        data() {
            return {
                stack: [
                    {
                        title: "Html"
                    },
                    {
                        title: "Css"
                    },
                    {
                        title: "Bootstrap"
                    },
                    {
                        title: "Javascript"
                    },
                    {
                        title: "VueJs"
                    },
                    {
                        title: "NodeJs"
                    },
                    {
                        title: "Php"
                    },
                    {
                        title: "MySql"
                    },
                    {
                        title: "Laravel"
                    },
                    {
                        title: "Git"
                    },
                    {
                        title: "Sass"
                    },
                    {
                        title: "Photoshop"
                    },
                ]
            }
        }
    }
</script>

<template>
    <section id="stack" class="container my-section-padding">
        <div class="row justify-content-center">
            <h2 class="col-12 text-center mb-5">Technologies I use</h2>

            <div class="col-8">
                <div class="row flex-wrap">
                    <div v-for="item in stack" class="col-4 text-center mb-3">{{ item.title }}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>