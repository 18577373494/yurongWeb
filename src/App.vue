<template>
  <div id="app" class="pagewrap" :name="transitionName">
    <router-view class="child-view"></router-view>
  </div>
</template>

<script>
	export default {
    	name: 'App',
        watch: {//使用watch 监听$router的变化
            $route(to, from) {
                // if(to.path == '/Index' || to.path == '/PlateDetail' || to.path == '/PartVI'  || to.path == '/Play'){
                //     this.$router.go(0)
                // }
              this.$router.go(0)
      				this.toTop()
            }
        },
		methods:{
            toTop(){
                if(document.documentElement.scrollTop>0){
                    document.documentElement.scrollTop=0;
                }
            }
        },
        data(){
          return {
		      transitionName:'fade'
          }
        },
        beforeRouteUpdate (to, from, next) {
          // 如果isBack为true时，证明是用户点击了回退，执行slide-right动画
           let isBack = this.$router.isBack
           if (isBack) {
              this.transitionName = 'slide-right'
           } else {
              this.transitionName = 'slide-left'
           }
           // 做完回退动画后，要设置成前进动画，否则下次打开页面动画将还是回退
           this.$router.isBack = false
             next()
        }
	}
</script>

<style>
    .container {
        width: 92%;
    }
    .carousel-inner .item img{
        width: 100%;
    }
    .carousel-inner{
        width: 80%;
        margin: 0px auto;
    }
    
    .carousel-control {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 10%;
        font-size: 20px;
        color: #ded0d0;
        text-align: center;
        text-shadow: 0 1px 2px rgba(0,0,0,.6);
        background-color: rgba(220, 198, 198, 0.28);
        filter: alpha(opacity=50);
    }
    .four li {
        border-top: 1px solid #efefef;
    }
    .carousel-inner{
        width: 100%;
    }
    @media (min-width: 1862px) {
        .index,
        .content-box{
            width: 88%;
            margin: 0px auto;
        }
    }
    .carousel-inner .item img{
        max-height: 800px;
    }
    /*页面切换*/
    .child-view {
      position: absolute;
      width:100%;
      transition: all .8s cubic-bezier(.55,0,.1,1);
    }
    .slide-left-enter, .slide-right-leave-active {
      opacity: 0;
      -webkit-transform: translate(50px, 0);
      transform: translate(50px, 0);
    }
    .slide-left-leave-active, .slide-right-enter {
      opacity: 0;
      -webkit-transform: translate(-50px, 0);
      transform: translate(-50px, 0);
    }

</style>
