import {reactive} from "vue";

export const store = reactive ({
    projects: [
        {
            title: "Cinemato",
            shortDescription: "Home page per un'azienda di produzione video.",
            pic: "./registrazioni/Cinemato.JPG"
        }
    ]
});