//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
            titre: "EventBinding - Compteur",
            scale: 22,
            nombre: 0
        };
    },

    methods: {
        plus(scale){
            this.nombre += scale;
        },

        moins(scale){
            this.nombre -= scale;
        }
    }


    //! L'application est montée sur la balise HTML qui possède l'id app
    }).mount('#app');