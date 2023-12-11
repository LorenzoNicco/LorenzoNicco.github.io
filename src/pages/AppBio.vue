<script>
    import { store } from "../store.js"
    import RoadmapSection from "../components/RoadmapSection.vue";
    export default {
        name: "AppBio",
        components: {
            RoadmapSection
        },
        data() {
            return {
                store,
                data: {
                    experiences: [
                        {
                            id: 'The-Focus',
                            company: 'The Focus',
                            title: '3D DMP Trainee',
                            titleEng: '3D DMP Trainee',
                            location: 'Remoto',
                            locationEng: 'Remote',
                            duration: 'Settembre 2021 - Novembre 2021',
                            durationEng: 'September 2021 - November 2021',
                            description: 'Corso teorico/pratico di 2 mesi durante il quale ho realizzato vari progetti di matte painting in 2d e 3d. Per la realizzazione di questi ho sfruttato i programmi Photoshop, Maya e Nuke',
                            descriptionEng: 'Theoretical/Practical 2 months long course, where I worked on various matte painting projects both in 2d and 3d. To make them I worked with Photoshop, Maya and Nuke.'
                        },
                        {
                            id: 'Boolean-experience',
                            company: 'Boolean',
                            title: 'Jr Full Stack Web Developer Trainee',
                            titleEng: 'Jr Full Stack Web Developer Trainee',
                            location: 'Remoto',
                            locationEng: 'Remote',
                            duration: 'Novembre 2022 - Maggio 2023',
                            durationEng: 'November 2022 - May 2023',
                            description: 'Corso teorico/pratico della durata di 6 mesi, durante il quale mi sono cimentato nella realizzazione di progetti ispirati a siti e web app realmente esistenti (ad esempio: WatsApp web, Spotify e Dropbox). I progetti realizzati durante il corso presentavano una difficoltà sempre crescente e delle scadenze variabili.',
                            descriptionEng: 'Practical theorical course of 6 months. I worked on multiple projects inspired by real web pages and web app (for example: WhatsApp web, Spotify and Dropbox). Developing these projects I faced several challenges and increased my skills and capabilities as developer.'
                        },
                        {
                            id: 'Promos-srl-Promos-web-22',
                            company: 'Promos srl - Promos Web 22',
                            title: 'Sviluppatore software',
                            titleEng: 'Software developer',
                            location: 'Pieve a Nievole (PT)',
                            locationEng: 'Pieve a Nievole (PT)',
                            duration: 'Maggio 2023 - Novembre 2023',
                            durationEng: 'May 2023 - November 2023',
                        description: 'Sviluppo e manutenzione di siti web con   Wordpress e software gestionali Erp (lato front end).',
                            descriptionEng: 'Development and maintenance of websites in Wordpress and Erp softwares (front end).'
                        },
                    ],
                    education: [
                        {
                            id: 'Liceo-Petrocchi',
                            company: 'Liceo Artistico P. Petrocchi',
                            title: 'Diploma in Architettura e Arredamento',
                            titleEng: 'Architecture and Interior Design High School Diploma',
                            location: 'Pistoia',
                            locationEng: 'Pistoia',
                            duration: '2005 - 2011',
                            durationEng: '2005 - 2011',
                            description: 'Diploma di maturità ottenuto per l\'indirizzo di studi di Architettura e Arredamento',
                            descriptionEng: 'Diploma in Architecture and Interior Design.'
                        },
                        {
                            id: 'CG-Spectrum-certificate',
                            company: 'CG Spectrum - College of Digital Art and Animation',
                            title: 'Introduction to Concept Art & Illustration',
                            titleEng: 'Introduction to Concept Art & Illustration',
                            location: 'Remoto',
                            locationEng: 'Remote',
                            duration: 'Marzo 2019 - Settembre 2019',
                            durationEng: 'March 2019 - September 2019',
                            description: 'Corso di 6 mesi finanlizzato all\'apprendimento delle basi del disegno digitale con Photoshop per la creazione di Concept Arts.',
                            descriptionEng:'6-month course finalized on learning the basics of digital drawing with Photoshop for the creation of Concept Arts.'
                        },
                        {
                            id: 'CG-Spectrum-diploma',
                            company: 'CG Spectrum - College of Digital Art and Animation',
                            title: 'Advanced Concept Art',
                            titleEng: 'Introduction to Concept Art & Illustration',
                            location: 'Remoto',
                            locationEng: 'Remote',
                            duration: 'Ottobre 2019 - Agosto 2020',
                            durationEng: 'October 2019 - August 2020',
                            description: 'Percorso di 10 mesi rivolto allo sviluppo di tecniche e conoscenze approfondite per il campo della Concept Art.',
                            descriptionEng:'10-month course for the development of techniques and in-depth knowledge for the field of Concept Art.'
                        },
                        {
                            id: 'Boolean-education',
                            company: 'Boolean',
                            title: 'Master in Web Development',
                            titleEng: 'Master in Web Development',
                            location: 'Remoto',
                            locationEng: 'Remote',
                            duration: 'Novembre 2022 - Maggio 2023',
                            durationEng: 'November 2022 - May 2023',
                            description: 'Percorso di studi intensivo di 700 ore, finalizzato all\'apprendimento degli strumenti necessari allo sviluppo di siti e applicazioni web.',
                            descriptionEng: 'Study path of 700 hours, aimed at learning the tools necessary for the development of websites and web applications.'
                        },
                    ]
                }
            }
        }
    }
