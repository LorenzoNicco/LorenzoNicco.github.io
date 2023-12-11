import {reactive} from "vue";

export const store = reactive ({
    language: 'ita',
    projects: [
        {
            slug: "deliveboo",
            title: "Deliveboo",
            shortDescription_ita: "Web app per la consegna di cibo a domicilio",
            shortDescription_eng: "Web app for food delivery",
            description: 'Con Deliveboo è possibile scegliere l\'attività dalla quale effettuare l\'ordine da una lista completa di ristoranti, o filtrandoli in base alla tipologia di cucina. Possiamo poi selezionare i piatti da ordinare e gestirne la quantità direttamente sul carrello che comparirà a sinistra. L\'unico limite è che possiamo ordinare da un solo ristorante alla volta. Il sito prevede anche una parte di back office riservata ai ristoratori, dove essi possono gestire e modificare il proprio ristorante (ogni utente registrato può averne solo uno) e il proprio menù, oltre che tenere traccia degli ordini ricevuti e degli incassi mensili.',
            descriptionEng: 'With Deliveboo you can choose the restaurant for your order from a complete list of restaurants, or filtering them according to the type of cuisine. We can then select the dishes to order and manage the quantity directly on the cart that will appear on the left. The only limitation is that we can only order from one restaurant at a time. The site also provides a part of back office reserved for restaurant\'s owners, where they can manage and modify their restaurant (each registered user can have only one) and their menu, as well as keep track of orders received and monthly receipts.',
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
        // {
        //     slug: "cinemato",
        //     title: "Cinemato",
        //     shortDescription_ita: "Home page per un'azienda di produzione video.",
        //     shortDescription_eng: "Home page for a video making company",
        //     description: 'Questo è uno dei progetti realizzati durante la mia esperienza in Boolean, dove ho costruito una pagina web per un\'azienda di produzione cinematografica. Per realizzarlo ho usato VueJs e Sass.',
        //     descriptionEng: 'This is one of the projects I did during my time in Boolean, where I built a web page for a film production company. I used VueJs and Sass to make it.',
        //     pic: "./registrazioni/Cinemato.JPG",
        //     video: "./registrazioni/Cinemato.mkv",
        //     technologies: [
        //         {
        //             icon: '/public/icons/vuedotjs.svg',
        //             name: "VueJs"
        //         },
        //         {
        //             icon: '/public/icons/nodedotjs.svg',
        //             name: "NodeJs"
        //         },
        //         {
        //             icon: '/public/icons/vite.svg',
        //             name: "Vite"
        //         },
        //         {
        //             icon: '/public/icons/sass.svg',
        //             name: "Sass"
        //         },
        //     ]
        // },
        {
            slug: "todolist",
            title: "TODO list",
            shortDescription_ita: "Todo list realizzata in Php.",
            shortDescription_eng: "Todo list made in Php",
            description: 'Questa applicazione ci permette di creare una lista di task, inserendoli all\'interno di un database. Le operazioni di connessione e CRUD sono gestite in Php tramite MySql, mentre i dati vengono inviati alla parte front-end tramite dei fetch eseguiti in Javascript, in modo che l\'interfaccia venga aggiornata dinamicamente. I task possono essere modificati: cliccando sul pulsante corrispondente al task bersaglio, quest\'ultimo comparirà all\'interno dell\'input principale dove potremmo modificarlo. I pulsanti di invio cambieranno in modo da poter confermare la nostra modifica o annullare l\'operazione. L\'eliminazione dei task può essere effettuata singolarmente o in maniera totale.',
            descriptionEng: 'This app allows us to create a list of tasks, adding them into a database. The connection and CRUD operations are managed in Php via MySql, while the data is sent to the front end via data fetch in Javascript. In this way the UI is updated dynamically. Tasks can be modified: by clicking on the button corresponding to the target task, this task will appear in the main input where we could modify it. The submit buttons will change so we can confirm our change or cancel the operation. Task deletion can be performed individually or for the whole list.',
            pic: "./registrazioni/todolist.JPG",
            video: "./registrazioni/todolist.mp4",
            technologies: [
                {
                    icon: '/public/icons/html5.svg',
                    name: "Html"
                },
                {
                    icon: '/public/icons/tailwind.svg',
                    name: "Tailwind"
                },
                {
                    icon: '/public/icons/javascript.svg',
                    name: "Javascript"
                },
                {
                    icon: '/public/icons/php.svg',
                    name: "Php"
                },
                {
                    icon: '/public/icons/mysql.svg',
                    name: "MySql"
                },
            ]
        },
        {
            slug: "boolflix",
            title: "Boolflix",
            shortDescription_ita: "Ricerca di film e serie tv tramite chiamata Api.",
            shortDescription_eng: "Movie and tv show research made with an Api call",
            description: 'Boolflix è un progetto che ho realizzato durante la mia esperienza in Boolean, che riproduce un\'interfaccia ispirata a Netflix dove vengono mostrati i dati di film e serie tv, ottenuti tramite api. La chiamata api in questione viene effettuata tramite tecnologia Ajax usando la libreria #Axios, digitando un titolo (o parte di esso) nell\'apposita barra di ricerca in alto a destra. Sullo schermo vengono mostrati i primi 20 risultati della ricerca, sia per i film che per le serie ed è possibile filtrare questi risultati per categorie tramite la freccetta in fondo al menù in alto. Inoltre, passando con il mouse sulla locandina di un titolo, ci vengono mostrate le informazioni relative a esso, che possono essere approfondite cliccando sull\'apposito pulsante. Ho realizzato questo progetto usando Vue, NodeJs Vite, #Axios e Sass.',
            descriptionEng: 'Boolflix is a project that I realized during my experience in Boolean, which shows an interface inspired by Netflix where the data of movies and TV series, obtained through an Api call, are shown. The Api call is made through Ajax technology using the library Axios, typing a title (or part of it) in the appropriate search bar in the upper right. The first 20 search results are shown on the screen, for both movies and series, and you can filter these results by category using the last input of the top menu. Moreover, passing with the mouse on the poster of a title, we are shown the information related to it, which can be expanded by clicking on the appropriate button. I realized this project using Vue, nodejs Vite, Axios and Sass.',
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
            description: 'Uno dei progetti che più mi sono divertito a realizzare durante il mio percorso in Boolean è stato BoolzApp, ovvero una web app ispirata a WhatsApp Web. Tramite l\'input in basso è possibile inviare messaggi che riporteranno l\'orario di invio e la conferma di lettura con le doppie spunte blu. A questi verrà poi inviato un messaggio di risposta preimpostato dopo un secondo. Tutti i messaggi sono inoltre eliminabili tramite un modale. Altre funzioni interessanti sono la ricerca dei contatti tramite filtraggio ad ogni carattere digitato e la comparsa del menù utente al click sulla sua immagine di profilo. Ho realizzato questo progetto usando Html, Css e VueJs.',
            descriptionEng: 'One of the projects I made during my journey in Boolean was BoolzApp, a web app inspired by Whatsapp Web. Through the input below you can send messages that will report the time of sending and the confirmation of reading with the double blue marks. A default reply message will then be sent after a second. All messages can also be deleted via a modal. Other interesting functions are the search of contacts through filtering at each typed character and the appearance of the user menu by clicking on his profile image. I realized this project using Html, #Css and VueJs.',
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
            description: 'Questo progetto aveva come obiettivo la realizzazione dell\'interfaccia di una web app ispirata a quella di Spotify. Ho realizzato questo progetto usando Html e Css per creare la struttura, le varie animazioni ed effetti hover e per renderlo completamente responsive.',
            descriptionEng: 'This project aimed to create a web app interface inspired by Spotify. I realized this project using Html and Css to create the structure, the various animations and hover effects and to make it completely responsive.',
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