<template>
	<div class="index" >
        <!-- scroll -->
        <div class="scroll_div">
            <div class="scroll">
                <div class="l-pic-index"></div>
                <div class="r-pic-index"></div>
                <div class="l-bg-index"></div>
                <div class="r-bg-index"></div>
                <div class="main-index">
                    <p class="intro-text" id="printText" >
                       <img src="static/images/scroll/lshtext.png"/>
                    </p>
                </div>
            </div>
        </div>
        <!--banner-->
        <div style="text-align: center;margin-top:30px">
           <p style="color: #f00;font-weight: 700;font-size: 36px">一场民族传承之旅</p>
            -----------山湖美景-----------
        </div>
        <div id="eight" class="fnumber">
            <div id="eight-box" >
                <h2 class="eight-tit">给自己一份与大自然相融的体验</h2>
                <p class="eight-titnr"></p>
                <div class="eight-content" ref="eight_li">
                    <ul>
                        <li v-for="(item,index) in plateList" :key="index" @click="toPlateDetail(item.id)">
                            <img :src="item.cover_pic">
                            <div class="eight-right">
                                <p>{{item.description}}</p>
                                <span>{{item.name}}</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="ol_div">
                   <ol ref="ol_li">
                        <li  v-for="(item,index) in plateList" :key="index" @click="showBigBox(index)">
                            <img :src="item.cover_pic">
                            <div class="eight-mask"></div>
                            <div class="eight-info">
                                <p class="eight-name">{{item.name}}</p>
                                <p class="eight-p">{{item.description}}</p>
                                <p class="eight-p2"></p>
                            </div>
                        </li>
                    </ol> 
                </div>
                
             </div>
        </div>
        <!--caroursel  -->
        <div class="carousel">
            <div class = "caroursel poster-main" data-setting = '{
                    "width":1000,
                    "height":570,
                    "posterWidth":640,
                    "posterHeight":470,
                    "scale":0.8,
                    "dealy":"3000",
                    "algin":"middle"
                }'>
                <ul class = "poster-list">
                    <li class = "poster-item"><img src="../../static/images/banner/b3.jpg" width = "100%" height="100%"></li>
                    <li class = "poster-item"><img src="../../static/images/banner/b2.jpg" width = "100%" height="100%"></li>
                    <li class = "poster-item"><img src="../../static/images/banner/b1.jpg" width = "100%" height="100%"></li>
                    <li class = "poster-item"><img src="../../static/images/banner/b4.jpg" width = "100%" height="100%"></li>
                    <li class = "poster-item"><img src="../../static/images/banner/b5.jpg" width = "100%" height="100%"></li>


                <!--    <li class = "poster-item"><img src="image/a5.png" width = "100%" height="100%"></li>-->
                </ul>

                <ul class="btn-box">
                    <li class="index-btn"></li>
                    <li class="index-btn"></li>
                    <li class="index-btn"></li>
                    <li class="index-btn"></li>
                    <li class="index-btn"></li>
                    <!--<li class="index-btn"></li>-->
                </ul>
                <div class = "poster-btn poster-prev-btn"></div>
                <div class = "poster-btn poster-next-btn"></div>
            </div>
        </div>
        <!-- 九宫格 -->
        <div class="lista">
            <div class="n-top" >
                <div class="h"><span class="i">National </span> Tour</div>
                <div class="line"></div>
                <p>桂林罗山湖水上民族风情岛</p>
            </div>
            <ul class="ulbox f-cb">
                <li v-for="(item,index) in partVIList" :key="index"  @click="toPartVI(item.id)">
                    <a href="JavaScript:;">
                        <p>{{item.name}}</p>
                        <!-- <div class="y"> Pictures</div> -->
                        <div class="more">More</div>
                    </a>
                </li>
            </ul>
        </div>
        <!-- index_foot -->
        <div class="index_foot">
            <img src="../../static/images/kc_pricing_liangfangshenqi.jpg" width="100%">
        </div>
        
    </div>
        
