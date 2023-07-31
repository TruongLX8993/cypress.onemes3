

const common = require('../common.cy');
const insuaranceNumber = require('../rd');


describe("Dieu tri NT", () => {

    beforeEach(() => {
        common.visitAndLogin();
        common.goToFunctionFromMenu('danhsachdieutrinoitrudraw');

    });
//Test chan them y lenh moi khi dang co y lenh o trang thai "Moi"
    it('Chan them moi y lenh', function () {
        console.log('abc');
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:nth-child(2) td:nth-child(5) a').click();
        cy.get('#showThamKham').click();
    });

//Test them moi y lenh
    it('Them moi y lenh', function () {
        console.log('abc');
        common.enterSelectBoxNormal('drpSelectTrangThai',"Đang thực hiện");
        cy.get('#btnTimKiem').click();
        cy.get('#divWebPartContent tbody tr:nth-child(2) td:nth-child(5) a').click();
        cy.get('#showThamKham').click();
    });



});