</script>

<template>
    <main>
        <h1 v-if="store.language == 'ita'"  class="text-center my-bio-title-padding">Questo sono io 👋</h1>
        <h1 v-if="store.language == 'eng'"  class="text-center my-bio-title-padding">This is me 👋</h1>

        <div class="img-container">
            <img src="img/profilo2.png" alt="Immagine non trovata">
        </div>

        <section id="bio" class="container-fluid my-section-padding">
            <div class="row justify-content-center w-100">

                <h2 v-if="store.language == 'ita'" class="col-12 col-md-8 text-center mt-5 mb-3 my-orange-text">Chi sono</h2>
                <h2 v-if="store.language == 'eng'" class="col-12 col-md-8 text-center mt-5 mb-3 my-orange-text">Who I am</h2>

                <p v-if="store.language == 'ita'" class="col-12 col-md-8 text-center">Ho scoperto il mondo della programmazione quasi per caso, rimanendone subito folgorato. Da quel momento ho vissuto a pane e codice con una passione talmente grande da prendere la decisione di cambiare vita, lasciando un posto di lavoro sicuro e investendo
                                            tutto nel percorso di formazione che mi ha portato a coronare il mio sogno di lavorare in questo fantastico campo.
                                            
                                            <br><br>

                                            Durante la mia esperienza di 700 ore in Boolean, ho acquisito le competenze necessarie per lo sviluppo di progetti sia in Front End che in Back End, applicando linguaggi e frameworks come Html, Css, Javascript, MySql, VueJs, Php, Laravel e altri.
                                            Inoltre, durante questo percorso, ho avuto l'opportunità di affinare le mie doti di analisi e risoluzione dei problemi e di apprendere i migliori metodi di svolgimento del lavoro di sviluppatore web.

                                            <br><br>

                                            La mia prima esperienza lavorativa nel settore è stata come Front End Developer presso Promos srl, all'ufficio Promos Web 22, dove ho potuto continuare a crescere come professionista, sviluppando progetti importanti e complessi come software ERP e siti web in Wordpress.

                                            <br><br>
                                            
                                            Non esitate a contattarmi per conoscerci meglio!
                </p>
                <p v-if="store.language == 'eng'" class="col-12 col-md-8 text-center">I discovered the world of programming almost by accident, immediately falling in love. From that moment I lived on bread and code with a passion so great to make the decision to change life,
                                             leaving my job and investing all I had in the training path that led me to fulfill my dream of working in this fantastic field.
                                            
                                            <br><br>

                                            During my 700-hour experience in Boolean, I gained the skills necessary for developing projects in both Front End and Back End, applying languages and frameworks such as Html, Css, Javascript, mysql, VueJs, Php, Laravel and many others.
                                            In addition, during this process, I had the opportunity to develop my analytical and problem-solving skills and learn the best practices of the web developer job.

                                            <br><br>

                                            My first work experience in the field was as a Front End Developer at Promos srl, at Promos Web 22 office, where I kept growing as a professional, developing important and complex projects, like ERP softwares and web sites made in Wordpress.

                                            <br><br>
                                            
                                            Do not hesitate to contact me to get to know us better!
                </p>
            </div>
        </section>

        <section id="experiences" class="container my-section-padding">
            <div class="row g-0">
                <div class="col-12 mb-5">
                    <h2 v-if="store.language == 'ita'" class="text-center mb-3 my-orange-text">Le mie esperienze fin'ora</h2>
                    <h2 v-if="store.language == 'eng'" class="text-center mb-3 my-orange-text">My experiences so far</h2>
    
                    <p v-if="store.language == 'ita'" class="text-center w-md-75 m-auto">Queste sono le esperienze più significative che ho affrontato durante il mio percorso. Durante queste fasi della mia vita ho potuto sviluppare e affinare le abilità di cui dispongo, rimanendo all'interno di un contesto lavorativo o simile.</p>
                    <p v-if="store.language == 'eng'" class="text-center w-md-75 m-auto">These are the most significant experiences I have faced during my journey. During these phases of my life I've been able to develop and refine my the skills, remaining within a working context or similar.</p>
                </div>

                <div class="col-12 container">
                    <div class="row flex-column flex-lg-row">
                        <RoadmapSection
                         v-for="data in data.experiences"
                         :data="data"
                        />
                    </div>
                </div>
            </div>
        </section>

        <section id="education" class="container my-section-padding">
            <div class="row g-0">
                <div class="col-12 mb-5">
                    <h2 v-if="store.language == 'ita'" class="text-center mb-3 my-orange-text">Dove ho studiato</h2>
                    <h2 v-if="store.language == 'eng'" class="text-center mb-3 my-orange-text">Where I studied</h2>

                    <p v-if="store.language == 'ita'" class="text-center w-md-75 m-auto">I miei studi sono iniziati nel campo dell'arte, per poi spostarsi sempre di più verso l'area digitale ed informatica. Durante questi periodi ho appreso l'uso di vari strumenti e tecnologie che tutt'ora mi sono utili per il mio lavoro. Ma, soprattutto, ho potuto formare il mio modo di pensare in vari ambiti, facendo tesoro delle parti migliori di ognuno di essi.</p>
                    <p v-if="store.language == 'eng'" class="text-center w-md-75 m-auto">My studies began in the field of art, and then moved more and more to the digital and computer science area. During these periods I learned the use of various tools and technologies that are still useful for my work. But, above all, I have been able to form my way of thinking in various areas, treasuring the best parts of each of them.</p>
                </div>
        
                <div class="col-12 container">
                    <div class="row flex-column flex-lg-row">
                        <RoadmapSection
                        v-for="data in data.education"
                        :data="data"
                        />
                    </div>
                </div>
            </div>
        </section>

        <router-link v-if="store.language == 'ita'" class="my-button m-auto mb-5" :to="{ name: 'home'}">Torna alla home</router-link>
        <router-link v-if="store.language == 'eng'" class="my-button m-auto mb-5" :to="{ name: 'home'}">Home page</router-link>
    </main>
</template>

<style lang="scss" scoped>
    h1 {
        margin-top: 104px;
    }

    .img-container {
        width: 350px;
        height: 350px;
        margin: 0 auto;
        margin-bottom: 7rem;

        &>img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .img-debug {
        width: 200px;
        height: 200px;
        background-color: red;
    }

    #bio {
        background-color: #5f9ea0;
    }

    @media screen and (max-width: 350px) {
        .img-container {
            width: 100%;
        }
        
    }
</style>