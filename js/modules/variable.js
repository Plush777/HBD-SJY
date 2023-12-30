export const $btnGift = $('#btnGift');
export const $root = $('#root');
export const $body = $('body');
export const $wrap = $('#wrap');

export const btnSocial = `
    <a href="#social" id="btnFix">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" fill="none">
            <rect width="72" height="72" fill="url(#pattern0)"/>
            <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_36_2267" transform="scale(0.0138889)"/>
            </pattern>
            <image id="image0_36_2267" width="72" height="72" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAC9FBMVEUAAADFf1NfO1rdjkD99k8zYbLIawf0kAfifQNPVPI6V6xtRq/MehudXBwfSKfUcgpfVsVGY7wiULirWgnirWG2YwyxUQjKbw0qSajHcBHfkCObTxnNfh/1ryPXjCHunjXllBkgWcg+asf54mDxi93KawbEaQrxoiErT6D1x1X3qTrRcA/epjOeUcQ9bc0lS7XkqyrCI3dRf9PAW8mmCXTZK7XpeXKCVczEZwTlfQX4tVvg2D1VhNvqaIVUZtNbXpLiljFuOproW3r6s1v29Vf1nxq9Zg3jhQ/vKrQoRKeXJqOuWAvmMrb3rEFBOYd9dInJNVdyHoBVYNfAKk3ruD6wXtGrJqjPNFfw5TlAT+w5Snf79FlyWGfwgdn/+JXsmhH/nCH/+Yr/oiP/+H/9rBf/lh/1oxRqMwL/tCP5qBXxoBP/6z3/5jf/1DP/2TL/yTD/pyPhjAvdhgn/xDj/zTf/uC//yTrZfgb/xC7/3TH/rSL/sht0PQX/+7T/+qz/+p7/vTHlkg3/4jL/oB79oxf/7UT/tyj5oBSQVQrolg/UdgT/+qX/91j/wDf/viv/sSr0mw3//MH/uijObwP//cv/9nL/4z59RAb/0Tj/0DD/qyiHTQj//dT/+7v/9l//8UvsigX//d396mr9qBr/uQvBYQk1Z9onXtf/3Fv/603/5Uj/yhWaYQ4jV8n/7oo3X/D/8Hn/4Wn/92j//uf/6Hn/vxX/qQj/ogdlV93/2Tr/1xnVfAr/sAnmTG/+1FD+z0bq1T2qgCOaaxz5QMT/20TqpSg+M5zeQmTh0ljYpCH7mQX7sUzbvDi7hSBkV1/EliXLgRp9ktzzZtF5asBYW6m9oTuEZuibbkL1yCbktSL8qOU+Sr9KMF7y4Fw+JkjnxkWzbxKfZIuzhmh9YmXNtUjxuTXJjOiqb9+embjqm5OFHok3KX/XxU2bMURmSzz23bXtb6oiG1bzyDz76dL54r+5gEXidDiatM2VsM2csMsUDz7cex0WiH8pAAAAXnRSTlMABw8S/v39/v7+IvxKIP3F/v7+lyFy+pyWh31RMP79/PredU7z5rGrUjr+/v389rxdQfz8/Pn5+PPpysjGe0z+/Pr58OvW1rZ5OefIsphy49jHk493X/764NXIxKeY3P9uewAACm9JREFUWMOMlHtMUmEUwFMr0pIa2Up6WdpzlT1Wrcd62nP1T6u2XrYWCw3JNpFQoBpLY8ucMnmNVKI7EIhXCaQhDGGpqNEoTW3OHq7m5tbW4//Od7mXp3/0A2X3nHN/nO9832XamW15V/ZlTJuCdadz06b9P6d8ocH0C2f2ZaUkJFJO9x7enQvR/+T49nk6i2UwL+/KuYy4u7IO9/b27s4CIzDlrRlnVsYsZctsk077I2/kO/SVv/JEaiRxdj0S0U+vQZymb56zJHGhK7du3RtVZeTTTBtDoR/plnRg56njW8KuFPqyA8uXL+Xbw/D5S4+soc/JjOktda9Wq920L3K9iLbRF9qptVgs6YPfR0byduYvOpGatnnNkeKbPT3GdhKj0WjnFx+hz4n0vG+TVqddEV3c2tk+306dTosGNTLy/VW6Rbfi8pEHLrsRLCJ9k/T6tWvXrRp9iXL9jvUY4+YxUnUC1mJaGTOy7b6NOoAYFPD+603QtFforY8anr4k+D2xo6Njh9GIuUCVEl7b2kX5MdNOObX9k8lk0m4L5YUH9eWACzO2y6zCJ08RpOhQB3DY0G7HHDnZmcS9GXEHYDa0+GlbKDRoAV59vYHZjTJz/RPE0ygTXSA69LPQAE09RE0lcYJKo33a5gu9QnOa99eBGW9ZhQ2IqAs+/3R0dXXt+NNQb26zY86cBalJotR8Kmycbx7MyfJhGSzLcK8eh3ARNEx0TfyEaGP9XZsRc1Cyk02LqGjjTCadbj/yaO4KhcLGxkbSRdIIGggLAbMSc9QtTDKtfQMbB/MOe1rvIoQxMnjhnYQleNrMgZ6STBknffjGfXjnwJStj3CiMhJSgrL3HpkVyatDB2A2jWaa0e+AfgoLC+8BURkQ50BAkZnjclIWJP4CnIeNo310Ykab2VwIRG1Il+hAmM2tPJdz1+J40ZaDVCrtG8VlbzED1xCkjSTqwNOozmZ3BOZmJh4A6v7XDszT2tpqvX4dHi5CFsc1cOBAhdUKpW7MSclOy81dl5USPQDUzoCLZ0MiK6gApCONYIg6cA0S2WxcR2AXvaCg4FJu5ABQ36odmNtm02g0VqkU/o9qNFLCBy9440hRAjJSq0Zjs9laipyUDdOBiCjj4kyni9fSgptG+4Lezs5O70C3VIrLpPgbLkbH8USwzw114GmBliTgKYiIMo9SnJinBTEWfC5ghhH3vYC74S/Mi7FOIiEQ94/hxe4i51BNTU3BOlK0YFbAUet2Q2aDGOoEcpVKJRcwO5texOJlEgn4JlXQA9Xux87ivj179mQRnrS5aqerzON2e/oF8HXegfFuYHxgsimO7nB8csD7XM5ken9BPZcRUM/PjOzanF0UJ5/r8fg3MAXe8dGmphoEfCQQSYxOeuXMoMfj4cK4Y85StjrglHC5Hv/YwKRerzcY9Ijm5ubpscA1RFEaFXQP9Pk93LJyJyV6vNOOqQOO8jIuR+E3GPx+GaqsqqpqrmpOQA9RyMlkMr/fb/AruNzH5c8C6mxStGQXJcAo55VxFApFW1ubDMFisaqmQobTBigUHG4ZLlqdSo5oFqWOIeHxSks5HI6CTbhYYaqIF46MFdaw2QooLS3l3a9m1KlXkUOi46LaWh5ylSqVbPatihIEK54SFsREFbfYbGUpSIDaWiSKDGkhEhVJQAUgmRJMIpGoJBkReJAGHAhJdRGI7hCilGMgKuYXVVdLANCBamhouKenZ3iogrRBJyg0PDyEmgGFpBpRxC+uU89aQB7HWWokIgDd0mWfxXIBoAoqRQRD/SoUkYs/5ywFCVFcyUCi+bEiRmWEHHja4Ba5HB6FIOGpCDKZREjw+Wq09tnDRNGzysrbYXJUTLlKjKNiekmRl6kKh1QCpvgqUTqF6F8n9vrSVBzHcXxH2Sla1kY6LfNWzLSZmElJd4skErrQlQomh1qtpNzKVtaDLQ+7QRntwcI9KBirJ/sDhBGUtEDSmriQSMoLgiiFBt2f9Pn+zjl5Sq3orTi8vfjudy7upzcSwTcEaoA5McoX67p+hXW9S/4SqNCppNDSIgj4hYhtGiRGwLTU19cL+eFwrLuz6xGrAQirQfq8q7M7Fg4X0g8SFRG9FhXkvGfxiiI5J1FjomzkAp1P5/D75+iD8niOzp8LI2UJ4SQiSfTemmMPyBBX7LRbMFKLUM+geqGtrdWDkwCnkzqcQDjwnta2NjgIM7UA8s8NZCknZMDuJ4gGkqRGGVJJOJ9lqFFQfo5Bc/KTucolEnDcY5A8EUZSICQrSJmIIGWigrWDvZUbD3LSRWue67Z4vYAgsYFUkEywLsoQk2i5xbJRvUE3llq1k0lLTfIiQUICQU2uy+fptkLK+VediTzA6LKrqbUNzw3RQN5Rvd5g0OkMqw5Khy3gcN/ykqQ4EgSJ+vA4dC0cSyZwpyGIJIE54tbeQ4N9zw2G8vKN0q02KI0k4oCSQwMRRN3B+6Oulx3XToUGEi6EkUgS4Iif1un7osbjuwzaSmmRTHE6bpBwtjKnyXUDt14Wu28+eUJ/1GJ5BDGpUYDj/aS7PxytK9EZtHoGZe7Zk3RbzgCKMEeGEByFG8HVX9hEtTIpIoq3vqfKdYN7NmrLc3aRsxmbiiGH22LFdRJplp0bFyCpciXDIV+CvkUSrla6Opx9hpQOq50DCE45NieVH+3+M1YboGYFohTtRqI7FOrALqegbGhwaKWAEolEvjk6nNJqa/blGPYBmlcE6MEwRoJ04gTucB4GqUr0vX/Tr+ul9O3t7aMTExOjn79+6dlSVTX2dMGCBVptiQaVFOGF8YBzSvLcbnKBgiVxI+8nJ8chUHo89lBr1vT0VOp1KYOupka7O03awRXlLA4GnHZFunr6NqPkAH2bHH+q9Pq1Fo1hGC1VU1W1Dw4rDRu0hcG4w+7/KXloKiRJb/HUUD96Mz7e/xy9Q3g4unt3LraKquabfpFopTAWclGXPtDrFKPZHI0afcZolOejrLoMze9xi/mAIhElWdRt5Ll5/kXo1DWHF4fcbI7HzQQZjcZczfTSs7FMkqRQZCk1F/pCoUIxYrNakD0eJChrxu13xsJfJVhKzTZL3BfyJSOizWazWs9Y3PY4HzUuStPM2FJJcksULCU/HwvjdWOiWZQYv9vuwEhw0jNLS7k/SmrKlvR1dHfm4W+YFYzkOAP8ogxN6fr129dnzjRTMZMUiizi8vJOQ/FCkRk41XA0Ffgnw/blaoHLTJfWKRvHjg3lt5CljhQwbJxgNduKlhasXPnsgNrZtHaTJKVnmWgoUJgK1lQWKIyBw9fmspXJ3FFQsHWJ2tn2cJsscfOLeYkiC4NRDAFjZ0yQnhaLq1iCf5moHGygIWkQG6qWUcyiICBJAROto3HwPi1u/2HsxPeunlrzFUlQASfDKDKYAqYvtUwzW2mQphxu+bG7Da/yTXwQWNwpFwfCV9cOax/cBzS7pJonfcNZdKQiK7vWVM2Do3i+2lS3KLekCAGaXVJfxaVHzjZsqOA0XMbS+VnZ2cUoe3EWVhVfmofSNP9axYYDmT+fqJzmf+KU7Q6n/oi3/02t/K0fmHJjeBVmgJMAAAAASUVORK5CYII="/>
            </defs>
        </svg>
        <span>생일축하 댓글 달기</span>
    </a>
`;

