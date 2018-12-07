$(function(){
    $('.navbar-toggle').on('click',function(){
        $('.dropdown .dropdown-toggle').attr('data-toggle','dropdown');
    });

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

  lubo();
})


function lubo(){
    var swiper = new Swiper('.swiper-container', {
        paginationType: 'fraction',
        nextButton: '#next',
        prevButton: '#prev',
        onSlideChangeEnd: function(swiper){
            // alert(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide
            $('.b-img').removeClass('active');
            $('.b-img').eq(swiper.activeIndex).addClass('active');
          }
    
    });
    
    $('#next').on('click',btn);
    $('#prev').on('click',btn);
}

//绑定按扭事件
function btn(){
    $('.b-img').removeClass('active');
    $(this).addClass('active');
}