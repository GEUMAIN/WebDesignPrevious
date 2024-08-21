### 웹디자인기능사 기출문제E

![image](https://github.com/user-attachments/assets/17056dcc-5829-43f7-90c6-ced928c85ebe)

---

### HTML

```html
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>철길 마을</title>
    <link rel="stylesheet" href="CSS/style.css">

    <script src="Scripts/jquery.min.js"></script>
    <script src="Scripts/script.js"></script>
</head>

<body>
    <div id="wrap">
        <main id="main">
            <header id="header">
                <h1 class="logo"><a href="#">철길 마을</a></h1>
                <nav class="nav">
                    <ul>
                        <li><a href="#">철길 마을</a>
                            <ul class="submenu">
                                <li><a href="#">마을 소개</a></li>
                                <li><a href="#">미을의 유래</a></li>
                                <li><a href="#">볼거리</a></li>
                                <li><a href="#">찾아오시는 길</a></li>
                            </ul>
                        </li>

                        <li><a href="#">주변 맛집</a>
                            <ul class="submenu">
                                <li><a href="#">빵집</a></li>
                                <li><a href="#">간장게장</a></li>
                                <li><a href="#">중국음식점</a></li>
                                <li><a href="#">횟집</a></li>
                            </ul>
                        </li>

                        <li><a href="#">주변 여행지</a>
                            <ul class="submenu">
                                <li><a href="#">은파호수공원</a></li>
                                <li><a href="#">초원사진관</a></li>
                                <li><a href="#">월명공원</a></li>
                                <li><a href="#">진포해양공원</a></li>
                            </ul>
                        </li>

                        <li><a href="#">도움 마당</a>
                            <ul class="submenu">
                                <li><a href="#">교통정보</a></li>
                                <li><a href="#">주변 주차장</a></li>
                                <li><a href="#">자료실</a></li>
                                <li><a href="#">자료마당</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>

            <div id="contents">
                <article class="banner">
                    <h3>기차 여행</h3>
                    <a href="#">예매하기</a>
                </article>

                <article class="notice">
                    <h3>철길 마을 공지사항</h3>
                    <ul>
                        <li><a href="#">철길 마을 축제 일정 변경 안내</a> <span>2023.05.04</span></li>
                        <li><a href="#">철길 마을 도서관 임시 폐쇄 안내</a><span>2023.05.04</span></li>
                        <li><a href="#">철길 마을 지원봉사자 모집 공고</a><span>2023.05.04</span></li>
                        <li><a href="#">철길 마을 캠페인 안내</a><span>2023.05.04</span></li>
                        <li><a href="#">철길 마을 최신 소식</a><span>2023.05.04</span></li>
                    </ul>
                    <a href="#" class="more">더보기+</a>
                </article>

                <article class="gallery">
                    <h3>철길 마을 갤러리</h3>
                    <ul>
                        <li><a href="#">최고의 뷰</a></li>
                        <li><a href="#">위험한 뷰</a></li>
                        <li><a href="#">아름다운 뷰</a></li>
                    </ul>
                    <a href="#" class="more">더보기+</a>
                </article>

                <article class="link">
                    <h3>도움</h3>
                    <ul>
                        <li>
                            <a href="#">
                                <img src="images/icon01.png" alt="사진">
                                <span>사진찍기</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="images/icon02.png" alt="사진">
                                <span>분실물</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="images/icon03.png" alt="사진">
                                <span>예약하기</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="popup-btn">
                                <img src="images/icon04.png" alt="사진">
                                <span>전화하기</span>
                            </a>
                        </li>
                    </ul>
                </article>
            </div>

            <article id="silder">
                <div class="sliderWrap">
                    <div class="slider s1">
                        <div class="text">
                            <h3>추억을 소환하는 철길 마을</h3>
                            <p>철길 마을</p>
                        </div>
                    </div>
                    <div class="slider s2">
                        <div class="text">
                            <h3>추억을 소환하는 철길 마을</h3>
                            <p>철길 마을</p>
                        </div>
                    </div>
                    <div class="slider s3">
                        <div class="text">
                            <h3>추억을 소환하는 철길 마을</h3>
                            <p>철길 마을</p>
                        </div>
                    </div>
                </div>
            </article>

        </main>

        <footer id="footer">
            <div class="footer1">
                <h4>철길 마을</h4>
            </div>

            <div class="footer2">
                <div class="footer2-1">
                    <ul>
                        <li><a href="#">개인정보처리방침</a></li>
                        <li><a href="#">정보 공개</a></li>
                        <li><a href="#">홈페이지 운영지침</a></li>
                        <li><a href="#">분실물 확인하기</a></li>
                    </ul>
                </div>

                <div class="footer2-2">
                    15073 전라북도 군산시 군산로 237 (정왕동) 철길 마을 COPYRIGHT(C) ALL RIGHTS RESERVED.
                </div>
            </div>

            <div class="footer3">
                <select name="family" id="family">
                    <option value="철길마을1">철길마을1</option>
                    <option value="철길마을2">철길마을2</option>
                    <option value="철길마을3">철길마을3</option>
                </select>
            </div>
        </footer>

        <div class="popup-view">
            <h3>철길 마을 공지사항</h3>
            <p>
                안녕하세요, 철길마을 주민 여러분!
                철길마을 축제 개최 안내드립니다
                참고 하시고 많은 참여 바랍니다.
                감사합니다.
            </p>

            <a href="#" class="popup-close">닫기</a>
        </div>
    </div>

    <script src="Scripts/jquery.min.js"></script>
    <script src="Scripts/script.js"></script>
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
    width: 100%;
    display: block;
}

#wrap {
    width: 100%;
    position: relative;
}

#main {
    width: 100%;
    height: calc(100vh - 120px);
    display: flex;
}

#header {
    width: 200px;
    height: 100%;
    background-color: #ffe5e5;
}

#header .logo {
    width: 100%;
    text-align: center;
}

#header .logo a {
    padding: 24px;
    display: block;
    color: #b40000;
}

#header .nav {
    width: 100%;
    height: 90%;
    position: relative;
    z-index: 1000;
}

#header .nav>ul>li {
    text-align: center;
    position: relative;
}

#header .nav>ul>li>a {
    padding: 10px;
    display: inline-block;
    background-color: #ff6d6d;
    width: 100%;
    box-sizing: border-box;
    color: #fff;
}

#header .nav>ul>li>a:hover {
    background-color: #ff8888;
}

#header .nav>ul>li>ul {
    position: absolute;
    right: -200px;
    top: 0;
    width: 200px;
    display: none;
}

#header .nav>ul>li>ul>li a {
    padding: 10px;
    display: inline-block;
    background-color: #ff6d6d;
    width: 100%;
    color: #fff;
    box-sizing: border-box;
}

#header .nav>ul>li>ul>li a:hover {
    background-color: #ffa9a9;
}

#contents {
    width: 400px;
}

#contents .banner {
    width: 100%;
    height: 15%;
    background: url(../images/banner.jpg) no-repeat center;
    display: flex;
    align-items: center;
    justify-content: center;
}

#contents .banner h3 {
    color: #ffefef;
    font-size: 24px;
}

#contents .banner a {
    color: #fff;
    background-color: #ff6d6dc1;
    padding: 10px 20px;
    border-radius: 40px;
    margin-left: 10px;
}

#contents .banner a:hover {
    background-color: #ff6d6d;
}

#contents .notice {
    width: 100%;
    height: 35%;
    padding: 20px;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
}

#contents .notice h3 {
    background-color: #ff6d6d;
    color: #fff;
    padding: 4px 10px;
    margin-bottom: 10px;
}

#contents .notice li {
    display: flex;
    position: relative;
    padding-left: 10px;
    line-height: 1.6;
}

#contents .notice li::before {
    content: '';
    width: 6px;
    height: 6px;
    background-color: #ff6d6d;
    position: absolute;
    left: 0;
    top: 8px;
    border-radius: 50%;
}

#contents .notice li a {
    width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

#contents .notice li a:hover {
    text-decoration: underline;
}

#contents .notice li span {
    width: 30%;
    text-align: right;
}

#contents .notice .more {
    position: absolute;
    right: 26px;
    top: 26px;
    color: #fff;
}

#contents .gallery {
    width: 100%;
    height: 35%;
    background-color: #ffecec;
    padding: 20px;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
}

#contents .gallery h3 {
    background-color: #ff6d6d;
    color: #fff;
    padding: 4px 10px;
    margin-bottom: 10px;
}

#contents .gallery ul {
    display: flex;
    justify-content: space-between;
}

#contents .gallery li {
    width: 110px;
    height: 150px;
    background-size: cover;
}

#contents .gallery li:nth-child(1) {
    background-image: url(../images/gallery01.jpg);
}

#contents .gallery li:nth-child(2) {
    background-image: url(../images/gallery02.jpg);
}

#contents .gallery li:nth-child(3) {
    background-image: url(../images/gallery03.jpg);
}

#contents .gallery li a {
    display: block;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
}

#contents .gallery li a:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

#contents .gallery .more {
    position: absolute;
    right: 26px;
    top: 26px;
    color: #fff;
}

#contents .link {
    width: 100%;
    height: 15%;
    overflow: hidden;
}

#contents .link h3 {
    width: 1px;
    height: 1px;
    overflow: hidden;
    text-indent: -9999px;
}

#contents .link ul {
    display: flex;
    padding: 0 10px;
}

#contents .link li {
    width: 25%;
    padding: 5%;
    box-sizing: border-box;
    text-align: center;
}

#contents .link li:hover a span {
    color: #ff6d6d;
}

#silder {
    width: calc(100% - 600px);
    height: 100%;
    overflow: hidden;
}

#silder .sliderWrap {
    width: 500%;
    height: 100%;
    display: flex;
}

#silder .sliderWrap .slider {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

#silder .sliderWrap .slider .text {
    background-color: #ff6d6da3;
    width: 300px;
    height: 300px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 50%;
}

#silder .sliderWrap .slider .text h3 {
    color: #fff;
    font-size: 20px;
}

#silder .sliderWrap .slider .text p {
    color: #fff;
    margin-top: 5px;
}

#silder .sliderWrap .slider.s1 {
    background-image: url(../images/slider01.jpg);
}

#silder .sliderWrap .slider.s2 {
    background-image: url(../images/slider02.jpg);
}

#silder .sliderWrap .slider.s3 {
    background-image: url(../images/slider03.jpg);
}

#footer {
    width: 100%;
    display: flex;
    background-color: #efefef;
}

#footer .footer1 {
    width: 200px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
}

#footer .footer1 h4 {
    font-size: 24px;
    color: #979797;
}

#footer .footer2 {
    width: calc(100% - 400px);
}

#footer .footer2 .footer2-1 {
    width: 100%;
    height: 60px;
    text-align: center;
}

#footer .footer2 .footer2-1 ul {
    padding-top: 10px;
}

#footer .footer2 .footer2-1 li {
    display: inline-block;
}

#footer .footer2 .footer2-1 li::after {
    content: '|';
}

#footer .footer2 .footer2-1 li:last-child:after {
    content: '';
}

#footer .footer2 .footer2-1 li a {
    padding: 10px;
    display: inline-block;
}

#footer .footer2 .footer2-1 li a:hover {
    text-decoration: underline;
}

#footer .footer2 .footer2-2 {
    width: 100%;
    height: 60px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

#footer .footer3 {
    width: 200px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
}

#footer .footer3 select {
    width: 90%;
    height: 30px;
}

.popup-view {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    background-color: #ffcbcb;
    border: 4px solid #ff6d6d;
    padding: 20px;
    display: none;
}

.popup-view h3 {
    font-size: 24px;
    margin-bottom: 15px;
    border-bottom: 2px solid #ff6d6d;
    color: #ff6d6d;
}

.popup-close {
    display: inline-block;
    padding: 8px 20px;
    background-color: #ff6d6d;
    color: #fff;
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
}
```

---

### JavaScript

```jsx
$(function () {
    let currentIndex = 0;
    $(".sliderWrap").append($(".slider").first().clone(true));

    setInterval(function () {
        currentIndex++;
        $(".sliderWrap").animate({ marginLeft: -100 * currentIndex + "%" }, 600);

        if (currentIndex == 3) {
            setTimeout(function () {
                $(".sliderWrap").animate({ marginLeft: 0 }, 0);
                currentIndex = 0;
            }, 600);
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
    });

});
```
