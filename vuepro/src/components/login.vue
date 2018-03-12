<template>
 <div class="loginbox">
    <h2>手机号快速登录</h2>
        <form action="">
            <input type="text" placeholder="请输入手机号">
            <input type="text" placeholder="请输入密码">
            <input class="tj" type="submit" value="登陆"/>
            
    </form>
    <a href="#">账号密码登录</a>
    <a href="#/reg">新用户注册</a>

    <div class="regb">
        <div class="reg-t">
            <hr/>
            <span>其他方式登录</span>
            <hr/>     
        </div>
        <div class="a-bot">
            <a href="#"><i class="iconfont icon-weixin"></i></a>
            <a href="#"><i class="iconfont icon-qq"></i></a>
            <a href="#"><i class="iconfont icon-sina"></i></a>
        </div>
       
    </div>  
 </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
     
    }
  },
  mounted:function () {
      this.$emit("disper",{
      top:"",
      bottom:false
      })
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html {
  background: #f5f5f5; }
.loginbox{
  background: #f5f5f5;
}

body {
  widows: 100%;
  height: 100%;
   background: #f5f5f5;
   }
  body h2 {
    font-size: 0.2rem;
    text-align: center;
    color: #555;
    line-height: 1.5rem; }
  body form {
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column; }
    body form input {
      width: 3rem;
      height: 0.53rem;
      outline: none;
      border: none;
      background: #f5f5f5;
      border-bottom: 2px solid #e3e3e3; }
    body form .tj {
      outline: none;
      border: none;
      font-size: 0.14rem;
      background: #00bf99;
      line-height: 0.4rem;
      color: white;
      margin-top: 0.25rem; }
  body a {
    color: #828282;
    font-size: 10px;
    text-align: center;
    line-height: 0.62rem; }
  body .regb .reg-t {
    display: flex;
    align-items: center;
    line-height: 0.65rem;
    padding: 0 0.5rem; }
    body .regb .reg-t hr {
      width: 0.6rem;
      color: #ddd; }
    body .regb .reg-t span {
      color: #ccc;
      font-size: 10px;
      margin: 0.2rem auto; }
  body .regb .a-bot {
    display: flex;
    justify-content: center; 
    padding-bottom: 0.3rem;}
    body .regb .a-bot a {
      display: block;
      margin: 0 0.1rem;
      width: 0.4rem;
      text-align: center;
      line-height: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
      border: 1px solid #e2e2e2; }


</style>
