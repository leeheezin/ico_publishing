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

//   formail
$('.agree_open').click(function(){
    $('.agree').css('display','block');
});
$('.agree_close').click(function(){
    $('.agree').css('display','none');
});



$('.formmail-form .form-group  .form-control').focus(function(){
    $(this).next().addClass('on');
});
$('.formmail-form .form-group  .form-control').focusout(function(){
    inputVal = $(this).val();
    if(!inputVal) { 
        $(this).next().removeClass('on');
    }
});
  
function sendEmail() {
    // 이메일 전송 로직 구현
    alert('이메일이 전송되었습니다.');
  }




