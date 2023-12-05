//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
            titre: "TP - Conditionnal Rendering / List Rendering",
            maListe: [],
            textBtn: "Masquer liste",
            element: "",
            display: true
        };
    },

    methods: {
        addElem(){
            this.maListe.push(this.element);
        },

        supprFilm(i){
            this.mesFilms.splice(i, 1);
        },

        displayListe(){
            this.display = !this.display;
            if(this.textBtn == "Masquer liste"){
                this.textBtn = "Afficher liste";
            }else{
                this.textBtn = "Masquer liste";
            }
        }
    },

    computed: {
        setClass(){
            return {
             maClasseVisible: this.display ? true : false,maClasseHidden: !this.display ? true : false
            }
        }
    }



    //! L'application est montée sur la balise HTML qui possède l'id app
    }).mount('#app');

