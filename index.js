//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
            titre: "Bug",
            scale: 1,
            nombre: 0,
            user: ""
        };
    },

    computed: {
        userName(){
            console.log("fonction executée");
            if(this.user == ""){
                return "test";
            }else{
                return "un autre test"
            }
        }
    },

    methods: {
        plus(scale){
            this.nombre += scale;
        },

        moins(scale){
            this.nombre -= scale;
        },

    }


    //! L'application est montée sur la balise HTML qui possède l'id app
    }).mount('#app');