export const btnHome = `
    <a href="/" id="btnFix">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="72" height="72" viewBox="0 0 72 72" fill="none">
            <rect width="72" height="72" fill="url(#pattern0)"/>
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_15_202" transform="scale(0.0138889)"/>
                </pattern>
                <image id="image0_15_202" width="72" height="72" xlink:href="data:image/png;base64,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"/>
            </defs>
        </svg>
        <span>처음으로 돌아가기</span>
    </a>
`;

export const dayCountPageHtml = `
    <div id="dayCountPage">
        <div class="titleWrap">
            <div class="titleBox">
                <div id="lottie-pop"></div>
                <h2 class="titleText md">서준영의 15번째 생일을<br class="m550"/>진심으로 축하해요!</h2>
            </div>
            <p class="description" id="desc">
                <!--  -->
            </p>
        </div>

        <div class="counterWrap">
            <p id="dDay">
                <!--  -->
            </p>
            <p id="time">
                <!--  -->
            </p>
        </div>

        <a href="#intro" class="btn disabled" id="btnGift">선물 받으러가기</a>
    </div>
`;

export const introPage = `
    <div id="introPage">
        <div class="titleWrap">
            <div class="titleBox">
                <div id="lottie-eyes"></div>
                <h2 class="titleText md">생일편지가 궁금하신가요?</h2>
            </div>
            <p class="description" id="desc">(편지를 클릭해봐요!)</p>
        </div>

        <div id="envelope" class="close" tabindex="0">
            <div class="front flap"></div>
            <div class="front pocket"></div>
            <div class="letter">
                <div class="words line1"></div>
                <div class="words line2"></div>
                <div class="words line3"></div>
                <div class="words line4"></div>
            </div>
            <div class="hearts">
                <div class="heart a1"></div>
                <div class="heart a2"></div>
                <div class="heart a3"></div>
            </div>
        </div>

        <a href="#lyrics" class="btn" id="btnLyrics">다음으로 이동</a>
    </div>
`;

