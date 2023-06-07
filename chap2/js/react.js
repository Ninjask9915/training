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
    },
    renderTracked(e) {
        console.log('renderTracked');
        console.log(e)
    },
    renderTriggered(e) {
        console.log('renderTriggered');
        console.log(e);
    }
}).mount('#app');