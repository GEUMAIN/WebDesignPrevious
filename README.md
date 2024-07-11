### 웹디자인기능사 기출문제A

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/fa97d740-13f6-4ddc-9939-b86bb2c976d6/37d62409-3df2-438e-a310-d8537dc46126/Untitled.png)

---

### HTML

```html
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>강원천문대</title>
    <link rel="stylesheet" href="CSS/style.css">

    <script src="JS/script.js"></script>
    <script src="JS/jquery.min.js"></script>
</head>

<body>

    <div id="wrap">
        <header id="header">
            <h1 class="logo">
                <a href="#">강원천문대</a>
            </h1>
            <nav class="nav">
                <ul>
                    <li>
                        <a href="#">강원천문대</a>
                        <ul class="submenu">
                            <li><a href="#">천문대소개</a></li>
                            <li><a href="#">인사말</a></li>
                            <li><a href="#">오시는길</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#">이용안내</a>
                        <ul class="submenu">
                            <li><a href="#">프로그램</a></li>
                            <li><a href="#">관람시간표</a></li>
                            <li><a href="#">이달의 별자리</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#">천문대예약</a>
                        <ul class="submenu">
                            <li><a href="#">예약하기</a></li>
                            <li><a href="#">예약확인</a></li>
                            <li><a href="#">예약취소</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#">커뮤니티</a>
                        <ul class="submenu">
                            <li><a href="#">공지사항</a></li>
                            <li><a href="#">방문후기</a></li>
                            <li><a href="#">자유게시판</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>

        <article id="slider">
            <div class="sliderWrap">
                <div class="slider s1">
                    <a href="#"><img src="../images/slider01.jpg" alt=""></a>
                    <div class="text">
                        <h2>천문과학교육관 시설 소개</h2>
                        <p>천문과학관으로 놀러오세요!</p>
                    </div>
                </div>

                <div class="slider s2">
                    <a href="#"><img src="../images/slider02.jpg" alt=""></a>
                    <div class="text">
                        <h2>천문과학교육관 이용안내</h2>
                        <p>천문과학관으로 놀러오세요!</p>
                    </div>
                </div>

                <div class="slider s3">
                    <a href="#"><img src="../images/slider03.jpg" alt=""></a>
                    <div class="text">
                        <h2>천문과학교육관 소개</h2>
                        <p>천문과학관으로 놀러오세요!</p>
                    </div>
                </div>

            </div>
        </article>

        <main id="contents">
            <section class="info">
                <h3 class="info-menu">
                    <a href="#" class="active">공지사항</a>
                    <a href="#">갤러리</a>
                </h3>
                <div class="info-cont">
                    <div class="notice">
                        <ul>
                            <li class="popup-btn"><a href="#">강원천문대 2023년 휴관일 안내</a><span>2023.05.04</span></li>
                            <li><a href="#">강원천문대 온라인 예매 안내</a><span>2023.05.03</span></li>
                            <li><a href="#">강원천문대 휴관일 및 이벤트 안내</a><span>2023.05.02</span></li>
                            <li><a href="#">강원천문대 주차장 이용 및 숙박 안내</a><span>2023.05.01</span></li>
                        </ul>
                    </div>

                    <div class="gallery">
                        <ul>
                            <li><a href="#"><img src="../images/gallery01.jpg" alt=""></a></li>
                            <li><a href="#"><img src="../images/gallery02.jpg" alt=""></a></li>
                            <li><a href="#"><img src="../images/gallery03.jpg" alt=""></a></li>
                        </ul>
                    </div>
                </div>
            </section>

            <section class="banner">
                <h3>강원천문대 온라인 예매하기</h3>
                <a href="#">예매하기</a>
            </section>

            <section class="link">
                <h3>이달의 별자리 구경하기</h3>
                <a href="#">바로가기</a>
            </section>

        </main>

        <footer id="footer">
            <div class="footer1">
                <h4>강원천문대</h4>
            </div>
            <div class="footer2">
                <div class="footer2-1">
                    <ul>
                        <li><a href="#">개인정보처리방침</a></li>
                        <li><a href="#">저작권보호정책</a></li>
                        <li><a href="#">이메일무단수집거부</a></li>
                        <li><a href="#">CCTV설치 및 운영지점</a></li>
                    </ul>
                </div>
                <div class="footer2-2">COPYRIGHT 2023, All Rights Reseved</div>
            </div>
        </footer>

        <div class="popup-view">
            <h3>강원천문대 공지사항</h3>
            <p>
                2023년 하반기 천체 관측 프로그램 참가 신청 안내
                안녕하세요. 강원천문대입니다. 2023년 하반기 천체 관측 프로그램에 참가하실 분들을 모집하고 있습니다.
                관심 있는 분들은 많은 연락바랍니다.
            </p>
            <a href="#" class="popup-close">닫기</a>
        </div>
    </div>

    <script src="JS/script.js"></script>
    <script src="JS/jquery.min.js"></script>
</body>

</html>
```

---

### CSS

