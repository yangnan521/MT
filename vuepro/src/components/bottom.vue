<template>
  <!-- <div class="bottomcss">
    {{msg}}
  </div> -->
  <footer>
        <a href="#/sec"  class="home"><i class="iconfont icon-home"></i>首页</a>
        <a href="#"><i class="iconfont icon-fujin"></i>附近</a>
        <a href="#"><i class="iconfont icon-caidaniconfaxianhui"></i>发现</a>
        <a href="#/ordersec"><i class="iconfont icon-danju"></i>订单</a>
        <a href="#/login" ><i class="iconfont icon-jinakangbaoicons25"></i>我的</a>
</footer>
</template>

<script>
// import 'assets/font/iconfont.css'
export default {
  name: 'bottom',
  data () {
    return {
      // msg: '我是底部'
    }
  }
}
</script>

<style scoped>
footer {
  width: 100%;
  height: 0.51rem;
  display: flex; }
  footer a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    flex-direction: column;
    font-size: 12px;
    color: #949494; }
    footer a i {
      color: #616161;
      font-weight: 900; }
      footer a i:hover {
        color: #05c3a9; }
    footer a:hover {
      color: #05c3a9; }
</style>
