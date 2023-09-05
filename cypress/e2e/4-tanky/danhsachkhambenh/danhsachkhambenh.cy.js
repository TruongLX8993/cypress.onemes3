const common = require('../../common.cy');
const testCases = require('./khambenh.testcase.json');
const enviroment = require('../../../../enviroment.json');
const {getHtml, getCurrentUrl} = require("../../common.cy");



describe("Khám bệnh", () => {

    beforeEach(() => {
        common.visitAndLoginOther(enviroment.natk);
        common.goToFunctionFromMenu('khambenhdanhsachdraw');

    });
    for (let i = 0; i < testCases.length; i++) {
        let testCase = testCases[0];
        it(testCase.name, () => {
            common.enterSelectBoxElasticSearch('drpSelectDoiTuong', testCase.drpSelectDoiTuong);
            common.enterSelectBoxNormal('drpSelectQuocGia', testCase.drpSelectQuocGia);
            common.enterSelectBoxNormal('drpSelectTrangThai', testCase.drpSelectTrangThai);
            common.enterSelectBoxNormal('cbbLoai', testCase.cbbLoai);
            cy.get('#btnTimKiem').click();
            common.compareValueAscending('#divKhamBenhDanhSachContent tbody tr:first  td:nth-child(3) a',
                '#divKhamBenhDanhSachContent tbody tr:nth-child(2) td:nth-child(3) a');

            getHtml('#divWebPartContent tbody tr:nth-child(1) td:nth-child(4) a')
                .then(text => {
                    const re = new RegExp("khambenhid=([^&]*)");
                    let phauThuatId = re.exec(text)[1];
                    cy.log(phauThuatId);
                    getCurrentUrl()
                        .then(currentUrl => {
                            currentUrl = currentUrl.replace('wpid=khambenhdanhsachdraw', 'wpid=giaodienkhambenhdraw')
                            currentUrl += `&khambenhid=${phauThuatId}`;
                            cy.visit(currentUrl);

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
                });

            // cy.get('#divKhamBenhDanhSachContent tbody tr:first  td a').eq(4).click();


        });

    }
});