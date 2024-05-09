function privacyPolicyModalOn() {
    const modalArea = document.getElementById('modal-area');
    modalArea.innerHTML = "";

    let html = `
        <div id='privacyPolicyModal' class='modal-privacyPolicy modal-common-style'>
            <div class="modal-top">
                <h3 class="modal-title">
                    개인정보 처리 방침
                </h3>
            </div>
            <div class='modal-main'>
                <div class="modal-content-background privacy-content">
                    <article>
                        <h4>개인정보 처리방침</h4>
                        <p>
                            LG이노텍 주식회사&#40;이하 &#39;LG이노텍&#39;이라 함&#41;은 정보주체의 자유와 권리 보호를 위해 &#x300C;개인정보 보호법&#x300D; 및 관계 법령이 정한 바를 준수하여, 적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다. 이에 &#x300C;개인정보 보호법&#x300D;제30조에 따라 정보주체에게 개인정보 처리에 관한 절차 및 기준을 안내하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립&#xB7;공개합니다.
                        </p>
                    </article>
                    <article>
                        <h4>제1조&#40;개인정보의 처리목적, 수집 항목, 보유 및 이용기간&#41;</h4>
                        <p>LG이노텍은 다음과 같이 정보주체의 개인정보를 처리합니다.</p>
                    </article>
                    <article>
                        <table>
                            <thead>
                                <tr>
                                    <th style="width: 19%;">서비스</th>
                                    <th style="width: 22%;">수집 항목</th>
                                    <th colspan="2"  style="width: 26%;">수집 목적</th>
                                    <th  style="width: 18%;">보유 및 이용기간</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowspan="2">고객문의</td>
                                    <td rowspan="2">회사 및 제품 등에 대한<br>문의 등 답변 제공</td>
                                    <td style="width: 10%;">필수</td>
                                    <td>국적 &#47; 이름 &#47;<br>E-mail</td>
                                    <td rowspan="2">2개월</td>
                                </tr>
                                <tr>
                                    <td>선택</td>
                                    <td>회사명 &#47;<br>전화번호</td>
                                </tr>
                                <tr>
                                    <td>공정거래 준수 활동</td>
                                    <td>공정거래 제보&#47;문의 등<br>답변 제공</td>
                                    <td>필수</td>
                                    <td>E-mail</td>
                                    <td>2개월</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            처리하는 개인정보는 위 기재된 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 &#x300C;개인정보 보호법&#x300D; 제18조에 따라 별도의 동의를 얻는 등 필요한 조치를 이행할 예정입니다.<br><br>
                            또한 LG이노텍은 법령에 따른 개인정보 보유기간 또는 정보주체가 동의한 보유기간 내에서 개인정보를 처리합니다.
                        </p>
                    </article>
                    <article>
                        <h4>제2조&#40;개인정보의 제3자 제공&#41;</h4>
                        <ol>
                            <li>
                                LG이노텍은 정보주체의 개인정보를 개인정보의 처리 목적에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 &#x300C;개인정보 보호법&#x300D; 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공하고 그 이외에는 정보주체의 개인정보를 제3자에게 제공하지 않습니다.
                            </li>
                            <li>
                                LG이노텍은 원활한 서비스 제공을 위해 다음의 경우 정보주체의 동의를 얻어 필요 최소한의 범위로만 제공합니다.
                            </li>
                        </ol>
                    </article>
                </div>
            </div>
            <div class='modal-bottom'>
                <button id='agreeBtn' type='button' class='common-button-style-red-b check-button'>
                    확인
                </button>
            </div>
        </div>`;

    modalArea.innerHTML = html;
    $('#modal-area').show();

    $('#privacyPolicyModal #agreeBtn').on('click', function () {
        $('#modal-area').hide();
    });
}


function commonTwoButtonModalOn() {
    const modalArea = document.getElementById('modal-area');
    modalArea.innerHTML = "";

    let html = `
        <div class="modal-common-style" id="twoButtonModal">
            <div class="modal-top">
                <h3 class="modal-title">안내</h3>
            </div>

            <div class="modal-main">
                <p class="modal-guide">해당 기기를 삭제 하시겠습니까&#63;</p>
            </div>

        <div class="modal-bottom">
            <div class="modal-two-button-wrap">
                <button type="button" class="common-button-style-red-b" id="confirmButton">예</button>
                <button type="button" class="common-button-style-grey" id="cancelButton">아니오</button>
            </div>
        </div>
    </div>`;

    modalArea.innerHTML = html;
    $('#modal-area').show();

    $('#twoButtonModal button').on('click', function () {
        $('#modal-area').hide();
    });
}