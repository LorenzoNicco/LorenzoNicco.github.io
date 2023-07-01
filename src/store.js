import {reactive} from "vue";

export const store = reactive ({
    language: 'ita',
    projects: [
        {
            slug: "deliveboo",
            title: "Deliveboo",
            shortDescription_ita: "Web app per la consegna di cibo a domicilio",
            shortDescription_eng: "Web app for food delivery",
            pic: "./registrazioni/Deliveboo.JPG",
            video: "./registrazioni/Deliveboo.mp4",
            technologies: [
                {
                    icon: '/public/icons/vuedotjs.svg',
                    name: "VueJs"
                },
                {
                    icon: '/public/icons/nodedotjs.svg',
                    name: "NodeJs"
                },
                {
                    icon: '/public/icons/vite.svg',
                    name: "Vite"
                },
                {
                    icon: '/public/icons/bootstrap.svg',
                    name: "Bootstrap"
                },
                {
                    icon: '/public/icons/laravel.svg',
                    name: "Laravel"
                },
            ]
        },
        {
            slug: "cinemato",
            title: "Cinemato",
            shortDescription_ita: "Home page per un'azienda di produzione video.",
            shortDescription_eng: "Home page for a video making company",
            pic: "./registrazioni/Cinemato.JPG",
            video: "./registrazioni/Cinemato.mkv",
            technologies: [
                {
                    icon: '/public/icons/vuedotjs.svg',
                    name: "VueJs"
                },
                {
                    icon: '/public/icons/nodedotjs.svg',
                    name: "NodeJs"
                },
                {
                    icon: '/public/icons/vite.svg',
                    name: "Vite"
                },
                {
                    icon: '/public/icons/sass.svg',
                    name: "Sass"
                },
            ]
        },
        {
            slug: "boolflix",
            title: "Boolflix",
            shortDescription_ita: "Ricerca di film e serie tv tramite chiamata Api.",
            shortDescription_eng: "Movie and tv show research made with an Api call",
            pic: "./registrazioni/Boolflix.JPG",
            video: "./registrazioni/Boolflix.mp4",
            technologies: [
                {
                    icon: '/public/icons/vuedotjs.svg',
                    name: "VueJs"
                },
                {
                    icon: '/public/icons/nodedotjs.svg',
                    name: "NodeJs"
                },
                {
                    icon: '/public/icons/vite.svg',
                    name: "Vite"
                },
                {
                    icon: '/public/icons/sass.svg',
                    name: "Sass"
                },
            ]
        },
        {
            slug: "boolzapp",
            title: "BoolzApp",
            shortDescription_ita: "Replica di WhatsApp Web.",
            shortDescription_eng: "WhatsApp Web replica",
            pic: "./registrazioni/BoolzApp.JPG",
            video: "./registrazioni/BoolzApp.mp4",
            technologies: [
                {
                    icon: '/public/icons/vuedotjs.svg',
                    name: "VueJs"
                },
                {
                    icon: '/public/icons/html5.svg',
                    name: "Html"
                },
                {
                    icon: '/public/icons/css3.svg',
                    name: "Css"
                },
            ]
        },
        {
            slug: "spotify-web",
            title: "Spotify Web",
            shortDescription_ita: "Replica dell'interfaccia della web app di Spotify",
            shortDescription_eng: "Web app interface inspired by Spotify",
            pic: "./registrazioni/SpotifyWeb-replica.JPG",
            video: "./registrazioni/SpotifyWeb-replica.mp4",
            technologies: [
                {
                    icon: '/public/icons/html5.svg',
                    name: "Html"
                },
                {
                    icon: '/public/icons/css3.svg',
                    name: "Css"
                },
            ],
        },
    ]
});