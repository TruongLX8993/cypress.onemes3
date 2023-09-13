const common = require('../../common.cy');
const enviroment = require('../../../../enviroment.json');
const {getHtml, getCurrentUrl} = require("../../common.cy");

describe("Biên lai thu", () => {

    beforeEach(() => {
        common.visitAndLoginOther(enviroment.natk);
        common.goToFunctionFromMenu('vienphidanhsachdraw');
        common.enterSelectBoxNormal('cbbLoai','3 tháng');
    });


    it('Check tác vụ hoàn tất', () => {
        common.enterSelectBoxNormal('drpSelectTrangThai','Chờ tất toán');
        cy.get('#btnTimKiem').click();

        getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
            .then(text => {
                const re = new RegExp("hoadonid=([^&]*)");
                let hoadonid = re.exec(text)[1];
                getCurrentUrl()
                    .then(currentUrl => {
                        currentUrl = currentUrl.replace('wpid=vienphidanhsachdraw', 'wpid=giaodienhoadondraw')
                        currentUrl += `&hoadonid=${hoadonid}`;
                        cy.visit(currentUrl);

                        cy.wait(3000);
                        // common.btnID('btnBienLai1');
                        getCurrentUrl()
                            .then(currentUrl => {
                                currentUrl = currentUrl.replace('wpid=giaodienhoadondraw', 'wpid=bienlaithudraw')
                                currentUrl = currentUrl.replace('&hoadonid', '&vienphiid')
                                cy.visit(currentUrl);

                            });

                    });
            });

    });






});