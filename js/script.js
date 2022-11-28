const { createApp } = Vue;

createApp({
    data(){
        return{
            activeImage : 0,

            slides : [
                {
                    images: 'img/01.webp',
                    titles: 'Marvel\'s Spiderman Miles Morale',
                    texts: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    images: 'img/02.webp',
                    titles: 'Ratchet & Clank: Rift Apart',
                    texts: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    images: 'img/03.webp',
                    titles: 'Fortnite',
                    texts: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    images: 'img/04.webp',
                    titles: 'Stray',
                    texts: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    images: 'img/05.webp',
                    titles: "Marvel's Avengers",
                    texts: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]
        }
    },
    methods: {
        nextImage(){       
            this.activeImage++    
            if(this.activeImage >= this.slides.length){
                this.activeImage = 0
            }
        },
        prevImage(){        
            if(this.activeImage === 0){
                this.activeImage = this.slides.length
            }
            this.activeImage--
        }

    }   
}).mount("#app")
