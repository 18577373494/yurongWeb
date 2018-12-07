<template>
	<!--头部-->
    <div class="header">
        <div class="header-bottom container clearfix">
            <nav class="navbar navbar-default " role="navigation">
                <div class="container-fluid clearfix"> 
                <div class="navbar-header">
                    <button type="button" id="navbar-toggle" class="navbar-toggle" data-toggle="collapse"
                            data-target="#example-navbar-collapse">
                        <span class="sr-only">切换导航</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand"><img class="Brand" src="static/images/kc_soft_logo.png" height="50px" /></a>
                </div>
                <div class="collapse navbar-collapse clearfix" id="example-navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li @click="routerTo('/Index')"><a class="dropdown-toggle"> 首页</a></li>
                        <li class="dropdown">            
                            <a class="dropdown-toggle" >
                                关于罗山湖 <b class="caret"></b>
                            </a>
                            <ul class="dropdown-menu">
                                <li @click="routerTo('/About')"><a >罗山湖简介</a></li>
                                <li @click="routerTo('/Beautiful')"><a>罗山湖美景</a></li>
                                 <li @click="routerTo('/Contact')"><a >联系我们</a></li>
                            </ul>
                        </li>
                       <!--  <li class="dropdown">            
                            <a class="dropdown-toggle">
                                我们的服务 <b class="caret"></b>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a ><router-link to="/Success" tag="li">成功案例</router-link></a></li>
                            </ul>
                        </li> -->
                        <li class="dropdown" @click="routerTo('/News')">            
                            <a>
                               新闻中心<b class="caret"></b>
                            </a>
                        </li>
                        <li class="dropdown" @click="routerTo('/Play')">            
                            <a>
                               游玩中心<b class="caret"></b>
                            </a>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    </div>
    <!--头部-->
</template>

<script>
    export default {
        name: 'Header',
        methods:{
    　　　　flushCom:function(){
    　　　　　　this.$router.go(0);  
    　　　　},
            routerTo(router) {
                this.$router.push(router);  
            }
    　　}
    }

</script>