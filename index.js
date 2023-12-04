//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
            titre: "Dynamic Style",
            selectCard1: false,
            selectCard2: false
        };
    },

    methods: {
        selectionCard(uneCard){
            if(uneCard == 1){
                this.selectCard1 = !this.selectCard1;
            }else if(uneCard == 2){
                this.selectCard2 = !this.selectCard2;
            }
        }

    }



    //! L'application est montée sur la balise HTML qui possède l'id app
    }).mount('#app');

