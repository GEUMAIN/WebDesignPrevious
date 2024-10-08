$(function () {
    let currentIndex = 0;
    $(".sliderWrap").append($(".slider").first().clone(true));

    setInterval(function () {
        currentIndex++;
        $(".sliderWrap").animate({ marginTop: -350 * currentIndex + "px" }, 600);

        if (currentIndex == 3) {
            setTimeout(function () {
                $(".sliderWrap").animate({ marginTop: 0 }, 0);
                currentIndex = 0;
            }, 700);
        }
    }, 3000);

    $(".nav > ul > li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown();
    });
    $(".nav > ul > li").mouseout(function () {
        $(this).find(".submenu").stop().slideUp();
    });

    $(".popup-btn").click(function () {
        $(".popup-view").show();
    });

    $(".popup-close").click(function () {
        $(".popup-view").hide();
    })
})