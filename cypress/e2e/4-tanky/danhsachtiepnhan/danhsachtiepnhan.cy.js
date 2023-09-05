const common = require('../../common.cy');
const testCases = require('../danhsachtiepnhan/danhsachtiepnhan.testcase.json');
const enviroment = require('../../../../enviroment.json');
const {getHtml, getCurrentUrl} = require("../../common.cy");
describe("Tiếp nhận", () => {

    beforeEach(() => {
        common.visitAndLogin(enviroment.kcb);
        common.goToFunctionFromMenu('danhsachtiepnhandraw');

    });

    it('Danh sách tiếp nhận', function () {
        // cy.get('#txtTimKiem').type(testCases[0].name);
        common.enterSelectBoxNormal('drpSelectGioiTinh', testCases[0].drpSelectGioiTinh);
        common.enterSelectBoxNormal('drpSelectTrangThai', testCases[0].drpSelectTrangThai);
        common.enterSelectBoxNormal('cbbLoai', '3');
        cy.get('#btnTimKiem').click();

        common.compareValueDescending('#divTiepNhanDanhSachContent tbody tr:first  td:nth-child(3) a', '#divTiepNhanDanhSachContent tbody tr:nth-child(2)  td:nth-child(3) a');

        getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
            .then(text => {
                const re = new RegExp("dangkyid=([^&]*)");
                let phauThuatId = re.exec(text)[1];
                getCurrentUrl()
                    .then(currentUrl => {
                        currentUrl = currentUrl.replace('wpid=tiepnhandanhsachdraw', 'wpid=tiepnhandraw')
                        currentUrl += `&dangkyid=${phauThuatId}`;
                        cy.visit(currentUrl);
                    });
            });
    });


});