export const lyricsPage = `
    <div id="lyricsPage">
        <div class="bulbs">
            <div class="bulb yellow"></div>
            <div class="bulb red"></div>
            <div class="bulb blue"></div>
            <div class="bulb green"></div>
            <div class="bulb pink"></div>
            <div class="bulb orange"></div>
        </div>

        <button type="button" class="btn" id="btnPlay">너에게 보내는 메시지</button>

        <div id="musicLoader">
            <div id="lottie-music"></div>
            <p>음악 재생중...</p>
        </div>

        <div class="lyricsWrapper">
            <div class="lyricsRow">
                <p>잠시 넘어졌지 괜찮아 잡아줄게 너 많이 걱정했니</p>
                <p>No no no 아직 처음이잖아<br/>
                그것쯤은 다 괜찮아 다 그런 거지</p>
                <p>원래 그래 다 어른들도 우리 나이 땐 다 실수하고 연습하며 성장했었대</p>
                <p>우린 아직 처음인 것들이 많잖아 <br/>
                괜찮아 우리도 겪어보며 크면 되잖아 울지마</p>
                <p>잠시 뒤처지면 조금 쉬어가면 돼 <br/>
                너는 잘 하고 있어 너 잠시 힘들 때</p>
                <p>내가 같이 뛰어줄게 걱정 접고 <br/>
                일어나 팔을 걷어 올려 포기 따윈 접어</p>
                <p>넌 잘 하고 있어 oh</p>
                <p>넌 잘 하고 있어 yeah</p>
                <p>힘내 좀 참으면 돼 내가 곁에 있을게</p>
                <p>넌 잘 하고 있어 oh, 넌 잘 하고 있어</p>
                <p>You gotta take your time 할 수 있잖아<br/>
                너는 잘 할 수 있어
                </p>
            </div>
        </div>
        
        <a href="#social" class="btn" id="btnNext">다음으로</a>
    </div>
`;

export const socialPage = `
    <div id="socialPage">
        <div class="shareWrap">
            <h3 class="text">친구들한테 자랑하기</h3>
            <ul class="shareList">
                <li class="shareItem ka">
                    <button type="button" aria-label="카카오톡에 공유"></button>
                </li>
                <li class="shareItem twit">
                    <button onclick="sendTwitter()" type="button" aria-label="트위터에 공유"></button>
                </li>
                <li class="shareItem fb">
                    <button onclick="sendFacebook()" type="button" aria-label="페이스북에 공유"></button>
                </li>
                <li class="shareItem myUrl">
                    <button type="button" id="btnCopy" aria-label="링크 복사"></button>
                </li>
            </ul>
        </div>

        <div class="commentWrap">
            <p>🥳 준영이에게 생일 축하 메시지를 남겨보세요 🥳</p>
            <div id="disqus_wrapper">
                
            </div>
        </div>
    </div>
`;

export const disqusScript = `
    <script id="dsq-inline">
        (function() { 
        var d = document, s = d.createElement('script');
        s.src = 'https://to-sjy.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        })();
    </script>
    <script id="dsq-count-scr" src="//to-sjy.disqus.com/count.js" async></script>
`;