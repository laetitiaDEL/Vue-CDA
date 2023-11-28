//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
        livres: ["Le Hobbit", "Harry Potter et l'Ordre du Phoenix", "Dune"],
        titrePage: 'Mes Livres'
    };
    },


    //! L'application est montée sur la balise HTML qui possède l'id app
    }).mount('#app');