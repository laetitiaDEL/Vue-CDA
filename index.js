//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
            titre: "TP - Dynamic styling",
            classInput: "",
            colorInput: "",
            display: true,
            classHello: false,
            classWorld: false,
            color: false
        };
    },

    methods: {
        displayP1(){
            this.display = !this.display;
        }
    },

    watch: {
        classInput(){
            if(this.classInput == "hello"){
                this.classHello = !this.classHello;
            }
            if(this.classInput == "world"){
                this.classWorld = !this.classWorld;
            }
        }
    },

    computed: {
        setClass(){
            return {
            maClasseWorld: this.classWorld ? true : false, maClasseHello: this.classHello ? true : false, maClasseVisible: this.display ? true : false,maClasseHidden: !this.display ? true : false
            }
        }
    }



    //! L'application est montée sur la balise HTML qui possède l'id app
    }).mount('#app');

