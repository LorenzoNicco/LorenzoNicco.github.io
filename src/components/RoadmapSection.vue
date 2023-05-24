<script>
    export default {
        name: "RoadmapSection",
        data() {
            return {
                experiences: [
                    {
                        title: 'Boolean',
                        role: 'Jr Full Stack Web Developer Trainee',
                        location: 'Remote',
                        duration: 'Novembre 2022 - Maggio 2023',
                        description: 'Corso teorico/pratico della durata di 6 mesi, durante il quale mi sono cimentato nella realizzazione di progetti ispirati a siti e web app realmente esistenti (ad esempio: WatsApp web, Spotify e Dropbox). I progetti realizzati durante il corso presentavano una difficoltà sempre crescente e delle scadenze variabili.'
                    },
                    {
                        title: 'The Focus',
                        role: '3D DMP Trainee',
                        location: 'Remote',
                        duration: 'Settembre 2021 - Novembre 2021',
                        description: 'Corso teorico/pratico di 2 mesi durante il quale ho realizzato vari progetti di matte painting in 2d e 3d. Per la realizzazione di questi ho sfruttato i programmi Photoshop, Maya e Nuke'
                    },
                    {
                        title: 'Esselunga spa',
                        role: 'Operaio',
                        location: 'Pistoia, Prato',
                        duration: 'Novembre 2017 - Ottobre 2021',
                        description: 'Addetto al reparto Frutta e Verdura.'
                    },
                    {
                        title: 'Grom - Il gelato come una volta',
                        role: 'Conista Junior',
                        location: 'Firenze',
                        duration: 'Luglio 2017 - Novembre 2017',
                        description: 'Esperienza svolta in gelateria a Firenze, dove ho svolto servizio diretto alla clientela, sia locale che straniera.'
                    },
                    {
                        title: 'Poste Italiane spa',
                        role: 'Postino',
                        location: 'Prato, Pistoia',
                        duration: 'Febbraio 2015 - Gennaio 2017',
                        description: 'Consegna di posta e pacchi nei comuni di Prato, Pistoia, Montemurlo, Vaiano e Vernio'
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
                <h4>{{ item.title }}</h4>

                <h5 v-if="item.role != ''">{{ item.role }}</h5>

                <p>{{ item.location }}</p>

                <p>{{ item.duration }}</p>

                <p v-if="item.description != ''">{{ item.description }}</p>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>

</style>