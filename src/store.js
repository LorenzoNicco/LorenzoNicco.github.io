import {reactive} from "vue";

export const store = reactive ({
    projects: [
        {
            slug: "deliveboo",
            title: "Deliveboo",
            shortDescription: "Web app per la consegna di cibo a domicilio",
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
            shortDescription: "Home page per un'azienda di produzione video.",
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
            shortDescription: "Ricerca di film e serie tv tramite chiamata Api.",
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
            shortDescription: "Replica di WhatsApp Web.",
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
            shortDescription: "Replica dell'interfaccia della web app di Spotify",
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