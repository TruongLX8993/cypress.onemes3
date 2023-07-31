

const common = require('../common.cy');
const insuaranceNumber = require('../rd');


describe("Tiep Nhan NT", () => {

    beforeEach(() => {
        common.visitAndLogin();
        common.goToFunctionFromMenu('danhsachttvaorakhoadraw');

    });

    it('Nhap khoa', function () {
        console.log('abc');
        cy.get('#drpSelectTrangThai').select('Chờ nhập khoa');
        common.enterSelectBoxNormal('cbbLoai',"Trong ngày");
        cy.get('#btnTimKiem').click();
        cy.get('#divListFormDsTTVRK tbody tr:nth-child(1) td:nth-child(3) a').click();
        cy.get('#btnNHAPKHOA').click();

    });
});