import { $wrap, introPage, lyricsPage, socialPage, btnHome, dayCountPageHtml } from "./variable.js";
import {
    changeFixButton, handleHashCount, componentPrepend, componentRemove, lottieCreate, handleOpacity,
    addDisqus, handleSong
} from "./control.js";

export function hash() {
    /* hash가 변경됬을 때 */
    window.onhashchange = function () {
        console.log(`hash changed, hashCount: ${window.hashCount}`);

        changeFixButton();

        if (location.hash === '#intro') {
            handleHashCount(1);
            componentPrepend($wrap, introPage);
            componentRemove('#dayCountPage, #lyricsPage, #socialPage');
            lottieCreate('lottie-eyes', 'https://lottie.host/a6c53262-9742-453f-a75b-731e0f82375c/jB5YgJ9ccm.json');
        }

        else if (location.hash === '#lyrics') {
            handleHashCount(2);
            componentPrepend($wrap, lyricsPage);
            componentRemove('#introPage,#dayCountPage,#socialPage');

            setTimeout(() => {
                handleOpacity('.bulbs', 1, 1);
            }, 700);

            setTimeout(() => {
                handleOpacity('#btnPlay', 1, 1);
            }, 1200);
        }

        else if (location.hash === '#social') {
            handleHashCount(3);
            componentPrepend($wrap, socialPage);
            componentRemove('#lyricsPage,#dayCountPage,#introPage');
            addDisqus();
            changeFixButton(btnHome);
        }

        else if (!location.hash) {
            handleHashCount(0);
            componentRemove('#introPage, #socialPage, #lyricsPage');
            componentPrepend($wrap, dayCountPageHtml);
            lottieCreate('lottie-pop', 'https://lottie.host/20dd38f6-63ed-40de-aed2-0fcc64d7990a/JBfbwgMN5O.json');
        }

        //존재하지 않는 hash일 경우
        else {
            alert('존재하지 않는 페이지예요.');
            location.href = '/';
        }
    }

    /* 새로고침 했을 때 컴포넌트 유지 */
    if (location.hash === '#intro') {
        handleHashCount(1);
        componentRemove('#dayCountPage, #socialPage, #lyricsPage');
        componentPrepend($wrap, introPage);
        lottieCreate('lottie-eyes', 'https://lottie.host/a6c53262-9742-453f-a75b-731e0f82375c/jB5YgJ9ccm.json');
    } else if (location.hash === '#lyrics') {
        handleHashCount(2);
        componentRemove('#introPage, #dayCountPage, #socialPage');
        componentPrepend($wrap, lyricsPage);
        setTimeout(() => {
            handleOpacity('.bulbs', 1, 1);
        }, 700);
        setTimeout(() => {
            handleOpacity('#btnPlay', 1, 1);
        }, 1200);
    } else if (location.hash === '#social') {
        handleHashCount(3);
        componentRemove('#introPage, #dayCountPage, #lyricsPage');
        componentPrepend($wrap, socialPage);
        addDisqus();
    } else if (!location.hash) {
        handleHashCount(0);
        componentRemove('#socialPage, #lyricsPage, #introPage');
    }

    /* 앞으로가기 했을 때 행동 감지 */
    let currentHash = location.hash;

    window.addEventListener('popstate', function () {
        if (currentHash !== location.hash) {
            // 현재 hash와 변경된 hash가 다르면 페이지 이동이 발생한 것으로 간주
            currentHash = location.hash;

            handleHashCount(0);
            changeFixButton();

            if (location.hash === '#intro') {
                handleHashCount(1);
                componentRemove('#dayCountPage, #socialPage, #lyricsPage');
            } else if (location.hash === '#lyrics') {
                handleHashCount(2);
                componentRemove('#introPage, #dayCountPage, #socialPage');
                location.reload();
            } else if (location.hash === '#social') {
                handleHashCount(3);
                componentRemove('#lyricsPage,#dayCountPage,#introPage');
                addDisqus();
            } else if (!location.hash) {
                componentRemove('#socialPage, #lyricsPage, #introPage');
            }

            if (window.hashCount < 2) {
                handleSong('reset');
            }
        }
    });
}