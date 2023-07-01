<script>
    import { store } from "../store.js"
    export default {
        name: "AppHeader",
        data() {
            return {
                store,
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
                ],
                menuProject: [
                    {
                        id: "tech",
                        eng: "Technologies",
                        ita: "Strumenti"
                    },
                    {
                        id: "video",
                        eng: "Video",
                        ita: "Video"
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
                    <router-link  :to="{ name: 'home'}" class="btn border-none p-0">HOME</router-link>
                </div>
    
                <ul v-if="currentRouteName == '/'" class="col list-unstyled d-flex justify-content-between">
                    <li v-for="item in menuHome">
                        <a v-if="store.language == 'ita'" class="text-decoration-none" :href="'#'+item.id">{{ item.ita }}</a>
                        <a v-else-if="store.language == 'eng'" class="text-decoration-none" :href="'#'+item.id">{{ item.eng }}</a>
                    </li>
                    <li v-if="store.language == 'ita'" @click="store.language = 'eng'">
                        <div class="flag btn border-none p-0">
                            <img src="/img/flag_eng.png" alt="">
                        </div>
                    </li>
                    <li v-else-if="store.language == 'eng'" @click="store.language = 'ita'">
                        <div class="flag btn border-none p-0">
                            <img src="/img/flag_ita.png" alt="">
                        </div>
                    </li>
                </ul>
                <ul v-else-if="currentRouteName == '/bio'" class="col list-unstyled d-flex justify-content-between">
                    <li v-for="item in menuBio">
                        <a v-if="store.language == 'ita'" class="text-decoration-none" :href="'#'+item.id">{{ item.ita }}</a>
                        <a v-else-if="store.language == 'eng'" class="text-decoration-none" :href="'#'+item.id">{{ item.eng }}</a>
                    </li>
                    <li v-if="store.language == 'ita'" @click="store.language = 'eng'">
                        <div class="flag btn border-none p-0">
                            <img src="/img/flag_eng.png" alt="">
                        </div>
                    </li>
                    <li v-else-if="store.language == 'eng'" @click="store.language = 'ita'">
                        <div class="flag btn border-none p-0">
                            <img src="/img/flag_ita.png" alt="">
                        </div>
                    </li>
                </ul>
                <ul v-else class="col list-unstyled d-flex justify-content-between">
                    <li v-for="item in menuProject">
                        <a v-if="store.language == 'ita'" class="text-decoration-none" :href="'#'+item.id">{{ item.ita }}</a>
                        <a v-else-if="store.language == 'eng'" class="text-decoration-none" :href="'#'+item.id">{{ item.eng }}</a>
                    </li>
                    <li v-if="store.language == 'ita'" @click="store.language = 'eng'">
                        <div class="flag btn border-none p-0">
                            <img src="/img/flag_eng.png" alt="">
                        </div>
                    </li>
                    <li v-else-if="store.language == 'eng'" @click="store.language = 'ita'">
                        <div class="flag btn border-none p-0">
                            <img src="/img/flag_ita.png" alt="">
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
    header {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 2rem 0;
        z-index: 100;   
        background-color: rgba(255,255,255,0.4); 
        backdrop-filter: saturate(180%) blur(15px);

        a{
            transition: 0.2s ease-in;
            color: cornflowerblue;
        }

        a:hover {
            color: orange;
        }

        .flag {
            height: 28px;
            width: 42px;
            object-position: center;
            overflow: hidden;

            img {
                height: 40px;
                width: 40px;
                transform: translateY(-6px);
            }
        }
    }
</style>