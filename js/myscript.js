    
    
    
    const { createApp } = Vue

    createApp({
    data() {
        return {
        message: 'Which cat are you today?'
        }

        images : [
            '../img/assassin.jpg'
            '../img/flycat.jpg'
            '../img/sherif.jpg'
            '../img/stylecat.webp'
        ],

        activeIndex : 0,

    },






    }).mount('#app')