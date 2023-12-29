import config from "./config.js";

export function kakao() {
    if (!Kakao.isInitialized()) Kakao.init(config.kakaoInit);

    var sendKakao = function () {
        Kakao.Link.sendScrap({
            requestUrl: location.href,
            templateId: config.kakaoTemplateId,
            templateArgs: {
                PROFILE: '프로필 이미지 주소', // 프로필 이미지 주소 ${PROFILE}
                THUMB: '썸네일 주소', // 썸네일 주소 ${THUMB}
                TITLE: '제목 텍스트입니다', // 제목 텍스트 ${TITLE}
                DESC: '설명 텍스트입니다', // 설명 텍스트 ${DESC}
            },
        });
    };

    $(document).on('click', 'button[aria-label="카카오톡에 공유"]', function () {
        sendKakao();
    });
}
