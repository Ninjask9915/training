Vue.createApp({
    data() {
        return {
            message: 'こんにちは、世界！！'
        };
    },
    mounted() {
        this.message = 'はじめまして、Vue.js!!!'
        // <div id="app">配下にmessageプロパティの内容が含まれているか
        // console.log(this.$el.textContent.includes(this.message));
        this.$nextTick(() => {
            console.log(this.$el.testContent.includes(this.message));
        });
    }
}).mount('#app');