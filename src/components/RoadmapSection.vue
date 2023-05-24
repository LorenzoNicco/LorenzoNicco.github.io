<script>
    export default {
        name: "RoadmapSection",
        data() {
            return {
                experiences: [
                    {
                        company: 'Boolean',
                        title: 'Jr Full Stack Web Developer Trainee',
                        location: 'Remote',
                        duration: 'Novembre 2022 - Maggio 2023',
                        description: 'Corso teorico/pratico della durata di 6 mesi, durante il quale mi sono cimentato nella realizzazione di progetti ispirati a siti e web app realmente esistenti (ad esempio: WatsApp web, Spotify e Dropbox). I progetti realizzati durante il corso presentavano una difficoltà sempre crescente e delle scadenze variabili.'
                    },
                    {
                        company: 'The Focus',
                        title: '3D DMP Trainee',
                        location: 'Remote',
                        duration: 'Settembre 2021 - Novembre 2021',
                        description: 'Corso teorico/pratico di 2 mesi durante il quale ho realizzato vari progetti di matte painting in 2d e 3d. Per la realizzazione di questi ho sfruttato i programmi Photoshop, Maya e Nuke'
                    },
                    {
                        company: 'Esselunga spa',
                        title: 'Operaio',
                        location: 'Pistoia, Prato',
                        duration: 'Novembre 2017 - Ottobre 2021',
                        description: 'Addetto al reparto Frutta e Verdura.'
                    },
                    {
                        company: 'Grom - Il gelato come una volta',
                        title: 'Conista Junior',
                        location: 'Firenze',
                        duration: 'Luglio 2017 - Novembre 2017',
                        description: 'Esperienza svolta in gelateria a Firenze, dove ho svolto servizio diretto alla clientela, sia locale che straniera.'
                    },
                    {
                        company: 'Poste Italiane spa',
                        title: 'Postino',
                        location: 'Prato, Pistoia',
                        duration: 'Febbraio 2015 - Gennaio 2017',
                        description: 'Consegna di posta e pacchi nei comuni di Prato, Pistoia, Montemurlo, Vaiano e Vernio'
                    },
                ],
                education: [
                    {
                        company: 'Boolean',
                        title: 'Master in Web Development',
                        location: 'Remoto',
                        duration: 'Novembre 2022 - Maggio 2023',
                        description: 'Percorso di studi intensivo di 700 ore, finalizzato all\'apprendimento degli strumenti necessari allo sviluppo di siti e applicazioni web.'
                    },
                    {
                        company: 'CG Spectrum - College of Digital Art and Animation',
                        title: 'Advanced Concept Art',
                        location: 'Remoto',
                        duration: 'Novembre 2022 - Maggio 2023', //correggere
                        description: 'Percorso di studi intensivo di 700 ore, finalizzato all\'apprendimento degli strumenti necessari allo sviluppo di siti e applicazioni web.' //correggere
                    },
                    {
                        company: 'CG Spectrum - College of Digital Art and Animation',
                        title: 'Introduction to Concept Art & Illustration',
                        location: 'Remoto',
                        duration: 'Novembre 2022 - Maggio 2023', //correggere
                        description: 'Percorso di studi intensivo di 700 ore, finalizzato all\'apprendimento degli strumenti necessari allo sviluppo di siti e applicazioni web.' //correggere
                    },
                    {
                        company: 'Liceo Artistico P. Petrocchi',
                        title: 'Diploma in Architettura e Arredamento',
                        location: 'Pistoia',
                        duration: '2005 - 2011',
                        description: 'Diploma di maturità ottenuta nell\'indirizzo di studi di Architettura e Arredamento' //correggere
                    },
                ]
            }
        }
    }
</script>

<template>
    <section id="roadmap" class="container my-section-padding">
        <div class="row">
            <h2 class="col-12 text-center mb-5">Le mie esperienze fin'ora</h2>

            <div v-for="item in experiences" class="col-8 mb-5">
                <h4>{{ item.company }}</h4>

                <h5>{{ item.title }}</h5>

                <p>{{ item.location }}</p>

                <p>{{ item.duration }}</p>

                <p>{{ item.description }}</p>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>

</style>