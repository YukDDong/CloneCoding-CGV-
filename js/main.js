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





    //무비차트 상영예정작 교체

    $('.chart_b_in').hide()
    $('.chart1').show()
    $('.chart_h li').eq(0).addClass('on')
    
    $('.chart_h>li').click(function(e){
        e.preventDefault()
        $('.chart_h li').removeClass('on')
        $(this).addClass('on')
        $('.chart_b_in').hide()
        var i=$(this).index()

        $('.chart_b_in').eq(i).show()
    })





    //무비차트 목록에 마우스올리면 정보네비가 나옴
    $('#chart .chart_b .img').mouseenter(function(){
        $(this).find('.number').hide()
        $(this).append('<div class="img_info"></div>')
        $(this).find('.img_info').append('<div>상세보기</div><div>예매하기</div>')
    })


    $('#chart .chart_b .img').mouseleave(function(){
        $(this).find('.img_info').remove()
        $(this).find('.number').show()
    })





    //무비차트 목록 옆으로 넘기면 다음 목록이 나옴
    let chartNumber=0

    $('.L_btn').hide()

    $('.R_btn').click(function(){
        chartNumber+=1
        moveChart(chartNumber)
        if(chartNumber==1){
            $('.L_btn').show()
        }
        if(chartNumber==2){
            $(this).hide()
        }
    })

    $('.L_btn').click(function(){
        chartNumber-=1
        moveChart(chartNumber)
        if(chartNumber==1){
            $('.R_btn').show()
        }
        if(chartNumber==0){
            $(this).hide()
        }
    })



    function moveChart(n){
        var pos=(-980)*n+'px'
        $('.chart_b_group').animate({left:pos},500)
    }





    //EVENT 마우스엔터시 확대
    $('#event .event_b a').mouseenter(function(){
        $(this).find('img').css({transform:'scale(1.1)'})  
    })

    $('#event .event_b a').mouseleave(function(){
        $(this).find('img').css({transform:'scale(1)'})
    })








    // spe list 선택시 맞는 이미지로 전환
    $('#spe .list li').mouseenter(function(){
        let listNumber=$(this).index()

        $('#spe .img_box img').hide()
        $('#spe .img_box').find('img').eq(listNumber).show()
    })
})