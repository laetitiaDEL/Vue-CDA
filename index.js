//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
            titre: "TP-Event Binding",
            p1: "",
            p2: ""
        };
    },

    methods: {
        alerte(){
            alert("T'as tout cassé...");
        },
        defP1(event){
            this.p1 = event.target.value;
        },
        defP2(event){
            this.p2 = event.target.value;
        }
    }


    //! L'application est montée sur la balise HTML qui possède l'id app
    }).mount('#app');


    