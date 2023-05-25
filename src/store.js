import {reactive} from "vue";

export const store = reactive ({
    projects: [
        {
            title: "Deliveboo",
            shortDescription: "Web app per la consegna di cibo a domicilio",
            pic: ""
        },
        {
            title: "Cinemato",
            shortDescription: "Home page per un'azienda di produzione video.",
            pic: "./registrazioni/Cinemato.JPG"
        },
        {
            title: "Boolflix",
            shortDescription: "Ricerca di film e serie tv tramite chiamata Api.",
            pic: "./registrazioni/Boolflix.JPG"
        },
        {
            title: "BoolzApp",
            shortDescription: "Replica di WhatsApp Web.",
            pic: "./registrazioni/BoolzApp.JPG"
        },
        {
            title: "Spotify Web",
            shortDescription: "Replica dell'interfaccia della web app di Spotify",
            pic: "./registrazioni/Cinemato.JPG"
        },
    ]
});