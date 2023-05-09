//mobilemenu
$(document).ready(function(){
    var scrollPos = 0;
  
    $('.menu_btn>a').on('click', function(){
        scrollPos = $(window).scrollTop();
        $('.menu_bg').show(); 
        $('.sidebar_menu').show().animate({
            right:0
        });  
    });
  
    $('.close_btn>a').on('click', function(){
        $('.menu_bg').hide(); 
        $('.sidebar_menu').animate({
            right: '-' + 50 + '%'
        }, function(){
            $('.sidebar_menu').hide();  
            $(window).scrollTop(scrollPos); // 스크롤 위치 이동
        });
    });
  });
  



