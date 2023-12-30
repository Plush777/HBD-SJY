import config from "./config.js";

export function kakao() {
    if (!Kakao.isInitialized()) Kakao.init(config.kakaoInit);

    var sendKakao = function () {
        Kakao.Link.sendScrap({
            requestUrl: location.href,
            templateId: config.kakaoTemplateId,
            templateArgs: {
                THUMB: './images/img/og.png', // 썸네일 주소 ${THUMB}
                TITLE: 'To. SJY', // 제목 텍스트 ${TITLE}
                DESC: '모두 준영이의 생일을 축하해주세요!', // 설명 텍스트 ${DESC}
            },
        });
    };

    $(document).on('click', 'button[aria-label="카카오톡에 공유"]', function () {
        sendKakao();
    });
}
