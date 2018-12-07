	
	function toRight( l1,  l2) {
		var ulMarginLeft = $("#six-box .sixImg-box .sixImg-content").css("margin-left");
		
		if(parseInt(ulMarginLeft)<-1500){
			$("#six-box .sixImg-box .sixImg-content").stop(true).css({"transition":"all 1s ease-in-out"})
			$("#six-box .sixImg-box .sixImg-content").stop(true).css({"margin-left":"0px"})
		}else{
			$("#six-box .sixImg-box .sixImg-content").stop(true).css({"transition":"all 1s ease-in-out"})
			$("#six-box .sixImg-box .sixImg-content").stop(true).css({"margin-left":parseInt(ulMarginLeft)-parseInt(l2)+"px"})
		}
		
		
	}
	function toLeft( l1,  l2) {
		var ulMarginLeft = $("#six-box .sixImg-box .sixImg-content").css("margin-left");
		console.log(ulMarginLeft)
		if(parseInt(ulMarginLeft)<0){
			$("#six-box .sixImg-box .sixImg-content").stop(true).css({"transition":"all 1s ease-in-out"})
			$("#six-box .sixImg-box .sixImg-content").stop(true).css({"margin-left":parseInt(ulMarginLeft)+parseInt(l2)+"px"})
		}
		
		
	}
$(function  () {


	// beautiful=========================================================

	var eightBox = $('#eight-box');	//大的盒子
	var eightOl = $('#eight-box ol')[0];	//下面5个按钮的大盒子
	var eightOlLi = $('#eight-box ol li');		//下面大盒子的小li
	var eightOlp = document.getElementsByClassName('eight-p');	//下面盒子的各个字体的内容
	var eightOlp2 = document.getElementsByClassName('eight-p2');	//下面盒子
	var eightName = document.getElementsByClassName('eight-name');

	var eightUl = $('#eight-box ul')[0];	
	var eightUlLi = $('#eight-box ul li');

	var eightMask = document.getElementsByClassName('eight-mask');

	var $eightMask = $(eightMask);

	var $eightOlLi = $(eightOlLi);
	var $eightOlp = $(eightOlp);
	var $eightOlp2 = $(eightOlp2);
	var $eightUlLi = $(eightUlLi);
	var $eightName = $(eightName);

	var $eightval = 0;
	var eighttime = null;

	$eightOlLi.bind('mouseover',function() {
		clearInterval(eighttime);
		$eightval = $eightOlLi.index($(this));

		$eightUlLi.stop(true,true).fadeIn(300);
		eightanimate();

		eighttime = setInterval(eightanimate,2500);

	});

	$eightOlLi.bind('mouseout',function() {

		clearInterval(eighttime);
		$eightval = $eightOlLi.index($(this));

		$eightUlLi.stop(true,true).fadeOut(300);
		eightanimate();

		eighttime = setInterval(eightanimate,2500);

	});

	eightanimate();
	
	eighttime = setInterval(eightanimate,2500);

	function eightanimate() {
		$eightUlLi.stop().fadeOut(300).eq($eightval).stop().fadeIn(500);
		$eightOlLi.css({'transform':'translateY(0px)','box-shadow':'none'}).eq($eightval).css({'transform':'translateY(-9px)','box-shadow': '0px 10px 10px 0px rgba(0,0,0,.2)'});

		//第八块的里面的 ol 中的遮罩层的样式的变化
		$eightMask.css({background:'-webkit-linear-gradient(top,rgba(0,0,0,.5) 0%,rgba(0,0,0, .8) 100%)',opacity:1}).eq($eightval).css({background:'#fff',opacity:0.7});

		//第八块大内容里面的 ol 中的文字的样式的设置
		$eightOlp.css({opacity:0.6,color:'#fff'}).eq($eightval).css({color:'rgba(0,0,0,.8)'});
		$eightOlp2.css({opacity:0.6,color:'#fff'}).eq($eightval).css({color:'rgba(0,0,0,.8)'});
		$eightName.css({color:'#fff'}).eq($eightval).css({color:'#000'});
		if($eightval >= 4){
			$eightval = 0;
		}else{
			$eightval++;
		}

	}
	

	// =========================================================

	var nineRtime = null;
	nineRtime = setInterval(function(){
		if(parseInt($('.nine-right ul').css('margin-top')) <= -320){
			$('.nine-right ul').css({'margin-top':'0px'});
		}else{
			$('.nine-right ul').animate({'margin-top': parseInt($('.nine-right ul').css('margin-top')) +(-40) + 'px'});
		}
	},2000);

	$('.right-mask').bind('mouseenter',function() {
		clearInterval(nineRtime);
	}).bind('mouseleave',function() {
		nineRtime = setInterval(function(){
		if(parseInt($('.nine-right ul').css('margin-top')) <= -320){
			$('.nine-right ul').css({'margin-top':'0px'});
		}else{
			$('.nine-right ul').animate({'margin-top': parseInt($('.nine-right ul').css('margin-top')) +(-40) + 'px'});
		}
	},2000);
	})
})

	