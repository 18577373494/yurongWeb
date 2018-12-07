<template>
  <div class="wrapper" >
    <v-header></v-header>
    <div class="content-box" :class="{'content-collapse':collapse}">
        <div id="container">
            <transition name="move" mode="out-in">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </div>
    </div>
    <v-side></v-side>
    <v-footer></v-footer>
  </div>
</template>

<script>
import bus from './bus';

import vHeader from './Header.vue';
import vFooter from './Footer.vue';
import vSide from './Side.vue';

  export default {
    name: 'Home',
    data(){
          return {
              collapse: false
          }
      },
      components:{
          vHeader, vFooter, vSide
      },
      created(){
          bus.$on('collapse', msg => {
              this.collapse = msg;
          })
      }
  }

  //监听事件
  $(function(){
      $('.navbar-toggle').on('click',function(){
          $('.dropdown .dropdown-toggle').attr('data-toggle','dropdown');
      })
       //滚动条监听
      var navbar = $('.navbar').offset().top;
      $(window).scroll(function(){
      var topp = $(document).scrollTop();//实时获取滚动条的位置

      if(topp>navbar){
          $('.navbar').addClass('navbar-fixed-top');
          $('.navbar .container-fluid ').addClass('container').removeClass('container-fluid');
      }else{
          $('.navbar').removeClass('navbar-fixed-top');
          $('.navbar .container ').addClass('container-fluid').removeClass('container');
      }
      })
  })
</script>

