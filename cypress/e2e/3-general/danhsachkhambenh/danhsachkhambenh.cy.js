const common = require('../../common.cy');
const testCases = require('./khambenh.testcase.json');
const enviroment = require('../../../../enviroment.json');



describe("Khám bệnh", () => {

    beforeEach(() => {
        common.visitAndLogin(enviroment.kcb);
        common.goToFunctionFromMenu('khambenhdanhsachdraw');

    });
    for (let i = 0; i < testCases.length; i++) {
        let testCase = testCases[0];
        it(testCase.name, () => {
            // cy.get('#txtTimKiem').type(testCase.txtTimKiem);
            common.enterSelectBoxElasticSearch('drpSelectHangDoi', testCase.drpSelectHangDoi);
            common.enterSelectBoxElasticSearch('drpSelectDoiTuong', testCase.drpSelectDoiTuong);
            common.enterSelectBoxNormal('drpSelectQuocGia', testCase.drpSelectQuocGia);
            common.enterSelectBoxNormal('drpSelectTrangThai', testCase.drpSelectTrangThai);
            common.enterSelectBoxNormal('cbbLoai', testCase.cbbLoai);
            cy.get('#btnTimKiem').click();
            // cy.get('#divKhamBenhDanhSachContent tbody tr').its('length').should('be.greaterThan', 5);
            // cy.get('#divKhamBenhDanhSachContent tbody tr:first  td a').eq(4).click();

            common.compareValueDescending('#divKhamBenhDanhSachContent tbody tr:first  td:nth-child(3) a',
                '#divKhamBenhDanhSachContent tbody tr:nth-child(2) td:nth-child(3) a');
            cy.get('#divKhamBenhDanhSachContent tbody tr:first  td a').eq(4).click();


        });

    }
});