</template>
<script>
    export default {
      data() {
            return{
                plateList:[],//分页
                partVIList:[]
            }
        },
        created() {
            this.fetchData();
            this.fetchSVData();
        },
        methods:{
            fetchData() {
                var self = this;
                self.$axios(self.$ApiSetting.serviceModule.getPlateList)
                    .then((data)=>{
                        if(data.status == "200") {
                            console.log(data.data.data)
                            self.plateList = data.data.data;
                            this.success();
                        }
                    },(error)=>{
                      console.log(error)    
                    })
            },
            fetchSVData() {
                var self = this;
                self.$axios(self.$ApiSetting.serviceModule.getSVList)
                    .then((data)=>{
                        if(data.status == "200") {
                            self.partVIList = data.data.data;
                            console.log(self.partVIList)
                        }
                    },(error)=>{
                      console.log(error)    
                    })
            },
            success(){
                $("#eight-box").css({
                    "background":"none"
                })
                $(".scroll_div").css({
                    "background":'url("static/images/scroll/bg.jpg") 0 0 no-repeat',
                    "background-size": "cover",
                    "transition": "height .5s ease",
                })
                $(".scroll").css({
                    "display":"block"
                })
                $(".index .lista").css({
                    "height":"auto",
                    "background":"none"
                })
                //卷轴展开效果
                $(".scroll .l-pic-index").animate({'left':'-20px','top':'-16px'},1300);
                $(".scroll .r-pic-index").animate({'right':'-20px','top':'-16px'},1450);
                $(".scroll .l-bg-index").animate({'width':'50%','left':'10px'},1300);
                $(".scroll .r-bg-index").animate({'width':'50%','right':'10px'},1500,function(){
                    $(".scroll .main-index").fadeIn(400);
                  
                });
            },
            toPlateDetail(id) {
                this.$router.push('/PlateDetail?plateId='+id)
            }, 
            showBigBox(index) {
                $($(this.$refs.ol_li).find('li')).css({
                    "transform":"translateY(0px)",
                    "box-shadow":"none"
                })
                $(event.currentTarget).css({
                    "transform":"translateY(-9px)",
                    "box-shadow":"rgba(0, 0, 0, 0.2) 0px 10px 10px 0px"
                })
                
                $($(this.$refs.eight_li).find('li')).css({
                    display:"none"
                })
                $($(this.$refs.eight_li).find('li').eq(index)[0]).css({
                    display:"block"
                })
            },
            toPartVI(id,i) {
                this.$router.push('PartVI?partVIId='+id)
            }
        }
    }
    
    $(document).ready(function(){
        // scroll
        $(".scroll_div").height(700)
        $(".scroll").animate({'top':100},1300)
		
        //caroursel
         Caroursel.init($('.caroursel'))
    });

   
</script>
<style type="text/css">
    body{
        min-width: 1200px;
    }
    .item_name{
        background: #3da4deb8;
        position: absolute;
        bottom: 40px;
        text-align: center;
        height: 60px;
        width: 100%;
        line-height: 60px;
        font-size: 2rem;
        font-family: cursive;
        color: #fff;
    }
    /*scroll*/
    .scroll_div{
        width: 92%;
        height: 576px;
        margin: 0px auto;
        //background: url("../../static/images/scroll/bg.jpg") 0 0 no-repeat;
        background-size: cover;
        margin-bottom: 10px;
        position: inherit;
    }
    .scroll_div .scroll{
        position: relative;
        width: 900px; 
        height: 460px;
        margin: 0px auto;
        /*top:260px;*/
    }
    .scroll .fl{
        float: left;
    }
    .scroll .fr{
        float: right;
    }
    .scroll .center{
        width: 1000px;
        margin: 0 auto 0;
    }
    .scroll .l-pic-index{
        position: absolute;
        left: 400px;
        top: 1px;
        z-index:2;
        width:50px;
        height:520px;
        background: url("../../static/images/scroll/j1.png") no-repeat right 0;
        background-size: contain;
    }
    .scroll .r-pic-index{
        position: absolute;
        right: 400px;
        top: 0;
        z-index: 2;
        width:50px;
        *width:82px;
        height:520px;
        background: url("../../static/images/scroll/j4.png") no-repeat left 0;
        background-size: contain;
    }
    .scroll .l-bg-index{
        position: absolute;
        top: 13px;
        left: 430px;
        z-index: 1;
        width: 25px;
        height: 459px;
        background: url("../../static/images/scroll/j2.png") right 0 no-repeat;
        background-size: cover;
    }
    .scroll .r-bg-index{
        position: absolute;
        top:13px;
        right: 430px;
        z-index: 1;
        width: 25px;
        height: 459px;
        background: url("../../static/images/scroll/j3.png") 0 0 no-repeat;
        background-size: cover;
    }
    .scroll .main-index{
        display: none;
        overflow: hidden;
        zoom:1;
        position: absolute;
        z-index: 5;
        width:530px;
        height:280px;
        left:185px;
        top:140px;
        color: #2e2e2e;
    }
    .scroll .intro-text{
        /*display: none;*/
        font-size: 110px;
        font-family: FZShuTi;
        margin: -13px 0 0 -26px;
        line-height: 1.8;
        text-indent: 20px;
        color: #000;
        -webkit-mask: -webkit-gradient(linear,0% 0%,0% 100%,from(rgba(231, 182, 22, 0.96)),to(rgba(9, 213, 9, 0.62)));
    }
    /*eight*/
    #eight-box .eight-content ul li{
        display: none;
        opacity: 1;
        cursor: pointer;
    }
    #eight-box .eight-content ul li:nth-of-type(1){
        display: block;
    }
    #eight-box ol li{
        cursor: pointer;
        transform: translateY(0px); 
        box-shadow:none;
        /*width: 120px;*/
    }
    #eight-box ol li:nth-of-type(1){
        transform: translateY(-9px);
        box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 10px 0px;
    }
    
    #printText{
        display: block;
        opacity: 1;
    }
    .caroursel{
        margin:0px auto;
        margin-bottom: 80px;
    }

    .scroll{
        display: none;
    }
    .index .lista {
        height: 500px;
    }
    .index .lista ,
    .scroll_div,
    #eight-box{
        background: url(../../static/images/loading.gif) 50% 60% no-repeat;
    }
    .index_foot{
        margin-bottom: 20px;
    }
</style>

