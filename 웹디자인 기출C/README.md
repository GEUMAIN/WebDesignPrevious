### 웹디자인기능사 기출문제C

![image](https://github.com/user-attachments/assets/26354468-6c9a-44b3-904c-88d5a78ff50f)

---

### HTML

```html
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vallery Festival</title>

    <link rel="stylesheet" href="CSS/style.css">

    <script src="JS/jquery.min.js"></script>
    <script src="JS/script.js"></script>
</head>

<body>
    <div id="wrap">
        <aside id="aside">
            <h1 class="logo">
                <a href="#">Vallery Festival</a>
            </h1>
            <nav class="nav">
                <ul>
                    <li>
                        <a href="#">축제소개</a>
                        <ul class="submenu">
                            <li><a href="#">Festival 소개</a></li>
                            <li><a href="#">행사장 안내</a></li>
                            <li><a href="#">조직위원회</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#">예약안내</a>
                        <ul class="submenu">
                            <li><a href="#">예약하기</a></li>
                            <li><a href="#">예약확인/취소</a></li>
                            <li><a href="#">단체예약문의</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#">아티스트</a>
                        <ul class="submenu">
                            <li><a href="#">고릴라즈</a></li>
                            <li><a href="#">메이저 레이저</a></li>
                            <li><a href="#">아우스게인</a></li>
                            <li><a href="#">타임로드</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#">커뮤니티</a>
                        <ul class="submenu">
                            <li><a href="#">공지사항</a></li>
                            <li><a href="#">사진 갤러리</a></li>
                            <li><a href="#">영상 갤러리</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </aside>

        <main id="main">
            <article id="slider">
                <div class="sliderWrap">
                    <div class="slider s1">
                        <a href="#"><img src="../images2/slider01.jpg" alt="Vallery Festival1"></a>
                        <div class="text">
                            <h2>Vallery <em>Festival</em></h2>
                            <p>신나는 축제 같이 놀아봅시다.</p>
                        </div>
                    </div>
                    <div class="slider s2">
                        <a href="#"><img src="../images2/slider02.jpg" alt="Vallery Festival2"></a>
                        <div class="text">
                            <h2>Vallery <em>Festival</em></h2>
                            <p>신나는 축제 같이 놀아봅시다.</p>
                        </div>
                    </div>
                    <div class="slider s3">
                        <a href="#"><img src="../images2/slider03.jpg" alt="Vallery Festival3"></a>
                        <div class="text">
                            <h2>Vallery <em>Festival</em></h2>
                            <p>신나는 축제 같이 놀아봅시다.</p>
                        </div>
                    </div>
                </div>
            </article>

            <div id="contents">
                <article class="notice">
                    <h3>Vallery Festival 공지사항</h3>
                    <ul>
                        <li><a href="#">주차장 안내 및 티켓 수령 장소 주차장 안내 및 티켓 수령 장소</a></li>
                        <li><a href="#">Vallery Festival 날짜 및 장소 안내</a></li>
                        <li><a href="#">주의사항 및 안내사항 참고 필수</a></li>
                        <li><a href="#">Vallery Festival 사이트 업데이트 안내</a></li>
                    </ul>
                </article>

                <article class="gallery">
                    <h3>Vallery Festival 갤러리</h3>
                    <ul>
                        <li><a href="#"><img src="../images2/gallery01.jpg" alt="현장사진1"></a></li>
                        <li><a href="#"><img src="../images2/gallery02.jpg" alt="현장사진2"></a></li>
                        <li><a href="#"><img src="../images2/gallery03.jpg" alt="현장사진3"></a></li>
                    </ul>
                </article>

                <article class="link">
                    <h3>Vallery Festival</h3>
                    <a href="#" class="popup-btn">티켓 구매</a>
                </article>
            </div>

            <footer id="footer">
                <div class="footer1">
                    <h4>Vallery Festival</h4>
                </div>
                <div class="footer2">
                    주소 서울시 강남구 삼성로 100 삼성동빌딩 100층<br>
                    COPYRIGHT(C) ALL RIGHTS RESERVED.
                </div>
                <div class="footer3">
                    <select name="select" id="select">
                        <option value="패밀리 사이트">패밀리 사이트</option>
                        <option value="패밀리 사이트1">패밀리 사이트1</option>
                        <option value="패밀리 사이트2">패밀리 사이트2</option>
                        <option value="패밀리 사이트3">패밀리 사이트3</option>
                    </select>
                </div>

            </footer>
        </main>

        <article class="popup-view">
            <h3>Vallery Festival</h3>
            <p>
                안녕하세요, Vallery Festival 운영팀입니다.
                2023년 Vallery Festival 티켓 예매 일정에 변경이 있어 안내드립니다.
                기존 예매 일정에 따르면 6월 1일부터 6월 30일까지 티켓 예매가 가능하였으나,
                운영상의 문제로 인해 일정이 변경되었습니다.
            </p>
            <a href="#" class="popup-close">닫기</a>
        </article>
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
    width: 1000px;
    display: flex;
    position: relative;
}

#aside {
    width: 200px;
    background-color: #ebe1ff;
}

#aside .logo {
    width: 200px;
    height: 100px;
    text-align: center;
}

#aside .logo a {
    display: inline-block;
    padding: 20px;
    font-size: 26px;
}

#aside .nav {
    width: 200px;
    height: 550px;
    position: relative;
    z-index: 1000;
}

#aside .nav>ul>li {
    position: relative;
}

#aside .nav>ul>li>a {
    display: inline-block;
    background-color: #58339e;
    color: #fff;
    width: 100%;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
}

#aside .nav>ul>li>a:hover {
    background-color: #7243c9;
}

#aside .nav>ul>li>ul {
    background-color: #fff;
    text-align: center;
    position: absolute;
    right: -200px;
    top: 0;
    width: 200px;
    display: none;
}

#aside .nav>ul>li>ul>li>a {
    padding: 10px;
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
}

#aside .nav>ul>li>ul>li>a:hover {
    background-color: #8558d1;
    color: #fff;
}

#main {
    width: 800px;
    height: 650px;
}

#slider {
    width: 800px;
    height: 350px;
    overflow: hidden;
}

#slider .sliderWrap {
    overflow: hidden;
}

#slider .sliderWrap .slider {
    position: relative;
    height: 350px;
}

#slider .sliderWrap .text {
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 20px 40px;
}

#slider .sliderWrap .slider .text h2 {
    color: #fff;
    font-size: 40px;
}

#slider .sliderWrap .slider .text h2 em {
    color: #58339e;
    font-style: normal;
}

#slider .sliderWrap .slider .text p {
    color: #fff;
}

#contents {
    width: 800px;
    display: flex;
}

#contents .notice {
    width: 300px;
    height: 200px;
    background-color: #f9ddff;
    padding: 20px;
    box-sizing: border-box;
}

#contents .notice h3 {
    margin-bottom: 10px;
}

#contents .notice li {
    line-height: 1.6;
    position: relative;
    padding-left: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

#contents .notice li::before {
    content: '';
    width: 5px;
    height: 5px;
    background-color: #000;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 8px;
}

#contents .notice li a:hover {
    text-decoration: underline;
}

#contents .gallery {
    width: 300px;
    height: 200px;
    background-color: #e0bfff;
    padding: 20px;
    box-sizing: border-box;
}

#contents .gallery h3 {
    margin-bottom: 10px;
}

#contents .gallery ul {
    display: flex;
}

#contents .gallery li {
    margin-right: 10px;
}

#contents .gallery li img {
    width: 80px;
}

#contents .gallery li a {
    display: block;
}

#contents .gallery li a:hover img {
    opacity: 0.7;
}

#contents .link {
    width: 200px;
    height: 200px;
    background-image: url(../../images2/banner.jpg);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

#contents .link h3 {
    color: #fff;
    font-size: 26px;
}

#contents .link a {
    background-color: #58339e;
    color: #fff;
    padding: 10px 20px;
    border-radius: 40px;
}

#contents .link a:hover {
    background-color: #6f2ceb;
}

#footer {
    width: 800px;
    background-color: #ecb8fd;
    display: flex;
    align-items: center;
    height: 100px;
}

#footer .footer1 {
    width: 200px;
    text-align: center;
}

#footer .footer1 h4 {
    font-size: 20px;
    color: #7a7a7a;
}

#footer .footer2 {
    width: 400px;
}

#footer .footer3 {
    width: 200px;
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
    background-color: #d0aef0;
    padding: 20px;
    border: 4px solid #7243c9;
    display: none;
}

.popup-view h3 {
    font-size: 24px;
    margin-bottom: 10px;
}

.popup-close {
    display: inline-block;
    padding: 8px 20px;
    background-color: #7243c9;
    color: #fff;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
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
```
