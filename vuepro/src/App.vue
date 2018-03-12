<template>
  <div id="app">
    <!-- <top></top> -->
   <component v-bind:is="currentView" >

    </component> 

    <router-view v-on:myevent="changefunc" v-on:backtop="changefunc1" v-on:disper="changefunc2"> </router-view>
 
   <bottom v-show="isShow"></bottom>
  </div>
</template>

<script>
import top from './components/top';
import bottom from './components/bottom';
import ordertop from './components/ordertop'
export default {
  name: 'App',
  components:{
    top,bottom,ordertop
  },
   data:function(){
      return{
        currentView:"top",
        isShow:true
      }
    },

    methods:{
       
        changefunc:function(tops)
        {
              this.currentView=tops.ordertop;
              this.isShow=tops.bottom;
        },
        changefunc1:function(tops)
        {
              this.currentView=tops.top;
              this.isShow=tops.bottom;
        },
        changefunc2:function(tops)
        {
              this.currentView=tops.top;
              this.isShow=tops.bottom;
        }


    }
    
}
</script>

<style>
 @import 'assets/font/iconfont.css';
#app {
  width:100%;
  height:100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
