const common = require('../common.cy');
const testCases = require('./khambenh.testcase.json');

describe("Khám bệnh", () => {


    beforeEach(() => {
        common.login();
        common.goToFunctionFromMenu('khambenhdanhsachdraw');

    });
    for (let i = 0; i < testCases.length; i++) {
        let testCase = testCases[0];
        it(testCase.name, () => {
            common.enterSelectBoxNormal('cbbLoai', testCase.cbbLoai);
            cy.get('#drpSelectTrangThai').select('2', {force: true});
            cy.get('#btnTimKiem').click();
            cy.get('#divKhamBenhDanhSachContent tbody tr').its('length').should('be.greaterThan', 5);
            cy.get('#divKhamBenhDanhSachContent tbody tr:first  td a').eq(4).click()
            common.enterSelectBoxElas('cbbBacSi', 'BM002');
            common.enterSelectBoxElas('cboChanDoanPhanBiet', 'p59.20');
        });

    }
});