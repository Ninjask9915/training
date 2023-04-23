Vue.createApp({
    data() {
        return {
            email:'S-Ohtani.com'
        }
    },
    computed: {
        localEmail() {
            return this.email.split('@')[0].toLowerCase();
        }
    }
}).mount('#app');