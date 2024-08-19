### 웹디자인기능사 기출문제F

![image](https://github.com/user-attachments/assets/07ff98ee-41f7-45e4-9f06-9d50a7bf1c43)

### HTML

```html
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>주식회사 기능건설</title>

    <link rel="stylesheet" href="CSS/style.css">
    <script src="Scripts/script.js"></script>
</head>

<body>
    <div id="wrap">
        <header id="header" class="container">
            <h1 class="logo">기능건설</h1>
            <nav class="nav">
                <ul>
                    <li><a href="#">회사소개</a>
                        <ul>
                            <li><a href="#">기업정보</a></li>
                            <li><a href="#">CEO인사말</a></li>
                            <li><a href="#">연혁</a></li>
                            <li><a href="#">조직도</a></li>
                        </ul>
                    </li>
                    <li><a href="#">지속가능경영</a>
                        <ul>
                            <li><a href="#">윤리경영</a></li>
                            <li><a href="#">품질경영</a></li>
                            <li><a href="#">안전경영</a></li>
                            <li><a href="#">환경경영</a></li>
                        </ul>
                    </li>
                    <li><a href="#">사업분야</a>
                        <ul>
                            <li><a href="#">건축사업</a></li>
                            <li><a href="#">토목사업</a></li>
                            <li><a href="#">주택사업</a></li>
                            <li><a href="#">환경/플랜트</a></li>
                        </ul>
                    </li>
                    <li><a href="#">홍보센터</a>
                        <ul>
                            <li><a href="#">뉴스</a></li>
                            <li><a href="#">분양뉴스</a></li>
                            <li><a href="#">CI/BI</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>

        <article id="slider">
            <div class="sliderWrap">
                <div class="slider">
                    <div class="text">
                        <h3>지속 가능한 경영</h3>
                        <p>윤리 경영, 품질 경영</p>
                    </div>
                </div>
                <div class="slider">
                    <div class="text">
                        <h3>사업 분야</h3>
                        <p>건축사업, 토목사업</p>
                    </div>
                </div>
                <div class="slider">
                    <div class="text">
                        <h3>지속 가능한 경영</h3>
                        <p>안전 경영, 환경 경영</p>
                    </div>
                </div>
            </div>
            <div class="sliderLink">
                <ul>
                    <li><a href="#">건축</a></li>
                    <li><a href="#">토목</a></li>
                    <li><a href="#">주택</a></li>
                    <li><a href="#">환경</a></li>
                    <li><a href="#">플랜트</a></li>
                </ul>
            </div>
        </article>

        <main id="main" class="container">
            <section class="banner">
                <img src="images/banner.jpg" alt="기능 건설 박물관 이미지">
                <div>
                    <h3>기능 건설 박물관 개장</h3>
                    <p>
                        기능 건설 역사가 담겨있는 박물관에 놀러오세요!!
                        다양한 건설 경험을 미리 할 수 있습니다.
                    </p>
                </div>
                <a href="#">
                    <img src="images/arrow.png" alt="바로가기">
                </a>
            </section>
            <section class="notice">
                <div class="title">
                    <ul>
                        <li class="active"><a href="#">공지사항</a></li>
                        <li><a href="#">갤러리</a></li>
                    </ul>
                </div>
                <div class="cont">
                    <div>
                        <ul>
                            <li><a href="#">박물관 오픈 날짜 확정</a><span>2023.04.03</span></li>
                            <li><a href="#">기능건설 주주총회 날짜 발표</a><span>2023.04.05</span></li>
                            <li><a href="#">기능건설 사이트 오픈</a><span>2023.04.03</span></li>
                            <li><a href="#">건축 사업 리모델링 확정</a><span>2023.04.03</span></li>
                            <li><a href="#">기업 정보 사이트 오픈</a><span>2023.04.03</span></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><a href="#"><img src="images/gallery01.jpg" alt="갤러리 오픈"></a></li>
                            <li><a href="#"><img src="images/gallery02.jpg" alt="갤러리 오픈"></a></li>
                            <li><a href="#"><img src="images/gallery03.jpg" alt="갤러리 오픈"></a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>

        <footer id="footer" class="container">
            <div class="footer1"></div>
            <div class="footer2">
                <div class="menu"></div>
                <div class="copy"></div>
            </div>
        </footer>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
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
    box-sizing: border-box;
    color: #666;
}

a {
    text-decoration: none;
    color: #666;
}

li {
    list-style: none;
}

/* container */
.container {
    width: 1340px !important;
    margin: 0 auto;
    height: inherit;
}

/* layout */
#wrap {
    width: 100%;
}

#header {
    display: flex;
    background-color: rgb(43, 68, 141);
    position: relative;
    z-index: 1000;
}

#header .logo {
    width: 20%;
    height: 100px;
    line-height: 100px;
    color: #fff;
    text-align: center;
}

#header .nav {
    width: 80%;
    height: 100px;
}

#header .nav>ul {
    display: flex;
    justify-content: right;
    margin-top: 60px;
    margin-right: 30px;
}

#header .nav>ul>li {
    width: 180px;
    text-align: center;
    margin-left: 5px;
}

#header .nav>ul>li>a {
    width: 100%;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 10px 40px;
    display: inline-block;
}

#header .nav>ul>li>a:hover {
    background-color: rgba(255, 255, 255, 0.5);
}

#header .nav>ul>li>ul {
    display: none;
}

#header .nav>ul>li>ul>li {
    text-align: center;
}

#header .nav>ul>li>ul>li>a {
    padding: 10px 20px;
    background-color: #273494;
    display: inline-block;
    color: #fff;
    width: 100%;
}

#header .nav>ul>li>ul>li>a:hover {
    background-color: #4a59ce;
}

#slider {
    width: 100%;
    height: 350px;
    position: relative;
}

#slider .sliderWrap {
    position: relative;
}

#slider .sliderWrap .slider {
    width: 100%;
    height: 350px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
}

#slider .sliderWrap .slider .text {
    background-color: rgba(18, 55, 120, 0.5);
    padding: 10px 60px;
}

#slider .sliderWrap .slider .text h3 {
    font-size: 30px;
    margin-bottom: 5px;
    color: #fff;
}

#slider .sliderWrap .slider .text p {
    color: #fff;
}

#slider .sliderWrap .slider:nth-child(1) {
    background-image: url(../images/slider01.jpg);
}

#slider .sliderWrap .slider:nth-child(2) {
    background-image: url(../images/slider02.jpg);
    display: none;
}

#slider .sliderWrap .slider:nth-child(3) {
    background-image: url(../images/slider03.jpg);
    display: none;
}

#slider .sliderLink {
    width: 1340px;
    height: 80px;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
}

#slider .sliderLink ul {
    display: flex;
}

#slider .sliderLink li {
    width: 20%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
}

#slider .sliderLink li a {
    display: inline-block;
    text-align: center;
    color: #fff;
    width: 100px;
    padding: 10px;
    border-radius: 40px;
    display: inline-block;
    background-color: rgba(18, 55, 120, 0.5);
}

#slider .sliderLink li:nth-child(1) {
    background-image: url(../images/link01.jpg);
}

#slider .sliderLink li:nth-child(2) {
    background-image: url(../images/link02.jpg);
}

#slider .sliderLink li:nth-child(3) {
    background-image: url(../images/link03.jpg);
}

#slider .sliderLink li:nth-child(4) {
    background-image: url(../images/link04.jpg);
}

#slider .sliderLink li:nth-child(5) {
    background-image: url(../images/link05.jpg);
}

#main .banner {
    height: 100px;
    display: flex;
    flex-wrap: wrap;
    background-color: #d6deff;
    position: relative;
}

#main .banner img {
    width: 160px;
    height: 80px;
    margin: 10px 50px 10px 50px;
    border-radius: 10px;
}

#main .banner h3 {
    margin-top: 24px;
    font-size: 24px;
    margin-bottom: 5px;
}

#main .banner a {
    position: absolute;
    right: 0;
    top: 0;
}

#main .banner a img {
    width: 70px;
    object-fit: contain;
}

#main .notice {
    height: 300px;
    background-color: #e4e9ff;
    padding: 40px;
}

#main .notice .title {
    margin-bottom: 20px;
}

#main .notice .title ul {
    display: flex;
}

#main .notice .title li a {
    font-size: 24px;
    margin-right: 15px;
    display: inline-block;
}

#main .notice .title li.active a {
    text-decoration: underline;
    text-underline-position: under;
}

#main .notice .cont>div:nth-child(1) ul {
    padding-left: 16px;
}

#main .notice .cont>div:nth-child(1) ul li {
    line-height: 1.8;
    list-style: disc;
}

#main .notice .cont>div:nth-child(1) ul li a {
    width: 300px;
    display: inline-block;
}

#main .notice .cont>div:nth-child(1) ul li a:hover {
    text-decoration: underline;
    text-underline-position: under;
}

#main .notice .cont>div:nth-child(1) ul li span {
    width: 100px;
}

#main .notice .cont>div:nth-child(2) ul {
    display: flex;
}

#main .notice .cont>div:nth-child(2) li {
    width: 150px;
    margin-right: 10px;
}

#main .notice .cont>div:nth-child(2) li a:hover {
    opacity: 0.7;
}

#main .notice .cont>div:nth-child(2) li a img {
    width: 100%;
}

#footer {
    display: flex;
}

#footer .footer1 {
    width: 20%;
    height: 120px;
    background-color: #ccc;
}

#footer .footer2 {
    width: 80%;
}

#footer .footer2 .menu {
    width: 100%;
    height: 60px;
    background-color: #a4a4a4;
}

#footer .footer2 .copy {
    width: 100%;
    height: 60px;
    background-color: #7f7f7f;
}
```

---

### JavaScript

```jsx
$(function () {
    const tabBtn = $(".notice .title > ul > li");
    const tabCont = $(".notice .cont > div");

    tabCont.hide().eq(0).show();

    tabBtn.click(function (e) {
        e.preventDefault();

        const index = $(this).index();

        $(this).addClass("active").siblings().removeClass("active");
        tabCont.eq(index).show().siblings().hide();
    });

    $(".nav>ul>li").mouseenter(function () {
        $(this).find(">ul").stop().slideDown();
    });
    $(".nav>ul>li").mouseleave(function () {
        $(this).find(">ul").stop().slideUp();
    });

    let currentIndex = 0;

    setInterval(function () {
        let nextIndex = (currentIndex + 1) % 3;

        $(".slider").eq(currentIndex).fadeOut(800);
        $(".slider").eq(currentIndex).fadeIn(800);

        currentIndex = nextIndex;
    }, 3000);

});
```