```css
* {
    margin: 0;
    padding: 0;
    color: #333;
}

a {
    text-decoration: none;
    color: #333;
}

li {
    list-style: none;
}

img {
    vertical-align: top;
    width: 100%;
}

#wrap {
    width: 1200px;
    margin: 0 auto;
}

#header {
    width: 100%;
    display: flex;
    background-color: #0c51a6;
}

#header .logo {
    width: 20%;
    height: 100px;
}

#header .logo a {
    display: inline-block;
    padding: 30px 40px;
    color: #fff;
}

#header .nav {
    width: 80%;
    height: 100px;
    position: relative;
    z-index: 1000;
}

#header .nav>ul {
    display: flex;
    justify-content: right;
    align-items: center;
    height: 100%;
}

#header .nav>ul>li {
    position: relative;
}

#header .nav>ul>li>a {
    color: #fff;
    padding: 15px 45px;
    background-color: #0a4288;
    display: block;
}

#header .nav>ul>li>a:hover {
    background-color: #126bd8;
}

#header .nav>ul>li>ul {
    position: absolute;
    left: 0;
    background-color: #fff;
    width: 100%;
    text-align: center;
    display: none;
}

#header .nav>ul>li>ul>li>a {
    padding: 10px 20px;
    display: block;
}

#header .nav>ul>li>ul>li>a:hover {
    background-color: #c0dcff;
}

#slider {
    width: 100%;
    height: 300px;
    background-color: #d9d9d9;
}

#slider .sliderWrap {
    position: relative;
}

#slider .sliderWrap .slider {
    position: absolute;
    left: 0;
    top: 0;
}

#slider .sliderWrap .slider .text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 20px 30px;
}

#slider .sliderWrap .slider .text h2 {
    color: #fff;
    font-size: 30px;
    margin-bottom: 3px;
}

#slider .sliderWrap .slider .text p {
    color: #fff;
    font-size: 16px;
}

#contents {
    width: 100%;
    display: flex;
}

#contents .info {
    width: 400px;
    height: 200px;
    background-color: #e5f1ff;
    box-sizing: border-box;
}

#contents .info .info-menu {
    margin-bottom: 10px;
}

#contents .info .info-menu a {
    font-size: 24px;
}

#contents .info .info-menu a.active {
    text-decoration: underline;
}

#contents .info .info-cont .notice {
    display: none;
}

#contents .info .info-cont .notice li {
    display: flex;
}

#contents .info .info-cont .notice li a {
    width: 75%;
    font-size: 16px;
    line-height: 1.8;
}

#contents .info .info-cont .notice li span {
    width: 25%;
    font-size: 16px;
    line-height: 1.8;
    text-align: right;
}

#contents .info .info-cont .gallery ul {
    display: flex;
    justify-content: space-between;
}

#contents .info .info-cont .gallery ul li a {
    border: 2px solid transparent;
    display: block;
}

#contents .info .info-cont .gallery ul li a:hover {
    border-color: #0a4288;
}

#contents .banner {
    width: 400px;
    height: 200px;
    background-image: url("../../images/banner.jpg");
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

#contents .banner h3 {
    color: #fff;
    font-size: 26px;
}

#contents .banner a {
    background-color: rgba(0, 0, 0, 0.4);
    padding: 10px 20px;
    color: #fff;
    border-radius: 50px;
    margin-top: 10px;
}

#contents .banner a:hover {
    background-color: rgba(0, 0, 0, 1);
}

#contents .link {
    width: 400px;
    height: 200px;
    background-image: url(../../images/link.jpg);
}

#contents .link h3 {
    color: #fff;
    padding: 20px;
}

#contents .link a {
    width: 100px;
    height: 100px;
    background-color: rgba(1, 52, 96, 0.8);
    display: block;
    border-radius: 50%;
    text-align: center;
    color: #fff;
    line-height: 100px;
    margin: 0 auto;
}

#contents .link a:hover {
    background-color: rgba(1, 52, 96, 1);
}

#footer {
    width: 100%;
    display: flex;
    background-color: #e7e7e7;
}

#footer .footer1 {
    width: 20%;
    height: 100px;
}

#footer .footer1 h4 {
    font-size: 30px;
    color: #7f7f7f;
    padding: 32px 30px;
}

#footer .footer2 {
    width: 80%;
    height: 100px;
}

#footer .footer2 .footer2-1 {
    width: 100%;
    height: 50px;
    text-align: center;
}

#footer .footer2 .footer2-1 ul {
    padding-top: 24px;
}

#footer .footer2 .footer2-1 li {
    display: inline-block;
    border-right: 1px solid #333;
}

#footer .footer2 .footer2-1 li:last-child {
    border: 0;
}

#footer .footer2 .footer2-1 li a {
    padding: 10px;
}

#footer .footer2 .footer2-1 li a:hover {
    text-decoration: underline;
}

#footer .footer2 .footer2-2 {
    width: 100%;
    height: 50px;
    text-align: center;
    padding-top: 10px;
    box-sizing: border-box;
}

.popup-view {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    background-color: #8ec1ff;
    border: 4px solid #0a4288;
    padding: 20px;
    display: none;
}

.popup-view h3 {
    font-size: 24px;
    margin-bottom: 15px;
    border-bottom: 2px solid #0a4288;
    color: #0a4288;
    padding-bottom: 5px;
}

.popup-close {
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    background-color: #0a4288;
    color: #fff;
    padding: 8px 20px;
}
```

---

### JavaScript (JQuery)

```jsx
$(function () {
    let currentIndex = 0;
    $(".slider").hide().first().show();

    setInterval(function () {
        let nextIndex = (currentIndex + 1) % 3;

        $(".slider").eq(currentIndex).fadeOut(1200);
        $(".slider").eq(nextIndex).fadeIn(1200);

        currentIndex = nextIndex;
    }, 3000);

    $(".nav > ul > li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown(200);
    });

    $(".nav > ul > li").mouseout(function () {
        $(this).find(".submenu").stop().slideUp(200);
    });

    const tabBtn = $(".info-menu > a");
    const tabCont = $(".info-cont > div");
    tabCont.hide().eq(0).show();

    tabBtn.click(function () {
        const index = $(this).index();

        $(this).addClass("active").siblings().removeClass("active");
        tabCont.eq(index).show().siblings().hide();
    });

    $(".popup-btn").click(function () {
        $(".popup-view").show();
    });
    $(".popup-close").click(function () {
        $(".popup-view").hide();
    });

});
```
