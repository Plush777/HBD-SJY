import { $btnGift } from "./variable.js";
import {
    envelopeToggle, copyToClipboard, handleSong, handleLyrics, handleOpacity, changeFixButton,
    lottieCreate, handleLoading, handleModal
} from "./control.js";

export function view() {
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

    window.addEventListener('popstate', function () {
        if (globalDifference < 0) {
            setTimeout(() => {
                $('#btnGift').removeClass('disabled');
            }, 1);
        }
    });

    $(document).on('click', '#btnGift', function (e) {
        // 디데이가 지나지 않았을 경우
        if (globalDifference > 0) {
            alert('2024년 2월 25일에 오픈할 수 있어요.');
            e.preventDefault();
        }
    });

    $(document).on('click', '#envelope', function () {
        envelopeToggle.call(this);
        handleModal('open');
    });

    $(document).on('keydown', '#envelope', function (event) {
        let key = event.key || event.keyCode;

        /* Spacebar: 크롬 , ' ': edge */
        if (key === 'Spacebar' || key === 32 || key === ' ') {
            envelopeToggle.call(this);
        }
    });

    $(document).on('click', '#btnCopy', function () {
        const currentURL = window.location.href;
        copyToClipboard(currentURL);
    });

    $(document).on('click', '#btnPlay', function () {
        handleSong('play');
        handleLyrics();
        handleOpacity('#btnPlay', 0, -1);
        lottieCreate('lottie-music', 'https://lottie.host/a21ef7d4-a041-443c-a162-14963fe55301/pQaVsxsnQ3.json');
    });

    $(document).on('click', '#btnCaution', function () {
        handleModal('close');
        $('#envelope').removeClass('open').addClass('close');
    });

    $('#btnCaution').on({
        'click': function () {
            const $caution = $(this).closest('#caution');

            window.open('https://lock.pub/TKBncYjPNl', '_blank');
            $caution.removeClass('active');
        }
    });

    changeFixButton();
    handleLoading();
    lottieCreate('lottie-pop', 'https://lottie.host/20dd38f6-63ed-40de-aed2-0fcc64d7990a/JBfbwgMN5O.json');
}