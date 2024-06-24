// ==UserScript==
// @name         W-Coin web
// @version      1.1
// @match        *://alohomora-bucket-fra1-prod-frontend-static.fra1.cdn.digitaloceanspaces.com/*
// @icon         https://img.cryptorank.io/coins/w_coin1718038816897.png
// @run-at       document-start
// @grant        none
// @downloadURL  https://github.com/mudachyo/W-Coin/raw/main/w-coin-web.user.js
// @updateURL    https://github.com/mudachyo/W-Coin/raw/main/w-coin-web.user.js
// @homepage     https://github.com/mudachyo/W-Coin/
// ==/UserScript==

(function() {
    'use strict';

    var newUserAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1";

    Object.defineProperty(navigator, 'userAgent', {
        get: function() { return newUserAgent; }
    });

    Object.defineProperty(navigator, 'platform', {
        get: function() { return 'iPhone'; }
    });

    Object.defineProperty(navigator, 'vendor', {
        get: function() { return 'Apple Computer, Inc.'; }
    });
})();
