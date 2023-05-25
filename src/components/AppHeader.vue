<script>
    export default {
        name: "AppHeader",
        data() {
            return {
                menuHome: [
                    {
                        id: "presentation",
                        eng: "Presentation",
                        ita: "Presentazione"
                    },
                    {
                        id: "stack",
                        eng: "Technologies",
                        ita: "Strumenti"
                    },
                    {
                        id: "projects",
                        eng: "Projects",
                        ita: "Progetti"
                    },
                    {
                        id: "contacts",
                        eng: "Contacts",
                        ita: "Contatti"
                    },
                ],
                menuBio: [
                    {
                        id: "bio",
                        eng: "Bio",
                        ita: "Chi sono"
                    },
                    {
                        id: "experiences",
                        eng: "Experiences",
                        ita: "Esperienze"
                    },
                    {
                        id: "education",
                        eng: "Education",
                        ita: "Istruzione"
                    },
                    {
                        id: "contacts",
                        eng: "Contacts",
                        ita: "Contatti"
                    },
                ]
            }
        },
        computed: {
            currentRouteName() {
                return this.$route.path;
            }
        },
    }
</script>

<template>
    <!-- Header --------------------------------------------------------------------------->
    <header>
        <nav class="container">
            <div class="row">
                <div class="col-7 text-start">
                    TEST
                </div>
    
                <ul v-if="currentRouteName == '/'" class="col list-unstyled d-flex justify-content-between">
                    <li v-for="item in menuHome">
                        <a class="text-decoration-none" :href="'#'+item.id">{{ item.ita }}</a>
                    </li>
                </ul>
                <ul v-else-if="currentRouteName == '/bio'" class="col list-unstyled d-flex justify-content-between">
                    <li v-for="item in menuBio">
                        <a class="text-decoration-none" :href="'#'+item.id">{{ item.ita }}</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
    header {
        background-color: white;
        filter: blur(1);
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 2rem 0;
        z-index: 100;
    }
</style>