<script>
    import RoadmapSection from "../components/RoadmapSection.vue";
    export default {
        name: "AppBio",
        components: {
            RoadmapSection
        },
        data() {
            return {
                data: {
                    experiences: [
                        {
                            id: 'The-Focus',
                            company: 'The Focus',
                            title: '3D DMP Trainee',
                            location: 'Remote',
                            duration: 'Settembre 2021 - Novembre 2021',
                            description: 'Corso teorico/pratico di 2 mesi durante il quale ho realizzato vari progetti di matte painting in 2d e 3d. Per la realizzazione di questi ho sfruttato i programmi Photoshop, Maya e Nuke'
                        },
                        {
                            id: 'Boolean-experience',
                            company: 'Boolean',
                            title: 'Jr Full Stack Web Developer Trainee',
                            location: 'Remote',
                            duration: 'Novembre 2022 - Maggio 2023',
                            description: 'Corso teorico/pratico della durata di 6 mesi, durante il quale mi sono cimentato nella realizzazione di progetti ispirati a siti e web app realmente esistenti (ad esempio: WatsApp web, Spotify e Dropbox). I progetti realizzati durante il corso presentavano una difficoltà sempre crescente e delle scadenze variabili.'
                        },
                        {
                            id: 'Promos-web-22',
                            company: 'Promos Web 22',
                            title: 'Sviluppatore web',
                            location: 'Pieve a Nievole (PT)',
                            duration: 'Maggio 2023 - Presente',
                            description: 'Sviluppo e manutenzione dei siti web e gestionali dei clienti.'
                        },
                    ],
                    education: [
                        {
                            id: 'Liceo-Petrocchi',
                            company: 'Liceo Artistico P. Petrocchi',
                            title: 'Diploma in Architettura e Arredamento',
                            location: 'Pistoia',
                            duration: '2005 - 2011',
                            description: 'Diploma di maturità ottenuta nell\'indirizzo di studi di Architettura e Arredamento' //correggere
                        },
                        {
                            id: 'CG-Spectrum-certificate',
                            company: 'CG Spectrum - College of Digital Art and Animation',
                            title: 'Introduction to Concept Art & Illustration',
                            location: 'Remoto',
                            duration: 'Novembre 2022 - Maggio 2023', //correggere
                            description: 'Percorso di studi intensivo di 700 ore, finalizzato all\'apprendimento degli strumenti necessari allo sviluppo di siti e applicazioni web.' //correggere
                        },
                        {
                            id: 'CG-Spectrum-diploma',
                            company: 'CG Spectrum - College of Digital Art and Animation',
                            title: 'Advanced Concept Art',
                            location: 'Remoto',
                            duration: 'Novembre 2022 - Maggio 2023', //correggere
                            description: 'Percorso di studi intensivo di 700 ore, finalizzato all\'apprendimento degli strumenti necessari allo sviluppo di siti e applicazioni web.' //correggere
                        },
                        {
                            id: 'Boolean-education',
                            company: 'Boolean',
                            title: 'Master in Web Development',
                            location: 'Remoto',
                            duration: 'Novembre 2022 - Maggio 2023',
                            description: 'Percorso di studi intensivo di 700 ore, finalizzato all\'apprendimento degli strumenti necessari allo sviluppo di siti e applicazioni web.'
                        },
                    ]
                }
            }
        }
    }
</script>

<template>
    <main>
        <h1 class="text-center my-section-padding">Questo sono io 👋</h1>

        <div class="d-flex justify-content-center align-items-center">
            <div class="img-debug"></div>
        </div>

        <section id="bio" class="container my-section-padding">
            <div class="row justify-content-center">

                <h2 class="col-12 text-center mt-5 mb-3">Chi sono</h2>

                <p class="col-8 text-center">Da amante di costruzioni ed enigmi, costruisco pagine e risolvo problemi su Internet per passione e per lavoro. Come Web Developer dedico estrema attenzione ai dettagli e cerco continuamente di imparare nuovi linguaggi e strumenti.
                                            
                                            <br><br>

                                            Durante la mia esperienza di 700 ore in Boolean, ho acquisito le competenze necessarie per lo sviluppo di progetti sia in Front End che in Back End, applicando linguaggi e frameworks come Html, Css, Javascript, MySql, VueJs, Php, Laravel e altri.
                                            Inoltre, durante questo percorso, ho avuto l'opportunità di affinare le mie doti di analisi e risoluzione dei problemi e di apprendere i migliori metodi di svolgimento del lavoro di sviluppatore web.

                                            <br><br>
                                            
                                            Non esitate a contattarmi per conoscerci meglio!
                </p>
            </div>
        </section>

        <section id="experiences" class="container my-section-padding">
            <div class="row g-0">
                <div class="col-12 mb-5">
                    <h2 class="text-center mb-3">Le mie esperienze fin'ora</h2>
    
                    <p class="text-center w-75 m-auto">Queste sono le esperienze più significative che ho affrontato durante il mio percorso. Durante queste fasi della mia vita ho potuto sviluppare e affinare le abilità di cui dispongo, rimanendo all'interno di un contesto lavorativo o simile.</p>
                </div>

                <RoadmapSection
                 v-for="data in data.experiences"
                 :data="data"
                />
            </div>
        </section>

        <section id="education" class="container my-section-padding">
            <div class="row g-0">
                <div class="col-12 mb-5">
                    <h2 class="text-center mb-3">Dove ho studiato</h2>

                    <p class="text-center w-75 m-auto">I miei studi sono iniziati nel campo dell'arte, per poi spostarsi sempre di più verso l'area digitale ed informatica. Durante questi periodi ho appreso l'uso di vari strumenti e tecnologie che tutt'ora mi sono utili per il mio lavoro. Ma, soprattutto, ho potuto formare il mio modo di pensare in vari ambiti, facendo tesoro delle parti migliori di ognuno di essi.</p>
                </div>
        
                <RoadmapSection
                v-for="data in data.education"
                :data="data"
                />
            </div>
        </section>

        <router-link class="my-button m-auto mb-5" :to="{ name: 'home'}">Torna alla home</router-link>
    </main>
</template>

<style lang="scss" scoped>
    h1 {
        margin-top: 104px;
    }

    .img-debug {
        width: 200px;
        height: 200px;
        background-color: red;
    }
</style>