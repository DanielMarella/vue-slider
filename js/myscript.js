    
    
    
    const { createApp } = Vue

    createApp({
    data() {
        return {
        images : [
            './img/assassin.jpg',
            './img/flycat.jpg',
            './img/sherif.jpg',
            './img/stylecat.webp'
            ],

        activeIndex : 0,
        }
    },

    methods: {
        prevImage(){
            if ( this.activeIndex === 0){
                this.activeIndex = this.image.length - 1;
            } else {
                this.activeIndex--;
            }
        },

        nextImage (){
            if ( this.activeIndex === this.image.length -1){
                this.activeIndex = 0;
            } else{
                this.activeIndex++;
            }
        }
    }

}).mount('#app');




