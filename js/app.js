// Tu código aquí.

Vue.createApp({
    data() {
        return {
            count: 0,
            color: ''
        }
    },

    methods: {
        addCount(){
            this.count++
            this.count > 0 ? this.color = 'text-success': this.color && this.count == 0 ? this.color = '' : this.color
        },
        lowerCount(){
            this.count--
            this.count < 0 ? this.color = 'text-danger' : this.color && this.count == 0 ? this.color = '' : this.color
        }
    
    }
}).mount('#app')