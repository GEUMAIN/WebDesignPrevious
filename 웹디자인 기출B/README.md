### 웹디자인기능사 기출문제B

![깃헙2](https://github.com/user-attachments/assets/1b9dbe8d-84f8-4921-92a1-12956dccb3d9)

---

### HTML

```html
<!DOCTYPE html>
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>산업대학교</title>

    <link rel="stylesheet" href="css/style.css">

    <script src="script/jquery.min.js"></script>
    <script src="script/script.js"></script>
</head>

<body>
    <div id="wrap">
        <header id="header">
            <div class="container">
                <h1 class="logo">
                    <a href="#">산업대학교</a>
                </h1>
                <nav class="nav">
                    <ul>
                        <li><a href="#">대학소개</a>
                            <ul class="submenu">
                                <li><a href="#">총장인사말</a></li>
                                <li><a href="#">학교소개</a></li>
                                <li><a href="#">홍보관</a></li>
                                <li><a href="#">캠퍼스안내</a></li>
                            </ul>
                        </li>
                        <li><a href="#">입학안내</a>
                            <ul class="submenu">
                                <li><a href="#">수시모집</a></li>
                                <li><a href="#">정시모집</a></li>
                                <li><a href="#">편입학</a></li>
                                <li><a href="#">재외국민</a></li>
                            </ul>
                        </li>
                        <li><a href="#">정보서비스</a>
                            <ul class="submenu">
                                <li><a href="#">대학정보알림</a></li>
                                <li><a href="#">정보공개</a></li>
                                <li><a href="#">정보서비스안내</a></li>
                            </ul>
                        </li>
                        <li><a href="#">커뮤니티</a>
                            <ul class="submenu">
                                <li><a href="#">공지사항</a></li>
                                <li><a href="#">참여게시판</a></li>
                                <li><a href="#">자료실</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <article id="slider">
            <div class="container">
                <div class="sliderWrap">
                    <div class="slider s1">
                        <a href="#">
                            <img src="../images/slider01.jpg" alt="미래를 이끄는 열정">
                        </a>
                        <div class="text">
                            <h2>미래를 이끄는 <strong>열정</strong></h2>
                            <p>산업대학교</p>
                        </div>
                    </div>
                    <div class="slider s2">
                        <a href="#">
                            <img src="../images/slider02.jpg" alt="당신이 원하는 교육">
                        </a>
                        <div class="text">
                            <h2>당신이 원하는 <strong>교육</strong></h2>
                            <p>산업대학교</p>
                        </div>
                    </div>
                    <div class="slider s3">
                        <a href="#">
                            <img src="../images/slider03.jpg" alt="미래를 향한 우리의 도전">
                        </a>
                        <div class="text">
                            <h2>미래를 향한 우리의 <strong>도전</strong></h2>
                            <p>산업대학교</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        <main id="contents">
            <div class="container">
                <section class="notice">
                    <h3>산업대학교 새로운 소식</h3>
                    <ul>
                        <li class="popup-btn"><a href="#">2023년 신입생 모집중</a><span>2023.05.04</span></li>
                        <li><a href="#">융합 전공 멘토링 및 튜터링 학생 모집</a><span>2023.05.03</span></li>
                        <li><a href="#">학과 및 학년별 장기자랑 대회</a><span>2023.05.02</span></li>
                        <li><a href="#">미래 직업 워크숍 및 박람회</a><span>2023.05.01</span></li>
                    </ul>
                </section>
                <section class="gallery">
                    <h3>우리학교 풍경</h3>
                    <ul>
                        <li><a href="#"><img src="../images/gallery01.jpg" alt="우리학교 강의실"></a></li>
                        <li><a href="#"><img src="../images/gallery02.jpg" alt="우리학교 도서관"></a></li>
                        <li><a href="#"><img src="../images/gallery03.jpg" alt="우리학교 정문뷰"></a></li>
                    </ul>
                </section>
                <section class="banner">
                    <h3>산업대학교<br>2023<br>체육대전</h3>
                    <a href="#">바로가기</a>
                </section>
            </div>
        </main>
        <footer id="footer">
            <div class="container">
                <div class="footer1">
                    <div class="footer1-1">
                        <ul>
                            <li><a href="#">개인정보처리방침</a></li>
                            <li><a href="#">정보공개</a></li>
                            <li><a href="#">홈페이지 운영지침</a></li>
                        </ul>
                    </div>
                    <div class="footer1-2">
                        15073 경기도 안산시 산기대학로 237 (정왕동) 산업대학교 COPYRIGHT(C) ALL RIGHTS RESERVED.
                    </div>
                </div>
                <div class="footer2">
                    <select name="#" id="#">
                        <option>패밀리 사이트</option>
                        <option value="1">안양 산업대학교</option>
                        <option value="2">강원 산업대학교</option>
                        <option value="3">부산 산업대학교</option>
                    </select>
                </div>
            </div>
        </footer>

        <div class="popup-view">
            <h3>산업대학교 공지사항</h3>
            <p>
                2023년도 1학기 일정 변경 안내
                안녕하세요, 산업대학교 교무처입니다. 2023년도 1학기 수업 일정에 변경이 있어 안내드립니다.
                기존 수업 일정에 따르면 3월 2일부터 6월 16일까지 총 15주 동안 수업이 진행되었으나, 교내 사정으로 인해 수업 일정이 변경되었습니다.
                참고해주세요!
            </p>
            <a href="#" class="popup-close">닫기</a>
        </div>
    </div>

    <script src="JS/jquery.min.js"></script>
    <script src="JS/script.js"></script>
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
    vertical-align: top;
}

#wrap {
    width: 100%;
    position: relative;
}

.container {
    width: 1200px;
    margin: 0 auto;
    height: inherit;
}

#header {
    width: 100%;
    background-color: #f3f3f3;
    z-index: 1000;
    position: relative;
}

#header .container {
    display: flex;
    align-items: end;
    position: relative;
}

#header .container::after {
    content: '';
    width: 100%;
    height: 0;
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 99px;
    left: 0;
    z-index: -1;
    transition: all 400ms;
}

#header .container.on::after {
    height: 160px;
}

#header .container .logo {
    width: 20%;
}

#header .container .logo a {
    padding: 30px;
    display: inline-block;
}

#header .container .nav {
    width: 80%;
}

#header .container .nav>ul {
    display: flex;
    justify-content: right;
}

#header .container .nav>ul>li {
    position: relative;
}

#header .container .nav>ul>li>a {
    display: block;
    padding: 15px 40px;
    font-weight: bold;
}

#header .container .nav>ul>li>a:hover {
    background-color: #ffe39c;
}

#header .container .nav>ul>li>ul {
    position: absolute;
    left: 0;
    top: 50px;
    width: 100%;
    display: none;
}

#header .container .nav>ul>li>ul>li>a {
    padding: 10px;
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    color: #fff;
}

#header .container .nav>ul>li>ul>li>a:hover {
    background-color: #ffe090;
    color: #000;
}

#header .container .nav>ul>li>ul>li>a {
    padding: 10px;
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    color: #fff;
}

#header .container .nav>ul>li>ul>li>a:hover {
    background-color: #ffe090;
    color: #000;
}

#slider {
    width: 100%;
    height: 300px;
}

#slider .container {
    overflow: hidden;
}

#slider .container .sliderWrap {
    display: flex;
    width: 400%;
}

#slider .container .sliderWrap .slider {
    position: relative;
    width: 1200px;
}

#slider .container .sliderWrap .slider a {
    display: block;
}

#slider .container .sliderWrap .slider .text {
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.4);
    padding: 20px 50px;
}

#slider .container .sliderWrap .slider .text h2 {
    color: #fff;
    font-size: 30px;
    margin-bottom: 3px;
}

#slider .container .sliderWrap .slider .text h2 strong {
    color: orange;
}

#slider .container .sliderWrap .slider .text p {
    color: #fff;
    font-size: 18px;
}

#contents {
    width: 100%;
}

#contents .container {
    display: flex;
}

#contents .container .notice {
    width: 400px;
    height: 200px;
    padding: 25px 20px;
    background-color: #fff4e0;
    box-sizing: border-box;
}

#contents .container .notice h3 {
    font-size: 24px;
    margin-bottom: 10px;
}

#contents .container .notice li {
    display: flex;
    line-height: 1.8;
    position: relative;
    padding-left: 14px;
}

#contents .container .notice li::before {
    content: '';
    width: 5px;
    height: 5px;
    background-color: #333;
    position: absolute;
    left: 0;
    top: 11px;
    border-radius: 50%;
}

#contents .container .notice li a {
    width: 70%;
}

#contents .container .notice li a:hover {
    text-decoration: underline;
}

#contents .container .notice li span {
    width: 30%;
    text-align: right;
}

#contents .container .gallery {
    width: 400px;
    height: 200px;
    padding: 25px 20px;
    box-sizing: border-box;
}

#contents .container .gallery h3 {
    font-size: 24px;
    margin-bottom: 10px;
}

#contents .container .gallery ul {
    display: flex;
    justify-content: space-between;
}

#contents .container .gallery li {
    width: 114px;
}

#contents .container .gallery li a {
    display: block;
}

#contents .container .gallery li a:hover img {
    opacity: 0.8;
}

#contents .container .banner {
    width: 400px;
    background-image: url(../images/banner.jpg);
    text-align: center;
}

#contents .container .banner h3 {
    padding-top: 40px;
    font-size: 24px;
    color: #fff;
}

#contents .container .banner a {
    background-color: orange;
    color: #fff;
    padding: 10px 30px;
    display: inline-block;
    border-radius: 40px;
    transition: all 0.3s;
    margin-top: 3px;
}

#contents .container .banner a:hover {
    border-radius: 0;
}

#footer {
    width: 100%;
    background-color: #e5e5e5;
}

#footer .container {
    display: flex;
}

#footer .container .footer1 {
    width: 80%;
}

#footer .container .footer1 .footer1-1 {
    width: 100%;
    height: 50px;
}

#footer .container .footer1 .footer1-1 li {
    display: inline;
    border-right: 1px solid #333;
}

#footer .container .footer1 .footer1-1 li:last-child {
    border: 0;
}

#footer .container .footer1 .footer1-1 li a {
    padding: 18px 10px 16px 0;
    display: inline-block;
}

#footer .container .footer1 .footer1-1 li a:hover {
    text-decoration: underline;
}

#footer .container .footer1 .footer1-2 {
    width: 100%;
    height: 50px;
    padding-top: 15px;
    box-sizing: border-box;
}

#footer .container .footer2 {
    width: 20%;
    height: 100px;
}

#footer .container .footer2 select {
    margin-top: 34px;
    width: 100%;
    height: 30px;
}

.popup-view {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    background-color: #ffe4b5;
    border: 4px solid orange;
    padding: 20px;
    display: none;
}

.popup-view h3 {
    font-size: 24px;
    margin-bottom: 15px;
    border-bottom: 2px solid #000;
    padding-bottom: 5px;
}

.popup-view a {
    display: inline-block;
    padding: 8px 20px;
    color: #fff;
    background-color: orange;
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

```
