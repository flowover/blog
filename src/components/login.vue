<template>
  <div>
    <div class="login">
      <div class="info">
      <input type="text" placeholder="请输入账号">
      <input type="password" placeholder="请输入密码">
      </div>
      <div>
        <button @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    login() {
      console.log(123456768)
      let str = "12345678"
      let arr = str.split("").reverse();
      console.log(arr)
      let res = [];
      for(let i = 0; i < arr.length; i++){
        res.push(arr[i]);
        if ((i + 1) % 3 === 0) {
          res.push(",");
        }
      }
      console.log(res.reverse())
      console.log(res.reverse().join("-"))
    // this.$http.get('/oauth/login').then(res =>{
      //   console.log(res, 123456)
      // }).catch(error=>{
      //   console.log(error)
      // }
      // )
    },

  }
}
</script>

<style>
  .login{
    width:300px;
    height: 300px;
    background: #2395df;
  }
</style>