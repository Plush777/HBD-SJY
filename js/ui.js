import { hash } from '../js/modules/hash.js';
import { view } from '../js/modules/view.js';
import { favi } from '../js/modules/favi.js';
import { kakao } from '../js/modules/config/kakao.js';

$(function () {
    kakao();
    hash();
    view();
    favi();
});