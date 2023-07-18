const common = require('../common.cy');

describe("Khám bệnh", () => {

    beforeEach(() => {
        common.login();
        common.goToFunctionFromMenu('khambenhdanhsachdraw');

    });

    it('Khám bệnh đang thực hiện', () => {
        common.enterSelectBoxNormal('cbbLoai', 'trong tháng');
        cy.get('#drpSelectTrangThai').select('2', {force: true});
        cy.get('#btnTimKiem').click();
        // cy.get('#divKhamBenhDanhSachContent tbody tr').its('length').should('be.greaterThan', 5);
        cy.get('#divKhamBenhDanhSachContent tbody tr:first  td a').eq(4).click()
        common.enterSelectBoxElas('cbbBacSi', 'BM002');
        common.enterSelectBoxElas('cboChanDoanPhanBiet', 'p59.20');



    });

});