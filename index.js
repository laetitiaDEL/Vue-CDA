//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
            titre: "Réactivité",
            nombre: 0,
            user: "",
            msg: ""
        };
    },

    methods: {
        plus(scale){
            this.nombre += scale;
        },

        moins(scale){
            this.nombre -= scale;
        },
    },

    watch: {
        nombre(){
            if(this.nombre<7){
                this.msg = "Essaie encore !";
            }else if(this.nombre == 7){
                this.msg = "7";
            }else{
                this.msg = "Tu as dépassé le nombre mystère.";
                if(this.nombre > 30){
                    this.msg = "Beaucoup trop loin...";
                    setTimeout(() => {
                        this.nombre = 0;
                        this.msg = "";
                    }, "3000");
                }
            }
        }
    }



    //! L'application est montée sur la balise HTML qui possède l'id app
    }).mount('#app');

