Vue.createApp({
    data() {
        return {
            name: '',
            upperName: ''
        };
    },
    // 遅延処理用のdelayFuncメソッドを準備
    created() {
        this.delayFunc = _.debounce(this.getUpper, 2000);
    },
    // nameプロパティが変化下時にdelayFuncメソッドを呼び出し
    watch: {
        name(newValue, oldValue) {
            this.delayFunc();
        }
    },
    methods: {
        // nameの値を大文字に変換したものをupperNameプロパティに設定
        getUpper() {
            this.upperName = this.name.toUpperCase();
        }
    }
}).mount('#app');


// 算出プロパティの場合
// Vue.createApp({
//   data() {
//     return {
//       name: '',
//     };
//   },
//   computed: {
//     upperName() {
//       return this.name.toUpperCase();
//     }
//   },
// }).mount('#app');