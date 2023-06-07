Vue.createApp({
    data: function() {
        return {
            email: 'S-Ohtani@example.com'
        };
    },
    computed : {
        localEmail: function() {
            return this.email.split('@')[0].toLowerCase();
        }
    }
}).mount('#app');