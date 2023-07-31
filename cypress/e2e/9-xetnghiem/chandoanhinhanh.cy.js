const common = require('../common.cy');
const insuaranceNumber = require('../rd');


describe("Tiếp nhận", () => {

    beforeEach(() => {
        common.visitAndLogin();
        common.goToFunctionFromMenu('chandoanhinhanhdanhsachdraw');

    });

    it('should ', function () {
        console.log('abc');
        common.enterSelectBoxNormal('drpSelectTrangThai',"Chờ thực hiện");
        common.enterSelectBoxNormal('cbbLoai', '3 tháng');
        cy.get('#btnTimKiem').click();
        cy.get('#divChanDoanHinhAnhDanhSachContent tbody tr:nth-child(1) td:nth-child(4) a').click();
        cy.get('.btn-danger').click();
        cy.get('#btnVAOTH').click();
    });


});