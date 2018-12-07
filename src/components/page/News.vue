
<template>
	<div class="News">
        <!-- banner -->
        <v-banner></v-banner>
        <!-- 罗山湖新闻 -->
        <div id="six" class="fnumber">
            <div id="six-box">
                <h2 class="six-tit"><span style="color:#f00"></span> LUOSHANHU NEWS</h2>
                <p class="six-titnr">罗山湖新闻 </p>
                <div class="sixImg-bigbox">
                    <div class="sixImg-box">
                        <ul class="sixImg-content clearfix row">
                            <li class="col-lg-offset-2 col-lg-2 col-md-6 col-sm-offset-0 col-sm-6 col-xs-12" v-for="(item,index) in newsList" :key="index" @click="toNewsDetail(item.id)">
                            <a href="javascript:;">
                                <div class="sixImg-mark"></div>
                                <img :src="item.cover_pic" alt="">
                                <div class="sixImg-hide">
                                    <p>{{item.content}}</p>
                                </div>
                                <div class="sixImg-bottom">
                                    <span>{{item.title }}</span>
                                    <p>时间：{{item.time}}</p>
                                </div>
                            </a></li>
                        </ul>
                    </div>
                    <div class="six-left"></div>
                    <div class="six-right"></div>
                </div>
            </div>
        </div>
        <!-- 新闻列表 -->
        <div class="banner-bottom container-fluid">
            <div id="nine" class="fnumber">
				<div id="nine-box">
					<h2 class="nine-tit" style="opacity: 1;">新闻，彼此共认同。</h2>
					<p class="nine-titnr" style="opacity: 1;">开启一场民族之旅</p>
					<div class="nine-content"></div>
					<div class="nine-content">
							
						<div class="nine-left">
							<div class="xwtit">
								<i class="fa fa-newspaper-o" aria-hidden="true"></i>新闻
							</div>
							<ul style="opacity: 1; margin-left: 0px;">
								<li v-for="(item,index) in newsList" :key="index" @click="toNewsDetail(item.id)">
									<div class="xwtop">{{item.title }}</div>
									<div class="xwbottom">时间：{{item.time}};   <span>介绍</span>浏览次数：{{item.clicks}}</div>
								</li>
							</ul>
							<div class="nine-xwbottom" @click="openAll">
								展开全部
							</div>
						</div>
						<div class="nine-right" style="opacity: 1; margin-right: 0px;">
							<div class="rddttit"><i class="fa fa-gitlab" aria-hidden="true"></i>热点动态</div>
							<div class="right-mask">
								<ul style="margin-top: -240px;">
									<li v-for="(item,index) in newsList" :key="index" @click="toNewsDetail(item.id)">
										<a href="javascript:;">{{item.title}}</a></li>
								</ul>
							</div>
						</div>

					</div>
				</div>
			</div>
        </div>
        <div class="subbot">当前位置：<a><li class="">关于罗山湖</li></a>&nbsp;&nbsp;&gt;&nbsp;&nbsp;新闻中心</div>
	</div>
</template>
<script>
import vBanner from '../common/Banner.vue';
import bus from '../common/bus';
    export default {
	    data() {
	        return{
	            newsList:[],
	            collapse: false
	      	}
	    },
        components:{
            vBanner
        },
	    created() {
	    	bus.$on('collapse', msg => {
                this.collapse = msg;
            })
	    	this.fetchData();
	    },
	    methods:{
	    	fetchData() {
	    		var self = this;
	    		self.$axios(self.$ApiSetting.serviceModule.getNewsListOrderByTime)
				    .then((data)=>{
				      	if(data.status == "200") {
				      		console.log(data.data.data)
		                    self.newsList = data.data.data;
		                    this.success();
		                }
				    },(error)=>{
				      console.log(error)	
				    })
	    	},
	    	success() {
	    		$(".nine-left").css({
                    "background":"none"
                })
                $(".nine-right").css({
                    "background":"none"
                })
                $(".sixImg-bigbox").css({
                    "background":"none"
                })
	    	},
	    	toNewsDetail(id) {
	    		this.$router.push('/NewsDetail?newsId='+id)
	    		this.$router.go(0)
	    	},
	    	openAll(e){
	    		// 新闻===========================================
				if($(e.currentTarget).html().trim() == "展开全部") {
					$('.nine-left').css({
						height:'auto',
						overflow: ''
					});
					$('.nine-left ul').css({
						height:'auto'
					});
					$(e.currentTarget).html('收起');
				}else{
					$('.nine-left').css({height:'392px'});
					$('.nine-left ul').css({height:'302px'});
					$('#nine-box').css({height:'700px'});
					$('#nine').css({height:'700px'});
					$(e.currentTarget).html('展开全部');
				}
	    	},
	    	getTimeStr(timeStr) {
	    		return this.timeStr.split(' ')[0]
	    	}
	    }
    }
</script>
<style type="text/css">
	#eight-box{
        background: url(../../static/images/loading.gif) 50% 60% no-repeat;
    }
    .nine-left,
    .nine-right,
    .sixImg-bigbox{
    	background: url(../../static/images/loading.gif) 50% 60% no-repeat;
    }
</style>

