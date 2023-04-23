Vue.createApp({
    data() {
        return {
            // 現在日時
            current: new Date()
        };
    },
    // 起動時にタイマーを設定
    created() {
        this.timer = setInterval(() => {
            this.current = new Date();
        }, 1000);
    },
    // 終了時にタイマーを破棄
    beforeUnmount() {
        clearInterval(this.timer);
    }
}).mount('#app');