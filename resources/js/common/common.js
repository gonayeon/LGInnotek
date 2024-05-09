$(function() {
    commonHeaderLoad();
    commonFooterLoad();
});


function commonHeaderLoad() {
    const $header = document.querySelector("#header");

    if ($header) {
        let html = `<form>
                        <a class="downloadUrl">다운로드</a>
                        <a href="user-guide.html" id="manualBtn1" class="manualBtn" target="_blank">매뉴얼</a>
                        <select id="languageSelector" class="languageSelector">
                            <option value="ko">한국어</option>
                            <option value="en">English</option>
                        </select>
                    </form>`;

        $header.innerHTML = html;
    }
}

function commonFooterLoad() {
    const $footer = document.querySelector("#footer");

    if ($footer) {
        let html = `<h1 class="footer-logo">
                        <a href="index.html">
                            <img src="resources/img/logo/lgLogo_ko.svg" class="logo-image" alt="LG이노텍">
                        </a>
                    </h1>
                    <ul class="footer-menu-wrap">
                        <li class="spacing-adjustment"></li>
                        <li class="privacy-policy" onclick="privacyPolicyModalOn()">
                            개인정보처리방침
                        </li>
                        <li>
                            Copyright &#169; LG Innotek All Rights Reserved.
                        </li>
                        <li>
                            Help Desk &#58; 
                            <span>XXXX&#45;XXXX</span>
                        </li>
                    </ul>`;

        $footer.innerHTML = html;
    }
}