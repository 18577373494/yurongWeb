<template>
	<div class="PlateDetail">
		<div class="new-top f-cb">
	        <div class="fl">
	            <span class="sp1">桂林罗山湖民族风情岛</span><span class="sp2"><span class="i">PLAY</span> CENTER</span>
	        </div>
	    </div>
	    <div class="head" >
			<p class="title">{{plateObj.name}}</p>
            <p class="desc">
				{{plateObj.description}}
			</p>
			<!-- <p class="pic" >
				<img :src="plateObj.cover_pic" alt="" title="" align=""><br>
			</p> -->
			<!-- <p class="pic" v-for="(item,index) in picList" :key="index">
				<img :src="item" alt="" width="800" height="557" title="" align=""><br>
			</p> -->
		</div>
	    <div class="con" v-for="(item,index) in plateList" :key="index">
			<p class="pic_gif">
				<img src="static/images/dong.gif" alt="" width="30" height="50" title="" align=""><br>
			</p>
			<p class="title">{{item.title}}</p>
            <p class="desc">
				{{item.content}}
			</p>
			<p class="pic"
				<img :src="item.pic" alt="" title="" align=""><br>
			</p>
			
	    </div>
	    <div class="foot" >
            <div class="bot" >
                <div class="bot-l fl">
                    <span @click="preToplateDetail()">上一篇：<a href="javascript:;">{{preTitle}}</a></span>
                    <span @click="nextToplateDetail()">下一篇 : <a href="javascript:;" >{{nextTitle}}</a></span>
                </div>
                <div class="bot-r fr">
                    <a @click="back">back</a>
                </div>
            </div>
	    </div>
		<div class="subbot">当前位置：<a><router-link to="plate" tag="li">新闻中心</router-link></a>&nbsp;&nbsp;&gt;&nbsp;&nbsp;罗山湖新闻</div>
	</div>
</template>

<script>
    export default{
	    methods:{
		    begininit (){
		    	this.plateList = []
	        	this.plateObj = []
	        	// this.picList = []
		    },
	    	fetchData() {
	    		var self = this;
	    		console.log(self.$ApiSetting.serviceModule.getVPArticleById.url+"?id="+self.plateId)
	    		self.$axios(self.$ApiSetting.serviceModule.getVPArticleById.url+"?id="+self.plateId)
				    .then((data)=>{
				      	if(data.status == "200") {
				      		self.begininit();
				      		self.plateObj = data.data.data;
				      		self.plateList = self.plateObj.list;
				      		console.log(self.plateObj)
				      		this.success();
				    //   		console.log(self.plateObj)
				    //   		self.picStr=self.plateObj.pic
				    //   		if(self.picStr != null) {
				    //   			self.picObj="string".replace(/(.)(?=[^$])/g,"$1,").split(",");
								// self.picList  = self.picStr.split(",");
				    //   		}
							
		                }
				    },(error)=>{
				      console.log(error)	
				    })
	    	},
	    	success() {
	    		$(".PlateDetail .head").css({
					"height": "auto", 
			        "background": "none"
			    })
	    	},
	    	fetchPre(){
	    		var self = this;
	    		console.log(self.plateId-1)
	    		self.$axios(self.$ApiSetting.serviceModule.getPlateList)
				    .then((data)=>{
				      	if(data.status == "200") {
				      		for (var i = data.data.data.length - 1; i >= 0; i--) {
				      			if(data.data.data[i].id == self.plateId-1){
				      				self.preId=data.data.data[i].id
	            					self.preTitle=data.data.data[i].name
				      			}
				      			if(data.data.data[i].id == parseInt(self.plateId)+1){
				      				self.nextId = data.data.data[i].id
	            					self.nextTitle=data.data.data[i].name
				      			}
				      		};
		                }
				    },(error)=>{
				      console.log(error)	
				    })
	    	},
	    	preToplateDetail() {
	    		this.$router.push('/plateDetail?plateId='+this.preId)
	    		this.$router.go(0)
	    	},
	    	nextToplateDetail() {
	    		this.$router.push('/plateDetail?plateId='+this.nextId)
	    		this.$router.go(0)
	    	},
            back (){
                 this.$router.go(-1)
            }
        },
        created() {
        	this.plateId = this.$route.query.plateId;
        	console.log(this.$route.query.plateId)
	    	this.fetchData();
	    	this.fetchPre();
	    },
	    data() {
	        return{
	        	plateList:[],
	        	plateObj:[],
	        	picList:[],
	        	picStr:'',
	        	picObj:{},
	            plateId:0,
	            preId:0,
	            preTitle:'',
	            nextId:0,
	            nextTitle:'',
	        }
	    },
    }

