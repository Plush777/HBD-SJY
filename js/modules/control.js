import { btnHome, btnSocial, disqusScript, $root, $body } from "./variable.js";

export function envelopeToggle() {
    if ($(this).hasClass('close')) {
        $(this).addClass('open').removeClass('close');
    } else {
        $(this).addClass('close').removeClass('open');
    }
}

export function changeFixButton() {
    location.hash === '#social' ? $('.fix').html(btnHome) : $('.fix').html(btnSocial);
}

export function handleLyrics() {
    const timerIndexArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const timerMsArr = [24000, 28500, 34000, 40000, 46000, 51500, 57500, 60200, 62800, 68800, 74500];

    setTimeout(() => {
        $('#musicLoader').addClass('active');
    }, 1000);

    setTimeout(() => {
        $('#musicLoader').removeClass('active');
    }, 23000);

    setTimeout(() => {
        handleOpacity('#btnNext', 1, 1);
    }, 86500);

    for (let i = 0; i < timerIndexArr.length; i++) {
        const index = timerIndexArr[i];
        const ms = timerMsArr[i];

        setTimeout(() => {
            $(`.lyricsRow p:nth-child(${index})`).addClass('active');
        }, ms);
    }
}

export function handleOpacity(element, n1, n2) {
    $(element).css({
        'opacity': `${n1}`,
        'z-index': `${n2}`
    });
}

export function handleSong(state) {
    const song = $('#song')[0];

    if (state === 'play') {
        song.play();
    } else if (state === 'reset') {
        song.pause();
        song.currentTime = 0;
    } else {
        console.error('오디오 호출에 실패하였습니다.');
    }
}

export function handleHashCount(n) {
    window.hashCount = n;
}

export function handleLoading() {
    $root.removeAttr('style');
}

export function lottieCreate(containerId, path) {
    bodymovin.loadAnimation({
        container: document.getElementById(containerId),
        path: path,
        renderer: 'svg',
        loop: true,
        autoplay: true
    });
}

export function componentRemove(element) {
    $(element).remove();
}

export function componentPrepend(element, html) {
    $(element).prepend(html);
}

export function componentAppend(element, html) {
    $(element).append(html);
}

export function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('클립보드에 복사되었어요.');
    }).catch((err) => {
        alert('클립보드 복사에 실패했어요.');
    });
}

export function addDisqus() {
    if (!$('#dsq-inline').length > 0 && $('#socialPage').length > 0) {
        $body.append(disqusScript);
    } else if (!$('#socialPage').length > 0) {
        $body.find('[id*="dsq"]').remove();
    }

    if ($('#disqus_wrapper').length > 0) {
        $('.commentWrap').find('#disqus_wrapper').html('<div id="disqus_thread"></div>');
    }
}

export function handleModal(state) {
    if (state === 'open') {
        $('#modal,#caution').addClass('active');
        $('#caution').addClass('zIndex');
    } else if (state === 'close') {
        $('#modal,#caution').removeClass('active');
    }
}