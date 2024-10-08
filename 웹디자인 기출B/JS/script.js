$(function () {
    let currentIndex = 0;
    $(".sliderWrap").append($(".slider").first().clone(true));

    setInterval(function () {
        currentIndex++;
        $(".sliderWrap").animate({ marginLeft: -1200 * currentIndex }, 600);

        if (currentIndex == 3) {
            setTimeout(function () {
                $(".sliderWrap").animate({ marginLeft: 0 }, 0);
                currentIndex = 0;
            }, 700);
        }
    }, 3000);

    $(".nav > ul > li").mouseover(function () {
        $(".nav > ul > li > ul").stop().fadeIn(400);
        $("#header .container").addClass("on");
    });
    $(".nav > ul > li").mouseout(function () {
        $(".nav > ul > li > ul").stop().fadeOut(100);
        $("#header .container").removeClass("on");
    });

    $(".popup-btn").click(function () {
        $(".popup-view").show();
    });
    $(".popup-close").click(function () {
        $(".popup-view").hide();
    });
});
