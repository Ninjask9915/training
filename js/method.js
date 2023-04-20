Vue.createApp({
    data: function() {
        return {
            email: 'S-Ohtani@example.com'
        };
    },
    methods : {
        localEmail: function() {
            return this.email.split('@')[0].toLowerCase();
        }
    }
}).mount('#app');