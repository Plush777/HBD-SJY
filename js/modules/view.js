import { $btnGift } from "./variable.js";
import {
    envelopeToggle, copyToClipboard, handleSong, handleLyrics, handleOpacity, changeFixButton,
    lottieCreate, handleLoading, handleModal
} from "./control.js";

export function view() {
    const dDayDate = new Date("Feb 25, 2024, 0:00:00").getTime();

    setInterval(() => {
        // 현재 날짜와 디데이 날짜의 차이 계산
        let currentDate = new Date().getTime();

        const timeDifference = dDayDate - currentDate;

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
            $('#dayCountPage #desc').text('어서 선물을 열어봐요!');
            $('#time').remove();
            $btnGift.removeClass('disabled');
        }
    }, 1000);

    $(document).on('click', '#envelope', function () {
        envelopeToggle.call(this);
        $(this).closest('#root').next('#modal').css('pointer-events', 'none');
        setTimeout(() => {
            handleModal('open');
        }, 1500);
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
        handleLyrics('play', 'click');
        handleOpacity('#btnPlay', 0, -1);
        lottieCreate('lottie-music', 'https://lottie.host/a21ef7d4-a041-443c-a162-14963fe55301/pQaVsxsnQ3.json');
    });

    $(document).on('click', '#btnBack', function () {
        clickBackButton();
    });

    $(document).on('click', '#btnClose', function () {
        handleModal('close');
        $('#envelope').removeClass('open');
    });

    $('#btnCaution').on({
        'click': function () {
            const $caution = $(this).closest('#caution');

            $caution.removeClass('active');
            $caution.prev('#modal').css('pointer-events', 'auto');
            setTimeout(() => {
                $caution.removeClass('zIndex');
            }, 300);
        }
    });

    changeFixButton();
    handleLoading();
    lottieCreate('lottie-pop', 'https://lottie.host/20dd38f6-63ed-40de-aed2-0fcc64d7990a/JBfbwgMN5O.json');
}