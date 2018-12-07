<template>
	<div class="side" style="transform: translate(0px, 0px); opacity: 1;">
	    <ul>
	        <li id="backTop">
	            <a href="###"  class="sidetop" title=""></a>
	        </li>
	        <li class="lia">
	            <a href="javascript:void(0);" title="">
	                <div class="sidebox2"></div>
	            </a>
	            <span  class="toolbar-layer"></span>
	        </li>
	        <li style="border-bottom: none;">
	            <div class="sidebox bdsharebuttonbox bdshare-button-style2-24" data-bd-bind="1542332291107">
	                <a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
	            </div>
	        </li>
	    </ul>
	</div>
</template>
<script type="text/javascript">
jQuery(function($){
   $('#backTop').toTop({
       autohide: true,  //boolean 'true' or 'false'
       offset: 0,     //numeric value (as pixels) for scrolling length from top to hide automatically
       speed: 1500,      //numeric value (as mili-seconds) for duration
       right: 0,       //numeric value (as pixels) for position from right
       bottom: 0       //numeric value (as pixels) for position from bottom
   });
});
(function( $ ){
    $.fn.toTop = function(opt){
        //variables
        var elem = this;
        var win = $(window);
        var doc = $('html, body');
        
        //Extended Options
        var options = $.extend({
            autohide: true,
            offset: 0,
            speed: 500,
            right: 0,
            bottom: 0
        }, opt);
        
        elem.css({
            'position': 'position',
            'right': options.right,
            'bottom': options.bottom,
            'cursor': 'pointer',
        });
        // if(options.autohide){
        //     elem.css('display', 'none');
        // }
        
    	elem.click(function(){
        	doc.animate({scrollTop: 0}, options.speed);
        });
        
        win.scroll(function(){
            var scrolling = win.scrollTop();
            if(options.autohide){
                if(scrolling > options.offset){
                    elem.fadeIn(options.speed);
                }
                else {
                	elem.fadeIn(options.speed);
                }
            }
            
        });
        
    };
    
}( jQuery ));
</script>
<style>
	.side {
	    position: fixed;
	    width: 50px;
	    height: 150px;
	    right: 30px;
	    bottom: 90px;
	    z-index: 3;
	    box-shadow: 0 2px 28px -6px rgba(0,0,0,.16);
	}
	.side ul li {
	    width: 50px;
	    height: 50px;
	    position: relative;
	    border-bottom: 1px solid #eee;
	}
	.side ul li .sidetop {
	    position: absolute;
	    width: 50px;
	    height: 50px;
	    background: #fff url(../../static/images/pic27-2.png) no-repeat center top;
	    transition: all .6s;
	    -webkit-animation: arrow2 1.5s infinite linear;
	    animation: arrow2 1.5s infinite linear;
	}
	.side ul li .sidetop:hover {
	    background: #d8362b url(../../static/images/pic27-2.png) no-repeat center bottom;
	    transition: all .6s;
	}
	.side .lia {
	    position: relative;
	}
	.side ul li .sidebox2 {
	    position: absolute;
	    width: 50px;
	    height: 50px;
	    top: 0;
	    right: 0;
	    transition: all .3s;
	    background: #fff url(../../static/images/pic27.png) no-repeat center top;
	    transition: all .6s;
	}
	.side ul li .sidebox2:hover {
	    background: #d8362b url(../../static/images/pic27.png) no-repeat center bottom;
	    filter: Alpha(opacity=100);
	    transition: all .6s;
	}
	.toolbar-layer {
	    position: absolute;
	    right: 50px;
	    bottom: 0;
	    width: 118px;
	    height: 118px;
	    opacity: 0;
	    background: url(../../static/images/wx2.jpg) no-repeat center;
	    filter: alpha(opacity=0);
	    transform-origin: 95% 95%;
	    -webkit-transform-origin: 95% 95%;
	    transform: scale(.01);
	    -moz-transform: scale(.01);
	    -ms-transform: scale(.01);
	    -o-transform: scale(.01);
	    -webkit-transform: scale(.01);
	    transition: all 1s;
	}
	.side .lia:hover .toolbar-layer {
	    opacity: 1;
	    filter: alpha(opacity=100);
	    transform: scale(1);
	    -webkit-transform: scale(1);
	    -moz-transform: scale(1);
	    -ms-transform: scale(1);
	    -o-transform: scale(1);
	}
	.side ul li {
	    width: 50px;
	    height: 50px;
	    position: relative;
	    border-bottom: 1px solid #eee;
	}
	.bdshare-button-style2-24 {
	    zoom: 1;
	}
	.bdshare-button-style2-24 a:hover {
	    color: #333;
	    opacity: .8;
	    filter: alpha(opacity=80);
	}
	.bdshare-button-style2-24 a, 
	.bdshare-button-style2-24 .bds_more {
	    float: left;
	    font-size: 18px;
	    line-height: 24px;
	    cursor: pointer;
	    color: #999;
	}
	.side ul li .bdshare-button-style2-24 .bds_tsina {
	    background: #fff url(../../static/images/pic27-1.png) no-repeat center top;
	    width: 50px;
	    height: 50px;
	    padding: 0;
	    margin: 0;
	    transition: all .6s;
	}
	.side ul li .bdshare-button-style2-24 .bds_tsina:hover {
	    background: #d8362b url(../../static/images/pic27-1.png) no-repeat center bottom;
	    filter: Alpha(opacity=100);
	    transition: all .6s;
	}
</style>