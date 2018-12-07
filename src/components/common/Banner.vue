<template>
	<!--banner-->
    <div class="banner jumbotron masthead" style="margin-top:10px">
        <div id="myCarousel" class="carousel slide">
            <!-- 轮播（Carousel）指标 -->
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
                <li data-target="#myCarousel" data-slide-to="4"></li>
            </ol>   
            <!-- 轮播（Carousel）项目 -->
            <div class="carousel-inner">
                
                <div class="item">
                    <img src="../../static/images/banner/b3.jpg" width="100%" alt="Third slide">
                    <div class="spbq">
						<p class="item_name">民族图腾广场</p>
						<div class="biankuang biankuang_1"></div>
						<div class="biankuang biankuang_2"></div>
						<div class="biankuang biankuang_3"></div>
						<div class="biankuang biankuang_4"></div>
					</div>
                </div>
                <div class="item">
                    <img src="../../static/images/banner/b2.jpg" width="100%" alt="Second slide">
                    <div class="spbq">
						<p class="item_name">侗族鼓楼</p>
						<div class="biankuang biankuang_1"></div>
						<div class="biankuang biankuang_2"></div>
						<div class="biankuang biankuang_3"></div>
						<div class="biankuang biankuang_4"></div>
					</div>
                </div>
                <div class="item">
                    <img src="../../static/images/banner/b4.jpg" width="100%" alt="Four slide">
                    <div class="spbq">
						<p class="item_name">苗族芦笙楼</p>
						<div class="biankuang biankuang_1"></div>
						<div class="biankuang biankuang_2"></div>
						<div class="biankuang biankuang_3"></div>
						<div class="biankuang biankuang_4"></div>
					</div>
                </div>
                <div class="item">
                    <img src="../../static/images/banner/b5.jpg" width="100%" alt="Five slide">
                    <div class="spbq">
						<p class="item_name">苗族芦笙楼</p>
						<div class="biankuang biankuang_1"></div>
						<div class="biankuang biankuang_2"></div>
						<div class="biankuang biankuang_3"></div>
						<div class="biankuang biankuang_4"></div>
					</div>
                </div>
                <div class="item active">
                    <img src="../../static/images/banner/b1.jpg" width="100%" alt="First slide">
					<div class="spbq">
						<p class="item_name">桂林罗山湖水上民族风情岛</p>
						<div class="biankuang biankuang_1"></div>
						<div class="biankuang biankuang_2"></div>
						<div class="biankuang biankuang_3"></div>
						<div class="biankuang biankuang_4"></div>
					</div>
                </div>
            </div>
            <!-- 轮播（Carousel）导航 -->
            <a class="carousel-control left" href="#myCarousel" 
               data-slide="prev"> <span _ngcontent-c3="" aria-hidden="true" class="glyphicon glyphicon-chevron-left"></span></a>
            <a class="carousel-control right" href="#myCarousel" 
               data-slide="next"> <span _ngcontent-c3="" aria-hidden="true" class="glyphicon glyphicon-chevron-right"></span></a>
        </div>
    </div>
</template>
<script>
    export default {
      data() {
        return{
            
        }
      }
    }

$(function(){
	
	//边框效果--移入
	function biankuang(obj){
		
		$(obj).find('.biankuang_1').stop(true).animate({
			height:$(obj).height()+3
		},300)
		$(obj).find('.biankuang_2').stop(true).delay(300).animate({
			width:$(obj).width()+1
		},300)
		$(obj).find('.biankuang_3').stop(true).animate({
			height:$(obj).height()+3
		},300)
		$(obj).find('.biankuang_4').stop(true).delay(300).animate({
			width:$(obj).width()+1
		},300)
		$(obj).find('.item_name').stop(true).animate({
			"opacity":1,
			"height":$(obj).height(),
			"top":0,
			"position":"relative",
			"line-height":$(obj).height(),
		},300)
	}
	//边框效果--移出
	function biankuang1(obj){
		$(obj).find('.biankuang_1').stop(true).delay(100).animate({
			height:'0px'
		},100)
		$(obj).find('.biankuang_2').stop(true).animate({
			width:'0px'
		},100)
		$(obj).find('.biankuang_3').stop(true).delay(100).animate({
			height:'0px'
		},100)
		$(obj).find('.biankuang_4').stop(true).animate({
			width:'0px'
		},100)
		$(obj).find('.item_name').stop(true).animate({
			"opacity":0,
		},300)
	}
	//触发
	$('.spbq').hover(
		function () {
		  var obj = $(this);
			biankuang(obj);
		},
		function () {
		  var obj = $(this);
			biankuang1(obj);
		}
	);
})
</script>
<style>
	.spbq{
	    position: absolute;
	    width: 60%;
	    height: 40%;
	    top: 30%;
	    left: 20%;
	    text-align: center;
	}
	.spbq p{
		color:#fff;
		/*padding-top: 20%;*/
	}
	.spbq .biankuang{
		width: 1px;
		height: 1px;
		position: absolute;
		z-index: 99;
		border-radius:10px;
		background: #fff;
	}
	.spbq .biankuang_1{
		height: 3px;
		top: -2px;
		left:0px;
		border-left: 1px solid #fff;
	}
	.spbq .biankuang_2 {
		width: 0px;
		bottom:-3px;
		left: 0px;
		border-top: 1px solid #fff;
	}
	.spbq .biankuang_3{
		height: 0px;
		bottom:0px;
		right:0px;
		border-right: 1px solid #fff;
	}
	.spbq .biankuang_4{
		width:0px;
		top:-3px;
		right:0px;
		border-bottom: 1px solid #fff;
	}
	.spbq .item_name{
		opacity: 0;
	}
</style>


