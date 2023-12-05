//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
            titre: "Conditionnal rendering",
            mesFilms: [],
            nomFilm: ""
        };
    },

    methods: {
        addFilm(){
            this.mesFilms.push(this.nomFilm);
        },

        supprFilm(i){
            this.mesFilms.splice(i, 1);
        }
    }



    //! L'application est montée sur la balise HTML qui possède l'id app
    }).mount('#app');

