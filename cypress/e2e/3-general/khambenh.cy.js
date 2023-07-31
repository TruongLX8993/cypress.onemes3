const common = require('../common.cy');
const testCases = require('./khambenh.testcase.json');

describe("Khám bệnh", () => {


    beforeEach(() => {
        common.visitAndLogin();
        common.goToFunctionFromMenu('khambenhdanhsachdraw');

    });
    for (let i = 0; i < testCases.length; i++) {
        let testCase = testCases[0];
        it(testCase.name, () => {
            // common.enterSelectBoxNormal('cbbLoai', testCase.cbbLoai);
            // cy.get('#drpSelectTrangThai').select('2', {force: true});
            // cy.get('#btnTimKiem').click();
            // // cy.get('#divKhamBenhDanhSachContent tbody tr').its('length').should('be.greaterThan', 5);
            // cy.get('#divKhamBenhDanhSachContent tbody tr:first  td a').eq(4).click()
            // common.enterSelectBoxElas('cbbChuyenKhoa', '10.8');
            // common.enterSelectBoxFocus('cbbBacSi', 'BM002');
            // common.enterSelectBoxElas('cboChanDoanPhanBiet', 'p59.20');
            // cy.get('#txtLyDoVaoVien').type('đau đầu');
            // cy.get('#txtChanDoanSoBo').type('đau nửa đầu vai gáy');
            // common.enterSelectBoxElas('cbbCDBChinh','n00.5');
            //
            // cy.get(':nth-child(5) > .col-md-12 > .select2-container > .selection > .select2-selection > ul > li > .select2-search__field').type('bệnh tả');
            // cy.get('#select2-cbbCDBKemTheo-results').find('tr:first').click();
            //
            // cy.get('#txtKetLuan').type('cần nhập viện');
            // common.enterSelectBoxNormal('cbbXuTri','bỏ về');

            cy.get('#txtTimKiem').type('2300520635');
            common.enterSelectBoxElasticSearch('drpSelectHangDoi', 'ls29.3');
            common.enterSelectBoxElasticSearch('drpSelectDoiTuong', 'tp');
            common.enterSelectBoxNormal('drpSelectQuocGia', 'vie');
            common.enterSelectBoxNormal('drpSelectTrangThai', 'dang thuc hien');
            common.enterSelectBoxNormal('cbbLoai', 'Trong thang');
            cy.get('#btnTimKiem').click();
            cy.get('#divKhamBenhDanhSachContent tbody tr').its('length').should('be.greaterThan', 5);
            cy.get('#divKhamBenhDanhSachContent tbody tr:first  td a').eq(4).click()
        });

    }
});