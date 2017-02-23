/**
 * Created by Administrator on 2017/2/16 0016.
 */
$(function () {
    $('.uls li').hover(function () {
        $(this).children('ul').slideToggle();
    });

//    轮播图
    $('.ctrl li').on('mouseover',function () {
        var $index = $(this).index();
        // alert($index);
        $(this).addClass('active').siblings().removeClass('active');
        $('.box .imgs').eq($index).fadeIn('slow').siblings().fadeOut('slow');
        //  $('.box .images').hide('slow').eq($index).show('slow');
        clearInterval(timer);
    });

    var timer =null;
    var num=0;
    var index = $('.ctrl li').length;
    // alert(index);
    // timer =setInterval(function () {
    //     move_banner();
    // },2000);

    function move_banner(){
        if(num==index){
            num=0;
        }
        //大图切换
        $('.box .imgs').eq(num).fadeIn('slow').siblings().fadeOut('slow');
        //小图切换
        $('.ctrl li').eq(num).addClass('active').siblings().removeClass('active');

       num++;

    }


//   scrolltop
    window.onscroll = function () {
        // alert(1);
        var top = document.body.scrollTop;
        // console.log(top);
        if(top >= 50){
            // alert(111);
            $('nav').addClass('white');
        }else{
            $('nav').removeClass('white');
        }
    };

//    添加图片
// $('.pros-one .box').append('<img src="img/index-desc-inner-bg.png" alt="">');
});

