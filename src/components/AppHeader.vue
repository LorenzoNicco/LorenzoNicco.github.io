<script>
    export default {
        name: "AppHeader",
        data() {
            return {
                menuHome: [
                    "presentation",
                    "stack",
                    "projects",
                    "contacts"
                ],
                menuBio: [
                    "bio",
                    "experiences",
                    "education",
                    "contacts"
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
                        <a class="text-decoration-none" :href="'#'+item">{{ item }}</a>
                    </li>
                </ul>
                <ul v-else-if="currentRouteName == '/bio'" class="col list-unstyled d-flex justify-content-between">
                    <li v-for="item in menuBio">
                        <a class="text-decoration-none" :href="'#'+item">{{ item }}</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
    header {
        background-color: rgba(255, 255, 255, 0.5);
        filter: blur(1);
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 2rem 0;
    }
</style>