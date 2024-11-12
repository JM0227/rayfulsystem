$(function(){
    /***** Main : 비주얼 텍스트 애니메이션 ******/
    var quotes = $(".quotes");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextQuote);
    }
    showNextQuote();

    /***** Main : 솔루션 영역 숫자 이벤트 ******/
    var startCount = {var: 0};

    gsap.to(startCount, {
        var: 15, duration: 1, ease:"none",
        onUpdate: changeNumber,
        scrollTrigger: {
            trigger: "#num1",
        },
    });
    
    function changeNumber() {
        num1.innerHTML = (startCount.var).toFixed();
    }

    gsap.to(startCount, {
        var: 60, duration: 1, delay:0.2, ease:"none",
        onUpdate: changeNumber2,
        scrollTrigger: {
            trigger: "#num2",
        },
    });
    function changeNumber2() {
        num2.innerHTML = (startCount.var).toFixed();
    }

    gsap.to(startCount, {
        var: 30, duration: 1, delay:.4, ease:"none",
        onUpdate: changeNumber3,
        scrollTrigger: {
            trigger: "#num3",
        },
    });
    function changeNumber3() {
        num3.innerHTML = (startCount.var).toFixed();
    }

    /***** Main : 솔루션 영역 탭 ******/
    $(".solution__tabs__list > li > a").click(function(){
        //alert('test');
        var now_tab = $(this).parent().index();
        $(this).parent().parent().find("li").removeClass("active");
        $(this).parent().parent().parent().find(".solution__tabs__item").addClass("hidden");

        $(this).parent().parent().find("li").eq(now_tab).addClass("active");
        $(this).parent().parent().parent().find(".solution__tabs__item").eq(now_tab).removeClass("hidden");		
    });

});