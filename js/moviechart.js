$(document).ready(function(){
    // 네비의 메인메뉴를 나타내고 사라지게 함
    $('#main_mn').hide()

    let mainMnKey=true
    
    $('#header_b_in .nav li').mouseenter(function(){
        if(mainMnKey=true){}
        $('#main_mn').slideDown()
        mainMnKey=false
        })
        
    
    
    $('#header_bottom').mouseleave(function(){
        $(this).find('#main_mn').slideUp()
        mainMnKey=true
    })


    //스크롤시 네비 따라 내려옴
    $(window).scroll(function(){
        if($(this).scrollTop()>160 && $(this).innerWidth()>480){
            $('#nav_scroll').css({display: 'block'})
        }else if($(this).scrollTop()>115 && $(this).innerWidth()<=480){
            $('#nav_scroll').css({display: 'block'})
        }else{
            $('#nav_scroll').css({display: 'none'})
        }
    })

    $('#main_mn_scroll').hide()

    $('#nav_scroll_in .nav li').mouseenter(function(){
        if(mainMnKey=true){}
        $('#main_mn_scroll').slideDown()
        mainMnKey=false
    })

    $('#nav_scroll').mouseleave(function(){
        $(this).find('#main_mn_scroll').slideUp()
        mainMnKey=true
    })
    
})