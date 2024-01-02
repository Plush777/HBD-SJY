# HBD-SHY

- 배포 URL : https://to-sjy.netlify.app/
- 기술 : HTML5, SCSS, Javascript (jQuery)
- 개발도구 : VS code, gulp.js
- 라이브러리 : lottie, [confetti.js by CoderZ90](https://github.com/CoderZ90/confetti), 카카오 공유 Api, Disqus
- 배포 : netlify
- 기간 : 2023.12.23 ~ 2023.12.31 (약 8일)
- 참고 사이트들 : [4시간 안에 동생 생일기념🎉 웹사이트 만들기 대작전!](https://velog.io/@yyeonggg/%EB%8F%99%EC%83%9D-%EC%83%9D%EC%9D%BC%EA%B8%B0%EB%85%90-%EB%9A%9D%EB%94%B1%EB%9A%9D%EB%94%B1-%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0) , [HTML5 birthday by ayusharma](https://github.com/ayusharma/birthday)
- 후기 : (작성예정)

<br>

## 🥳 Happy Birthday, SJY!
2024년 2월 25일은 제 동생의 15번째 생일이 되는 날입니다! <br>
동생과 나이 차이가 많이 나서 그런지, 서로 인사하는 것도 서먹한 사이였기 때문에 이제부터라도 친해지고자(??) 정성과 마음이 담긴 손편지와 <br/>
평생 간직할 수 있는 웹 사이트를 주기로 결정했습니다. <br/>

구글에 선물로 생일 축하 사이트를 만든 사람이 있을까? 하고 찾아봤는데 그런 사례가 생각보다 많아서 참고도 많이 했네요 🤣🤣

<br/>

## 요즘 시대에 리액트 대신 제이쿼리를?
사실 요즘 대세인 기술은 React, Next.js 아니면 Vue 같은 SPA 프레임워크였지만, <br/>
정확하게 알고쓰는 느낌도 아니고 아직까진 제이쿼리가 더 익숙하다 판단하여 제이쿼리를 선택했습니다. <br/>
(다음 프로젝트는 리액트로 도전!!)

<br/>

## 페이지 소개

페이지는 다음과 같이 총 4개로 구성했습니다. 

- 메인 : 생일까지 남은 시간을 타이머로 보여줍니다.
- 편지 : 직접 쓴 생일 편지를 볼 수 있습니다. (생일 당사자만)
- 너에게 보내는 메시지 : 버튼을 누르면 노래가 재생됨과 함께 메시지를 순차적으로 보여줍니다.
- 공유 및 댓글 : 해당 페이지를 SNS (카톡, 페이스북, 트위터) 에 공유할 수 있고, 생일 축하 댓글을 달 수 있습니다.

<br/>

### 메인 페이지 (디데이 타이머)

디데이 계산 타이머는 [이 게시글](https://goddino.tistory.com/29) 을 참고했습니다! <br/>
생일 전 , 생일 당일, 생일 이후를 구하여 문구와 버튼 상태를 각각 변경해주었습니다.

```js
const dDayDate = new Date("Feb 25, 2024, 0:00:00").getTime();

//setInterval 안에있는 timeDifference 변수를 전역변수로
let globalDifference;
// let globalDays;

setInterval(() => {
    // 현재 날짜와 디데이 날짜의 차이 계산
    let currentDate = new Date().getTime();
    const timeDifference = dDayDate - currentDate;

    globalDifference = timeDifference;

    // 남은 일수, 시간, 분, 초 계산
    let days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    let hours = Math.ceil((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.ceil((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.ceil((timeDifference % (1000 * 60)) / 1000);

    hours = (hours < 10) ? `0${hours}` : `${hours}`;
    minutes = (minutes < 10) ? `0${minutes}` : `${minutes}`;
    seconds = (seconds < 10) ? `0${seconds}` : `${seconds}`;

    $('#dDay').html(`D-${days}`);
    $('#time').html(`${hours}:${minutes}:${seconds}`);

    days = Math.abs(days);
    // globalDays = days;

    // 디데이가 지났을 경우
    if (timeDifference < 0) {
        $('#dDay').html(`생일이 지났네요!<br/>D+${days}`);
        $('#dayCountPage #desc').text('어서 선물을 열어봐요!');
        $('#time').remove();
        $btnGift.removeClass('disabled');
    } else {
        $('#dayCountPage #desc').text('생일선물 오픈까지...');
    }

    //디데이 일경우
    if (days === 0) {
        $('#dDay').html(`드디어 오늘이네요! 생일 축하해요<br/>D-day`);
    }
}, 1000);
```

timeDifference 값을 setInterval 구문 밖에서 사용해야했기 때문에, 전역 변수 (globalDifference) 를 따로 선언해서 <br/>
값을 전역 변수에 그대로 넣어주었습니다.
아래 코드는 브라우저 앞/뒤로가기 버튼을 눌렀을 때와 btnGift 버튼을 눌렀을 때의 이벤트 처리를 각각 해주었습니다.

setTimeout을 준 이유는, 페이지가 바뀔 때 기존 콘텐츠는 지워지고 새로운 콘텐츠가 생성되는데,<br/>
그 과정에서 #btnGift 셀렉터를 즉시 못찾는 것 같아서 약간의 딜레이를 주었습니다.

```js
window.addEventListener('popstate', function() {
    // 디데이가 지난경우
    if (globalDifference < 0) {
        setTimeout(() => {
            $('#btnGift').removeClass('disabled');
        }, 1);
    }
});

$(document).on('click', '#btnGift', function(e) {
    // 디데이가 지나지 않았을 경우
    if (globalDifference > 0) {
        alert('2024년 2월 25일에 오픈할 수 있어요.');
        e.preventDefault();
    }
});
```

<br/>

### 편지 페이지
편지 애니메이션은 [dribble envelope open](https://dribbble.com/shots/14338109-Envelope-Open-Animation-with-Hearts) 글을 참고했습니다. <br/>
편지를 클릭하면 주의 팝업이 뜨고, 알았어요 버튼을 누르면 해당 링크로 이동합니다.

생일 편지를 구글드라이브에 pdf 형식으로 업로드하고, 아무나 열람하면 안되기 때문에 공유 URL을 <br/>
[LOCK.PUB - URL 단축 암호화 서비스](https://lock.pub/) 로 정해진 패스워드를 입력해야만 구글 드라이브로 가서 볼 수 있게 해주었습니다.

<br/>

### 노래 메시지 페이지

```html
<div class="lyricsWrapper">
    <div class="lyricsRow">
        <p>잠시 넘어졌지 괜찮아 잡아줄게 너 많이 걱정했니</p>
        <p>No no no 아직 처음이잖아<br />
            그것쯤은 다 괜찮아 다 그런 거지</p>
        <p>원래 그래 다 어른들도 우리 나이 땐 다 실수하고 연습하며 성장했었대</p>
        <p>우린 아직 처음인 것들이 많잖아 <br />
            괜찮아 우리도 겪어보며 크면 되잖아 울지마</p>
        <p>잠시 뒤처지면 조금 쉬어가면 돼 <br />
            너는 잘 하고 있어 너 잠시 힘들 때</p>
        <p>내가 같이 뛰어줄게 걱정 접고 <br />
            일어나 팔을 걷어 올려 포기 따윈 접어</p>
        <p>넌 잘 하고 있어 oh</p>
        <p>넌 잘 하고 있어 yeah</p>
        <p>힘내 좀 참으면 돼 내가 곁에 있을게</p>
        <p>넌 잘 하고 있어 oh, 넌 잘 하고 있어</p>
        <p>You gotta take your time 할 수 있잖아<br />
            너는 잘 할 수 있어
        </p>
    </div>
</div>
```

html에서 보여줄 노래 가사들을 먼저 짜고, js에서 개수랑 시간을 배열로 담아서 <br/>
for문과 setTimeout을 통해 지정한 시간대로 보여줄 수 있도록 해주었습니다.

시간 구하는건 노래 타이밍에 맞춰야 했기 때문에 노래 들으면서 직접 맞췄습니다... 😂😂
```js
const timerIndexArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const timerMsArr = [24500, 29100, 34500, 39800, 46300, 51500, 57500, 60200, 62800, 68800, 74500];

setTimeout(() => {
    $('#musicLoader').addClass('active');
}, 1500);

setTimeout(() => {
    $('#musicLoader').removeClass('active');
}, 23500);

setTimeout(() => {
    handleOpacity('#btnNext', 1, 1);
}, 84000);

for (let i = 0; i < timerIndexArr.length; i++) {
    const index = timerIndexArr[i];
    const ms = timerMsArr[i];

    setTimeout(() => {
        $(`.lyricsRow p:nth-child(${index})`).addClass('active');
    }, ms);
}
```

<br/>

### 공유 및 댓글 페이지

sns 공유는 카카오 공유 api를 사용하였고 페이스북이랑 트위터는 공유 url을 따로 제공하길래<br/>
아래처럼 작성했습니다~

댓글의 경우는 직접 만들기엔 머리가 딸려서 (?) [Disqus](https://disqus.com/) 라는 해외 무료 댓글 서비스가 <br/>
있길래 이 친구를 사용했습니다 😊

```js
function sendTwitter() {
    const text = 'blabla';
    const sendUrl = `https://twitter.com/intent/tweet?text=${text}&url=${location.href}`;

    window.open(sendUrl, "_blank");
}

function sendFacebook() {
    const sendUrl = `https://www.facebook.com/sharer/sharer.php?u=${location.href}`;

    window.open(sendUrl, "_blank");
}
```

<br/>

### 출처

- 노래 : [스트레이키즈 (StrayKids) - 잘하고있어](https://youtu.be/8W3VnY2V-cw?si=8_SGELHile_yKjzh)
- 폰트 : [나눔손글씨 중학생](https://clova.ai/handwriting/list.html#)
