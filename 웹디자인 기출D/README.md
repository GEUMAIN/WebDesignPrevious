### 웹디자인기능사 기출문제D

![image](https://github.com/user-attachments/assets/ad3ff716-5932-4aee-8a78-f11089b3adf7)

---

### HTML

```html
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>서울구석구석</title>
    <link rel="stylesheet" href="CSS/style.css">

    <script src="Scripts/jquery.min.js"></script>
    <script src="Scripts/script.js"></script>
</head>

<body>
    <div id="wrap">
        <aside id="aside">
            <h1 class="logo">
                <a href="#">서울구석구석</a>
            </h1>
            <nav class="nav">
                <ul>
                    <li>
                        <a href="#">지금의 서울</a>
                        <ul class="submenu">
                            <li><a href="#">이벤트</a></li>
                            <li><a href="#">축제&행사</a></li>
                            <li><a href="#">전시</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#">추천</a>
                        <ul class="submenu">
                            <li><a href="#">에디터 추천</a></li>
                            <li><a href="#">테마코스</a></li>
                            <li><a href="#">도보해설관광</a></li>
                            <li><a href="#">한류관광</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">여행지</a>
                        <ul class="submenu">
                            <li><a href="#">명소</a></li>
                            <li><a href="#">엔터테인먼트</a></li>
                            <li><a href="#">음식</a></li>
                            <li><a href="#">게스트하우스</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">여행정보</a>
                        <ul class="submenu">
                            <li><a href="#">가이드북&지도</a></li>
                            <li><a href="#">시티투어버스</a></li>
                            <li><a href="#">날씨</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </aside>

        <main id="main">
            <div id="slider">
                <article class="imageWrap">
                    <div class="image i1">
                        <div class="text">
                            <h2>할인 가득! 설렘 가득</h2>
                            <p>대한민국 숙박세일 페스타’5월 30일(화),‘놀이공원 할인대전’5월 31일(수)부터 실시</p>
                        </div>
                    </div>

                    <div class="image i2">
                        <div class="text">
                            <h2>할인 가득! 설렘 가득</h2>
                            <p>대한민국 숙박세일 페스타’5월 30일(화),‘놀이공원 할인대전’5월 31일(수)부터 실시</p>
                        </div>
                    </div>

                    <div class="image i3">
                        <div class="text">
                            <h2>할인 가득! 설렘 가득</h2>
                            <p>대한민국 숙박세일 페스타’5월 30일(화),‘놀이공원 할인대전’5월 31일(수)부터 실시</p>
                        </div>
                    </div>
                </article>

                <article class="banner">
                    <h3>6월은 <em>여행가는 달</em></h3>
                    <a href="#">알아보기</a>
                </article>

            </div>

            <div id="contents">
                <section class="notice">
                    <h3>공지사항</h3>

                    <ul>
                        <li class="popup-btn">
                            <a href="#">관광산업 디지털혁신 오픈세미나 개최 관광산업 디지털혁신 오픈세미나 개최</a><span>2023.06.05</span></a>
                        </li>
                        <li><a href="#">여행 지원금 혜택 - 광주 여행 특별하게 떠나보자</a><span>2023.06.04</span></li>
                        <li><a href="#">숙박과 놀이공원 할인쿠폰 받자!</a><span>2023.06.03</span></li>
                        <li><a href="#">조선시대 의궤를 실감 콘텐츠로 만나다.</a><span>2023.06.02</span></li>
                        <li><a href="#">경북궁 장고에서 만나는 특별한 궁중의 장</a><span>2023.06.01</span></li>
                    </ul>
                    <a href="#" class="more">더보기+</a>
                </section>

                <section class="gallery">
                    <h3>갤러리</h3>
                    <ul>
                        <li>
                            <a href="#">
                                <img src="images/gallery01.jpg" alt="가볼만한 곳">
                                <span>동대문</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="images/gallery02.jpg" alt="가볼만한 곳">
                                <span>제주도</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="images/gallery03.jpg" alt="가볼만한 곳">
                                <span>경동시장</span>
                            </a>
                        </li>
                    </ul>
                </section>

            </div>
        </main>

        <footer id="footer">
            <div class="footer1">
                <h4>서울구석구석</h4>
            </div>
            <div class="footer2">
                26464 강원도 원주시 세계로 10 TEL : 003-738-3000 <br>
                궁금한 정보는 to@korea.com으로 문의주세요.
            </div>
            <div class="footer3">
                <select>
                    <option>관련 사이트</option>
                    <option value="1">국가 여행 사이트</option>
                    <option value="2">제주도 여행 사이트</option>
                    <option value="3">경주 여행 사이트</option>
                </select>
            </div>
        </footer>

        <div class="popup-view">
            <h3>서울구석구석 공지사항</h3>
            <p>
                안녕하세요! 서울구석구석 운영팀입니다. 여러분들에게 소식을 전해드릴 공지사항을 안내해드립니다.
                서울구석구석에서는 다양한 이벤트를 진행하고 있습니다.
                현재는 서울의 명소 중 하나를 방문하여 사진을 찍고,
                SNS에 게시하는 이벤트가 진행 중입니다.
                참여하신 분들 중 추첨을 통해 푸짐한 상품을 드립니다
            </p>
            <a href="#" class="popup-close">닫기</a>
        </div>

    </div>
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
    display: flex;
    flex-wrap: wrap;
    position: relative;
}

#aside {
    width: 200px;
    height: 650px;
}

#aside .logo {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

#aside .logo a {
    display: block;
    font-size: 26px;
    margin-top: 5px;
}

#aside .nav {
    height: 550px;
}

#aside .nav>ul {
    margin: 5px;
}

#aside .nav>ul>li {
    margin-bottom: 5px;
}

#aside .nav>ul>li>a {
    padding: 10px;
    display: inline-block;
    background-color: #ffd139;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    border: 2px solid #dead0c;
}

#aside .nav>ul>li>a:hover {
    text-decoration: underline;
}

#aside .nav>ul>li>ul {
    display: none;
}

#aside .nav>ul>li>ul>li a {
    display: block;
    padding: 10px;
    background-color: #ffebab;
    text-align: center;
    border-bottom: 2px solid #dead0c;
}

#aside .nav>ul>li>ul>li a:hover {
    background-color: #ffe281;
}

#main {
    width: calc(100% - 200px);
}

#slider {
    width: 100%;
    display: flex;
    overflow: hidden;
}

#slider .imageWrap {
    width: calc(100% - 230px);
    height: 400px;
}

#slider .imageWrap .image {
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: end;
}

#slider .imageWrap .image.i1 {
    background-image: url(../images/slider01.jpg);
}

#slider .imageWrap .image.i2 {
    background-image: url(../images/slider02.jpg);
}

#slider .imageWrap .image.i3 {
    background-image: url(../images/slider03.jpg);
}

#slider .imageWrap .image .text {
    background-color: #dead0c8f;
    width: 100%;
    padding: 20px;
}

#slider .imageWrap .image .text h2 {
    color: #fff;
    margin-bottom: 5px;
    font-size: 30px;
}

#slider .imageWrap .image .text p {
    color: #fff;
    font-size: 16px;
}

#slider .banner {
    width: 230px;
    height: 400px;
    background-image: url(../images/banner.jpg);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 10px solid #ffd139;
    box-sizing: border-box;
    transition: all 0.3s;
}

#slider .banner:hover {
    border: 5px solid #ffd139;
}

#slider .banner h3 {
    color: #fff;
    font-size: 30px;
    margin-bottom: 20px;
}

#slider .banner h3 em {
    color: #ffd139;
    font-style: normal;
    display: block
}

#slider .banner a {
    background-color: #fff;
    padding: 10px 20px;
    border-radius: 50px;
}

#contents {
    width: 100%;
    display: flex;
}

#contents .notice {
    width: 50%;
    height: 250px;
    padding: 30px;
    box-sizing: border-box;
    background-color: #fff6d6;
    position: relative;
}

#contents .notice h3 {
    font-size: 26px;
    margin-bottom: 10px;
}

#contents .notice li {
    display: flex;
    line-height: 1.7;
    position: relative;
    padding-left: 16px;
}

#contents .notice li::before {
    content: '';
    width: 6px;
    height: 6px;
    background-color: #a58109;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 8px;
}

#contents .notice li a {
    width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

#contents .notice li a:hover {
    text-decoration: underline;
}

#contents .notice li span {
    width: 25%;
    text-align: right;
}

#contents .notice .more {
    position: absolute;
    right: 30px;
    top: 30px;
}

#contents .notice .more:hover {
    text-decoration: underline;
}

#contents .gallery {
    width: 50%;
    height: 250px;
    padding: 30px;
    box-sizing: border-box;
}

#contents .gallery h3 {
    font-size: 26px;
    margin-bottom: 10px;
}

#contents .gallery ul {
    display: flex;
}

#contents .gallery li {
    width: 120px;
    margin-right: 10px;
}

#contents .gallery li a {
    display: block;
}

#contents .gallery li a span {
    padding: 10px 0;
    display: inline-block;
}

#contents .gallery li a span:hover {
    text-decoration: underline;
}

#footer {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    background-color: #fffbea;
}

#footer .footer1 {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}

#footer .footer1 h4 {
    font-size: 20px;
    color: #858585;
}

#footer .footer2 {
    width: calc(100% - 430px);
    line-height: 1.5;
}

#footer .footer3 {
    width: 230px;
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
    background-color: #fff8e2;
    border: 8px solid #ffe17d;
    padding: 20px;
    display: none;
}

.popup-view h3 {
    font-size: 24px;
    margin-bottom: 15px;
    border-bottom: 2px solid #333;
    padding-bottom: 5px;
}

.popup-close {
    background-color: #ffc400;
    padding: 8px 20px;
    display: inline-block;
    color: #fff;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
}
```

---

### JavaScript

```jsx
$(function () {
    let currentIndex = 0;
    $(".imageWrap").append($(".image").first().clone(true));

    setInterval(() => {
        currentIndex++;
        $(".imageWrap").animate({ marginTop: -400 * currentIndex + "px" }, 600);

        if (currentIndex == 3) {
            setTimeout(() => {
                $(".imageWrap").animate({ marginTop: 0 }, 0);
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

})
```
