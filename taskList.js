//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
        livres: [{titre: "Le Hobbit", auteur: "J.R.R. Tolkien", annee: 1937}, {titre:"Harry Potter et l'Ordre du Phénix", auteur: "J.K. Rowling", annee: 2003}, {titre: "Dune", auteur: "F. Herbert", annee: 1935}],
        titrePage: 'Mes Livres',
        titreLivre: '',
        auteurLivre: '',
        anneeLivre: ''
        };
    },

    methods: {
        ajouterLivre(){
            let newLivre = {
                titre: this.titreLivre,
                auteur: this.auteurLivre,
                annee: this.anneeLivre
            };
            this.livres.push(newLivre);
        }
    }


    //! L'application est montée sur la balise HTML qui possède l'id app
    }).mount('#app');