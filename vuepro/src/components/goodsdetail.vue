<template>
  <div>
  <p>商品编号：{{goodsdetail.goodsid}}</p>
  <p>商品名称：{{goodsdetail.goodsname}}</p>
  </div>
</template>

<script>
var goodslist=[
    {"goodsid":"01001","goodsname":"铅笔","goodsprice":12},
    {"goodsid":"01002","goodsname":"钢笔","goodsprice":25}
];
function searchgoodsdetail(goodsid){
     for(let i=0;i<goodslist.length;i++){
        if(goodslist[i].goodsid==goodsid){
             return goodslist[i];
        }
     }
    return null
}
export default {
  name: 'HelloWorld',
  computed: {
    goodsdetail: function () {
      return searchgoodsdetail(this.$store.state.id);      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p{
       color:red;
       background-color:green
  }

</style>
