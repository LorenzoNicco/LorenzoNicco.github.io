<script>
    import { store } from "../store.js"
    export default {
        name: "StackSection",
        data() {
            return {
                store,
                stack: [
                    {
                        title: "Html",
                        icon: "/icons/html5.svg"
                    },
                    {
                        title: "Css",
                        icon: "/icons/css3.svg"
                    },
                    {
                        title: "Bootstrap",
                        icon: "/icons/bootstrap.svg"
                    },
                    {
                        title: "Javascript",
                        icon: "/icons/javascript.svg"
                    },
                    {
                        title: "VueJs",
                        icon: "/icons/vuedotjs.svg"
                    },
                    {
                        title: "Vite",
                        icon: "/icons/vite.svg"
                    },
                    {
                        title: "NodeJs",
                        icon: "/icons/nodedotjs.svg"
                    },
                    {
                        title: "Php",
                        icon: "/icons/php.svg"
                    },
                    {
                        title: "MySql",
                        icon: "/icons/mysql.svg"
                    },
                    {
                        title: "Laravel",
                        icon: "/icons/laravel.svg"
                    },
                    {
                        title: "Git",
                        icon: "/icons/git.svg"
                    },
                    {
                        title: "Sass",
                        icon: "/icons/sass.svg"
                    },
                    {
                        title: "Photoshop",
                        icon: "/icons/adobephotoshop.svg"
                    },
                ]
            }
        }
    }
</script>

<template>
    <section id="stack" class="container my-section-padding">
        <div class="row justify-content-center">
            <h2 v-if="store.language == 'ita'" class="col-12 text-center mb-5 my-orange-text">Le tecnologie che uso</h2>
            <h2 v-else-if="store.language == 'eng'" class="col-12 text-center mb-5 my-orange-text">The technologies I use</h2>

            <div class="col-8">
                <div class="row flex-wrap">
                    <div v-for="item in stack" class="col-2 text-center mb-5">
                        <p>{{ item.title }}</p>

                        <img :src="item.icon" alt="Immagine non disponibile">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
#stack {
    background-image: url('./bgs/sfondo2_ver2.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;

    p {
        font-weight: bold;
        color: orange;
    }

    img {
        height: 70px;
    }
}
</style>