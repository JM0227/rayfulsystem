$(function(){
    /***** Scroll Animation ******/
    AOS.init({
        once: true,
        offset: 220,
        delay: 100
    });

    /***** GNB ******/
    $('.gnb > ul').on('mouseenter', function(){
        $('.header').addClass('active');
    });
    $('.gnb > ul').on('mouseleave', function(){
        $('.header').removeClass('active');
    });

    //gnb depth2
    $('.gnb .depth2').parent('li').addClass('arr');
    $('.gnb .arr').on('mouseenter', function(){
        $(this).addClass('active');
        $(this).find('.depth2').stop().slideDown(300);
    });
    $('.gnb .arr').on('mouseleave', function(){
        $(this).removeClass('active');
        $(this).find('.depth2').stop().slideUp(300);
    });
    /***** ALL Menu ******/
    $('.btn__total').on('click',function(){
        $('.mega').show();
        $('body').addClass('hidden');
    });

    $('.mega .txt__right button').on('click',function(){
        $('.mega').hide();
        $('body').removeClass('hidden');
    });

    /***** Responsive ******/
    var timer = null;
    $(window).on('resize load', function(){
        clearTimeout(timer);
        timer = setTimeout(function(){
            var wid = $(this).width();
            if( wid < 1024){
                $('.logo').attr('src','images/bg_logo_mobile.png');
                $('.logo2').attr('src','images/img_logo1_mobile.png');
                $('.logo3').attr('src','images/img_logo2_mobile.png');
                $('.logo4').attr('src','images/img_logo3_mobile.png');
                $('.logo5').attr('src','images/img_logo4_mobile.png');
                tabs();
            }else{
                $('.logo').attr('src','images/bg_logo_web.png');
                $('.logo2').attr('src','images/img_logo1.png');
                $('.logo3').attr('src','images/img_logo2.png');
                $('.logo4').attr('src','images/img_logo3.png');
                $('.logo5').attr('src','images/img_logo4.png');
                scroll_web();
                removetabs();

            }
        }, 100);
    });

    /***** 에너지 : 슬라이드 박스 ******/
    const swiper = new Swiper('.slide__box', {
        loop: true,
        slidesPerView:2,
        spaceBetween:35,
        navigation: {
          nextEl: '.slide__box__next',
          prevEl: '.slide__box__prev',
        },
        breakpoints:{
            0:{
                slidesPerView:1
            },
            1024 :{
                slidesPerView:2
            }
        }
    });

    /***** 금융 : 슬라이드 박스 ******/
    var swiperFinance = new Swiper(".f-swiper", {
        slidesPerView: 2,
        spaceBetween: 20,
        /* centeredSlides: true, */
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button.next",
            prevEl: ".swiper-button.prev",
        },
        breakpoints:{
            0:{
                slidesPerView:1,
            },
            1024 :{
                slidesPerView:2,
            }
        }
      });

    /***** Fixed tab ******/
    function scroll_web(){

        // tab scroll
        $('.scroll__tab a').on('click', function(e){
            e.preventDefault();
            var $idx = $(this).parent().index(),
                $eq = $('.scroll').eq($idx),
                $offset = $eq.offset().top;
    
                console.log($eq);
    
            $('html, body').stop().animate({
                scrollTop:$offset + 10
            }, 400);
    
            // $(this).parent().addClass('tabs--active').siblings().removeClass();
    
        });
        $(window).on('scroll', function(){
            var scr = $(this).scrollTop();
    
            if( 200 < scr){
                $('.scroll__tab').addClass('fix');
            }else{
                $('.scroll__tab').removeClass('fix');
            }
            $('.scroll').each(function(){
                var $target = $(this).index(),
                    $eq = $('.scroll').eq($target),
                    $top = $eq.offset().top;
                
    
                if( $top <= scr){
                    $('.scroll__tab > li').removeClass('tabs--active');
                    $('.scroll__tab > li').eq($target).addClass('tabs--active');
                }
    
            });
        });
    }

    //Btn top
	const subConH = $() 
	$(window).on("scroll", function(event){

		var scrollTop = $(window).scrollTop();
		var footH = $('.footer').outerHeight();
		var btnH = $('.btn__top').outerHeight();
		var val = $(document).height() - $(window).height() - footH;

		//스크롤 다운 시 btn-top
		if( scrollTop > 0 ){
			$('.btn__top').stop().fadeIn(200);
		}else {
			$('.btn__top').stop().fadeOut(200);
		}

		//Footer 영역에 가까워 질때, btn-top 버튼 포지션 ( btn-top position when approaching footer )
		if( scrollTop >= val + btnH  ){
			$('.btn__top').css('bottom' , footH - btnH);
		}else{
			$('.btn__top').css('bottom' , '8rem');
		}	
	});
	//btn-top 클릭 이벤트 (btn-top click event)
	$(".btn__top").on('click' , function(e) {
        $('html').animate({scrollTop : 0}, 300);
    });


});

/***** 모바일 탭 ******/
function tabs(){
    var tabs = $('.tabs'),
        txt = $('.tabs--active a, .tabs--active button').text(),
        first = $('.tabs > button');
        
    if( !first.hasClass('.hide') ){
        first.removeClass('hide').text(txt);
    }
    first.on('click', function(){
        $(this).toggleClass('active').next().stop().slideToggle(400);
    });

    $('.tabs__type1 a').on('click', function(){
        var wid = $(window).width();
        if(wid < 1024){
            first.removeClass('active');
            $(this).parents('.tabs__type1').slideUp();
        }
    });
}

function removetabs(){
    $('.tabs > button').addClass('hide');
    $('.tabs > ul').removeAttr('style');
}
