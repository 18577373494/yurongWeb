<template>
	<div class="Contact">
		<!-- banner -->
        <v-banner></v-banner>
        <!-- banner -->
        <div class="banner-bottom container-fluid">
        	<div style="text-align: center; margin-bottom: 40px;"><p style="color: rgb(255, 0, 0); font-weight: 700; font-size: 36px;">Contact US</p>
                -----------联系我们-----------
            </div>
			<div class="shuxin">
				<dl class="addressdl">
					<dt>桂林机场·罗山湖旅游度假区2014-2015 <br/>        地址：桂林市临桂县两江镇两江大道1008号 <br/> 
                    电话：400-0773-626  <br/> 
                    传真：0773-3200982  <br/> 
					</dt>
				</dl>
				<dl class="imgdl">
					<img src="static/images/contactus.jpeg"/>
				</dl>
			</div>	
        </div>
        <div class="subbot">当前位置：<a><li class="">关于罗山湖</li></a>&nbsp;&nbsp;&gt;&nbsp;&nbsp;联系我们</div>
	</div>
</template>
<script>
import vBanner from '../common/Banner.vue';
import bus from '../common/bus';
    export default {
        data(){
            return {
                collapse: false
            }
        },
        components:{
            vBanner
        },
        created(){
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>