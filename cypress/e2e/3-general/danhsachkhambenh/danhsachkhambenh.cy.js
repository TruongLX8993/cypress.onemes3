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
            common.compareValueDescending('#divKhamBenhDanhSachContent tbody tr:first  td:nth-child(3) a',
                '#divKhamBenhDanhSachContent tbody tr:nth-child(2) td:nth-child(3) a');
            cy.get('#divKhamBenhDanhSachContent tbody tr:first  td a').eq(4).click();

            cy.get('#aTrangThai i')
                .should('have.text', 'Chờ thực hiện')
                .then(($i) => {
                    const text = $i.text().trim();
                    if (text === 'Chờ thực hiện') {
                        cy.log('Đổi trạng thái thành công');
                    } else {
                        cy.fail('Đổi trạng thái thất bại');
                    }
                });

            common.btnID('btnVAOKHAM');

            cy.get('#aTrangThai i')
                .should('have.text', 'Đang thực hiện')
                .then(($i) => {
                    const text = $i.text().trim();
                    if (text === 'Đang thực hiện') {
                        cy.log('Đổi trạng thái thành công');
                    } else {
                        cy.fail('Đổi trạng thái thất bại');
                    }
                });
        });

    }
});