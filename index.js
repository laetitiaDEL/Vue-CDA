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
                if(this.selectCard1 == false){
                    this.selectCard1 = true;
                }else{
                    this.selectCard1 = false;
                }
            }else if(uneCard == 2){
                if(this.selectCard2 == false){
                    this.selectCard2 = true;
                }else{
                    this.selectCard2 = false;
                }
            }
        }

    }



    //! L'application est montée sur la balise HTML qui possède l'id app
    }).mount('#app');

