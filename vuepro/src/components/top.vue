<template>
  <!-- <div class="topcss">
    {{msg}}
  </div> -->
     <header>
        <span>西安&nbsp;&nbsp;<img src="../assets/img/hicon1.png"/></span>
        <p><img src="../assets/img/hicon2.png"/>&nbsp; <input type="text" placeholder="锦祥沧锅城"/></p>
        <img src="../assets/img/hicon3.png"/>
    </header>
  
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      // msg: '我是顶部'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

header {
  width: 100%;
  height: 0.47rem;
  display:flex;
  overflow: hidden;
  align-items: center;
  justify-content: space-around; }
  header span {
    color: #6a6a6a;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.14rem; }
    header span img {
      
      width: 10px;
      height: 6px; }
  header p {
    width: 2.07rem;
    height: 0.29rem;
    display: flex;
    color: #6e6e6e;
    border-radius: 20px;
    font-size: 12px;
    align-items: center;
    justify-content: center;
    background: #eee; }
    header p img {
      width: 15px;
      height: 14px; }
    header p input {
      background: #eee;
      border: none;
      display: block; }
  header img {
    width: 17px;
    height: 16px; }

</style>
