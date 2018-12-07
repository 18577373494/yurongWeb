<template>
	<div class="NewsDetail">
		<div class="new-top f-cb">
	        <div class="fl">
	            <span class="sp1">罗山湖新闻</span><span class="sp2"><span class="i">NEWS</span> CENTER</span>
	        </div>
	    </div>
		<div class="con" >
			<p class="title">{{newsList.title}}</p>
			<p class="time">时间：{{newsList.time}};&nbsp;&nbsp;&nbsp;&nbsp;   <!-- 浏览次数：{{newsList.clicks}} --></p>
            <p class="desc">
				{{newsList.content}}
			</p>
			<p class="pic" v-for="(item,index) in picList" :key="index">
				<img :src="item" alt="" width="800" height="557" title="" align=""><br>
			</p>
            <div class="bot" style="transform: translate(0px, 0px); opacity: 1;">
                <div class="bot-l fl">
                    <span @click="preToNewsDetail()">上一篇：<a href="javascript:;">{{preTitle}}</a></span>
                    <span @click="nextToNewsDetail()">下一篇 : <a href="javascript:;" >{{nextTitle}}</a></span>
                </div>
                <div class="bot-r fr">
                    <a @click="back">back</a>
                </div>
            </div>
	     </div>
		<div class="subbot">当前位置：<a><router-link to="News" tag="li">新闻中心</router-link></a>&nbsp;&nbsp;&gt;&nbsp;&nbsp;罗山湖新闻</div>
	</div>
</template>
<script>
    export default{
	    methods:{
	    	fetchData() {
	    		var self = this;
	    		self.$axios(self.$ApiSetting.serviceModule.getNewsById.url+"?id="+self.newsId)
				    .then((data)=>{
				      	if(data.status == "200") {
				      		self.newsList = data.data.data;
				      		self.picStr=self.newsList.pic;

				      		this.success()

				      		if(self.picStr != null) {
				      			self.picObj="string".replace(/(.)(?=[^$])/g,"$1,").split(",");
								self.picList  = self.picStr.split(",");
				      		}
		                }
				    },(error)=>{
				      console.log(error)	
				    })
	    	},
	    	success() {
	    		$(".NewsDetail .con p.title").css({
					"height": "auto", 
			        "background": "none"
			    })
	    	},
	    	fetchPre(){
	    		var self = this;
	    		self.$axios(self.$ApiSetting.serviceModule.getNewsListOrderByTime)
				    .then((data)=>{
				      	if(data.status == "200") {
				      		for (var i = data.data.data.length - 1; i >= 0; i--) {
				      			if(data.data.data[i].id == self.newsId-1){
				      				self.preId=data.data.data[i].id
	            					self.preTitle=data.data.data[i].title
				      			}
				      			if(data.data.data[i].id == parseInt(self.newsId)+1){
				      				self.nextId = data.data.data[i].id
	            					self.nextTitle=data.data.data[i].title
				      			}
				      		};
		                }
				    },(error)=>{
				      console.log(error)	
				    })
	    	},
	    	preToNewsDetail() {
	    		this.$router.push('/NewsDetail?newsId='+this.preId)
	    		this.$router.go(0)
	    	},
	    	nextToNewsDetail() {
	    		this.$router.push('/NewsDetail?newsId='+this.nextId)
	    		this.$router.go(0)
	    	},
            back (){
                 this.$router.go(-1)
            }
        },
        created() {
        	this.newsId = this.$route.query.newsId;
        	console.log(this.$route.query.newsId)
	    	this.fetchData();
	    	this.fetchPre();
	    },
	    data() {
	        return{
	        	newsList:[],
	        	picList:[],
	        	picStr:'',
	        	picObj:{},
	            newsId:0,
	            preId:0,
	            preTitle:'',
	            nextId:0,
	            nextTitle:'',
	        }
	    },
    }
</script>
<style>
	/*新闻详情===========================================*/
	.NewsDetail{
		width: 90%;
		margin: 0px auto;
	}
	.NewsDetail .new-top{
		  padding: 25px 0 35px;
	}
	.NewsDetail .fl {
	    float: left;
	    display: inline;
	}
	.NewsDetail .new-top .sp1 {
	    font-size: 26px;
	    line-height: 30px;
	    color: #666;
	    margin-right: 12px;
	}
	.NewsDetail .new-top .sp2 {
	    font-size: 24px;
	    line-height: 30px;
	    font-family: "Arial";
	    text-transform: uppercase;
	    color: #000;
	    font-weight: bold;
	}
	.NewsDetail .new-top .sp2 .i {
	    color: #d50110;
	    font-family: "Arial";
	}
	.NewsDetail p.title{
		color: rgb(95, 10, 10);
	    font-size: 30px;
	    text-align: center;
	    padding-top: 10px;
	}
	.NewsDetail .con{
		padding-left: 30px;
	    padding-right: 30px;
	    margin-bottom: 60px;
	    background: #f9f9f9;
	    padding-top: 0;
	    padding-bottom: 0;
	    width: 92%;
	    margin: 0px auto;
	    position: relative;
	    overflow: hidden;
	    padding-top: 80px;
	}
	.NewsDetail .bot {
	    width: 100%;
	    padding-top: 25px;
	    border-top: 1px solid #d3d1d1;
	    position: relative;
	    overflow: hidden;
	    margin-bottom: 30px;
	}
	.NewsDetail .bot .bot-l {
	    width: 75%;
	    font-size: 16px;
	    float: left;
	}
	.NewsDetail .bot .bot-l span {
	    display: block;
	    width: 95%;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    margin-bottom: 5px;
	}
	.NewsDetail .bot .bot-r {
	    width: 75px;
	    float: right;
	    display: inline;
	}
	.NewsDetail .bot .bot-r a {
	    color: #666;
	    display: block;
	    font-size: 16px;
	    height: 35px;
	    line-height: 35px;
	    text-transform: uppercase;
	    transition: all .5s;
	}
	.NewsDetail .con p{
		text-align: center;
	}
	.NewsDetail .con p.title{
		font-size: 24px;
	    line-height: 30px;
	    color: #333;
	    margin-bottom: 20px;
	    text-align: left;
	}
	.NewsDetail .con p.time{
		text-align: left;
		margin-bottom: 30px;
		padding-bottom: 15px;
		border-bottom: 1px solid #d3d1d1;
	}
	.NewsDetail .con p.pic{
		margin-bottom: 20px;
	}
	.NewsDetail .con p.desc{
		margin-bottom: 20px;
	}
	.NewsDetail .con p.title{
		height: 490px; 
        background: url(../../static/images/loading1.gif) 50% 60% no-repeat;
    }
</style>