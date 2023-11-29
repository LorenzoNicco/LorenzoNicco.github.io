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
                        ita: "Presentazione",
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
    <header class="shadow-sm">
        <nav class="container">
            <div class="row">
                <div class="col-3 text-start">
                    <router-link  :to="{ name: 'home'}" class="my-button-home d-none d-lg-block">HOME</router-link>
                    <router-link  :to="{ name: 'home'}" class="my-button-home d-lg-none"><font-awesome-icon icon="fa-solid fa-house" /></router-link>
                </div>
    
                <nav class="col-9 navbar navbar-expand-lg">
                    <div class="container-fluid d-flex justify-content-end">
                        <button class="navbar-toggler border-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        
                        <div class="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarSupportedContent">
                            <ul v-if="currentRouteName == '/'" class="row list-unstyled justify-content-end navbar-nav mt-2 mt-lg-0">
                                <li v-for="item in menuHome" class="col nav-item text-end mb-2 m-lg-0 text-end">
                                    <a v-if="store.language == 'ita'" class="text-decoration-none me-lg-3" :href="'#'+item.id">{{ item.ita }}</a>
                                    <a v-else-if="store.language == 'eng'" class="text-decoration-none me-lg-3" :href="'#'+item.id">{{ item.eng }}</a>
                                </li>
                                <li v-if="store.language == 'ita'" @click="store.language = 'eng'" class="col nav-item text-end mb-2 m-lg-0">
                                    <div class="flag btn border-none p-0">
                                        <img src="/img/flag_eng.png" alt="">
                                    </div>
                                </li>
                                <li v-else-if="store.language == 'eng'" @click="store.language = 'ita'" class="col nav-item text-end mb-2 m-lg-0">
                                    <div class="flag btn border-none p-0">
                                        <img src="/img/flag_ita.png" alt="">
                                    </div>
                                </li>
                            </ul>
                            <ul v-else-if="currentRouteName == '/bio'" class="row list-unstyled justify-content-end navbar-nav">
                                <li v-for="item in menuBio" class="col nav-item text-end mb-2 mb-lg-0">
                                    <a v-if="store.language == 'ita'" class="text-decoration-none me-lg-3" :href="'#'+item.id">{{ item.ita }}</a>
                                    <a v-else-if="store.language == 'eng'" class="text-decoration-none me-lg-3" :href="'#'+item.id">{{ item.eng }}</a>
                                </li>
                                <li v-if="store.language == 'ita'" @click="store.language = 'eng'" class="col nav-item text-end mb-2 m-lg-0">
                                    <div class="flag btn border-none p-0">
                                        <img src="/img/flag_eng.png" alt="">
                                    </div>
                                </li>
                                <li v-else-if="store.language == 'eng'" @click="store.language = 'ita'" class="col nav-item text-end mb-2 m-lg-0">
                                    <div class="flag btn border-none p-0">
                                        <img src="/img/flag_ita.png" alt="">
                                    </div>
                                </li>
                            </ul>
                            <ul v-else class="row list-unstyled justify-content-end navbar-nav">
                                <li v-for="item in menuProject" class="col nav-item text-end mb-2 m-lg-0">
                                    <a v-if="store.language == 'ita'" class="text-decoration-none me-lg-3" :href="'#'+item.id">{{ item.ita }}</a>
                                    <a v-else-if="store.language == 'eng'" class="text-decoration-none me-lg-3" :href="'#'+item.id">{{ item.eng }}</a>
                                </li>
                                <li v-if="store.language == 'ita'" @click="store.language = 'eng'" class="col nav-item text-end mb-2 m-lg-0">
                                    <div class="flag btn border-none p-0">
                                        <img src="/img/flag_eng.png" alt="">
                                    </div>
                                </li>
                                <li v-else-if="store.language == 'eng'" @click="store.language = 'ita'" class="col nav-item text-end mb-2 m-lg-0">
                                    <div class="flag btn border-none p-0">
                                        <img src="/img/flag_ita.png" alt="">
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
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
        padding: 1.5rem 0;
        z-index: 100;   
        background-color: #5f9ea0;
        // background-color: rgba(255,255,255,0.4); 
        backdrop-filter: saturate(180%) blur(15px);

        a:not(.my-button-home){
            transition: 0.2s ease-in;
            color: white;
        }

        a:not(.my-button-home):hover {
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