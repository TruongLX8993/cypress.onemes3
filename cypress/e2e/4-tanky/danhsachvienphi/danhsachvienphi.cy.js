const common = require('../../common.cy');
const testCases = require('../danhsachvienphi/danhsachvienphi.testcase.json');
const enviroment = require('../../../../enviroment.json');
const {getHtml, getCurrentUrl} = require("../../common.cy");
describe("Viện phí", () => {

    beforeEach(() => {
        common.visitAndLoginOther(enviroment.natk);
        common.goToFunctionFromMenu('vienphidanhsachdraw');

    });
    it('Danh sách viện phí', () => {

        common.enterSelectBoxNormal('cbbLoai', testCases[0].cbbLoai);
        common.enterSelectBoxNormal('drpSelectTrangThai', testCases[0].drpSelectTrangThai);
        cy.get('#btnTimKiem').click();


        common.compareValueAscending('#divWebPartContent tbody tr:nth-child(7)  td:nth-child(2) a',
            '#divWebPartContent tbody tr:nth-child(8)  td:nth-child(2) a');

        getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
            .then(text => {
                const re = new RegExp("hoadonid=([^&]*)");
                let phauThuatId = re.exec(text)[1];
                cy.log(phauThuatId);
                getCurrentUrl()
                    .then(currentUrl => {
                        currentUrl = currentUrl.replace('wpid=vienphidanhsachdraw', 'wpid=giaodienhoadondraw')
                        currentUrl += `&hoadonid=${phauThuatId}`;
                        cy.visit(currentUrl);
                    });
            });

        // cy.get('#divVienPhiDanhSachContent tbody tr:first  td a').eq(4).click();
    });

   
});