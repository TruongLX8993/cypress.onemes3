const common = require('../common.cy');
const insuaranceNumber = require('../rd');


describe("Viện phí", () => {

    beforeEach(() => {
        common.login();
        common.goToFunctionFromMenu('vienphidanhsachdraw');

    });
    it('Danh sách viện phí', () => {
        cy.get('#txtTimKiem').type("2300520759");
        cy.get('#btnTimKiem').click();
    });

   
});