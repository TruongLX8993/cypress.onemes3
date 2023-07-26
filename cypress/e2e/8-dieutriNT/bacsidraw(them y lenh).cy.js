

const common = require('../common.cy');
const insuaranceNumber = require('../rd');


describe("Dieu tri NT", () => {

    beforeEach(() => {
        common.login();
        common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');

    });
//Test chan them y lenh moi khi dang co y lenh o trang thai "Moi"
    it('Them moi y lenh', function () {
        console.log('abc');
        cy.get('#txtTimKiem').type('2300519392{enter}');
        cy.get('#btnTimKiem').click();
        cy.get('#divToaThuocDanhSachContent tbody tr:nth-child(1) td:nth-child(3) a').click();
        //cy.get('#tblBenhAn tbody tr:nth-child(1) td:nth-child(1) > input.chkYeuCau').click();
    });


});