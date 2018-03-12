<template>
  <div class="goodslistcss">
    <ul>
		<li v-for="item in goodslist">
		<p @click="goGoodsdetail(item.goodsid)">商品编号:{{item.goodsid}}</p>
			<p>商品名称:{{item.goodsname}}</p>
			<p>商品价格:{{item.goodsprice}}</p>
		</li>
	</ul>
  </div>
</template>

<script>
export default {
  name: 'goodslist',
methods:{
	goGoodsdetail:function(goodsid){
		 this.$store.state.id=goodsid;
		 this.$router.push({ path: '/goodsdetail',name:"goodsdetail",params: { goodsid:goodsid}});
	}
},
  data () {
    return {
      goodslist: [
		{"goodsid":"01001","goodsname":"铅笔","goodsprice":12},
		{"goodsid":"01002","goodsname":"钢笔","goodsprice":25},
		{"goodsid":"01003","goodsname":"毛笔","goodsprice":50}
	  ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goodslistcss{
	width:1000px;
	height:400px;
	background-color:gray;
}
</style>
