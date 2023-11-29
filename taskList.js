//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
            titre: "TP DataBinding - Profile User",
            prenom: "Mario",
            age: 45,
            lien: "https://picsum.photos/200"
        };
    },

    methods: {
        age10(){
            return this.age +10;
        },

        randomNb(){
            return Math.random();
        }
    }


    //! L'application est montée sur la balise HTML qui possède l'id app
    }).mount('#app');