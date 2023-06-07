Vue.createApp({
    data() {
      return {
        num1:0,
        num2:0,
      };
    },
    created() {
    this.$watch(
      // num1とnum2の合計の変更
        () => this.num1 + this.num2,
        (newValue, oldValue) => {
          console.log(this.num1 + this.num2);
        }
        
        // アロー関数使ってるけど意味的には以下と一緒
        // function() {
        //   return this.num1 + this.num2;
        // },
        // function(newValue, oldValue) {
        //   console.log(this.num1 + this.num2);
        // }
        
      );
    },
}).mount('#app');