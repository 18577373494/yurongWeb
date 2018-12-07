<template>
	<div class="ServiceInfo">
		<div class="banner jumbotron masthead">
			<p style="color:#f00;font-size:30px">罗山湖服务 MIDEI ServiceInfo</p>
			<div class="ntop">
				<h2 class="ntitle">不忘初心，再上征程 第四届思美青年会总结大会顺利举行</h2>
				<p ><span class="ntime">2017-12-16&nbsp;&nbsp;&nbsp;&nbsp;2888评</span></p>
			</div>
			<div style="text-align: center;">
               	<img src="static/images/zw.jpg" width="800" height="600">
            </div>
	     </div>
		<div class="subbot">当前位置：<a><router-link to="News" tag="li">新闻中心</router-link></a>&nbsp;&nbsp;&gt;&nbsp;&nbsp;罗山湖服务</div>
	</div>
</template>
<script>
    export default{
    	data() {
	        return{
	            
	        }
	      },
        methods:{
            back (){
                 this.$router.go(-1)
            }
        }
    }
</script>