</script>
<style>
	.PlateDetail{
		width: 90%;
		margin: 0px auto;
	}
	.PlateDetail .new-top{
		  padding: 25px 0 35px;
	}
	.PlateDetail .fl {
	    float: left;
	    display: inline;
	}
	.PlateDetail .new-top .sp1 {
	    font-size: 26px;
	    line-height: 30px;
	    color: #666;
	    margin-right: 12px;
	}
	.PlateDetail .new-top .sp2 {
	    font-size: 24px;
	    line-height: 30px;
	    font-family: "Arial";
	    text-transform: uppercase;
	    color: #000;
	    font-weight: bold;
	}
	.PlateDetail .new-top .sp2 .i {
	    color: #d50110;
	    font-family: "Arial";
	}

	
	.PlateDetail .con{
		padding-left: 30px;
	    padding-right: 30px;
	    margin-bottom: 60px;
	    background: #f9f9f9;
	    padding-top: 0;
	    padding-bottom: 0;
	    width: 92%;
	    margin: 0px auto;
	    margin-bottom: 20px;
	    position: relative;
	    overflow: hidden;
	    padding-top: 40px;
	    text-align: center;
	}
	.PlateDetail .con p{
		text-align: center;
	}
	.PlateDetail div.desc{
		font-size: 14px;
	}
	.PlateDetail .head{
		padding-top: 40px;
		text-align: center;
	}
	
	.PlateDetail .head p.title{
		font-size: 24px;
	    line-height: 30px;
	    color: #fafafa;
	    margin-bottom: 20px;
	    text-align: left;
	    padding-top: 10px;
	    letter-spacing: 0;
	    text-shadow: 0px 1px 0px #e41f1f, 0px 2px 0px #17a2c1, 0px 3px 0px #c12020, 0px 4px 0px #732a2a, 0px 5px 0px #7d0909, 16px 13px 3px #ad7979, 0px 1px 20px #b12020, 0px 8px 7px #29406f;

	}
	.PlateDetail .head p.pic,
	.PlateDetail .con p.pic{
		margin: 0px auto;
		margin-bottom: 20px;
	}
	
	.PlateDetail .con p.title{
		font-size: 2.4rem;
		color: #f7b12b;
	    letter-spacing: 0;
	    text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, -1px 4px 0px #333, 0px 8px 7px #001135;
	    padding: 20px 0px;
	    background: url(../../static/images/epic/e2.jpg);
	    border-radius: 6px;
	    width: 500px;
	    margin: 0px auto;
	    margin-bottom: 20px;
	}
	.PlateDetail .head p.desc,
	.PlateDetail .con p.desc{
		font-size: 14px;
		text-indent: 2em;
		margin-bottom: 20px;
	}
	.PlateDetail .con p.desc{
		color: #960303;
	    -webkit-text-stroke: 1px #77424240;
	    letter-spacing: 0.04em;
	}
	.PlateDetail .head p.desc{
		font-size: 14px;
	    background-image: -webkit-linear-gradient(left,blue,#6679ff 10%,#cc00ff 20%,#CC00CC 30%, #CCCCFF 40%, #0072ff 50%,#CCCCFF 60%,#CC00CC 70%,#CC00FF 80%,#6679ff 90%,blue 100%);
	    -webkit-text-fill-color: #0000000d;
	    -webkit-background-clip: text;
	    -webkit-background-size: 200% 100%;
	    -webkit-animation: masked-animation 4s linear infinite;
	    font-size: 14px;
	}
	@keyframes masked-animation {
	    0% {
	        background-position: 0  0;
	    }
	    100% {
	        background-position: -100%  0;
	    }
	}
	.PlateDetail .foot .bot {
	    width: 100%;
	    padding-top: 25px;
	    border-top: 1px solid #d3d1d1;
	    position: relative;
	    overflow: hidden;
	    margin-bottom: 30px;
	}
	.PlateDetail .foot .bot .bot-l {
	    width: 75%;
	    font-size: 16px;
	    float: left;
	}
	.PlateDetail .foot .bot .bot-l span {
	    display: block;
	    width: 95%;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    margin-bottom: 5px;
	}
	.PlateDetail .foot .bot .bot-r {
	    width: 75px;
	    float: right;
	    display: inline;
	}
	.PlateDetail .foot .bot .bot-r a {
	    color: #666;
	    display: block;
	    font-size: 16px;
	    height: 35px;
	    line-height: 35px;
	    text-transform: uppercase;
	    transition: all .5s;
	}
	/*蓝懒加载*/
	.PlateDetail .head img.pic ,
	.PlateDetail .con img.pic { 
		width: 700px; 
		height: 490px; 
		background: url(../../static/images/loading.gif) 50% no-repeat;
	}
	.PlateDetail .head{
		height: 490px; 
        background: url(../../static/images/loading1.gif) 50% 60% no-repeat;
    }
</style>